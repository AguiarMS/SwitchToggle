import React from "react";
import RightNav from "../RightNav";
import {ContainerStyles} from './styles'

const NavBar = () => {
  return (
    <ContainerStyles>
        <div className="logo">
          Portifolio
        </div>
        <RightNav />
    </ContainerStyles>

  )
}
export default NavBar