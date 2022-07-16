import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';

const MyDragDropContext = (props) => {
  const {
    cards,
    setCards,
    children,
  } = props;

  const onDragEnd = (result, cards, setCards) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceCard = cards.tasks[source.droppableId];
      const destCard = cards.tasks[destination.droppableId];
      const sourceData = [...sourceCard.data];
      const destData = [...destCard.data];
      const [removed] = sourceData.splice(source.index, 1);
      destData.splice(destination.index, 0, removed);

      setCards({
        ...cards,
        tasks: {
          ...cards.tasks,
          [source.droppableId]: {
            ...sourceCard,
            data: sourceData,
          },
          [destination.droppableId]: {
            ...destCard,
            data: destData,
          },
        },
      });
    } else {
      const card = cards.tasks[source.droppableId];
      const copiedData = [...card.data];
      const [removed] = copiedData.splice(source.index, 1);
      copiedData.splice(destination.index, 0, removed);

      setCards({
        ...cards,
        tasks: {
          ...cards.tasks,
          [source.droppableId]: {
            ...card,
            data: copiedData,
          },
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, cards, setCards)}>
      {children}
    </DragDropContext>
  );
};

MyDragDropContext.defaultProps = {
  cards: {},
  setCards: null,
  children: null,
};

MyDragDropContext.propTypes = {
  cards: PropTypes.shape({
    tasks: PropTypes.objectOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        data: PropTypes.instanceOf(Array),
      }),
    ),
    lastCard: PropTypes.number,
    lastTask: PropTypes.number,
    addCard: PropTypes.func,
    addTask: PropTypes.func,
  }),
  setCards: PropTypes.func,
  children: PropTypes.instanceOf(Array),
};

export default MyDragDropContext;
