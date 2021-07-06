import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to='/home' exact>Home</NavLink>
            <br/>
            <NavLink to='/cats' exact>Cats</NavLink>
            <br/>
            <NavLink to='/about' exact>About</NavLink>
        </div>
      
    );
}

export default Menu;
