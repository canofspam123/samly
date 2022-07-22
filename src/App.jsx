import React from 'react'

import Info from './components/Info/Info'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Info />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App