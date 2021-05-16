import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: 'hsl(236, 33%, 92%)',
  fontColor: 'hsl(235, 19%, 35%)',
  itemList: 'hsl(0, 0%, 98%)',
  border: '1px solid hsl(236, 33%, 92%)',
  circleBorder: '1px solid hsl(233, 11%, 84%)',
  completedText: 'hsl(233, 11%, 84%)',
  completedCircle:
    'linear-gradient(295deg, rgba(87,221,255,1) 17%, rgba(192,88,243,1) 84%)',
  endSectionText: 'hsl(236, 9%, 61%)',
};

export const darkTheme = {
  body: '#25273c',
  fontColor: 'hsl(234, 11%, 52%)',
  itemlist: '#25273c',
  border: '1px solid hsl(236, 9%, 61%)',
  circleBorder: '1px solid hsl(233, 11%, 84%)',
  completedText: 'hsl(236, 33%, 92%)',
  completedCircle:
    'linear-gradient(295deg, rgba(87,221,255,1) 17%, rgba(192,88,243,1) 84%)',
  endSectionText: 'hsl(236, 9%, 61%)',
};

export const GlobalStyles = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Josefin Sans', sans-serif;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }

  .item-list {
    background-color:  ${(props) => props.theme.itemList};
    .item {
      border-bottom:  ${(props) => props.theme.border};
      .circle {
        border-bottom:  ${(props) => props.theme.circleBorder};
      }
    }
    .item-completed {
      .item-text {
        color: ${(props) => props.theme.completedText};
      }
      .circle {
        background: ${(props) => props.theme.completedCircle};
      }
    }
  }
  .end-list-container {
    background-color:  ${(props) => props.theme.itemList};
    color: ${(props) => props.theme.endSectionText};
  }

`;
