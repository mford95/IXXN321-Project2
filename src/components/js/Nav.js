import React from 'react';

import "../css/Nav.css";
import {NavLink} from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav-container">
            <nav>
            <NavLink to="/works"  className = "logo">Logo</NavLink>
            <NavLink to="/works"  className = "nav-link" activeStyle={{textDecoration: "line-through"}}>Works</NavLink>
            <NavLink to="/about" className = "nav-link" activeStyle={{textDecoration: "line-through"}} >About</NavLink>
            </nav>
        </div>
    )
}
