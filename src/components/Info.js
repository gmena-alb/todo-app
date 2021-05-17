import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';

const Info = () => {
  const { itemList } = useGlobalContext();

  return (
    <Wrapper className="info-text">{`${
      itemList.length > 0
        ? 'Drag and drop to reorder list'
        : 'Add something to your list'
    }`}</Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
  font-size: 1.2rem;
  @media (min-width: 1440px) {
    margin-top: 6rem;
  }
`;

export default Info;
