import styled from "styled-components";
import { StyledListByImage } from "./MovieList.styled";

export const StyledPage = styled.section`
  display: flex;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1 1 60%;
  min-height: 180vh;

  > span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.light};
    border-bottom-left-radius: 1.5rem;

    &:after {
      width: 2rem;
      height: 2rem;
      top: 0;
      left: 0;
      content: "";
      background-color: ${({ theme }) => theme.colors.dark};
      position: absolute;
      z-index: -1;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    > span {
      display: none;
    }
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledSectionSearch = styled(StyledSection)`
  min-height: 40rem;
`;

export const StyledRecommended = styled.header`
  width: 100%;
  min-height: 18rem;
`;

export const StyledSectionHeader = styled(StyledSection)`
  display: flex;
  gap: 1rem;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.constLight};
  flex-direction: column;
  position: relative;

  span {
    position: absolute;
    left: 0;
    top: 100%;
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.light};
    border-top-left-radius: 1.5rem;

    &:after {
      width: 2rem;
      height: 2rem;
      top: 0;
      left: 0;
      content: "";
      background-color: ${({ theme }) => theme.colors.dark};
      position: absolute;
      z-index: -1;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    span {
      display: none;
    }
  }
`;

export const StyledFeature = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.constLight};
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    height: 2rem;
    width: auto;
    border: 1px solid white;

    &:hover:not(.isActived) {
      color: ${({ theme }) => theme.colors.main};
    }
  }

  .isActived {
    color: ${({ theme }) => theme.colors.main};
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    gap: 0.5rem;

    h3 {
      flex: 1 1 100%;
    }
  }
`;

export const StyledPreventAutoFit = styled.div`
  height: auto;
  flex: 1 1 10%;
`;

export const StyledYearStyle = styled.section`
  display: flex;
  align-items: center;
  gap: 0 !important;

  h3 {
    padding-right: 1em;
  }

  input {
    text-align: center;
    padding: 0 0.5rem;
    width: 4rem;
    height: 100%;
    outline: none;
    color: black !important;
    border: 4px solid ${({ theme }) => theme.colors.main};
  }

  > div {
    background-color: ${({ theme }) => theme.colors.main};
    height: 100%;
    padding: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.dark};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h3 {
      padding-right: 0.5em;
    }
  }
`;

export const StyledSearchDescription = styled.article`
  width: 100%;
  z-index: 3;
  padding: 2rem;
`;

export const StyledSearchDescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.constLight};
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 1em;
  width: 100%;

  h2,
  span {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const StyledContinueBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
`;

export const StyledContinueBtn = styled.button`
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border: none;
  cursor: pointer;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.Clr};
  color: ${({ theme }) => theme.colors.reversedClr};
  opacity: 0;
  pointer-events: none;
  font-weight: bolder;

  &:hover {
    outline: 1px solid ${({ theme }) => theme.colors.reversedClr};
  }

  &.visible {
    opacity: 1;
    pointer-events: all;
  }
`;

export const StyledQuryValue = styled.header`
  flex: 1 1 100%;
  display: flex;
  margin: auto;
  margin: 2rem 0;
  gap: 0.5em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  p,
  h3 {
    color: ${({ theme }) => theme.colors.reversedClr};
  }
`;
