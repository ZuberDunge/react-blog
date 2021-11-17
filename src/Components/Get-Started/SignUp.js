import './Get-Started.css';
import React, { useState } from "react";
import LatestArray from "../Home Section/The Latest/LatestArray"
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
function SignUp() {
    const [userDetails, setuserDetails] = useState({
        fullname: "",
        email: "",
        password: ""
    });

    const handleData = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setuserDetails({ ...userDetails, [name]: value })
    }

    const submitData = (e) => {
        e.preventDefault();
        const newUserObj = userDetails;
        LatestArray.unshift(newUserObj)
        localStorage.setItem("user", "Signed")
    }

    return (
        <>

            <div className="Log-in">
                <h2 className="border-btm margauto">Create an Account!</h2>
                <form className="login-form">
                    {/* <label>Email: </label> */}
                    <input
                        value={userDetails.fullname}
                        onChange={handleData}
                        required placeholder="Enter Your Name" type="Name" name="fullname" />

                    <input
                        value={userDetails.email}
                        onChange={handleData}
                        required placeholder="Enter Your Email" type="email" name="email" />

                    {/* <label>Password: </label> */}
                    <input
                        value={userDetails.password}
                        onChange={handleData}
                        required placeholder="Enter Your Password" type="Password" name="password" />

                    <button onClick={submitData} type="submit" className="sign-up-btn login-btn">
                        <Link to="/GetStarted"> Sign Up</Link></button>



                </form>
            </div>


        </>
    );
}

export default SignUp;
