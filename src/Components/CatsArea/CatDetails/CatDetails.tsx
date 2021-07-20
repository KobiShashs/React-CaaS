import axios from "axios";
import { Component } from "react";
import { NavLink, RouteComponentProps } from "react-router-dom";
import CatModel from "../../../Models/CatModel";
import store from "../../../Redux/Store";
import globals from "../../../Services/global";
import "./CatDetails.css";

interface RouteParam {
  id: string;
}

interface CatDetailsProps extends RouteComponentProps<RouteParam> {}

interface CatDetailsState {
  cat: CatModel;
}

class CatDetails extends Component<CatDetailsProps, CatDetailsState> {
  public constructor(props: CatDetailsProps) {
    super(props);
    this.state = {
      cat: null,
    };
  }

  public componentDidMount() :void {
    const id = +this.props.match.params.id;
    console.log("id : "+id);
    const foundCat = store.getState().catState.cats.filter(cat => cat.id===id)[0];
    console.log("object : " + foundCat);
    this.setState({ cat:   foundCat});
    
  }

  public render(): JSX.Element {
    return (
      <div className="CatDetails Box">
        {this.state.cat && (
          <>
            {" "}
            <h2>Details</h2>
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
export default CatDetails;
