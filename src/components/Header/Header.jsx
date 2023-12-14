import * as C from "./styled.js";

import linkedinLogo from "../../assets/logo-linkedin.svg"
import githubLogo from "../../assets/logo-github.svg"
import telegramLogo from "../../assets/logo-telegram.svg"
const Header = () => {
  return (
    <C.Header>
      <C.Container>
        <C.Title>To-Do List</C.Title>
        <C.SocialMedia>
          <C.List>
            <C.Link href="https://linkedin.com" target="blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="" /></C.Link>
          </C.List>
          <C.List>
            <C.Link href="https://github.com" target="blank" rel="noopener noreferrer"><img src={githubLogo} alt="" /></C.Link>
          </C.List>
          <C.List>
            <C.Link href="https://t.me" target="blank" rel="noopener noreferrer"><img src={telegramLogo} alt="" /></C.Link>
          </C.List>
        </C.SocialMedia>
      </C.Container>
    </C.Header>
  );
};

export default Header;
