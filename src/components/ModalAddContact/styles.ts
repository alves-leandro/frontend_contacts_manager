import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FormAddContact = styled.form`
  h1 {
    display: flex;
    justify-content: center;
    padding: 20px;
    margin-bottom: 20px;
    font-size: ${theme.typography.Heading0.size};
  }

  .input-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .left-column,
  .right-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button {
    margin: 40px 0px;
    width: 100%;
  }

  @media (max-width: 700px) {
    .input-container {
      grid-template-columns: 1fr; /* Altera para uma única coluna */
    }

    h1 {
        padding: 10px;
    }

    .left-column,
    .right-column {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`;
