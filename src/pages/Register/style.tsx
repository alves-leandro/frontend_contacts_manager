import styled from "styled-components";
import Background from "../../assets/images/map/wp2567270.jpg";
import { theme } from "../../styles/theme";

export const RegisterMainDivStyled = styled.div`
background: url(${Background});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 53px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
  }

  .rightSection {
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.grey1};
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
      display: none; /* Oculta a leftSection em dispositivos móveis */
    }

    .textContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      max-width: 50%;
      min-width: 50%;
      height: 60%;

      @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
      }
    }

    span {
      color: ${theme.colors.primary};
      font-size: ${theme.typography.Heading0.size};
    }

    p {
      font-size: 50px;
      letter-spacing: 1px;
    }
  }

  .leftSection {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.black};
    padding: 10%;
    /* border: 1px solid red; */

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
      padding: 20px;
      align-items: center;
      justify-content: center;
      background-color: transparent; /* Fundo transparente quando a leftSection é removida */
    }
  }
`;
