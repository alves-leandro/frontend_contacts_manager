import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
:root {
    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
