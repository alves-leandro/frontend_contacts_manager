import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "./theme";

export type linkProps = {
  linksize?: string;
  linkstyle?: string;
};

export const LinkStyled = styled(Link)<linkProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  transition: 0.4s;
  text-decoration: none;
  cursor: pointer;
  font-size: ${theme.typography.Heading3.size};
  font-weight: ${theme.typography.Heading3.weight};
  line-height: ${theme.typography.Heading3.height};

  ${({ linksize }) => {
    switch (linksize) {
      case "medium":
        return css`
          padding: 0px 16px;
          height: 50px;
          border: none;
          border-radius: 30px;
        `;
      case "small":
      case "header":
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
    }
  }};

  ${({ linkstyle }) => {
    switch (linkstyle) {
      case "primary":
        return css`
          background: ${theme.colors.primary};
          color: ${theme.colors.black};
          border: 1px solid ${theme.colors.primary};
          box-shadow: 1px 3px 3px 3px ${theme.colors.black};
          &:hover {
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};
            color: ${theme.colors.black};
          }
        `;
      case "header":
        return css`
          border: 1px solid transparent;
          position: relative;
          font-size: 1.1rem;
          color: ${theme.colors.white};
          margin-left: 40px;
          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 100%;
            height: 3px;
            background: ${theme.colors.white};
            border-radius: 5px;
            transform: scaleX(0);
            transition: transform 0.5s;
          }
          &:hover::after {
            transform: scaleX(1);
          }
          &:hover {
            background: transparent;
            border: 1px solid transparent;
            color: ${theme.colors.white};
          }
        `;
      default:
        return;
    }
  }};
`;
