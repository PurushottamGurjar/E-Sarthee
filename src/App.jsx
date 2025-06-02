import { useState } from 'react'
import { imgData } from './assets/myassets.js'
import Viewer from './components/Viewer.jsx'

import './App.css'

function App() {
  

  return (
    <div className="app-container">
      {/* Video Background */}
      <video autoPlay muted loop className="background-video">
        <source src={imgData.starsBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      {/* Overlay Content */}
      <div className="content">
        Header 
         <header className="header">
          <div className="logo-name">
            <img className="ptune-logo" src={imgData.PtuneLogo} alt="Purush" />
            <span className="name">Purushottam Gurjar</span>
          </div>
          <div className="nav-profile">
            <nav className="nav desktop-nav">
        
              <a href="https://purushottam-gurjar.vercel.app/"  className="nav-content" >About</a>
              <a href=""  className="nav-content selected" >E-Sarthee</a>
              <a href="https://p-tunes-purush-gurjar.vercel.app/"  className="nav-content" >P-Tunes</a>
              <a href="https://purushottam-gurjar.vercel.app/contact"  className="nav-content" >Contact</a>
              
            </nav>
            <img src={imgData.pic} alt="Profile" className="profile" />
          </div>
        </header>
        <nav className="nav-second mobile-nav">

              <a href="https://purushottam-gurjar.vercel.app/"  className="second-nav-content" >About</a>
              <a href=""  className="second-nav-content selected" >E-Sarthee</a>
              <a href="https://p-tunes-purush-gurjar.vercel.app/"  className="second-nav-content" >P-Tunes</a>
              <a href="https://purushottam-gurjar.vercel.app/contact"  className="second-nav-content" >Contact</a>
          
        </nav>

      </div>
      <Viewer/>

    </div>
  )
}

export default App
