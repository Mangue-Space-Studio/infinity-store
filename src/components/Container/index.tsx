import { Title, Video, VideoGif } from './style';
import saturno from "../../assets/saturno.mp4"
import NavBar from '../NavBar';
const Container = () => {
    return (
        <> 
          <NavBar/>
         <VideoGif autoPlay muted loop >
            <source src={saturno} type="video/mp4" />
         </VideoGif>
         <Title>
            
         </Title>
        </>
    )
}

export default Container;
