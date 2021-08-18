import React from 'react'
import ImageSlider from './ImageSlider'
import NavbarContainer from './Navbar/NavbarContainer'

const LandingPage = () => {
    return (
        <>
            <NavbarContainer />
            <div className="container-fluid px-0">
                <ImageSlider />
            </div>
        </>
    )
}

export default LandingPage
