import { useEffect, useState } from "react";
import { Unsubscribe } from "redux";
import store from "../../../Redux/Store";
import "./TotalCats.css";

function TotalCats(): JSX.Element {
     
    const [count, setCount] = useState(store.getState().catState.cats.length);
    
    useEffect(()=>{
        const unsubscribe = store.subscribe(()=>{setCount(store.getState().catState.cats.length)})

        return () => {
            unsubscribe();
            console.log('Bye');
        };
    
       
    });

    
    
    
    return (
        <div className="TotalCats">
			<p>Total : {count}</p>
        </div>
    );
}

export default TotalCats;
