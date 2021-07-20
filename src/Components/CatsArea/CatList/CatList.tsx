import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Unsubscribe } from "redux";
import CatModel from "../../../Models/CatModel";
import { catsDeletedAction, catsDownloadedAction } from "../../../Redux/CatsState";
import store from "../../../Redux/Store";
import globals from "../../../Services/global";
import notify from "../../../Services/Notification";
import "./CatList.css";

interface CatListState {
  cats: CatModel[];
}

class CatList extends Component<{}, CatListState> {

  
  public constructor(props: {}) {
    super(props);
    this.state = {
      cats: store.getState().catState.cats
    };
  }

  public async componentDidMount() {
    if (store.getState().catState.cats.length==0) {
      try {
        const response = await axios.get<CatModel[]>(globals.urls.cats+'moshe'); //async request

        store.dispatch(catsDownloadedAction(response.data)); //update global state

        this.setState({ cats: response.data }); //update local state
        notify.success('Sababa');
      } catch (err) {
        notify.error(err.message);
      }
    }

  }

  private async delete(id: number) {
    const res = window.confirm(
      "Are you sure you want to delete id=" + id + "?"
    );
    if (res) {
      try {
        const response = await axios.delete<any>(globals.urls.cats + id);

        store.dispatch(catsDeletedAction(id)) // global state
        console.log(store.getState().catState.cats);

        this.setState({cats: store.getState().catState.cats}); //local state
      } catch (err) {
        alert(err.message);
      }
    }
  }

  public render(): JSX.Element {
    return (
      <div className="CatList">
        {this.state.cats.length}
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Color</th>
              <th>Image</th>
              <th>
                Actions  <NavLink to="/cats/add">➕</NavLink>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.cats.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.weight}</td>
                <td>{c.color}</td>
                <td>
                  <img src={globals.urls.cats + "images/" + c.image} />
                </td>
                <td>
                  <button onClick={() => this.delete(c.id)}>🗑️</button>
                  <button>✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CatList;
