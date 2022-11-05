import { useEffect, useState } from "react";

import * as Styled from "./style";
import logo from "../../assets/images/logo.svg";
import openMenu from "../../assets/images/icon-hamburger.svg";
import closeMenu from "../../assets/images/icon-close.svg";

export default function Header() {
  const [maxWidth, setMaxWidth] = useState(null);
  const [handleMenu, setHandleMenu] = useState(false);

  useEffect(() => {
    setMaxWidth(window.screen.width);
  }, [maxWidth]);

  function showMenu() {
    setHandleMenu(p => !p);
  }

  return (
    <Styled.Container>
      <div className="center">
        <Styled.Header>
          <img src={logo} />

          {maxWidth > 600 ? (
            <Styled.NavigateBar>
              <a href="*"> Sobre </a>
              <a href="*"> carreiras </a>
              <a href="*"> Eventos </a>
              <a href="*"> Produtos </a>
              <a href="*"> Supporte </a>
            </Styled.NavigateBar>
          ) : (
            <Styled.ContainerMenu>
              <img src={openMenu} onClick={showMenu}/>
              {handleMenu && (
                <Styled.Menu>
                  <div>
                    <img src={logo} />
                    <img src={closeMenu} onClick={showMenu}/>
                  </div>

                  <Styled.NavigateBarMenu>
                    <a href="*"> Sobre </a>
                    <a href="*"> carreiras </a>
                    <a href="*"> Eventos </a>
                    <a href="*"> Produtos </a>
                    <a href="*"> Supporte </a>
                  </Styled.NavigateBarMenu>
                </Styled.Menu>
              )}
            </Styled.ContainerMenu>
          )}
        </Styled.Header>

        <Styled.ContainerMessage>
          <h1>experiências imersivas que proporcionam</h1>
        </Styled.ContainerMessage>
      </div>
    </Styled.Container>
  );
}
