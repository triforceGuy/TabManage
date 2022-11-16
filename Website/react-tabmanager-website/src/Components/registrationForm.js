import React, {useState,setState} from 'react';
import './style.css'

import {database} from '../firebase.js'
import {ref,push,child,update} from "firebase/database";

function RegistrationForm() {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () =>{
        let obj = {
                firstName : firstName,
                lastName:lastName,
                email:email,
                password:password,
                confirmPassword:confirmPassword,
            }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj;
        return update(ref(database), updates);
    }
 
    return(
        <div className="form">
            <div className="form-body">
                <div className="FirstName">
                    <label className="form__label">First Name</label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="LastName">
                    <label className="form__label">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Last Name"/>
                </div>
                <div className="email">
                    <label className="form__label">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="footer">
                <button onClick={()=>handleSubmit()} type="Register" className="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm;