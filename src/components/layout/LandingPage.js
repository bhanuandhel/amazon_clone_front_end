import React from 'react'
import HomePageProductContainer from '../HomePageProduct/HomePageProductContainer'
import ImageSlider from './ImageSlider'
import NavbarContainer from './Navbar/NavbarContainer'

const LandingPage = () => {
    return (
        <>
            <NavbarContainer />
            <div className="container-fluid px-0">
                <ImageSlider />
                <HomePageProductContainer />
            </div>
        </>
    )
}

export default LandingPage
