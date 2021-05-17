import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';

const Filters = () => {
  const { filterList, activeFilter, itemList } = useGlobalContext();

  return (
    <Wrapper className="filters-container">
      {itemList.length > 0 && (
        <div className="filters">
          <div
            className={
              activeFilter == 'All' ? 'filter filter-active' : 'filter'
            }
            onClick={() => filterList('All')}
          >
            All
          </div>
          <div
            className={
              activeFilter == 'Active' ? 'filter filter-active' : 'filter'
            }
            onClick={() => filterList('Active')}
          >
            Active
          </div>
          <div
            className={
              activeFilter == 'Completed' ? 'filter filter-active' : 'filter'
            }
            onClick={() => filterList('Completed')}
          >
            Completed
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  margin: 1.5rem 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1440px) {
    margin: 0;
  }

  .filters {
    border-radius: 6px;
    display: flex;
    max-width: 54rem;
    min-width: 32rem;
    width: 90%;
    justify-content: center;
    padding: 1.6rem;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    @media (min-width: 1440px) {
      padding: 0;
    }
  }
  .filter {
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;

    @media (min-width: 1440px) {
      font-size: 1.2rem;
      padding: 1rem 0;
    }
  }
  .filter:not(:last-child) {
    margin-right: 3rem;
  }
`;

export default Filters;
