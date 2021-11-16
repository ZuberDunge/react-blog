import './Get-Started.css';
import React, { useState } from "react";

function LogIn() {

    const [isValid, setActive] = useState(false)
    var [emailValue, checkEmail] = useState("")
    var [passValue, checkPass] = useState("")

    const checkValid = (e) => {
        e.preventDefault();
        if (emailValue === "sahil@gmail.com" && passValue === "123") {
            setActive((prevState) => !prevState);
        } else {
            alert("invalid")
        }
    }


    const clickHandler = () => setActive((prevState) => !prevState);

    return (
        <>

            <div className="Log-in">
                <h2 className="border-btm">Welcome Back!</h2>
                {isValid ? <h2 >Welcome Back!</h2> :
                    <form className="login-form">
                        <input required
                            onChange={e => checkEmail(e.target.value)}
                            placeholder="Enter Your Email" type="email" />

                        <input onChange={e => checkPass(e.target.value)}
                            required placeholder="Enter Your Password" type="Password" />

                        <button type="submit" onClick={checkValid} className="login-btn">Log In</button>


                    </form>}
            </div>


        </>
    );
}

export default LogIn;
