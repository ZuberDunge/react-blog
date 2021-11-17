import './Get-Started.css';
import React, { useState } from "react";
import { Redirect } from 'react-router';

function LogIn() {

    const [isValid, setActive] = useState(false)
    var [emailValue, setEmail] = useState("")
    var [passValue, setPass] = useState("")

    const checkValid = (e) => {
        e.preventDefault();
        if (emailValue === "a" && passValue === "a") {
            setActive(true);
            localStorage.setItem("user", "loggged")
        } else {
            alert("invalid")
        }
    }




    return (
        <>
            {
                isValid ? <Redirect to="/" /> :
                    <div className="Log-in">
                        <h2 className="border-btm margauto">Welcome Back!</h2>

                        <form className="login-form">
                            <input required
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter Your Email" type="email" />

                            <input onChange={e => setPass(e.target.value)}
                                required placeholder="Enter Your Password" type="Password" />

                            <button type="submit" onClick={checkValid} className="login-btn">Log In</button>


                        </form>
                    </div>
            }

        </>
    );
}

export default LogIn;
