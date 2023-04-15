import styled, { keyframes } from "styled-components";

export const movieListAni1 = keyframes`
0% {
    transform: translateY(0);
    // z-index: 99;
}
20% {
    transform: translateY(5%)
}
60% {
    transform: translateY(-3%)
}
80% {
    transform: translateY(1%)
}
100% {
    transform: translateY(0%);
    // z-index:99;
}
`;

export const movieListAni2 = keyframes`
  25% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  75% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`;
export const movieListAni3 = keyframes`
to {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
`;

export const movieListAni4 = keyframes`
16.65% {
  -webkit-transform: translateY(16px);
  transform: translateY(16px);
}
33.3% {
  -webkit-transform: translateY(-12px);
  transform: translateY(-12px);
}
49.95% {
  -webkit-transform: translateY(8px);
  transform: translateY(8px);
}
66.6% {
  -webkit-transform: translateY(-4px);
  transform: translateY(-4px);
}
83.25% {
  -webkit-transform: translateY(2px);
  transform: translateY(2px);
}
100% {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
`;

export const movieListAni = keyframes`
16.65% {
  -webkit-transform: translate(8px, 8px);
  transform: translate(8px, 8px);
}
33.3% {
  -webkit-transform: translate(-6px, -6px);
  transform: translate(-6px, -6px);
}
49.95% {
  -webkit-transform: translate(4px, 4px);
  transform: translate(4px, 4px);
}
66.6% {
  -webkit-transform: translate(-2px, -2px);
  transform: translate(-2px, -2px);
}
83.25% {
  -webkit-transform: translate(1px, 1px);
  transform: translate(1px, 1px);
}
100% {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
`;
export const movieListAni6 = keyframes`

`;
export const movieListAni7 = keyframes`

`;
export const movieListAni8 = keyframes`

`;
export const movieListAni9 = keyframes`

`;
export const movieListAni10 = keyframes`

`;
export const movieListAni11 = keyframes`

`;
export const movieListAni12 = keyframes`

`;
export const movieListAni13 = keyframes`

`;


export const StyledListMain = styled.article`
position: relative;
// display: flex;
// align-items: center;
// justify-content: center;
`;
  
  
export const StyledListByImage = styled.article`
  display: flex;
  flex: 0 0 20%;
  
  padding-top: 1.5%;
  padding-bottom: 30%;
  justify-content: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  // box-shadow:  inset 0px 0px 10px 8px white;
  background-color: ${({ theme }) => theme.colors.Clr};
  transition: 0.3s filter;
  // box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);
  img {
    border-radius: 15px;
    position: absolute;
    width: 90%;
    height: 90%;
    object-fit: cover;
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.colors.reversedClr};
    &:hover {
      filter: brightness(120%);
      animation: 0.3s ${movieListAni};
    }
  }

  .loading {
    filter: blur(10px);
    &--completed {
      filter: blur(0px);
      transition: 0.3s filter;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex: 0 0 25%;
    padding-bottom: 45%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 0 0 50%;
    padding-bottom: 70%;
  }
`;

export const StyledListByText = styled.article`
  display: flex;
  flex: 1 1 100%;
  height: 8rem;
  align-items: center;
  outline: 1px solid ${({ theme }) => theme.colors.reversedClr};
  background-color: ${({ theme }) => theme.colors.light};
  z-index: 8;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    z-index: 9;
    animation: 0.3s ${movieListAni1};

  }

  img {
    height: 100%;
    width: 84px;
  }
`;

export const StyledListByTextRanking = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  height: 100%;
  display: flex;
  width: 2rem;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.constLight};
  text-shadow: 1px 1px 1px black;
  min-width: 40px;
`;

export const StyledListByTextInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  h4 {
    flex: 1 1 100%;
    color: ${({ theme }) => theme.colors.reversedClr};
  }

  p {
    color: ${({ theme }) => theme.colors.reversedClr};
  }

  span {
    color: ${({ theme }) => theme.colors.main};
    font-weight: bold;
  }
`;
