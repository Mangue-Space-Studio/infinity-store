import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 80px;
    background-color: transparent;
    z-index: 3000;
    border-bottom: 1px solid #fff;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 768px) { /* Quando a largura da tela for menor ou igual a 768px */
        height: 60px; /* Reduz a altura da barra de navegação */
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 1rem;
    
    @media (max-width: 768px) {
        margin: auto; /* Reduz a margem para telas menores */
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

export const Ul = styled.ul`
    display: flex;
    width: 30%;
    
    @media (max-width: 768px) {
        display: none; /* Oculta o menu de navegação para telas menores */
    }
`;

export const Li = styled.li`
    padding-left: 2rem;
    list-style: none;
    color: #fff;
    cursor: pointer;
    font-family: sans-serif;

    @media (max-width: 768px) {
        padding-left: 1rem; 
         /* Reduz o espaçamento para telas menores */
    }
`;
