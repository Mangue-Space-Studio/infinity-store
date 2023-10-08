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
        height: auto; /* Remova a altura fixa para telas menores */
        padding: 20px; /* Adicione um espaçamento para telas menores */
        text-align: center; /* Centralize o conteúdo para telas menores */
        bottom: 0; /* Remova o deslocamento vertical para telas menores */
    }
`;

export const Project = styled.div`
    background-color: #241C1C;
    width: 100%;
    max-width: 968px; /* Adicione um tamanho máximo para evitar que fique muito largo em telas grandes */
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
  
    @media (max-width: 768px) {
        flex-direction: column; /* Altere a direção da coluna para telas menores */
        padding: 10px; /* Reduza o espaçamento para telas menores */
    }
`;

export const LittleVideo = styled.video`
    width: 480px;
    height: 480px;
    padding: 1rem;
  
    @media (max-width: 768px) {
        width: 100%; /* Faça o vídeo ocupar 100% da largura em telas menores */
        height: auto; /* Permita que a altura seja ajustada automaticamente */
    }
`;

export const TextAbout = styled.p`
    color: #fff;
    font-size: 1rem;
  
    @media (max-width: 768px) {
        font-size: 0.9rem; /* Reduza o tamanho da fonte para telas menores */
    }
`;

export const ProjectTitle = styled.h2`
    color: #fff;
    font-size: 3rem;
  
    @media (max-width: 768px) {
        font-size: 2rem; /* Reduza o tamanho do título para telas menores */
    }
`;
