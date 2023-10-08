import { Btn, Section, Slide, SubTitle, Title, VideoGif } from './style';
import nasa from "../../assets/nasa.mp4"
import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';
const Container = () => {
    const navigation = useNavigate()
  const handleItemClick = () => {
    navigation('/infinityStory')
  };
    return (
        <> 
        <Section id="inicio" >
          <NavBar/>
         <VideoGif autoPlay muted loop >
            <source src={nasa} type="video/mp4" />
         </VideoGif>
         <Slide>
         <Title>
            Welcome to the Adventure
         </Title>
         <SubTitle>Enjoy with us, create the best story in the universe!</SubTitle>
         </Slide>
         <Btn onClick={handleItemClick}>Start Now</Btn>
         </Section>
        </>
    )
}

export default Container;
