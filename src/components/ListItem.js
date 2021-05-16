import React, { useState } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { FaCheck } from 'react-icons/fa';
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
        <GrClose />
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
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-right: 1rem;

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
`;

export default ListItem;
