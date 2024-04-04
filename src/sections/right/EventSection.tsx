import { useContext } from "react";
import Title from "./Title";
import LangContext, { Language } from "../../language.context";
import styled from "styled-components";
import Markdown from "react-markdown";

type EventSectionProps = {
  title: string;
  events: {
    title: string;
    start: string;
    end?: string;
    location: string;
    description?: string;
  }[];
};

const StyledContainer = styled.section`
  margin-bottom: 2rem;

  .header {
    display: flex;
    justify-content: space-between;

    & > div {
      max-width: 50%;
    }

    p:first-of-type {
      font-weight: bold;
    }

    p:last-of-type {
      color: ${({ theme }) => theme.colors.quaternary};
    }
  }

  .period {
    opacity: 0.65;
  }

  .body {
    margin-top: 0.25rem;
  }

  & > div {
    margin-bottom: 1rem;
  }

  p {
    margin: unset;
  }

  ul {
    margin: unset;
    padding: 0 2rem;
  }
`;

function transformPeriod(
  language: Language,
  start: string,
  end?: string
): string {
  switch (language) {
    case Language.EN:
      return `${start} - ${end ? end : "Present"}`;
    case Language.FR:
      return `de ${start} à ${end ? end : "ce jour"}`;
  }
}

export default function EventSection({ title, events }: EventSectionProps) {
  const { lang: language } = useContext(LangContext);

  return (
    <StyledContainer>
      <Title>{title}</Title>
      {events.map((event, i) => (
        <div key={i}>
          <div className="header" key={i}>
            <div>
              <p>{event.title}</p>
              <p>{event.location}</p>
            </div>
            <div className="period">{transformPeriod(language, event.start, event.end)}</div>
          </div>
          {event.description ? (
            <div className="body">
              <Markdown>{event.description}</Markdown>
            </div>
          ) : null}
        </div>
      ))}
    </StyledContainer>
  );
}
