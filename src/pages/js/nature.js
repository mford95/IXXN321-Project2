import React from 'react'
import "../css/collection.css";
import Footer from '../../components/js/Footer.js';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import img1 from "../../images/Gallery/nature1.jpg";
import img2 from "../../images/Gallery/nature2.jpg";
import img3 from "../../images/Gallery/nature3.jpg";
import img4 from "../../images/Gallery/nature4.jpg";

const slider = (
    <AwesomeSlider>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
  );

export default function nature() {
    return (
        <div className="pageContainer">
            
            <div className="sliderContainer">
            <h2> Nature Film</h2>
                <AwesomeSlider>
                    <div><img src={img1}  ></img></div>
                    <div><img src={img2}  ></img></div>
                    <div><img src={img3}  ></img></div>
                    <div><img src={img4}  ></img></div>
                </AwesomeSlider>
            
             </div>
        <Footer/>
        </div>
    )
}
