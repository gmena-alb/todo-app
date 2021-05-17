import { createGlobalStyle } from 'styled-components';
import lightMobileBG from '../images/bg-mobile-light.jpg';
import darkMobileBG from '../images/bg-mobile-dark.jpg';
import lightDesktopBG from '../images/bg-desktop-light.jpg';
import darkDesktopBG from '../images/bg-desktop-dark.jpg';

export const lightTheme = {
  body: 'hsl(0, 0%, 98%)',
  fontColor: 'hsl(235, 19%, 35%)',
  itemList: 'hsl(0, 0%, 98%)',
  border: '1px solid hsl(236, 33%, 92%)',
  circleBorder: '1px solid hsl(233, 11%, 84%)',
  completedText: 'hsl(233, 11%, 84%)',
  completedCircle:
    'linear-gradient(295deg, rgba(87,221,255,1) 17%, rgba(192,88,243,1) 84%)',
  endSectionText: 'hsl(236, 9%, 61%)',
  activeFilter: 'hsl(220, 98%, 61%)',
  bgMobile: `url(${lightMobileBG})`,
  bgDesktop: `url(${lightDesktopBG})`,
  filterColor: 'hsl(236,9%,61%)',
  removeButton: 'hsl(236,9%,61%)',
};

export const darkTheme = {
  body: 'hsl(240, 31%, 13%)',
  fontColor: 'hsl(234, 39%, 85%)',
  itemList: 'hsl(235, 38%, 24%)',
  border: '1px solid hsl(233, 14%, 35%)',
  circleBorder: '1px solid hsl(233, 14%, 35%)',
  completedText: 'hsl(236, 33%, 92%)',
  completedCircle:
    'linear-gradient(295deg, rgba(87,221,255,1) 17%, rgba(192,88,243,1) 84%)',
  endSectionText: 'hsl(236, 9%, 61%)',
  activeFilter: 'hsl(220, 98%, 61%)',
  bgMobile: `url(${darkMobileBG})`,
  bgDesktop: `url(${darkDesktopBG})`,
  filterColor: 'hsl(236,9%,61%)',
  removeButton: 'hsl(233, 14%, 35%)',
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
  header {
    background-image:  ${(props) => props.theme.bgMobile};
    @media (min-width: 500px) {
      background-image:  ${(props) => props.theme.bgDesktop};

    }
    .input-item {
      background-color: ${(props) => props.theme.itemList};
      color: ${(props) => props.theme.fontColor};
    }
    .filter {
    }
  }
  .item-list {
    background-color:  ${(props) => props.theme.itemList};
    .item {
      border-bottom:  ${(props) => props.theme.border};
      .remove {
        svg {

          color: ${(props) => props.theme.removeButton};
        }
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
  .circle {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-right: 1rem;
        border:  ${(props) => props.theme.circleBorder};
        @media (min-width: 1440px) {
          width: 2.5rem;
        height: 2.5rem;
        }
      }
  .end-list-container {
    background-color:  ${(props) => props.theme.itemList};
    color: ${(props) => props.theme.endSectionText};
  }
  .filters {
    background-color:  ${(props) => props.theme.itemList};
    .filter {
      color: ${(props) => props.theme.filterColor};
    }
    .filter-active {
      color: ${(props) => props.theme.activeFilter};
    }
  }

`;
