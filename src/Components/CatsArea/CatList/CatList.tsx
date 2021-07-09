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
                {this.state.cats.length}
                    <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Weight</th>
                            <th>Color</th>
                            <th>Image</th>
                            <th>Actions <button>➕</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                         
                                {this.state.cats.map(c=><tr>
                                    
                                    <td>{c.id}</td>
                                    <td>{c.name}</td>
                                    <td>{c.weight}</td>
                                    <td>{c.color}</td>
                                    <td><img src={c.image}/></td>
                                    <td><button>🗑️</button><button>✏️</button></td>
                            
                                    </tr>)}
                            
                       
                        
                    </tbody>
                    </table>
            </div>
        );
    }
}

export default CatList;