import React from 'react';
import Filters from './Filters';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';

const EndList = () => {
  const { itemsLeft, deleteCompletedTasks, isDesktop } = useGlobalContext();

  return (
    <Wrapper className="end-list-container">
      <div className="item-count">{itemsLeft} items left</div>
      {isDesktop && <Filters />}
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
  padding: 1rem 2rem;
  border-radius: 6px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  max-width: 54rem;
  min-width: 32rem;
  width: 90%;
  @media (min-width: 1440px) {
    font-size: 1.2rem;
  }
  .item-count {
    padding: 1rem 0;
  }
  .clear-container {
    cursor: pointer;
    padding: 1rem 0;
  }
`;

export default EndList;
