import React from 'react'
import AboutUs from '../aboutUs/AboutUs'
import { HowItWorks } from '../howItWorks/HowItWorks'
import { Reviews } from '../reviews/Reviews'

export const MainContent = () => {
    return (
        <div>
            <AboutUs />
            <HowItWorks />
            <Reviews />
        </div>
    )
}
