import './Nav.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import Navlinks from "./Navlinks"

function createNavLink(Navlink) {
    return <li key={Navlink.id}><NavLink exact to={Navlink.to} activeClassName="active">{Navlink.name}</NavLink></li>
}

function NavBar() {
    const [isactive, setActive] = useState(false)
    const clickHandler = () => setActive((prevState) => !prevState);
    const user = localStorage.getItem("user")
    let loggedIn = true;
    if (user == null) {
        loggedIn = false;
    }

    return (
        <div className="Nav-Container">
            <nav className="navbar">
                <div className="logo">
                    <span className="the">The</span>
                    <span className="siren">Siren</span>
                </div>
                <div className="nav-list web-bg-nav">
                    <div onClick={clickHandler}><i className="fas menu-btn fa-bars" ></i> </div>

                    <ul className={isactive ? "show" : ""}>
                        {Navlinks.map(createNavLink)}

                        <li><NavLink exact to="/GetStarted" activeClassName="active">{loggedIn ? "View Profile" : "Get Started"}</NavLink></li>
                    </ul>

                </div>

            </nav >
        </div >
    );
}

export default NavBar;
