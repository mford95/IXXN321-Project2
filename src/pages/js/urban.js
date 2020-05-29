import React from 'react'
import "../css/collection.css";
import Footer from '../../components/js/Footer.js';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import img1 from "../../images/Gallery/urban1.jpg";
import img2 from "../../images/Gallery/urban2.jpg";

const slider = (
    <AwesomeSlider>
      <div>1</div>
      <div>2</div>
    </AwesomeSlider>
  );

export default function urban() {
    return (
        <div className="pageContainer">
            
            <div className="sliderContainer">
            <h2> Urban Film</h2>
                <AwesomeSlider>
                    <div><img src={img1}  ></img></div>
                    <div><img src={img2}  ></img></div>
                </AwesomeSlider>
            
             </div>
        <Footer/>
        </div>
    )
}
