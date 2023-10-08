import styled from "styled-components";

export const FooterPage = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 150px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically for smaller screens */
    height: auto; /* Allow height to adjust automatically */
  }
`;

export const InfoFooter = styled.p`
  color: #fff;
`;

export const ImgIcon = styled.img`
  cursor: pointer;
`;

export const TextFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center; /* Center align text for smaller screens */
  }
`;

export const ContactFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;

  @media (max-width: 768px) {
    width: 100%; /* Make it occupy 100% of the width on smaller screens */
    margin-top: 1rem; /* Add some spacing at the top for smaller screens */
  }
`;
