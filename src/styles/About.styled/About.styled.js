import styled from "styled-components";

export const StyledAbout = styled.section`
  width: 95%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const AboutSupTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const AboutTitle = styled.h2`
  font-family: var(--ff-sans-serif-secondary);
  text-transform: uppercase;
  font-weight: 800;
  border-bottom: 1px solid #ccc;
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

export const AboutDetails = styled.div``;

export const AboutText = styled.p`
  margin: 1rem 0;
  letter-spacing: 0.5px;
  color: #d3d3d3;
`;