import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  height: 342px;

  margin: 70px auto;

  img {
    margin: 0;
    padding: 0;
    float: left;
    width: 500px;
    left: 20px;
  }

  @media (max-width: 600px) {
    position: initial;
    margin-top: 100px;

    img {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;


export const ContainerContent = styled.div`
  background-color: white;
  width: 418px;
  padding: 40px;
  padding-bottom: 0;

  position: absolute;
  bottom: 0;
  left: 40%;

  text-transform: uppercase;

  h2 {
    font-family: "Josefin Sans", sans-serif;
    color: black;
    font-size: 2.0em;
    margin-bottom: 10px;
  }

  p {
    font-family: "Alata", sans-serif;
    color: #404040;
    font-size: .8em;
    line-height: 19px;
  }

  @media (max-width: 680px) {
    left: 18%;
    bottom: -100px;
  }

  @media (max-width: 600px) {
    position: initial;
    width: 100%;
    padding: 40px 20px;
    float: left;
    text-align: center;

    margin-bottom: 50px;

    h2 {
      font-size: 2.5em;
      margin-bottom: 15px;
    }

    p {
      font-size: 1.0em;
      line-height: 30px;
    }
  }
`;
