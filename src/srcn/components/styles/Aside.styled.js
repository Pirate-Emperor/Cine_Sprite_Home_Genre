import styled from "styled-components";

export const StyledAside = styled.aside`
  flex: 1 1 20%;
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.constLight};
  }

  h4 {
    color: ${({ theme }) => theme.colors.main};
  }

  > span {
    width: 4rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.constLight};
    border-radius: 0.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    padding-left: 1rem;
  }

  li {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    padding: 1rem 0;
    color: ${({ theme }) => theme.colors.constLight};
    text-align: center;
    padding-right: 1rem;
    width: 100%;
    cursor: pointer;
    position: relative;

    :hover {
      color: ${({ theme }) => theme.colors.main};
    }
  }

  .genre-actived {
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.main};

    &:before,
    &:after {
      position: absolute;
      content: "";
      right: 0;
      width: 6rem;
      height: 6rem;
      background-color: ${({ theme }) => theme.colors.dark};
      z-index: 2;
      pointer-events: none;
    }

    &:before {
      bottom: 100%;
      border-bottom-right-radius: 90%;
      z-index: 2;
    }

    &:after {
      top: 100%;
      border-top-right-radius: 90%;
      z-index: 2;
    }

    span {
      position: absolute;
      right: 0;
      width: 6rem;
      height: 6rem;
      background-color: ${({ theme }) => theme.colors.light};
      border-radius: 0;
      z-index: 1;
      pointer-events: none;

      &:nth-of-type(1) {
        bottom: 100%;
      }

      &:nth-of-type(2) {
        top: 100%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex: 0;
    height: auto;
    top: 0;
    padding: 0 1em;
    align-items: flex-start;
    gap: 0.5rem;

    h3 {
      &.searchpage {
        display: none;
      }
    }

    h4 {
      display: none;
    }

    ul {
      flex-direction: row;
      flex-wrap: wrap;
      padding: 0;
    }

    li {
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      width: auto;
      border: 1px solid white;
    }

    span {
      display: none;
    }

    .genre-actived {
      background-color: ${({ theme }) => theme.colors.dark};
      &::after,
      &:before {
        display: none;
      }
    }
  }
`;

export const StyledAsideLogo = styled.div`
  height: 160px;
  img {
    width: 10em;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
    img {
      display: none;
    }
  }
`;

export const StyledAsideHistory = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  padding-bottom: 0.5em;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    justify-content: left;
  }
`;

export const StyledAsideHistoryText = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 0.5rem;
  position: relative;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.constLight};

  p {
    text-align: center;
    flex: 1 1 100%;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.constLight};
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    padding: 0.5rem;
    border-right: 1px solid ${({ theme }) => theme.colors.constLight};
    &:hover {
      color: ${({ theme }) => theme.colors.main};
    }
  }

  div {
    width: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;

    color: ${({ theme }) => theme.colors.constLight};
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.main};
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    max-width: 100%;
  }
`;
