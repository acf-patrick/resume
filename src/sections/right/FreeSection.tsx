import styled from "styled-components";
import Title from "./Title";
import Markdown from "react-markdown";

type FreeSectionProps = {
  title: string;
  body: string;
};

const StyledFreeSection = styled.section`
  margin-bottom: 2rem;
  text-align: justify;

  ul {
    margin: unset;
    padding: 0 2rem;
  }

  a {
    color: black;
    opacity: 0.75;
  }
`;

export default function FreeSection({ title, body }: FreeSectionProps) {
  return (
    <StyledFreeSection>
      <Title>{title}</Title>
      <Markdown>{body}</Markdown>
    </StyledFreeSection>
  );
}
