import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import ListItem from './ListItem';
import EndList from './EndList';

const List = () => {
  const { itemList, filteredList } = useGlobalContext();

  return (
    <Wrapper>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId={'item-list'}>
          {(providedDroppable) => (
            <ul
              className="item-list"
              {...providedDroppable.droppableProps}
              ref={providedDroppable.innerRef}
            >
              {filteredList.map((item, index) => {
                const { id, itemText, completed } = item;
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(providedDraggable) => (
                      <ListItem
                        id={id}
                        text={itemText}
                        isCompleted={completed}
                        {...providedDraggable.draggableProps}
                        {...providedDraggable.dragHandleProps}
                        ref={providedDraggable.innerRef}
                      />
                    )}
                  </Draggable>
                );
              })}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      {itemList.length > 0 && <EndList />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  @media (min-width: 1440px) {
    font-size: 1.7rem;
  }
  .item-list {
    max-width: 54rem;
    width: 90%;
    min-width: 32rem;
    margin: -3rem 2.4rem 0;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

export default List;
