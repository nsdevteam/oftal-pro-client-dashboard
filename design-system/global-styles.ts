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

  .tableRequest {
    border-collapse: collapse;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

  .tableContent {
    height: 25rem;
    width: 85vw;
    overflow-x: scroll;
    margin-top: 1rem;
  }

  .tableRequest thead {
    background: #f6f6f7;
    font-weight: bold;
  }

  .tableRequest tr:nth-of-type(even) {
    background-color: #f6f6f7;
  }

  .tableRequest tr:hover {
    background-color: #f6f6f7;
  }
`;

export default GlobalStyles;
