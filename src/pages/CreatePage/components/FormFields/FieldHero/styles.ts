import styled from "styled-components";

export const divMainFieldHero = styled.div`
  width: 50rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3em 3em;
  grid-template-areas:
    ". ."
    ". .";
`;

export const gridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.active {
    width: 350px;
    border: 2px solid white; // Define a borda azul quando o item estiver ativo
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
    border-radius: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const gridImage = styled.img`
  width: 350px;
  margin: 0;
  border-radius: 20px;
`;

export const gridText = styled.p`
  color: var(--Gray-6, #f2f2f2);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-family: Poppins;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const gridContainerItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  
`;

export const background = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const mainText = styled.p`
  color: var(--Gray-6, #f2f2f2);
  font-family: Poppins;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 64px;
`;

export const containerFormFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("src/assets/e3b5dad6acaa641bfa3c71f86cf4c6c8.jpeg");
  background-size: cover;
  background-position: center;
`;