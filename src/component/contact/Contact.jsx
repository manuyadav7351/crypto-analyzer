import React from 'react'
import "./contact.css"
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  return (
    <div className='contact' id='Contact'>
      <form action="">
        <div className='field'>
          <input className='input' type="text" placeholder='name'/>
          <input className='input' type="text" placeholder='message'/>
          <input className='input' type="email" placeholder='email'/>
        </div>
        <button>Submit</button>
      </form>

      <div className='footer'>
        <SocialIcon className='icon' url="www.instagram.com"/>
        <SocialIcon className='icon' url="www.linkedin.com"/>
        <SocialIcon className='icon' url="www.twitter.com"/>
        <SocialIcon className='icon' url="www.facebook.com"/>
      </div>
    </div>
  )
}

export default Contact