import { Component, useEffect } from "react";
import CatModel from "../../../Models/CatModel";
import "./AddCat.css";


import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CatPayloadModel from "../../../Models/CatPayloadModel";
import { catsAddedAction } from "../../../Redux/CatsState";
import store from "../../../Redux/Store";
import Button from '@material-ui/core/Button';
import globals from "../../../Services/Globals";
import notify, { ErrMsg, SccMsg } from "../../../Services/Notification";
import tokenAxios from "../../../Services/InterceptorAxios";


function AddCat(): JSX.Element {

    const {register, handleSubmit, formState: { errors, isDirty, isValid }} = useForm<CatPayloadModel>({
        mode: "onTouched"
      });
    const onSubmit: SubmitHandler<CatPayloadModel> = data => console.log(data);
    const history = useHistory();

    useEffect(()=>{
        // If we don't have a user object - we are not logged in
        if(!store.getState().authState.user){
            notify.error(ErrMsg.PLS_LOGIN);
            history.push("/login")
        }
    }) 

    async function send(cat:CatPayloadModel) {
        console.log(cat);
        try{
            const formData = new FormData();
            formData.append("name",cat.name);
            formData.append("weight",cat.weight.toString());
            formData.append("color",cat.color);
            formData.append("birthday",cat.birthday.toString());
            formData.append("image",cat.image.item(0));
             //Sending token without interceptor
            //const headers = {"authorization": store.getState().authState.user.token};
            //const response = await axios.post<CatModel>(globals.urls.kittens,formData,{headers});
            
            //Sending token with interceptor
            const response = await tokenAxios.post<CatModel>(globals.urls.cats,formData);
            const added = response.data;
            store.dispatch(catsAddedAction(added)); //With Redux
            notify.success(SccMsg.ADDED_CAT)
            history.push('/cats2')
        }
        catch (err) {
            console.log(err.message);
          //  notify.error(err.message);
        }
    }

    return (
        <div className="AddCat Box">
			<h2>Add Cat</h2>
            <form onSubmit={handleSubmit(send)}>
                <label>Name</label> 
                <br/>
                <input type="text" name="name" 
                {...register("name",{
                    required: true, 
                    minLength:2})}/>
                    {/* pattern: /^[A-Z].*$/ */}
                <br/>
                {/* {errors.name && errors.name.type==='required' && <span>missing name</span>}
                {errors.name && errors.name.type==='minLength' && <span>name is too short</span>} */}
                {errors.name?.type==='required' && <span>missing name</span>}
                {errors.name?.type==='minLength' && <span>name is too short</span>}
              
               <br/>

                <label>Weight</label> <br/>
                <input type="number" name="weight" step="0.01" 
                {...register("weight",
                    {
                        required: {
                            value:true,
                            message:'Missing Weight'},
                        min:{
                            value:0,
                            message:'Weight must be greater than zero'}
                    }
                )}/>
                <br />
                <span>{errors.weight?.message}</span>
                <br/>

                <label>Color</label> <br/>
                <input type="text" name="color" 
                {...register("color",{required:true} )}/>
             
                <br/>
                {errors.color && <span>missing color</span>}
                <br/>

                <label>Birthday</label> <br/>
                <input type="date" name="birthday" 
                {...register("birthday",{
                    required: {
                        value:true,
                        message:'Missing Image'},
                    })}/>
                <br/>
                {/* {errors.birthday && <span>missing birthday</span>} */}
                <span>{errors?.birthday?.message}</span>
                <br/>
                
                <label>Image</label> <br/>
                <input type="file" name="image" accept="image/*" 
                {...register("image",{required: true})} />
                <br/>
                {errors.image && <span>missing image</span>}
                <br/>

                {/* <button >Add</button> */}
                <Button type="submit" disabled={!isDirty || !isValid} variant="contained" color="primary">Add</Button>
            </form>
        </div>
    );
}

export default AddCat;
