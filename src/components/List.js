import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import ListItem from './ListItem';
import EndList from './EndList';

const List = () => {
  const { itemList, filteredList, handleOnDragEnd } = useGlobalContext();

  return (
    <Wrapper>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={'item-list'}>
          {(provided) => (
            <ul
              className="item-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredList.map((item, index) => {
                const { id, itemText, completed } = item;
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <ListItem
                          id={id}
                          text={itemText}
                          isCompleted={completed}
                        />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
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
