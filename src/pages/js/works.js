import React from 'react';
import "../css/works.css";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import {Link} from "react-router-dom";


export default function works() {
    return (
        <div>
            <div className= "container">
                <div className="leftSide">
                    <div className="intro">
                    <h2>Works</h2>
                    <p>a series of photographs compiled into collections</p>
                </div>
                        <Link to="/about" className = "works-link">
                            <img class="works-thumb" src={img1} alt='Nature' ></img> 
                            
                        </Link>
                        <Link to="/about" className = "works-link">
                            <img class="works-thumb" src={img2} alt='Landscape' ></img>   
                        </Link>
                </div>
                <div className="rightSide">
                    <Link to="/about" className = "works-link">
                        <img class="works-thumb" src={img3} alt='Landscape' ></img>   
                    </Link>
                    <Link to="/about" className = "works-link">
                        <img class="works-thumb" src={img4} alt='Landscape' ></img>   
                    </Link>
                </div>
            </div>
        </div>
    )
}
