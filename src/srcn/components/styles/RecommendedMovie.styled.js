import styled from "styled-components";

export const StyledRecommendedMovie = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin: auto;
  width: 100%;
  padding: 1rem;

  height: 18rem;
  position: relative;

  .loading {
    filter: blur(10px);
    &--completed {
      filter: blur(0px);
      transition: 0.3s filter;
    }
  }
`;

export const StyledRecommendedText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0 1rem 1rem;
  z-index: 99;
  gap: 0.5rem;

  h1 {
    font-size: 1.2em;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.reversedClr};
  }
  h3 {
    font-size: 2em;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.constLight};
    text-shadow: 0px 0px 15px ${({ theme }) => theme.colors.dark};
  }
`;

export const StyledRecommendedButton = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    outline: none;
    background-color: ${({ theme }) => theme.colors.main};
    padding: 1rem;
    border: none;
    color: ${({ theme }) => theme.colors.constLight};
    font-size: 1em;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      filter: brightness(110%);
    }
  }
`;
export const StyledRecommendedImage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 60%;

  img {
    // border: solid 20px rgba(#000, .2);
    width: 100%;
    height: 100%;
    // box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);
    object-fit: cover;
    z-index: 1;
    // background: 
    //             border-box
    //             padding-box
  }

  &:before {
    position: absolute;
    content: "";
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.light},
      transparent 20% 80%,
      ${({ theme }) => theme.colors.light}
    );
    z-index: 3;

    width: 100%;
    height: 100%;
  }
`;
