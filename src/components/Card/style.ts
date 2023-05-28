import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CardLiStyled = styled.li`
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
  /* padding: 5px; */
  display: flex;
  /* width: 0%; */

  .mainDiv {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .imageSection {
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    /* width: 90%; */

    img {
      max-width: 90%;
      height: auto;
      background-color: ${theme.colors.primary};
      border-radius: 20%;
    }
  }

  .infoSection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: right;
    width: 100%;
    padding: 10px 20px;

    .controlButtons {
      display: flex;
      align-items: flex-end;
      gap: 20px;
      padding: 0 0 20px 0;
      left: 80px;
    }

    .cardInformation {
      display: flex;
      width: 100%;
      height: 150px;
      justify-content: center;
      flex-direction: column;
      gap: 5px;

      background-color: rgba(138, 26, 26, 0.2);
      border-radius: 20px;
      padding: 0 15%;

      p {
        font-size: ${theme.typography.Heading3.size};
        font-weight: ${theme.typography.Heading3.weight};
        color: ${theme.colors.grey1};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }

      a {
        color: ${theme.colors.primary};
      }
    }

    .divButtons {
      display: flex;
      justify-content: center;
      padding: 30px 0;
      height: 80px;
      width: 100%;
      gap: 10px;
    }
  }
`;
