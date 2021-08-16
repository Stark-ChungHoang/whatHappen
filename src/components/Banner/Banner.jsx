import React from 'react'
import Icon from "../../img/main-banner.png"
import { motion } from "framer-motion"
function Banner() {
    return (
        <motion.section
        initial={{marginLeft:-500}}
        animate={{marginLeft:0}}
        transition={{duration:1}}
        className="banner">
                <img src={Icon} alt="" />
        </motion.section>
    )
}

export default Banner
