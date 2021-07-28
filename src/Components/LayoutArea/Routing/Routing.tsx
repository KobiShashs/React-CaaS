import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import AddCat from "../../CatsArea/AddCat/AddCat";
import CatCards from "../../CatsArea/CatCards/CatCards";
import CatDetails from "../../CatsArea/CatDetails/CatDetails";
import CatList from "../../CatsArea/CatList/CatList";
import UpdateCat from "../../CatsArea/UpdateCat/UpdateCat";
import About from "../../MenuArea/About/About";
import ContactUs from "../../MenuArea/ContactUs/ContactUs";
import Page404 from "../../SharedArea/Page404/Page404";
import Main from "../Main/Main";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path="/home" component={Main} exact />
                <Route path="/cats" component={CatList} exact />
                <Route path="/cats2" component={CatCards} exact />
                <Route path="/cats2/details/:id" component={CatDetails} exact />
                <Route path="/about" component={About} exact />
                <Route path="/contact-us" component={ContactUs} exact />
                <Route path="/cats/add" component={AddCat} exact />
                <Route path="/cats/update/:id" component={UpdateCat} exact />
                <Route path="/register" component={Register} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/logout" component={Logout} exact />
                <Redirect from="/" to="/home" exact/>
                <Route component={Page404}/> {/* Last */}
            </Switch>
        </div>
    );
}

export default Routing;
