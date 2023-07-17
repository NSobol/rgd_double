import React from 'react'
import { Footer } from '../footer/Footer'
import { Contacts } from '../contacts/Contacts'

export const FooterContainer = () => {
    return (
        <div className='footer-container'>
            <Contacts />
            <Footer />
        </div>
    )
}
