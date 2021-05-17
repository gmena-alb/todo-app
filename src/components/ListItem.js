import React from 'react';
import styled from 'styled-components';

import { FaCheck, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';

const ListItem = ({ id, text, isCompleted }) => {
  const { setCompleted, removeItem } = useGlobalContext();

  return (
    <Wrapper className={isCompleted ? 'item item-completed' : 'item'}>
      <div className="circle" onClick={() => setCompleted(id)}>
        <FaCheck className="check-icon" />
      </div>
      <p className="item-text">{text}</p>
      <div className="remove" onClick={() => removeItem(id)}>
        <FaTimes />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  &.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .circle {
      .check-icon {
        display: none;
      }
    }
    .item-text {
      flex: 1;
    }
  }
  &.item-completed {
    .circle {
      position: relative;
      .check-icon {
        display: block;
        font-size: 1rem;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .item-text {
      text-decoration: line-through;
    }
  }

  .remove {
    cursor: pointer;
    @media (min-width: 1440px) {
      opacity: 0;
      transition: opacity 0.25s ease-in-out;
    }
  }
  &:hover .remove {
    @media (min-width: 1440px) {
      opacity: 1;
    }
  }
`;

export default ListItem;
