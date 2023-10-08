import React, { useState, useEffect } from 'react';
import { Image, Li, Logo, Nav, Ul } from './style';
import Img from '../../assets/logo.png';
import styled from 'styled-components';

// Define um tipo para StyledNavProps
type StyledNavProps = {
  backgroundColor: string;
};

const StyledNav = styled(Nav) <StyledNavProps>`
  background-color: ${(props) => props.backgroundColor};
`;

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('inicio');
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState<string>('transparent');
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleScroll = () => {
    setIsScrolling(true);
    console.log('window ', window.scrollY)
    setTimeout(() => {
      setIsScrolling(false);
    }, 100);
  }

  useEffect(() => {

    // Change header color when scrolling
    if (window.scrollY > 100) {

      console.log('estou escrolando')
      setHeaderBackgroundColor('#fff'); // Change to the desired color
    } else {
      setHeaderBackgroundColor('#161616');
    }

    console.log(isScrolling);


    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', () => console.log('estou me mexendo'));

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
          <Li className={activeItem === 'inicio' ? 'active' : ''}>Home</Li>
        </a>

        <a href="#sobre" onClick={() => scrollToSection('sobre')}>
          <Li className={activeItem === 'sobre' ? 'active' : ''}>Project</Li>
        </a>

        <a href="#adventure" onClick={() => scrollToSection('adventure')}>
          <Li className={activeItem === 'adventure' ? 'active' : ''}>Adventure</Li>
        </a>

        <a href="#contact" onClick={() => scrollToSection('contact')}>
          <Li className={activeItem === 'contact' ? 'active' : ''}>Contact</Li>
        </a>
      </Ul>
    </StyledNav>
  );
};

export default NavBar;
