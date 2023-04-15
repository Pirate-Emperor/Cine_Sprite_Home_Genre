import styled from "styled-components";

export const StyledInfo = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 60rem;
  width: 100%;
  margin: auto;
  padding: 1rem 2rem;
`;

export const StyledInfoSection = styled.section `
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;
  border-top: 1px dashed ${({ theme }) => theme.colors.reversedClr};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.reversedClr};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const StyledInfoHeader = styled.section `
  display: flex;
  margin: auto;
  width: 100%;

  h2 {
    color: ${({ theme }) => theme.colors.reversedClr};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
  }
`;

export const StyledInfoMain = styled.section `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  p,
  ul {
    width: 100%;
    line-height: 1.5em;
    margin: auto;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.constLight};
  }

  ul {
    list-style-type: circle;
    gap: 0.5rem;
  }
`;

export const StyledInfoImage = styled.div `
  display: flex;
  width: 100%;
  gap: 0.5rem;
  justify-content: center;
  img {
    width: 4rem;
  }
`;