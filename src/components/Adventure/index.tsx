import React from 'react'
import { AdventureDiv, Card, Cards, Icon, SubtitleAdventure, SubtitleCard, TextCard } from './style'
import { ProjectTitle } from '../AboutProject/style'
import image from "../../assets/image.png"
import text from "../../assets/file-text.png"
import youtube from "../../assets/youtube.png"
const Adventure = () => {
  return (
   <>
     <AdventureDiv id="adventure">
      <ProjectTitle>
         Adventure
      </ProjectTitle>
      <SubtitleAdventure>See the most experience story is hold</SubtitleAdventure>
      <Cards>
      <Card>
         <Icon src={image}></Icon>
         <SubtitleCard>History</SubtitleCard>
         <TextCard> Nós fornecemos uma ampla variedade de imagens que ilustram as atividades e a estrutura do Centro de Informática da UFPE</TextCard>
      </Card>
      <Card>
      <Icon src={text}></Icon>
      <SubtitleCard>Character</SubtitleCard>
      <TextCard> Nossos arquivos de texto fornecem informações e conteúdo essenciais relacionados ao Centro de Informática da UFPE.</TextCard>
      </Card>
      <Card>
      <Icon src={youtube}></Icon>
      <SubtitleCard>Knowleage</SubtitleCard>
      <TextCard>Com nossos vídeos, você pode ter uma experiência imersiva ficando por dentro de tudo que acontece no Centro de Informática da UFPE.</TextCard>
      </Card>
     </Cards>
     </AdventureDiv>
     
   </>
   
  )
}

export default Adventure