import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const MyDragDropContext = (props) => {

  const {
    cards,
    setCards,
    children
  } = props

  console.log('Context props', props);

 const onDragEnd = (result, cards, setCards) => {
    console.log('cards', cards);
    console.log('result', result);

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
            data: sourceData
          },
          [destination.droppableId]: {
            ...destCard,
            data: destData
          }
        }
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
            data: copiedData
          }
        }
      });
    }
  };

  return (
    <DragDropContext onDragEnd={result => onDragEnd(result, cards, setCards)}>
      {children}
    </DragDropContext>
  );
};

export default MyDragDropContext;
