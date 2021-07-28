import { useState } from "react";
import store from "../../../Redux/Store";
import "./Stam.css";

function Stam(): JSX.Element {

    const [name, setName] = useState(store.getState().authState.user.first);

    return (
        <div className="Stam Box">
			<p>Name : {name}</p>
        </div>
    );
}

export default Stam;
