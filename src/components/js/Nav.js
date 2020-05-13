import React from 'react';
import "../css/Nav.css";
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <div className="main-nav">
            <Link to="/home" className = "nav-link">Home</Link>
            <Link to="/gallery" className = "nav-link">Gallery</Link>
            
        </div>
    )
}
