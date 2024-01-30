import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='footer'>
        <div className='sosialeMedier'>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <LinkedIn/>
        </div>
        <p> &copy; 2023 SkMann.no </p>
    </div>
  );
}

export default Footer
