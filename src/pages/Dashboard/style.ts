import styled from "styled-components";
import { theme } from "../../styles/theme";
import Background from "../../assets/images/map/wp2115744.jpg";


export const DashHeaderStyled = styled.header`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  position: fixed;
  display: flex;
  width: 100%;
  height: 70px;
  padding: 10px;
  justify-content: space-between;
`;

export const DashMainPageStyled = styled.div`
  background: url(${Background});
  background-size: cover;

  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.grey2};

  ul {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    overflow-y: auto;
    height: 80%;

    @media (max-width: 1400px) {
      grid-template-columns: repeat(2, 1fr); /* Dois cards por linha em telas "s large" */
    }

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr); /* Dois cards por linha em telas "large" */
    }

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr); /* Dois cards por linha em telas "medium" */
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr; /* Apenas uma coluna em telas "small" e "x small" */
    }
  }
`;
