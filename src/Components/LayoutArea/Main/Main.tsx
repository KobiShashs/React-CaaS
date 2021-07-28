import TotalCats from "../../CatsArea/TotalCats/TotalCats";
import Stam from "../../MenuArea/Stam/Stam";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <h1>Caas</h1>
            <img src="https://media.giphy.com/media/gX2NAgKI2HeoM/giphy.gif" alt="cats"/>
            <Stam/>
            <TotalCats/>
            
        </div>
    );
}

export default Main;
