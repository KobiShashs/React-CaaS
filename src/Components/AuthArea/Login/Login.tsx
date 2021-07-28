import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import UserModel from "../../../Models/UserModel";
import { loginAction } from "../../../Redux/AuthState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify, { SccMsg } from "../../../Services/Notification";
import "./Login.css";

function Login(): JSX.Element {
    const history = useHistory(); //Redirect function
    const { register, handleSubmit, formState: { errors } } = useForm<CredentialsModel>();

    async function send(credentials: CredentialsModel){
        console.log(credentials);
        try{ 
            const response = await axios.post<UserModel>(globals.urls.client+"login",credentials);
            console.log(response.data);
            store.dispatch(loginAction(response.data));
            notify.success(SccMsg.LOGIN_SUCCESS);
            history.push("/home"); // Redirect to home in success
          }
          catch(err){
              notify.error(err);
          }
    }


    return (
        <div className="Login Box">
            <h2>Login</h2>
               <form onSubmit={handleSubmit(send)}>
        
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: 4,
            maxLength: 12,
          })}
        />
<br />

        <input type="submit" value="Login"/>

      </form>
			
        </div>
    );
}

export default Login;
