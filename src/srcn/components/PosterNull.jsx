

import React from "react";
import styled from "styled-components";
import logo from "../assets/main_logo.png";
import {movieListAni} from "./styles/MovieList.styled.js";
const StyledPosterNull = styled.div`
  position: absolute;
  left: 5%;
  top: 5%;
  display: flex;
  flex: 0 0 20%;


  border-radius: 15px;
  width: 90%;
  height: 90%;
  object-fit: cover;
  box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.colors.reversedClr};
  
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.dark} !important;

  h3 {
    color: ${({ theme }) => theme.colors.constLight} !important;
    text-align: center;
  }
  &:hover {
    filter: brightness(120%);
    animation: 0.3s ${movieListAni};
  }
  img {
    position: relative ;
    width: 5rem ;
    height: 5rem ;
    &:hover {
      filter: brightness(120%);

    }
  }
  
`;

const PosterNull = ({ title }) => {
  return (
    <StyledPosterNull>
      <h3>{title}</h3>
      <img src={logo} alt="Cine_Sprite" />
    </StyledPosterNull>
  );
};

export default PosterNull;
