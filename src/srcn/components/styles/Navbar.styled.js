import styled from "styled-components";

export const StyledNavbar = styled.nav `
  display: flex;
  padding: 1rem 2rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.dark};

  img {
    height: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0.5rem;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledNavbarLink = styled.ul `
  display: flex;
  gap: 1rem;
  align-items: center;
  a {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.constLight};
    &.isActived {
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const StyledNavbarFeature = styled.div `
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: auto;
  }
`;

export const StyledDarkMode = styled.button `
  /* background-color: white; */
  position: relative;
  display: flex;
  width: 4rem;
  height: 2.2rem;
  border-radius: 2rem;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.3s;
  outline: none;
  border: none;

  span {
    position: absolute;
    content: "";
    top: 50%;
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.constLight};
    transition-property: left, transform;
    transition-duration: 0.3s;
  }

  p {
    position: absolute;
    color: ${({ theme }) => theme.colors.constLight};
    font-size: 1rem;
    top: 50%;
    width: 1rem;
    height: 1rem;

    &:nth-of-type(1) {
      left: 10%;
      transform: translate(10%, -50%);
    }

    &:nth-of-type(2) {
      left: 90%;
      transform: translate(-90%, -50%);
    }
  }

  &.lightMode {
    background-color: #f2824e;

    span {
      left: 90%;
      transform: translate(-90%, -50%);
    }

    p:nth-of-type(1) {
      display: flex;
    }

    p:nth-of-type(2) {
      display: none;
    }
  }

  &.darkMode {
    background-color: #24379e;

    span {
      left: 10%;
      transform: translate(-10%, -50%);
    }

    p:nth-of-type(1) {
      display: none;
    }

    p:nth-of-type(2) {
      display: flex;
    }
  }
`;