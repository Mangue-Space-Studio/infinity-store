import styled from "styled-components";

export const FinalDiv = styled.div`
  background-image: url("src/assets/ceu-noturno.avif");
  width: 100%;
  height: 100vh;
  position: relative;
  bottom: 260px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    padding: 0px;
    text-align: center;
    bottom: 0;
  }
`;

export const TitleFinal = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubtitleFinal = styled.p`
  color: #fff;
  font-size: 1.3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
