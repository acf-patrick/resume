import styled from "styled-components";
import StyledTitle from "./Title.styled";

type SkillSectionProps = {
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
};

const StyledSkillSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const StyledSkill = styled.div<{ $level: number }>`
  color: ${({ theme }) => theme.colors.tertiary};

  .bar {
    height: 5px;
    margin-top: 0.25rem;
    background: white;

    &:before {
      display: block;
      content: "";
      height: 100%;
      background-color: ${({ theme }) => theme.colors.tertiary};
      width: ${({ $level }) => `${$level}%`};
    }
  }
`;

export default function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <StyledSkillSection>
      <StyledTitle>{title}</StyledTitle>
      {skills.map(({ name: skill, level }, i) => (
        <StyledSkill key={i} $level={level}>
          <span>{skill}</span>
          <div className="bar"></div>
        </StyledSkill>
      ))}
    </StyledSkillSection>
  );
}
