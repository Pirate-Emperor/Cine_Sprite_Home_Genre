import styled from "styled-components";

export const StyledContainer = styled.div `
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  margin: auto;
`;