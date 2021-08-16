import React from 'react'
import Icon1 from "../../img/producticon-01.png"
import Icon2 from "../../img/producticon-02.png"
import Icon3 from "../../img/producticon-03.png"
import Icon4 from "../../img/go-icon.png"
import Icon5 from "../../img/best-image-01@3x.png";
import Icon6 from "../../img/best-image-02.png";
import Icon7 from "../../img/best-image-03.png";
function Product() {
    return (
        <section className="product">
            <div className="article">
                <h5>Best Product</h5>
                <p>How to create mobile-optimized videos in minutes. Not a designer, 
                        every team makes a lot of videos Can be trimmed. Take the first</p>
            </div>
            <div className="product__list">
                <div className="product__list__items">
                    <img src={Icon5} alt="" />
                    <div className="product__list__items--img">
                        <img src={Icon1} alt="" />
                    </div>
                    <div className="product__list__items--button">
                        <p>How to create mobile-optimized</p>
                        <img src={Icon4} alt="" />
                    </div>
                </div>
                <div className="product__list__items">
                <img src={Icon6} alt="" />
                    <div className="product__list__items--img">
                        <img src={Icon2} alt="" />
                    </div>
                    <div className="product__list__items--button">
                        <p>How to create mobile-optimized</p>
                        <img src={Icon4} alt="" />
                    </div>
                </div>
                <div className="product__list__items">
                <img src={Icon7} alt="" />
                    <div className="product__list__items--img">
                        <img src={Icon3} alt="" />
                    </div>
                    <div className="product__list__items--button">
                        <p>How to create mobile-optimized</p>
                        <img src={Icon4} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
