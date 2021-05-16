import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';

const Filters = () => {
  const { filterList } = useGlobalContext();

  return (
    <Wrapper>
      <div className="filter" onClick={() => filterList('All')}>
        All
      </div>
      <div className="filter" onClick={() => filterList('Active')}>
        Active
      </div>
      <div className="filter" onClick={() => filterList('Completed')}>
        Completed
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  margin: 0 auto;
  font-size: 1.2rem;
  justify-content: space-around;
  padding: 1.6rem;
  .filter {
    font-size: 1.5rem;
  }
`;

export default Filters;
