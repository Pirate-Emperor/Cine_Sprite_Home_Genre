

import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.constLight};

  p {
    margin: auto;
    max-width: 90rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h3>Cine Sprite</h3>
      <p>
        GO TO HELL
      </p>
      <p>© COPYRIGHT CINE SPRITE</p>
    </StyledFooter>
  );
};

export default Footer;
