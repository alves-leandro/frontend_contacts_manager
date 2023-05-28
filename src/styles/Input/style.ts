import styled from "styled-components";
import { theme } from "../theme";

export const InputStyled = styled.div`
  .label-content {
    position: relative;
    margin-bottom: 9px;
  }

  .label {
    font-size: ${theme.typography.Heading3.size};
    font-weight: ${theme.typography.Heading3.weight};
    position: absolute;
    pointer-events: none;
    left: 15px;
    top: 11px;
    padding: 0 9px;
    border-radius: 10px;
    transform: translateY(8%);
    transition: 0.5s ease all;
  }

  .input {
    font-size: ${theme.typography.Heading3.size};
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 20px;
    border-radius: 10px;
    box-sizing: border-box;

    &:focus {
      outline: none;
      ~ .label {
        background-color: transparent;
        top: -8px;
        font-size: ${theme.typography.Heading3.size};
        transform: translateY(-50%);
        transition: 0.5s ease all;
      }
      background: transparent;
      color: ${theme.colors.grey4};
      border: 1px solid ${theme.colors.secundary};
    }

    &:invalid {
      ~ .label {
        background-color: transparent;
        color: ${theme.colors.white};
        top: -8px;
        font-size: ${theme.typography.Heading3.size};
        transform: translateY(-50%);
        transition: 0.5s ease all;
      }
      background: transparent;
      border: 2px solid ${theme.colors.colorNegative};
      color: ${theme.colors.white};
    }

    &:valid {
      ~ .label {
        background-color: transparent;
        color: ${theme.colors.white};
        top: -8px;
        font-size: ${theme.typography.Heading3.size};
        transform: translateY(-50%);
        transition: 0.5s ease all;
      }
      background: transparent;
      border: 2px solid ${theme.colors.grey4};
      color: ${theme.colors.white};
    }
  }
`;
