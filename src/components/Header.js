import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import moonIcon from '../images/icon-moon.svg';
import sunIcon from '../images/icon-sun.svg';
import mobileBG from '../images/bg-mobile-light.jpg';

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
  background-image: url(${mobileBG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .container {
    padding: 4.8rem 2.4rem;
    display: grid;
    row-gap: 4rem;
    .logo {
      font-size: 2.8rem;
      color: var(--color-white);
      font-weight: 700;
      letter-spacing: 1rem;
      grid-column-start: 1;
      grid-row-start: 1;
    }
    .toggle-theme {
      grid-row-start: 1;
      grid-column-start: 2;
      text-align: right;
    }
    .input-item {
      grid-column-start: 1;
      grid-column-end: 3;
      padding: 1.3rem 0 1.3rem 6.5rem;
      border-radius: 6px;
      border: none;
      ::placeholder {
        font-size: 1.2rem;
        font-family: 'Josefin Sans', sans-serif;
        color: hsl(236, 9%, 61%);
      }
      :focus {
        outline: none;
      }
    }
  }
`;

export default Header;
