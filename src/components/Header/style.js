import styled from "styled-components";

import bgDesktop from "../../assets/images/desktop/image-hero.jpg";
import bgMobile from "../../assets/images/mobile/image-hero.jpg";

export const Container = styled.div`
  /* width: 100%; */
  width: auto;
  height: 350px;

  background-image: url(${bgDesktop});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 600px) {
    background-image: url(${bgMobile});
    height: 100vh;
  }
`;

export const Header = styled.header`
  padding: 28px 0;
  display: flex;
  justify-content: space-between;
`;

export const NavigateBar = styled.nav`
  a {
    text-decoration: none;
    color: white;
    margin-left: 10px;

    font-size: 0.85em;
    font-family: "Alata", sans-serif;
    font-weight: 400;

    position: relative;

    &::after {
      content: "";

      position: absolute;
      bottom: -8px;
      left: 50%;
      background-color: white;
      width: 0%;
      height: 2px;
      border-radius: 5px;

      transition: all 0.18s ease-in-out;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }
  }
`;

export const ContainerMessage = styled.div`
  border: 3px solid white;
  width: 380px;
  padding: 18px;
  text-transform: uppercase;
  margin-top: 30px;


  h1 {
    color: white;
    font-family: "Josefin Sans", sans-serif;
    font-size: 2.3em;
  }

  @media (max-width: 600px) {
    width: 100%; 
    margin-top: 40%;
  }

  @media (max-width: 370px) {
    h1 {
      font-size: 1.8em;
    }
  }
`;

export const ContainerMenu = styled.div`
  img {
    cursor: pointer;
  }
`;

export const Menu = styled.menu`
  padding: 28px 18px;
  background-color: black;
  color: white;

  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  z-index: 20;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    object-fit: cover;
  }
`;

export const NavigateBarMenu = styled.div`
  margin-top: 100px;
  width: fit-content;

  display: flex;
  flex-direction: column;

  a {
    width: 100%;

    margin-bottom: 20px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;

    font-family: "Josefin Sans", sans-serif;
    font-size: 25px;

    position: relative;
  }
`;
