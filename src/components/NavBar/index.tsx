import React from 'react'
import { Image, Li, Logo, Nav, Ul } from './style'
import Img from "../../assets/logo.png"
const NavBar = () => {
  return (
    <Nav>
      <Logo>
            <Image src={Img}></Image>
      </Logo>
      <Ul>
        <Li>Início</Li>
        <Li>Sobre</Li>
        <Li>Aventura</Li>
        <Li>Contato</Li>
      </Ul>
    </Nav>
 
  )
}

export default NavBar