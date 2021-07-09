import { Component } from "react";
import { NavLink } from "react-router-dom";
import CatModel from "../../../Models/CatModel";
import "./Card.css";



interface CardProps{
    cat: CatModel;
}

class Card extends Component<CardProps> {

    public constructor(props: CardProps) {
        super(props);
        
    }

    public render(): JSX.Element {
        return (
            <div className="Card">
				<div>
                    {this.props.cat.name} <br/>
                    Weight: {this.props.cat.weight} <br/>
                    Color: {this.props.cat.color} <br/>
                </div>
				<div>
                    <NavLink to={"cats2/details/" + this.props.cat.id}>
                        <img src={this.props.cat.image} alt={this.props.cat.name}/>
                    </NavLink>
                    
                </div>
            </div>
        );
    }
}

export default Card;
