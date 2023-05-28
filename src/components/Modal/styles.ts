import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

    padding: 20px;
    width: 80%;
    max-width: 500px;

    color: ${theme.colors.white};
  }

  @media (min-width: 700px) and (max-width: 1024px) {
    > div {
      width: 60%;
    }
  }

  @media (min-width: 1025px) {
    > div {
      width: 50%;
    }
  }

  @media (max-width: 699px) {
    > div {
      width: 90%;
    }
  }
`;
