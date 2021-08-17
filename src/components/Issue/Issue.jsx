import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from "framer-motion"
import Icon1 from "../../img/news-img-01.png"
import Icon2 from "../../img/news-img-03.png"
import Icon3 from "../../img/news-img-04.png"
import Icon4 from "../../img/news-img-05.png"
import Icon5 from "../../img/news-object-03_2.png"
import Icon7 from "../../img/news-object-03.png"
import Icon6 from "../../img/news-object-02.png"
import Icon8 from "../../img/news-object-04.png"
import Icon9 from "../../img/news-object-05.png"
import Icon10 from "../../img/img__person.png"
function Issue() {
    const animation = useAnimation()
    const { ref, inView} = useInView({ threshold: 0.2,  });
      useEffect(()=> {
          if(inView) {
              animation.start({
                  x: 0,
                  transition: { type: 'spring', duration: 2,bounce:0.3,},
              });
          }
          if(!inView) {
              animation.start({   x: '-100vw' })
          }
      },[inView,animation])
    return (
        <section ref={ref} className="issue">
                <div className="article article--black">
                    <h5>Happened’s issue</h5>
                    <p>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 
                        디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을
                          내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
                         <div className="issue__button">
                             <button>SEE MORE</button></div> 
                </div>
                <motion.div
                    animate={animation}
                className="issue__img">
                        <div className="issue__img__top">
                                <img src={Icon5} alt="" />
                        </div>
                        <div className="issue__img__bottom">
                                <img src={Icon6} alt="" />
                        </div>
                </motion.div>
                <div className="issue__list">
                    <div className="issue__items">
                            <h5>whpn <br />issue </h5>
                            <img src={Icon1} alt="" />
                            <div
                            className="issue__items__logo">
                        <img src={Icon7} alt="" />
                    </div>
                    </div>
                    
                    <div className="issue__items">
                            <div className="issue__items__brand">
                                        <h5>b brand</h5>
                            </div>
                            <div className="issue__items__img">
                                <img src={Icon10} alt="" /></div>
                            <div className="issue__items__hotImg">
                                <img src={Icon8} alt="" />
                            </div>
                    </div>
                    <div className="issue__items">
                            <div className="issue__items__brand">
                                        <h5>c brand</h5>
                            </div>
                            <div className="issue__items__img">
                                <img src={Icon3} alt="" />
                            </div>
                         
                    </div>
                    <div className="issue__items">
                            <div className="issue__items__brand issue__items__brand--orange">
                                        <h5>d brand</h5>
                            </div>
                            <div className="issue__items__img">
                                <img src={Icon4} alt="" /></div>
                                <div className="issue__items__logo">
                        <img src={Icon9} alt="" />
                    </div>
                    </div>
                    <div className="issue__items">
                            <div className="issue__items__brand">
                                        <h5>e brand</h5>
                            </div>
                            <div className="issue__items__img">
                                <img src={Icon2} alt="" /></div>
                    </div>
                </div>
        </section>
    )
}

export default Issue
