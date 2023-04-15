

import React from "react";
import logo from "../assets/main_logo.png";

import {
  StyledLoading,
  StyledLoadingContent,
  StyledLoadingCircle,
} from "./styles/Loading.styled";

const Loading = () => {
  return (
    <StyledLoading>
      <StyledLoadingContent>
        <img src={logo} alt="Cine_Sprite" />
        <StyledLoadingCircle />
        <StyledLoadingCircle />
        <StyledLoadingCircle />
      </StyledLoadingContent>
    </StyledLoading>
  );
};

export default Loading;
