import { Btn, Section, Slide, SubTitle, Title, Video, VideoGif } from './style';
import nasa from "../../assets/nasa.mp4"
import NavBar from '../NavBar';
const Container = () => {
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
         <Btn>Start Now</Btn>
         </Section>
        </>
    )
}

export default Container;
