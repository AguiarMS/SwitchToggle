import React from "react";
import { Route, Link} from 'react-router-dom'
import { RightNavStyle } from './styles'


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