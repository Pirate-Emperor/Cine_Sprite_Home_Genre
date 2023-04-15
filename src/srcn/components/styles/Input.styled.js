import styled from "styled-components";

export const StyledInput = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  height: 2rem;
  width: 12em;
  align-items: center;
  justify-content: center;

  &.searchpage {
    input {
      left: 0%;
      transform: translateX(0%);
      width: 100%;
    }
    div {
      left: 100%;
      transform: translateX(-100%);
    }
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    &.searchpage {
      display: none;
    }
  }
`;

export const StyledInputCover = styled.div `
  width: 100%;
  height: 100%;
  position: relative;

  div {
    top: 0;
    left: 100%;
    transform: translateX(-100%);
    border-radius: 50%;
    width: 2rem;
    pointer-events: none;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.main};

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: black;
    z-index: 99;

    transition-property: left, transform;
    transition-duration: 0.2s;
    transition-delay: 0.2s;

    &.has-focus {
      pointer-events: auto;
      cursor: pointer;
    }

    &::after {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      content: "";
      border-radius: 50%;
      width: 90%;
      height: 90%;
      background-color: white;
      z-index: -1;
    }
  }

  input {
    padding: 0 0.5rem;
    display: flex;
    width: 2rem;
    height: 100%;
    position: absolute;
    left: 100%;
    transform: translateX(-100%);

    border-radius: 2rem;

    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.main};

    transition-property: width, padding;
    transition-duration: 0.2s;
    transition-delay: 0.2s;
    cursor: pointer;

    &:focus {
      width: 100%;
      cursor: text;
      padding-right: 2rem;
      transition-property: width, padding;
      transition-duration: 0.2s;
      transition-delay: 0s;

      ~ div {
        left: 100%;
        transform: translateX(-100%);
        transition-property: left, transform;
        transition-duration: 0.2s;
        transition-delay: 0s;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    input {
      width: 100%;
      transition-duration: 0s;
      transition-delay: 0s;

      ~ div {
        left: 100%;
        transform: translateX(-100%);
        transition-duration: 0s;
        transition-delay: 0s;
      }
    }
  }
`;

export const StyledInputList = styled.div `
  position: absolute;
  width: 100%;
  top: 120%;
  background-color: white;
  flex-direction: column;
  z-index: 999;
  gap: 0 !important;
  max-height: 10rem;
  overflow: auto;
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0s;
  transition-delay: 0s;

  &.has-focus {
    opacity: 1;
    transition-property: opacity;
    transition-duration: 0.1s;
    transition-delay: 0.15s;
  }

  p {
    font-size: 0.8em;
    padding: 0.2rem 0.2rem;
    cursor: pointer;
    display: flex;
    color: black !important;
    border: 3px solid ${({ theme }) => theme.colors.main};
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.main};
    border-top: 1.5px solid ${({ theme }) => theme.colors.main};

    &:nth-of-type(1) {
      border-top: none;
    }
    &:nth-last-of-type(1) {
      border-bottom: 3px solid ${({ theme }) => theme.colors.main};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.main};
    }
  }
`;