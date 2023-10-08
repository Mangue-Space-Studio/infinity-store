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
`;

export const gridImage = styled.img`
  width: 350px;
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
