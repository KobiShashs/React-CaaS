import "./UpdateCat.css";
import axios from "axios";
import { Component } from "react";
import { NavLink, RouteComponentProps } from "react-router-dom";
import CatModel from "../../../Models/CatModel";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EmptyView from "../../SharedArea/EmptyView/EmptyView";

interface RouteParam {
  id: string;
}

interface UpdateCatProps extends RouteComponentProps<RouteParam> {}

interface UpdateCatState {
  cat: CatModel;
}

class UpdateCat extends Component<UpdateCatProps, UpdateCatState> {
  public constructor(props: UpdateCatProps) {
    super(props);
    this.state = {
      cat: null,
    };
  }

 // Without Redux
  // public async componentDidMount() {
  //     try{
  //         const id = this.props.match.params.id;
  //         const response = await axios.get<CatModel>(globals.urls.kittens + id)
  //         this.setState({cat:response.data});
  //     }
  //     catch(err){
  //         alert(err.message);
  //     }
  // }

  // With Redux
  public async componentDidMount() {
    try {
      const id = +this.props.match.params.id;
      const cat = store.getState().catState.cats.find((p) => p.id === id);
      // const response = await axios.get<CatModel>(globals.urls.kittens + id) ---------------------> Not Needed!!!
      this.setState({ cat });
    } catch (err) {
      notify.error(err);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="UpdateCat Box">
        {!this.state.cat && <EmptyView msg="No cat for you!" />}
        {this.state.cat && (
          <>
            {" "}
            <h2>Update Cat</h2>
            <EditIcon />
            <DeleteIcon></DeleteIcon>

            <form>

            </form>
            <h3>Name: {this.state.cat.name}</h3>
            <h3>Weight: {this.state.cat.weight}</h3>
            <h3>Color: {this.state.cat.color}</h3>
            <img src={globals.urls.cats + "images/" + this.state.cat.image} />
            <br />
            <br />
            <NavLink to="/cats2">Back</NavLink>
          </>
        )}
      </div>
    );
  }
}
export default UpdateCat;







