import React from 'react';
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"
import { FaReddit } from "react-icons/fa"
import '../Css/footerStyle.css'
import genlogo1 from '../Images/genlogo1.png'
import hologo from '../Images/hologo.png'




const Footer = () => {
    return (
        <>
          <footer>
              <div className='container container-flex'>
                  <div className='icons'>
                    <FaFacebook  className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaYoutube className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaDiscord className='icon'/>
                    <FaReddit className='icon'/>
                  </div>
                  <div className='logocontainers'>
                <img src={genlogo1} alt='logo' className='logo'/>
            </div>    
            <div className='logocontainers1'>
                    <img src={hologo} alt='logo' className='logo1' />
            </div>  
              </div>
          </footer>
        </>
    )
}
export default Footer;
