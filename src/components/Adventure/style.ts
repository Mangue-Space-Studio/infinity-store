import styled from "styled-components";

export const AdventureDiv = styled.div`
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 50%, #000000 100%),
    url("src/assets/adventure-1.png");
  width: 100%;
  height: 100vh;
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  bottom: 260px;
  opacity: 0.9;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    text-align: center;
    bottom: 0;
    width: auto;
  }
`;

export const SubtitleAdventure = styled.h4`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
`;

export const Card = styled.div`
  width: 352px;
  height: 352px;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 50%, #000000 100%);
  margin: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    border: 2px solid #fff;
  }

  @media (max-width: 768px) {
    width: 100%; /* Make the card occupy 100% of the width on smaller screens */
    height: auto; /* Allow the height to adjust automatically */
    margin: 1rem;
  }
`;

export const Icon = styled.img``;

export const SubtitleCard = styled.h2`
  color: #fff;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
`;

export const TextCard = styled.p`
  color: #fff;
  text-align: center;
  margin: 1rem;
  font-size: 0.9rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Adjust font size for smaller screens */
  }
`;
