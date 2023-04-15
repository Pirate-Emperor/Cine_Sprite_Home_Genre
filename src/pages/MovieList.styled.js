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

  
  
export const StyledListByImage = styled.article`
    backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) 
  display: flex;
  flex: 0 0 20%;
  transition: 0.3s filter;
    &:hover {
        transition: all .5s cubic-bezier(.8,.5,.2,1.4);
      filter: brightness(120%);
      animation: 0.3s ${movieListAni};
    }
  }
`;

export const StyledList = styled.article`
.card{
    flex: 1;
    flex-basis: 300px;
    flex-grow: 0;
    max-width: 100%;
    background: rgb(8,145,178);
    border: 2px solid rgb(8,145,178);
    box-shadow: 0px 4px 7px rgba(0,0,0,.5);
    cursor: pointer;
    transition: all .5s cubic-bezier(.8,.5,.2,1.4);
    overflow: hidden;
    position: relative;
}
.card img{
    width: 100%;
    height:100%;
    transition: all .5s cubic-bezier(.8,.5,.2,1.4);
}
.descriptions{
    position: absolute;
    top:0px;
    left:0px;
    background-color: rgba(8,145,178,.7);
    width:100%;
    height:100%;
    transition: all .7s ease-in-out;
    padding: 20px;
    box-sizing: border-box;
    clip-path: circle(0% at 100% 100%);
}
.card:hover .descriptions{
    left:0px;
    transition: all .7s ease-in-out;
    clip-path: circle(75%);
}
.card:hover{
    transition: all .5s cubic-bezier(.8,.5,.2,1.4);
    box-shadow: 0px 2px 3px rgba(0,0,0,.3);
    transform: scale(.97);
}
.card:hover img{
    transition: all .5s cubic-bezier(.8,.5,.2,1.4);
    transform: scale(1.6) rotate(20deg);
    filter: blur(3px);
}
.card h1{
    color: #ff3838;
    letter-spacing: 1px;
    margin: 0px;
}
.card p{

}
.card button{
    width: fit-content;
    height: 40px;
    cursor: pointer;
    border-style: none;
    background-color: rgb(8,145,190);
    color:#fff;
    font-size: 15px;
    outline: none;
    box-shadow: 0px 2px 3px rgba(0,0,0,.4);
    transition: all .5s ease-in-out;
}
.card button:hover{
    background-color: rgb(8,145,178);
    transform: scale(.95) translateX(-5px);
    transition: all .5s ease-in-out;
}
`;
