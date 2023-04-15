import styled, { keyframes } from "styled-components";

export const StyledLoading = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const StyledLoadingContent = styled.div `
  width: 10rem;
  height: 10rem;
  position: relative;
  display: flex;
  border-radius: 50%;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
  }
`;

export const circleKeyFrames = keyframes `
0% {
    width: .5rem;
    border-radius: 50%;
    transform: translate(-50%,-50%) rotateZ(0deg) translate3d(0, -5rem, 0px);
}
50% {
    width: 1rem;
    border-radius: .5rem;
}
100% {
    width: .5rem;
    border-radius: 50%;
    transform:translate(-50%,-50%) rotateZ(360deg) translate3d(0, -5rem, 0px);
}
`;

export const StyledLoadingCircle = styled.span `
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0.5rem;
  height: 0.5rem;
  transform: translate(-50%, -50%) translate3d(0, -5rem, 0px);
  margin: auto;
  border-radius: 50%;
  background-color: black;
  animation: 1s ${circleKeyFrames} infinite;

  &:nth-of-type(1) {
    background-color: ${({ theme }) => theme.colors.main};
    z-index: 4;
  }

  &:nth-of-type(2) {
    animation-delay: 0.2s;
    background-color: ${({ theme }) => theme.colors.main};
    z-index: 3;
  }
  &:nth-of-type(3) {
    animation-delay: 0.4s;
    background-color: ${({ theme }) => theme.colors.main};
    z-index: 2;
  }
`;