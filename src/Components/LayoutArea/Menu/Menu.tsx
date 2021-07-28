import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to='/home' exact>Home</NavLink>
            <br/>
            <NavLink to='/cats' exact>Table Display</NavLink>
            <br/>
            <NavLink to='/cats2' exact>Card Display</NavLink>
            <br/>
            <NavLink to='/about' exact>About</NavLink>
            <br/>
            <NavLink to='/contact-us' exact>Contact Us</NavLink>
        </div>
      
    );
}

export default Menu;
