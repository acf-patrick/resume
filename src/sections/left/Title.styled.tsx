import styled from "styled-components";

const StyledTitle = styled.h1`
  margin: unset;
  margin-bottom: 0.125rem;
  color: ${({ theme }) => theme.colors.quaternary};
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1.25rem;
  letter-spacing: 0.125rem;
`;

export default StyledTitle;
