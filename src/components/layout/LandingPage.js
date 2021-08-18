import React from 'react'
import HomePageProductContainer from '../HomePageProduct/HomePageProductContainer'
import Footer from './Footer'
import ImageSlider from './ImageSlider'
import NavbarContainer from './Navbar/NavbarContainer'

const LandingPage = () => {
    return (
        <>
            <NavbarContainer />
            <div className="container-fluid px-0">
                <ImageSlider />
                <HomePageProductContainer />
                <Footer />
            </div>
        </>
    )
}

export default LandingPage
