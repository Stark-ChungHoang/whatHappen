import React from 'react'
import { motion } from "framer-motion"

function Intro() {
    return (
        <section className="intro">
            <div className="intro__content">
                <motion.h5
                    initial={{marginTop:-500}}
                    animate={{marginTop:0}}
                    transition={{duration:2}}
                >What Happened!</motion.h5>
                <p>How to create mobile-optimized videos in minutes. Not a designer,
                every team makes a lot of videos Can be trimmed. Take the first
                step to your brand's success. How to create
            mobile-optimized videos in minutes.</p>
            </div>
        </section>

    )
}

export default Intro
