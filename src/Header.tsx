import { useContext } from "react";
import { FaHome, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import styled from "styled-components";
import data from "./data.json";
import LangContext, { Language } from "./language.context";

const StyledHeader = styled.header`
  padding: 3rem 3rem 2rem;

  @media (max-width: ${({ theme }) => theme.screen.m}) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.25rem;
    }

    .picture {
      padding: unset !important;
    }
  }

  .inner {
    background: ${(props) => props.theme.colors.tertiary};
    position: relative;
    z-index: 1;
    border: 1rem solid white;
    padding: 1.5rem 1.25rem 1rem;
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
  }

  h1,
  h2 {
    margin: unset;
  }

  h2 {
    font-weight: normal;
  }

  ul {
    list-style: none;
    padding: unset;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & > :last-child {
      font-size: 0.95rem;
      opacity: 0.8;
    }
  }

  .infos {
    color: white;
    padding: 0 1rem;
  }

  .name {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  .role {
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }

  .picture {
    padding-left: 2rem;
    padding-right: 3rem;

    div {
      width: 160px;
      aspect-ratio: 1;
      background-image: url("/picture.jpg");
      background-size: cover;
      border-radius: 10rem;
      border: 5px solid white;
    }
  }
`;

export default function Header() {
  const { lang: language } = useContext(LangContext);
  const datas = language === Language.EN ? data.en : data.fr;

  return (
    <StyledHeader>
      <div className="inner">
        <div className="picture">
          <div></div>
        </div>
        <div className="infos">
          <h1 className="name">{datas.name}</h1>
          <h2 className="role">{datas.role}</h2>
          <ul>
            <li>
              <IoMdMail />
              <a href={`mailto:${datas.mail}`}>{datas.mail}</a>
            </li>
            <li>
              <FaPhone />
              <span>{datas.phone}</span>
            </li>
            <li>
              <FaHome />
              <span>{datas.address}</span>
            </li>
            <li>
              <TbWorld />
              <a href={`https://${datas.website}`}>{datas.website}</a>
            </li>
            <li>
              <FaLinkedin />
              <a href={`https://${datas.linkedin}`}>{datas.linkedin}</a>
            </li>
            <li>
              <FaGithub />
              <a href={`https://${datas.github}`}>{datas.github}</a>
            </li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  );
}
