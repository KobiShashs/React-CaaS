import axios from "axios";
import { Component } from "react";
import CatModel from "../../../Models/CatModel";
import store from "../../../Redux/Store";
import globals from "../../../Services/global";
import Card from "../Card/Card";
import "./CatCards.css";

interface CatCardsState {
  cats: CatModel[];
}

class CatCards extends Component<{}, CatCardsState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      cats: store.getState().catState.cats
    };
  }

  public async componentDidMount() {
    if (store.getState().catState.cats.length == 0) {
      try {
        const response = await axios.get<CatModel[]>(globals.urls.cats);

        store.getState().catState.cats = response.data; //update global state

        this.setState({ cats: response.data }); //update local state
      } catch (err) {
        alert(err.message);
      }
    }
  }

  public render(): JSX.Element {
    return (
      <div className="CatCards">
        {this.state.cats.map((c) => (
          <Card key={c.id}  cat={c} />
        ))}
      </div>
    );
  }
}

export default CatCards;
