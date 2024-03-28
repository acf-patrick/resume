import styled from "styled-components";
import { IoMdMail } from "react-icons/io";

const StyledHeader = styled.header`
  position: relative;
  padding: 5rem 4rem 4rem;

  &:before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${(props) => props.theme.sizes.sidebar};
    background: ${(props) => props.theme.colors.secondary};
  }

  .inner {
    background: blue;
    position: relative;
    z-index: 1;
    border: 1.5rem solid white;
    padding: 1rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="inner">
        <div className="picture"></div>
        <div className="infos">
          <h1>tojoniaina patrick miharisoa</h1>
          <h2>Sotfware Developer</h2>
          <ul>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  );
}
