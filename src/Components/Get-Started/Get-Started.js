import './Get-Started.css';
import React, { useState } from "react";
import NavBar from '../Nav/Nav';
import Footer from '../Footer/Footer';
import LogIn from './LogIn';
import SignUp from './SignUp';
import UserProfile from './User';

function GetStarted() {
    const [isNew, setActive] = useState(true)

    const clickHandler = () => setActive((prevState) => !prevState);

    const user = localStorage.getItem("user")

    let loggedIn = true;
    if (user == null) {
        loggedIn = false;
    }



    return (
        <>
            <NavBar />
            {




                loggedIn ? <UserProfile /> :
                    <>

                        {isNew ? <LogIn /> : <SignUp />}

                        <p className="text-center">
                            {isNew ? "Don't have an account?" : "Already have an account?"}
                            <span className="signup-text" onClick={clickHandler}> {isNew ? "SignUp" : "LogIn"}</span></p>

                        <Footer />
                    </>
            }
        </>
    );
}

export default GetStarted;
