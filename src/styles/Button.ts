import styled, { css } from "styled-components";
import { theme } from "./theme";

export type buttonProps = {
  buttonsize?: string;
  buttonstyle?: string;
};

export const StyledButton = styled.button<buttonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 6px;
  transition: 0.4s;
  cursor: pointer;
  font-size: ${theme.typography.Heading3.size};
  font-weight: ${theme.typography.Heading3.weight};
  line-height: ${theme.typography.Heading3.height};

  ${({ buttonsize }: buttonProps) => {
    switch (buttonsize) {
      case "medium":
        return css`
          padding: 0px 16px;
          height: 50px;
          border: none;
          border-radius: 30px;
        `;
      case "small":
        return css`
          padding: 0 1.75rem;
          height: 30px;
          width: 32px;
          border: none;
          border-radius: 30px;
          font-size: ${theme.typography.Caption.size};
        `;
      default:
        return css`
          padding: 0px 22px;
          height: 50px;
          width: 100%;
          border: none;
          border-radius: 30px;
        `;
      case "modal":
        return css`
          padding: 0px 20px;
          height: 50px;
          border: none;
          border-radius: 30px;
        `;
      case "form":
        return css`
          width: 100%;
          height: 45px;
        `;
      case "card":
        return css`
          width: 40px;
          border: none;
          border-radius: 50px;
          font-size: ${theme.typography.Heading1.size};
        `;
    }
  }};

  ${({ buttonstyle }: buttonProps) => {
    switch (buttonstyle) {
      case "form":
        return css`
          background: ${theme.colors.grey4};
          border: none;
          border-radius: 6px;
          font-size: 1em;
          color: ${theme.colors.white};
          font-weight: 500;
          padding: 0 60px;
          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.black};
            /* letter-spacing: 1px; */
          }
        `;
      case "primary":
        return css`
          background: ${theme.colors.primary};
          color: ${theme.colors.black};
          border: 1px solid ${theme.colors.primary};
          -webkit-box-shadow: 1px 3px 3px 3px ${theme.colors.black};
          box-shadow: 1px 3px 3px 3px ${theme.colors.black};
          &:hover {
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};
            color: ${theme.colors.black};
          }
        `;
      case "card":
        return css`
          background: transparent;
          color: ${theme.colors.white};
          transition: 0.4s;
          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.black};
            transition: 0.4s;
          }
        `;
      default:
        return;
    }
  }};
`;
