import axios from "axios";
import { Component } from "react";
import CatModel from "../../../Models/CatModel";
import Card from "../Card/Card";
import "./CatCards.css";

interface CatCardsState {
	cats: CatModel[];
}



class CatCards extends Component<{}, CatCardsState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			cats:[]
        };
    }

    public async componentDidMount() {
        try{
            const response = await axios.get<CatModel[]>('https://raw.githubusercontent.com/KobiShashs/Caas-Resources/master/cats.json');;
            this.setState({cats: response.data});
        }
        catch(err){
                    alert(err.message);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="CatCards">
				{this.state.cats.map(c=><Card cat={c}/>)}
            </div>
        );
    }
}

export default CatCards;
