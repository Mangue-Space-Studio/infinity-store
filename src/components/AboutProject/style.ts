import styled from "styled-components";

export const About = styled.div`
  width: 100%;
  margin: 0;
  height: 100vh;
  position: relative;
  bottom: 220px;
  background-image: url("src/assets/fundo-universo.png");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    text-align: center;
    bottom: 0;
  }
`;

export const Project = styled.div`
  background-color: #241c1c;
  width: 100%;
  max-width: 968px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const LittleVideo = styled.video`
  width: 480px;
  height: 480px;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const TextAbout = styled.p`
  color: #fff;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ProjectTitle = styled.h2`
  color: #fff;
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
