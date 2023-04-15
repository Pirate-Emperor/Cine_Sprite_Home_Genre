import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    &::-webkit-scrollbar {
      width: .5rem;
    }
     
    &::-webkit-scrollbar-track {
        background-color:${({ theme }) => theme.colors.light};
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.dark};
    }
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.light};
    font-size: 1rem;
    min-width: ${({ theme }) => theme.minWidth};
    
    @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: .9rem;
    }    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: .8rem;
    }    
    
}


ul {    
    list-style-type: none;
}

a {
    color: black;
    text-decoration: none;
}
`;