import React from 'react'
import {data} from "./data"
import Icon from "../../img/img-06.png"
import Icon2 from "../../img/hearticon.png"
function Thumbnail() {
    return (
      <>
                  <section className="thumbnail">
                
                {data?.map(sp=> {
                    return (
                        <div key={sp.img} className="thumbnail__items">
                        <img src={sp.img} alt="#" />
                        <h5>[what happen] How to create </h5>
                            <div className="thumbnail__items__price">
                                <p>2,500 won</p>
                                <div className="thumbnail__items__price--heart"><img src={Icon2} alt="" /> <span>236</span></div>
                            </div>
                    </div>
                    )
                })}
                
                </section>
                <div className="thumbnail__button">
                    <button>SEE MORE</button>
                </div>
      </>
    )
}

export default Thumbnail
