import styled from "styled-components";

export const StyledProject = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 95%;
    padding: 2rem 2rem 0 2rem;
  }
`;

export const ProjectsContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
`;

export const StyledProjectCard = styled.figure``;

export const ProjectCardImage = styled.figure`
  height: 15rem;
  width: 100%;
  background-color: #191919;
  padding: 0.75rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 22rem;
    padding: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 10rem;
    padding: 0.5rem;
  }
`;

export const ProjectDetails = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 0 0.25rem;
`;

export const ProjectName = styled.h2`
  font-family: var(--ff-sans-serif-secondary);
  font-weight: 800;
  font-size: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.85rem;
  }
`;

export const ProjectNumber = styled.span`
  font-family: var(--ff-serif-secondary);
`;

export const ProjectCategory = styled.h3`
  font-family: var(--ff-sans-serif-secondary);
  font-weight: 600;
  font-style: oblique;
  font-size: 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.85rem;
  }
`;
