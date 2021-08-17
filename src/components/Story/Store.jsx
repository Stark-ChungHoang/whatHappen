import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from "framer-motion"
import Icon1 from "../../img/window.png"
import Icon2 from "../../img/img.png"
import Icon3 from "../../img/object-05.png"
import Icon4 from "../../img/object-04.png"
import Icon5 from "../../img/object-01.png"
import Icon6 from "../../img/object-06.png"
import Icon7 from "../../img/object-07.png"
import Icon8 from "../../img/object-02.png"
import Icon9 from "../../img/object-03.png"
function Story() {
    const animation = useAnimation()
    const { ref, inView} = useInView({ threshold: 0.2,  });
      useEffect(()=> {
          if(inView) {
              animation.start({
                  scale: 1,
                  transition: { type: 'spring', duration: 3,bounce:0.3,},
              });
          }
          if(!inView) {
              animation.start({  scale:0.7 })
          }
      },[inView,animation])
    return (
        <motion.section
        ref={ref}
        animate={animation}
        className="story">
            <div className="article article--yellow">
                <h5>Brand Story</h5>
                <p>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
            </div>
            <div
            className="story__banner">
                <img src={Icon1} alt="" />
            </div>
            <div className="story__topLogo">
                    <div className="story__topLogo__name">
                        <img src={Icon8} alt="" />
                    </div>
                    <div className="story__topLogo__weekly">
                        <img src={Icon9} alt="" />
                    </div>
            </div>
            <div className="story__leftLogo">
                <img src={Icon5} alt="" />
            </div>
            <div className="story__banner__hidden">
            <img src={Icon2} alt="" />
            </div>
            <div className="story__right">
                    <div className="story__right__book">
                        <img src={Icon3} alt="" />
                    </div>
                    <div className="story__right__flower">
                        <img src={Icon4} alt="" />
                    </div>
            </div>
            <div className="story__left">
                <div className="story--bottom">
                    <img src={Icon6} alt="" />
                    <img src={Icon7} alt="" />
                </div>
            </div>
            <div className="story__content">
    
                <h5>What Happened’s Brand story</h5>
                <p>청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                            아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. </p>
                <div className="story__content__button">
                    <button>SEE MORE</button>
                </div>

            </div>

        </motion.section>
    )
}

export default Story
