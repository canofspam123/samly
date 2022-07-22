import React from 'react'
import twitterIcon from '../../assets/twitter-icon.png'
import facebookIcon from '../../assets/facebook-icon.png'
import instagramIcon from '../../assets/instagram-icon.png'
import githubIcon from '../../assets/github-icon.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <img src={twitterIcon}/>
      <img src={facebookIcon}/>
      <img src={instagramIcon}/>
      <img src={githubIcon}/>
    </div>
  )
}

export default Footer