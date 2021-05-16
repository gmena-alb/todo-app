import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import ListItem from './ListItem';
import EndList from './EndList';

const List = () => {
  const { itemList, filteredList } = useGlobalContext();

  return (
    <Wrapper>
      <ul className="item-list">
        {filteredList.map((item) => {
          const { id, itemText, completed } = item;
          return (
            <ListItem
              key={id}
              id={id}
              text={itemText}
              isCompleted={completed}
            />
          );
        })}
      </ul>
      {itemList.length > 0 && <EndList />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;
  font-size: 1.2rem;
  .item-list {
    margin: -3rem 2.4rem 0;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

export default List;
