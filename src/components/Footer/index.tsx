import React from 'react'
import { ContactFooter, FooterPage, ImgIcon, InfoFooter, TextFooter } from './style'
import instagram from "../../assets/i.png"
import youtube from "../../assets/y.png"
import facebook from "../../assets/f.png"
const Footer = () => {
  return (
    <FooterPage>
        <TextFooter>
            <InfoFooter> ©MangueSpace <br></br> <br></br>Todos os direitos reservados</InfoFooter>
           
        </TextFooter>
        <ContactFooter>
            <ImgIcon src={instagram}/>
            <ImgIcon src={youtube}/>
            <ImgIcon src={facebook}/>
        </ContactFooter>
    </FooterPage>
  )
}

export default Footer