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
import Swal from "sweetalert2";
function Home() {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const user = JSON.parse(localStorage.getItem("signup"))
    const logout = () => {
        if (user) {
            Swal.fire({
                icon: "warning",
                title: "Are you sure you want to log out? Confirm and logout",
                showCancelButton: true,
                background: "black",
            }).then((res) => {
                if (res.isConfirmed) {
                    localStorage.removeItem("signup");
                    window.location.reload("")
                }
            })
        }
    }
    const logoutSidebar = ()=> {
        if (user) {
            setClick(!click)
            Swal.fire({
                icon: "warning",
                title: "Are you sure you want to log out? Confirm and logout",
                showCancelButton: true,
                background: "black",
            }).then((res) => {
                if (res.isConfirmed) {
                    localStorage.removeItem("signup");
                    window.location.reload("")
                }
            })
        }
    }
    return (
        <>
                <Sidebar user={user} logout={logout} click={click} logoutSidebar={logoutSidebar} handleClick={handleClick} />
                <Header user={user} logout={logout} click={click} handleClick={handleClick} />
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

