import React from "react";
import { RightNavStyle } from './styles'
import { Home } from '../../Pages/Home'



const RightNav = () => {
  return (
    <RightNavStyle>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </RightNavStyle>
  )
}

export default RightNav