import React from "react";
import img from './qr.png'
import './style.css';

export default () => (
    <>
        <div className="qrcode">
            <img src={img} className="qrcode__image"/>
            <h3 className="qrcode__title">Improve your front-end skills by building projects</h3>
            <p className="qrcode__text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    </>
)