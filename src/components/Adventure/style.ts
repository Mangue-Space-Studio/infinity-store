import styled from "styled-components";

export const AdventureDiv = styled.div`
     background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 50%, #000000 100%), url("src/assets/adventure-1.png");
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
    
 
`;

export const SubtitleAdventure = styled.h4`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 300;
     
`;

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

export const Card = styled.div`
    width: 352px;
    height: 352px;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 50%, #000000 100%);
    margin-left: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    &:hover{
        border: 2px solid #fff;
    }
`;

export const Icon = styled.img`
   
`;

export const SubtitleCard = styled.h2`
    color: #fff;
    font-weight: 800;
`;

export const TextCard = styled.p`
    color: #fff;
    text-align: center;
    margin: 1rem;
    font-size: .9rem;
    font-weight: 300;
`;