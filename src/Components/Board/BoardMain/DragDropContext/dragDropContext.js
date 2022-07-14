import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const MyDragDropContext = (props) => {

  const {
    cards,
    setCards,
    // handleRemoveTask,
    // handleCompleteTask,
    children
  } = props

  console.log('Context props', props);

  // a little function to help us with reordering the result
  // const reorderTasks = (tasks, startIndex, endIndex) => {
  //   const result = [...tasks];
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);

  //   return result;
  // };

  // const itemsFromBackend = [
  //   { id: uuid(), content: "First task" },
  //   { id: uuid(), content: "Second task" },
  //   { id: uuid(), content: "Third task" },
  //   { id: uuid(), content: "Fourth task" },
  //   { id: uuid(), content: "Fifth task" }
  // ];
  
  // const columnsFromBackend = {
  //   [uuid()]: {
  //     name: "Requested",
  //     items: itemsFromBackend
  //   },
  //   [uuid()]: {
  //     name: "To do",
  //     items: []
  //   },
  //   [uuid()]: {
  //     name: "In Progress",
  //     items: []
  //   },
  //   [uuid()]: {
  //     name: "Done",
  //     items: []
  //   }
  // };
  
  const onDragEnd = (result, cards, setCards) => {
    console.log('cards', cards);
    console.log('result', result);

    if (!result.destination) return;
    const { source, destination } = result;
  
    if (source.droppableId !== destination.droppableId) {
      const sourceCard = cards[source.droppableId];
      const destCard = cards[destination.droppableId];
      const sourceData = [...sourceCard.data];
      const destData = [...destCard.data];
      const [removed] = sourceData.splice(source.index, 1);
      destData.splice(destination.index, 0, removed);

      setCards({
        ...cards,
        [source.droppableId]: {
          ...sourceCard,
          data: sourceData
        },
        [destination.droppableId]: {
          ...destCard,
          data: destData
        }
      });
    } else {
      const card = cards[source.droppableId];
      const copiedData = [...card.data];
      const [removed] = copiedData.splice(source.index, 1);
      copiedData.splice(destination.index, 0, removed);
      setCards({
        ...cards,
        [source.droppableId]: {
          ...card,
          data: copiedData
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
