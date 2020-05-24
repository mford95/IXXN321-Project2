import React, { Component } from 'react';
import '../css/footer.css';
import socialFb from "../../images/socialFb.png"
import socialInsta from "../../images/socialInsta.png"

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                        <div className='socialContainer'>
                            <a href="">
                     <img  src={socialFb} ></img>
                     </a>
                     <a href="">
                     <img  src={socialInsta} ></img>
                     </a>
                        </div>
                </footer>
            </div>
        )
    }
}
