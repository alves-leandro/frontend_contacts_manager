import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FormRegisterStyled = styled.form`
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

  width: 100%;
  min-width: 380px;
  padding: 42px 20px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: transparent;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.grey0};
    padding: 0px 0px 30px 0;
    font-size: ${theme.typography.Heading0.size};
    font-weight: ${theme.typography.Heading0.weight};
    line-height: ${theme.typography.Heading0.height};
  } 

  span {
    display: flex;
    justify-content: start;
    font-size: ${theme.typography.Caption.size};
    font-weight: ${theme.typography.Caption.weight};
    color: ${theme.colors.colorNegative};
    min-height: 17px;
    margin: 0px 0px 20px 0px;
    background-color: transparent;
  }

  a {
    color: ${theme.colors.grey0};
  }

  a:hover {
    text-decoration: underline;
  }

  .headerRegisterForm {
    margin: 0 0 40px 180px;   
  }
`;
