import './Get-Started.css';
import React, { useState, useRef } from "react";
import LatestArray from "../Home Section/The Latest/LatestArray"
import { Link } from 'react-router-dom';

function SignUp() {
    const [error, setError] = useState(null);
    const [userDetails, setuserDetails] = useState({
        fullname: "",
        email: "",
        password: ""
    });
    const fullnameRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef = useRef(null);

    const handleData = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setuserDetails({ ...userDetails, [name]: value })
    }

    const submitData = (e) => {
        e.preventDefault();

        const password = passwordRef.current.value;
        const email = emailRef.current.value;
        const fullname = fullnameRef.current.value;
        if (password.length <= 8 && fullname.length <= 8 && email.length <= 8) {
            setError("too short!!!");
            return;
        }
        setError("");


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
                        ref={fullnameRef}
                        value={userDetails.fullname}
                        onChange={handleData}
                        required placeholder="Enter Your Name" type="Name" name="fullname" />
                    {error}
                    <input
                        ref={emailRef}
                        value={userDetails.email}
                        onChange={handleData}
                        required placeholder="Enter Your Email" type="email" name="email" />

                    {/* <label>Password: </label> */}
                    <input
                        ref={passwordRef}
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
