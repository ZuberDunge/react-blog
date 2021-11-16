import './Get-Started.css';
import React from "react";

function SignUp() {

    return (
        <>

            <div className="Log-in">
                <h2 className="border-btm">Create an Account!</h2>
                <form className="login-form">
                    {/* <label>Email: </label> */}
                    <input required placeholder="Enter Your Name" type="Name" />
                    <input required placeholder="Enter Your Email" type="email" />

                    {/* <label>Password: </label> */}
                    <input required placeholder="Enter Your Password" type="Password" />

                    <button type="submit" className="login-btn">Sign Up</button>



                </form>
            </div>


        </>
    );
}

export default SignUp;
