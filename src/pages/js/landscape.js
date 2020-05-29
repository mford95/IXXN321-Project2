import React from 'react'
import "../css/collection.css";
import Footer from '../../components/js/Footer.js';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import img1 from "../../images/Gallery/landscape1.jpg";
import img2 from "../../images/Gallery/landscape2.jpg";
import img3 from "../../images/Gallery/landscape3.jpg";
import img4 from "../../images/Gallery/landscape4.jpg";
import img5 from "../../images/Gallery/landscape5.jpg";
import img6 from "../../images/Gallery/landscape6.jpg";


const slider = (
    <AwesomeSlider>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </AwesomeSlider>
  );

export default function landscape() {
    return (
        <div className="pageContainer">
            
            <div className="sliderContainer">
            <h2> Landscape Film</h2>
                <AwesomeSlider>
                    <div><img src={img1}  ></img></div>
                    <div><img src={img2}  ></img></div>
                    <div><img src={img3}  ></img></div>
                    <div><img src={img4}  ></img></div>
                    <div><img src={img5}  ></img></div>
                    <div><img src={img6}  ></img></div>
                </AwesomeSlider>
            
             </div>
        <Footer/>
        </div>
    )
}
