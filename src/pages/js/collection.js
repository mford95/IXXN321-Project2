import React from 'react'
import "../css/collection.css";
import Footer from '../../components/js/Footer.js';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import img1 from "../../images/Gallery/gallery1.jpg";
import img2 from "../../images/Gallery/gallery2.jpg";
import img3 from "../../images/Gallery/gallery3.jpg";
import img4 from "../../images/Gallery/gallery4.jpg";
import img5 from "../../images/Gallery/gallery5.jpg";
import img6 from "../../images/Gallery/gallery6.jpg";
import img7 from "../../images/Gallery/gallery7.jpg";
import img8 from "../../images/Gallery/gallery8.jpg";
import img9 from "../../images/Gallery/gallery9.jpg";

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

export default function collection() {
    return (
        <div className="pageContainer">
            <div className="sliderContainer">
                <AwesomeSlider>
                    <div><img src={img1}  ></img></div>
                    <div><img src={img2}  ></img></div>
                    <div><img src={img3}  ></img></div>
                    <div><img src={img4}  ></img></div>
                    <div><img src={img5}  ></img></div>
                    <div><img src={img6}  ></img></div>
                    <div><img src={img7}  ></img></div>
                    <div><img src={img8}  ></img></div>
                    <div><img src={img9}  ></img></div>
                </AwesomeSlider>
            
             </div>
        <Footer/>
        </div>
    )
}
