import styled from "styled-components";

export const StyledAbout = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 95%;
    padding: 0 2rem;
  }
`;

export const AboutDetails = styled.div``;

export const AboutText = styled.p`
  margin: 1rem 0;
  letter-spacing: 0.5px;
  color: var(--clr-light-secondary);
`;
