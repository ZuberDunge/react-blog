import './Nav.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import Navlinks from "./Navlinks"

function createNavLink(Navlink) {
    return <li><NavLink exact to={Navlink.to} activeClassName="active">{Navlink.name}</NavLink></li>
}

function NavBar() {
    const [isactive, setActive] = useState(false)
    const clickHandler = () => setActive((prevState) => !prevState);

    return (
        <div className="Nav-Container">
            <nav className="navbar">
                <div className="logo">
                    <span className="the">The</span>
                    <span className="siren">Siren</span>
                </div>
                <div className="nav-list">
                    <div onClick={clickHandler}><i className="fas menu-btn fa-bars" ></i> </div>

                    <ul className={isactive ? "show" : ""}>
                        {Navlinks.map(createNavLink)}
                    </ul>

                </div>

            </nav >
        </div >
    );
}

export default NavBar;
