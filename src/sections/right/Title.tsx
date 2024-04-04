import { ReactNode } from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin: unset;
  margin-bottom: 1rem;
  display: flex;

  span {
    color: white;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 1.25rem;
    letter-spacing: 0.125rem;
    padding: 0 0.5rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export default function Title({ children }: { children: ReactNode }) {
  return (
    <StyledTitle>
      <span>{children}</span>
    </StyledTitle>
  );
}
