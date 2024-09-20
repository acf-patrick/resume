import styled from "styled-components";
import EventSection from "./EventSection";
import { useContext } from "react";
import LangContext, { Language } from "../../language.context";
import json from "../../data.json";
import FreeSection from "./FreeSection";

const StyledContainer = styled.div`
  padding-left: 2rem;
  padding-right: 4rem;
`;

export default function RightSection() {
  const { lang: language } = useContext(LangContext);
  const datas = language === Language.EN ? json.en : json.fr;

  return (
    <StyledContainer>
      <EventSection
        title={
          language === Language.EN
            ? json.keys.education.en
            : json.keys.education.fr
        }
        events={datas.education.map((education) => ({
          location: `${education.school}, ${education.city}`,
          start: education.start,
          end: education.end,
          title: education.degree,
        }))}
      />
      <EventSection
        title={
          language === Language.EN
            ? json.keys.employment.en
            : json.keys.employment.fr
        }
        events={datas.employment.map((employment) => ({
          location: `${employment.employer}, ${employment.city}`,
          start: employment.start,
          end: employment.end ? employment.end : undefined,
          title: employment.position,
          description: employment.description,
        })).reverse()}
      />
      <FreeSection
        title={
          language === Language.EN
            ? json.keys.personalProjects.en
            : json.keys.personalProjects.fr
        }
        body={datas.personalProjects
          .map((project) => `- ${project}`)
          .join("\n")}
      />
      <FreeSection
        title={
          language === Language.EN
            ? json.keys.achievements.en
            : json.keys.achievements.fr
        }
        body={datas.achievements.map((project) => `- ${project}`).join("\n")}
      />
      <FreeSection
        title={
          language === Language.EN
            ? json.keys.extracurricularActivities.en
            : json.keys.extracurricularActivities.fr
        }
        body={datas.extracurricularActivities
          .map((project) => `- ${project}`)
          .join("\n")}
      />
    </StyledContainer>
  );
}
