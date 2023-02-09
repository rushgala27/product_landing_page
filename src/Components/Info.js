import React from "react";
import IconsImage from "../images/icons.png";

export default function Info() {
  return (
    <div className="info">
      <div className="info--data">
        <h1 className="info--title">The Sustainable Kit</h1>
        <p className="info--shortinfo">
          This starter kit is all you need to start the revolution!
        </p>
        <p className="info--consistsof">Consists of:</p>
        <ul className="info--contains">
          <li>2 Bamboo Straws</li>
          <li>1 Plant Based Reusable Cup with 2 lids</li>
          <li>1 Natural Loofah</li>
          <li>1 box of 50 Bamboo Cotton Eartips</li>
          <li>1 Bamboo Toothbrush</li>
          <li>1 Plant Based Reusable Container</li>
        </ul>
      </div>
      <div className="grid">
        <span className="grid--row1">Quantity</span>
        <div className="grid--quantity">1</div>
        <div className="grid--price">$10.99</div>
        <div className="grid--addtocart">Add to Cart</div>
        <div className="grid--buynow">Buy Now</div>
        <img className="grid--icons" src={IconsImage} alt="icons" />
      </div>
    </div>
  );
}
