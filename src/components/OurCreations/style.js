import styled, { css } from "styled-components";

export const Container = styled.section`
  margin-top: 130px;
  margin-bottom: 100px;

  h2 {
    font-family: "Josefin Sans", sans-serif;

    font-size: 2em;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  @media (max-width: 680px) {
    margin-top: 160px;
  }
`;

export const ContainerOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 25px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 570px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Option = styled.div`
  height: 400px;
  position: relative;
  padding: 20px;

  overflow: hidden;

  position: relative;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    overflow: hidden;
    transition: all 0.2s ease-in-out;
    object-fit: cover;
  }

  h4 {
    width: 100%;

    position: absolute;
    bottom: 0;
    left: 0;

    padding: 20px;

    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.2em;

    color: white;

    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.5)
    );
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.9)
    );
    transition: all 0.2s ease-in-out;
    z-index: 19;
  }

  &:hover {
    div {
      height: 100%;
      background-image: none;
    }

    img {
      transform: scale(1.2, 1.2);
      background-color: black;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    p {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @media (max-width: 500px) {
    height: 150px;

    h4 {
      font-size: 1.6em;
    }
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  button {
    background: none;
    margin: 0 auto;
    border: 1px solid black;
    padding: 8px 25px;

    text-transform: uppercase;
    font-size: .9em;

    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
