import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';

const EndList = () => {
  const { itemsLeft, deleteCompletedTasks } = useGlobalContext();

  return (
    <Wrapper className="end-list-container">
      <div className="item-count">{itemsLeft} items left</div>
      <div className="clear-container" onClick={deleteCompletedTasks}>
        Clear Completed
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2.4rem;
  padding: 2rem 2rem;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  max-width: 54rem;
  min-width: 32rem;
  width: 90%;
  .clear-container {
    cursor: pointer;
  }
`;

export default EndList;
