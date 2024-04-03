import { useContext } from "react";
import ListSection from "./ListSection";
import SkillSection from "./SkillSection";
import LangContext, { Language } from "../../language.context";
import json from "../../data.json";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding-left: 4rem;
  padding-right: 2rem;
`

export default function LeftSection() {
  const { lang } = useContext(LangContext);
  const datas = lang == Language.EN ? json.en : json.fr;

  return (
    <StyledContainer>
      <SkillSection
        skills={datas.skills.map((skill) => ({
          name: skill.name,
          level: skill.confidence * 100,
        }))}
        title={lang === Language.EN ? json.keys.skills.en : json.keys.skills.fr}
      />
      <SkillSection
        skills={datas.languages.map((skill) => ({
          name: skill.name,
          level: skill.confidence * 100,
        }))}
        title={
          lang === Language.EN ? json.keys.languages.en : json.keys.languages.fr
        }
      />
      <ListSection
        items={datas.hobbies}
        title={
          lang === Language.EN ? json.keys.hobbies.en : json.keys.hobbies.fr
        }
      />
      <ListSection
        items={datas.qualities}
        title={
          lang === Language.EN ? json.keys.qualities.en : json.keys.qualities.fr
        }
      />
    </StyledContainer>
  );
}
