import { useState } from 'react'
import { imgData } from './assets/myassets.js'
import Viewer from './components/Viewer.jsx'

import './App.css'

function App() {
  

  return (
    <>
    <div className="header">
      <div className="logo-name">
        <div className="logo">
          <img  className="ptune-logo" src={imgData.PtuneLogo} alt="NIT Warangal" />
        </div>
        <div className="name"> Purushottam Gurjar</div>
      </div>
      <div className="nav-profile">
        <div className="nav">
          <a  href="#" className="nav-content" target=''><p className="selected">E-Sarthee</p></a>
          <a  href="https://p-tunes-purush-gurjar.vercel.app/" className="nav-content" target='_blank'>About</a>
          <a  href="https://contact-purushottam-gurjar.vercel.app/" className="nav-content" target='_blank'>Contact</a>
          <a  href="https://p-tunes-purush-gurjar.vercel.app/" className="nav-content" target='_blank'>P-Tunes</a>
        </div>
        <div className="profile">
          <img src={imgData.pic} alt="" className="profile" />
        </div>
      </div>
    </div>
     <div className="nav-second">
          <a  href="#" className="nav-content" target=''><p className="selected">E-Sarthee</p></a>
          <a  href="https://p-tunes-purush-gurjar.vercel.app/" className="nav-content" target='_blank'>About me</a>
          <a  href="https://p-tunes-purush-gurjar.vercel.app/" className="nav-content" target='_blank'>P-Tunes</a>
     </div>

     <Viewer/>
      
    </>
  )
}

export default App
