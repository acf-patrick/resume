import styled from "styled-components";
import StyledTitle from "./Title.styled";

type ListSectionProps = {
  title: string;
  items: string[];
};

const StyledList = styled.div`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.tertiary};

  ul {
    padding: unset;
    list-style: none;
    margin: unset;
  }

  li {
    margin: 0.5rem 0;
    display: flex;
    gap: 0.75rem;
    align-items: baseline;

    .square {
      height: 0.75rem;
      aspect-ratio: 1;
      background-color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export default function ListSection({ title, items }: ListSectionProps) {
  return (
    <StyledList>
      <StyledTitle>{title}</StyledTitle>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <div className="square"></div>
            <div>{item}</div>
          </li>
        ))}
      </ul>
    </StyledList>
  );
}
