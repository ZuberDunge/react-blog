import './Get-Started.css';
import React, { useState } from "react";
import NavBar from '../Nav/Nav';
// import Footer from '../Footer/Footer';
import LogIn from './LogIn';
import SignUp from './SignUp';

function GetStarted() {
    const [isNew, setActive] = useState(false)
    const clickHandler = () => setActive((prevState) => !prevState);

    return (
        <>
            <NavBar />
            {isNew ? <LogIn /> : <SignUp />}
            <p className="text-center">
                {isNew ? "Don't have an account?" : "Already have an account?"}
                <span className="signup-text" onClick={clickHandler}> {isNew ? "SignUp" : "LogIn"}</span></p>

            {/* <Footer /> */}
        </>
    );
}

export default GetStarted;
