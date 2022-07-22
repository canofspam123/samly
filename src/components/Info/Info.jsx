import React from 'react'
import facePic from '../../assets/face-pic.png'
import emailIcon from '../../assets/email-icon.png'
import linkedInIcon from '../../assets/linkedin-icon.png'
import './Info.css'

function Info() {
  return (
    <div className='info'>
      <img src={facePic} />
      <div className='info-text'>
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <h3>laurasmith.website</h3>
      </div>
      <div className='info-buttons'>
        <EmailButton />
        <LinkedInButton />
      </div>
    </div>
  )
}

function EmailButton() {
  return (
    <div className='info-button' id='email-button'>
      <img src={emailIcon} />
      <span className='button-text' style={{color: 'black'}}>Email</span>
    </div>
  )
}
function LinkedInButton() {
  return (
    <div className='info-button' id='linkedin-button'>
      <img src={linkedInIcon} />
      <span className='button-text' style={{color: 'white'}}>LinkedIn</span>
    </div>
  )
}

export default Info