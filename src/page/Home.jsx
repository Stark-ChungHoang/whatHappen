import React, { useState } from 'react';
import "../App.scss"
import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Intro from "../components/Intro/Intro"
import Product from "../components/Product/Product"
import Thumbnail from "../components/Thumbnail/Thumnail"
import Story from "../components/Story/Store"
import Issue from "../components/Issue/Issue"
import Discover from "../components/Discover/Discover"
import Footer from "../components/Footer/Footer"
function Home() {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
                <Sidebar click={click} handleClick={handleClick} />
                <Header click={click} handleClick={handleClick} />
            <main>
                    <Banner />
                    <Intro />
                    <Product />
                    <Thumbnail />
                    <Story />
                    <Issue />
                    <Discover />
            </main>
              <Footer />
        </>
    )
}

export default Home

