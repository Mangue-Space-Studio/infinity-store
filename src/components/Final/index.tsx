import React from 'react'
import { FinalDiv, SubtitleFinal, TitleFinal } from './style'
import { Btn } from '../Container/style'
import Footer from '../Footer'

const Final = () => {
  return (
    <>
     <FinalDiv id="contact">
        <TitleFinal>
            DO YOU LIKE IT?
        </TitleFinal>
        <SubtitleFinal>See how the most experience story is told</SubtitleFinal>
        
     </FinalDiv>
     <Btn>Start now</Btn>
     <Footer></Footer>
    </>
  )
}

export default Final