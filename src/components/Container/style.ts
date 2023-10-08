import styled from "styled-components";

export const Video = styled.div`
  width: 100%;
  margin: 0;
`;

export const VideoGif = styled.video`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-family: sans-serif;
  color: #fff;
  font-size: 4rem;
  margin: 0;
  text-align: center;
  padding: 0;
  
  @media (max-width: 768px) {
    font-size: 2rem; /* Reduz o tamanho do título para telas menores */
  }
`;

export const SubTitle = styled.h4`
  font-family: sans-serif;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem; /* Reduz o tamanho do subtítulo para telas menores */
  }
`;

export const Btn = styled.button`
  font-family: sans-serif;
  color: #fff;
  font-size: 1.2rem;
  background-color: transparent;
  padding: 0.6rem 2rem;
  border: 1px solid #fff;
  border-radius: 7px;
  cursor: pointer;
  text-align: center;
  position: relative;
  bottom: 500px;
  left: 690px;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 0 10px 0 #F5DEB3 inset, 0 0 10px 4px #F5DEB3;
    
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Reduz o tamanho do botão para telas menores */
    bottom: 0; /* Remove o deslocamento vertical para telas menores */ /* Remove o deslocamento horizontal para telas menores */
    display: flex;
    justify-content: center;
    align-items: center;
    left: 130px;
  }
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  bottom: 600px;

  @media (max-width: 768px) {
    bottom: 0; /* Remove o deslocamento vertical para telas menores */
  }
`;

export const Section = styled.section``;
