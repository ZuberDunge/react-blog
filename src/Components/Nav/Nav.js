import './Nav.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom"

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
                        <li>
                            <NavLink exact to="/" activeClassName="active"  >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Bollywood" activeClassName="active"  >Bollywood</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Technology" activeClassName="active"  >Technology</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Hollywood" activeClassName="active"  >Hollywood</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Travel" activeClassName="active"  >Travel</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Food" activeClassName="active"  >Food</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Get-Started" activeClassName="active"  >Get Started</NavLink>
                        </li>
                    </ul>

                </div>

            </nav >
        </div >
    );
}

export default NavBar;
