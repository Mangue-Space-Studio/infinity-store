import React, { useState, useEffect } from 'react';
import { Image, Li, Logo, Nav, Ul } from './style';
import Img from '../../assets/logo.png';
import styled from 'styled-components';

// Define um tipo para StyledNavProps
type StyledNavProps = {
  backgroundColor: string;
};

const StyledNav = styled(Nav)<StyledNavProps>`
  background-color: ${(props) => props.backgroundColor};
`;

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('inicio');
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('transparent');
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 100);

      // Change header color when scrolling
      if (window.scrollY > 0) {
        setHeaderBackgroundColor('#yourColorHere'); // Change to the desired color
      } else {
        setHeaderBackgroundColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledNav backgroundColor={headerBackgroundColor}>
      <Logo>
        <Image src={Img}></Image>
      </Logo>
      <Ul>
        <a href="#inicio" onClick={() => scrollToSection('inicio')}>
          <Li className={activeItem === 'inicio' ? 'active' : ''}>Início</Li>
        </a>

        <a href="#sobre" onClick={() => scrollToSection('sobre')}>
          <Li className={activeItem === 'sobre' ? 'active' : ''}>Sobre</Li>
        </a>

        <a href="#adventure" onClick={() => scrollToSection('adventure')}>
          <Li className={activeItem === 'adventure' ? 'active' : ''}>Aventura</Li>
        </a>

        <a href="#contact" onClick={() => scrollToSection('contact')}>
          <Li className={activeItem === 'contact' ? 'active' : ''}>Contato</Li>
        </a>
      </Ul>
    </StyledNav>
  );
};

export default NavBar;
