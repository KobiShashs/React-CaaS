import axios from "axios";
import { Component } from "react";
import CatModel from "../../../Models/CatModel";
import "./CatList.css";

interface CatListState {
	cats: CatModel[];
}

class CatList extends Component<{}, CatListState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			cats:[]
        };
    }


    public async componentDidMount(){
        const response = await axios.get<CatModel[]>('https://raw.githubusercontent.com/KobiShashs/Caas-Resources/master/cats.json');;
		this.setState({cats: response.data});
    }

    public render(): JSX.Element {
        return (
            <div className="CatList">
				{ this.state.cats.map(c=><span key={c.id}>{c.id} - {c.name} - {c.color} - {c.weight} </span>)}
            </div>
        );
    }
}

export default CatList;
