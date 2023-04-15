import styled from "styled-components";

export const StyledContent = styled.section `
  display: flex;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  max-width: 500px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.light};
  z-index: 999;
  box-shadow: 0px 15px 15px 5px black;
  flex-direction: column;

  h2,
  h3,
  p {
    color: ${({ theme }) => theme.colors.reversedClr};
    line-height: 1.5em;
  }
  a {
    color: #7db4f0;
    text-decoration: underline;
  }
  span {
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.main};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
  }
`;

export const StyledContentHeader = styled.header `
  .loading {
    filter: blur(10px);
    &--completed {
      filter: blur(0px);
      transition: 0.3s filter;
    }
  }

  h2 {
    padding: 1rem;
  }
`;

export const StyledContentHeaderImage = styled.div `
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  height: 300px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    position: relative;
  }

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: -5px;
    right: 0;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.colors.light},
      transparent 20%
    );
  }
`;

export const StyledContentLine = styled.span `
  display: block;
  width: 94%;
  height: 0.3rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.main};
  margin: auto;
`;

export const StyledContentBtn = styled.div `
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.constLight};
  background-color: ${({ theme }) => theme.colors.constDark};
  color: ${({ theme }) => theme.colors.constLight};
  text-shadow: 1px 0px 1px black;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  border-radius: 0.3rem;
  cursor: pointer;
  z-index: 99;
`;

export const StyledContentMain = styled.main `
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledContentText = styled.section `
  display: flex;
  flex-direction: column;
`;

export const StyledContentPoster = styled.section `
  width: 100%;
  h3,
  p {
    text-align: center;
  }
  img {
    width: 100%;
  }
`;