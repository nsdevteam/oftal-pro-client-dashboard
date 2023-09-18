import { css } from '@emotion/react';

const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  .dropDownLink {
    padding: 0.5rem;
    margin: 0.5rem;
    margin-left: 2rem;
    width: 80%;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #fff;

    &:active {
      background-color: #4256d0;
    }
  }
`;

export default GlobalStyles;
