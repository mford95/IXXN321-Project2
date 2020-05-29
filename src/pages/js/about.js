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
                    <p> I am a third year Interactive design student. I have created this website to showcase a little hobby of mine in 35mm film photography.</p>
                </div>
            </div>
            
        </div>
    )
}
