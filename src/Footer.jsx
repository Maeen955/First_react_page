import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='lead'>
          <div className="stack">
        <p className='grow'>  
          <span className='logo'>
          Dribble
          </span>
          <br/>
          Dribble is the world'd leading comunity for creative
          to share, grow, and get hired
        </p>
       
        <div className='social'>
          <FaFacebook/>
          <FaTwitter/>
          <FaInstagram/>
          <FaPinterest/>
        </div>
      </div>
      </div>

      <div className='go'>

    
    
      <div className="stack">
        <p><b>For designers</b></p>
        <p>go pro</p>
        <p>explore design work</p>
        <p>design blog</p>
        <p>overtime podcast</p>
        <p>playoffs</p>
        <p>weekly warm-up</p>
        <p>refer a friend</p>
        <p>code of conduct</p>
      </div>
      <div className="stack">
 <p><b>hire designers</b></p>
        <p>post a job opening</p>
        <p>post a freelance project</p>
        <p>serach for designers</p>
        <p><b>brands</b></p>
        <p>advertise with us</p>
      </div>
      <div className="stack">
 <p><b>company</b></p>
        <p>about</p>
        <p>carreers</p>
        <p>support</p>
        <p>media kit</p>
        <p>testimonial</p>
        <p>api</p>
        <p>terms of service</p>
        <p>priveacy policy</p>
      </div>
      <div className="stack">
 <p><b>directories</b></p>
        <p>design jobs</p>
        <p>designers </p>
        <p>freelance designers for hire</p>
        <p><b>design assets</b></p>
        <p>dribble marketplace</p>
        <p>creative market</p>
        <p>fontspring</p>
        <p>font squirre!</p>

      </div>
      <div className="stack">

        <p><b>design resources</b></p>
        <p>freelancing</p>
        <p>design hiring</p>
        <p>design portfolio</p>
        <p>podcast</p>
        <p>playoffs</p>
      </div>
      </div>
    </div>
  )
}

export default Footer