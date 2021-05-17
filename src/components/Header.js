import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import moonIcon from '../images/icon-moon.svg';
import sunIcon from '../images/icon-sun.svg';
import lightMobileBG from '../images/bg-mobile-light.jpg';
import darkMobileBG from '../images/bg-mobile-dark.jpg';

const Header = () => {
  const { toggleTheme, theme, setItemList, itemList } = useGlobalContext();

  const [itemText, setItemText] = useState('');

  const handleKeyPress = (event) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      event.preventDefault();

      const newItem = {
        id: new Date().getTime().toString(),
        itemText: itemText,
        completed: false,
      };
      setItemList([...itemList, newItem]);
      setItemText('');
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="logo">TODO</div>
        <div className="toggle-theme">
          <img
            src={theme === 'light' ? moonIcon : sunIcon}
            alt="toggle icon"
            onClick={toggleTheme}
          />
        </div>
        <div className="circle"></div>
        <input
          type="text"
          className="input-item"
          placeholder="Create a new todo..."
          value={itemText}
          onKeyPress={handleKeyPress}
          onChange={(e) => setItemText(e.target.value)}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    padding: 4.8rem 2.4rem;
    display: grid;
    row-gap: 4rem;
    max-width: 58.7rem;
    width: 100%;
    position: relative;
    @media (min-width: 1440px) {
      padding-top: 7.5rem;
    }
    .logo {
      font-size: 2.8rem;
      color: var(--color-white);
      font-weight: 700;
      letter-spacing: 1rem;
      grid-column-start: 1;
      grid-row-start: 1;
      user-select: none;
      @media (min-width: 1440px) {
        font-size: 4.2rem;
      }
    }
    .toggle-theme {
      grid-row-start: 1;
      grid-column-start: 2;
      text-align: right;
      user-select: none;
    }
    .circle {
      position: absolute;
      bottom: 5.8rem;
      left: 4.5rem;
      @media (min-width: 1440px) {
        bottom: 6.7rem;
      }
    }
    .input-item {
      grid-column-start: 1;
      grid-column-end: 3;
      padding: 1.3rem 0 1.3rem 4.8rem;
      border-radius: 6px;
      font-size: 1.7rem;
      border: none;
      @media (min-width: 1440px) {
        padding: 2.1rem 0 2.1rem 5.2rem;
      }
      ::placeholder {
        font-size: 1.2rem;
        font-family: 'Josefin Sans', sans-serif;
        color: hsl(236, 9%, 61%);
        @media (min-width: 1440px) {
          font-size: 1.7rem;
        }
      }
      :focus {
        outline: none;
      }
    }
  }
`;

export default Header;
