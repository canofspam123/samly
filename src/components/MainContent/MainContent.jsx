import React from 'react'
import './MainContent.css'

function MainContent() {
  return (
    <div className='main-content'>
      <About />
      <Interests />
    </div>
  )
}

function About() {
  return (
    <div className='about-section'>
      <h1>About</h1>
      <p>
      I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
      </p>
    </div>
  )
}

function Interests() {
  return (
    <div className='interests-section'>
      <h1>Interests</h1>
      <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
  )
}

export default MainContent