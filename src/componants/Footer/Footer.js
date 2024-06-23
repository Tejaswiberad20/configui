import './Footer.css'
import LocationPng from './location-pin.png'
import { theme, siteDetails } from '../../data'

function Footer() {
    return (
        <div className='footer-container' style={{ background: theme.footerBg, color: theme.navbarText }}>
           
            <div className='logo-container'>
                <img src={LocationPng} alt="Location Logo" className='logo' />
                <p style={{ color: theme.navbarText }}> {siteDetails.address} </p>
            </div>
        </div>
    )
}

export default Footer