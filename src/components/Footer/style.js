import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 150px;
  /* width: 100vw; */
  background-color: black;
  color: white;

  @media (max-width: 708px) {
    display: flex;
    justify-content: center;
  }
`;

export const ContainerFooter = styled.div`
  padding: 30px 25px;
  display: flex;
  justify-content: space-between;

  img {
    margin-bottom: 16px;
    width: 150px;
  }

  div {
    position: relative;
  }

  span {
    margin-top: 25px;

    position: absolute;
    right: 0;
    width: 285px;

    /* background-color: darkblue; */

    color: #bababa;
    font-size: 0.8em;
  }

  @media (max-width: 708px) {
    flex-direction: column;

    img {
        margin: 0 auto;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    span {
        position: initial;
        margin-top: 0;
        margin: 0 auto;
    }
  }

  @media (max-width: 335px) {
    span {
        font-size: .7em;
        width: fit-content;
        text-align: center;
        /* background-color: darkgoldenrod; */
    }
  }
`;

export const Navgate = styled.nav`
  a {
    text-decoration: none;
    color: white;
    font-size: 0.9em;
    margin-right: 18px;

    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      height: 3px;
      width: 0%;
      background-color: white;

      transition: all 0.2s ease-in-out;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }

    @media (max-width: 730px) {
      margin-right: 14px;
    }
  }
  @media (max-width: 708px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 26px 0;

    a {
        margin-bottom: 10px;
    }
  }
`;

export const NavigateSocialMidia = styled.nav`
  display: flex;
  a {
    height: 24px;
    margin-left: 12px;
    text-decoration: none;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      height: 3px;
      width: 0%;
      background-color: white;

      transition: all 0.2s ease-in-out;
    }

    &:hover::after {
      left: 0;
      width: 100%;
    }
  }
  img {
    width: 24px;
  }

  @media (max-width: 708px) {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
  }
`;
