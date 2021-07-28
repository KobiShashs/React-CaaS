import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../../Redux/AuthState";
import store from "../../../Redux/Store";
import notify, { SccMsg } from "../../../Services/Notification";


function Logout(): JSX.Element {
    const history = useHistory();

    useEffect(()=> //React Hook for running side effects inside a fc
    { 
        notify.success(SccMsg.LOGOUT_SUCCESS);
        store.dispatch(logoutAction());
        history.push("/home");
    });

    
    return (
        <></>
    );
}

export default Logout;
