import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from "framer-motion"
import Icon1 from "../../img/video.png"
import Icon2 from "../../img/video-object-04.png"
import Icon3 from "../../img/video-object-01.png"
import Icon4 from "../../img/video-object-03.png"
import Icon5 from "../../img/video-object-08.png"
import Icon6 from "../../img/video-object-09.png"
import Icon7 from "../../img/video-object-05.png"
import Icon8 from "../../img/video-object-07.png"
import Icon9 from "../../img/video-object-06.png"
function Discover() {
    const animation = useAnimation()
    const { ref, inView} = useInView({ threshold: 0.2,  });
      useEffect(()=> {
          if(inView) {
              animation.start({
                    scale: 1,
                  transition: { type: 'spring', duration: 2,bounce:0.3,},
              });
          }
          if(!inView) {
              animation.start({  scale:0.7})
          }
      },[inView,animation])
    return (
        <motion.section 
        animate={animation}
            ref={ref} className="discover">
                <div className="article article--discover">
                    <h5>what happened</h5>
                    <p>How to create mobile-optimized videos in minutes. Not a designer, 
                        every team makes a lot of videos Can be trimmed. Take the first </p>
                        <div className="discover__button">
                            <button>SEE MORE</button>
                        </div>
                </div>
                <div className="discover__banner">
                    <img src={Icon1} alt="" />
                </div>
                <div className="discover__banner__hidden">
                    <img src={Icon1} alt="" />
                </div>
                
                <div className="discover__right">
                    <img src={Icon2} alt="" />
                </div>
                <div className="discover__bottom">
                    <div className="discover__bottom--h">
                        <img src={Icon4} alt="" />
                    </div>
                    <div className="discover__bottom--error">
                        <img src={Icon3} alt="" />
                    </div>
                </div>
                <div className="discover__left">
                    <div className="discover__left--bottom">
                        <img src={Icon6} alt="" />
                    </div>
                    <div className="discover__left--top">
                        <img src={Icon5} alt="" />
                    </div>
                </div>
                <div className="discover__top">
                        <img src={Icon7} alt="" />
                </div>
                <div className="discover__heart">
                        <div className="discover__heart--top">
                            <img src={Icon8} alt="" />
                        </div>
                        <div className="discover__heart--bottom">
                            <img src={Icon9} alt="" />
                        </div>

                </div>
        </motion.section>
    )
}

export default Discover
