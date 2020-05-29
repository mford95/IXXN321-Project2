import React from 'react'
import "../css/about.css";
import bioImg from "../../images/Gallery/bioImg.jpg";

export default function about() {
    return (
        <div>
            <div className='aboutContainer'>
                <div className='aboutImg'>
                <img src={bioImg}  ></img>
                </div>
                <div className='aboutBio'>
                    <h3>About me</h3>
                    <p> some text about what i do and stuff</p>
                </div>
            </div>
            
        </div>
    )
}
