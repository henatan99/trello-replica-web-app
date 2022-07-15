import React, { useState, useEffect } from 'react';
import cards from '../../../helpers/seedData';
import BoardCard from './boardCard';
import BoardTitleWrapper from './boardTitleWrapper';
import './index.css';
import { NewListCardAdd, NewListCardCreateForm } from './newListCardFrom';
import MyDragDropContext from './DragDropContext/dragDropContext';

const BoardMainContainer = () => {
  const [cardState, setCardState] = useState(cards);
  const [cardAdding, setCardAdding] = useState(false);

  useEffect(() => {
    const cardsStorage = JSON.parse(localStorage.getItem('cards'));
    const cardsObj = cardsStorage && {
      ...cardState,
      tasks: cardsStorage.tasks,
      lastTask: cardsStorage.lastTask,
      lastCard: cardsStorage.lastCard,
    };
    if (cardsObj) {
      setCardState(cardsObj);
    } else {
      setCardState(cards);
    }
  }, []);

  // add cardState object to localStorage whenever the value of our state changed
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cardState));
  }, [cardState]);

  return (

    <div className="board_main_container">
      <BoardTitleWrapper />
      <div className="board_list_wrapper">
        <MyDragDropContext
          cards={cardState}
          setCards={setCardState}
        >
          {
                   Object.entries(cardState.tasks).map(([cardId, card], index) => (
                     <BoardCard
                       card={card}
                       key={cardId}
                       cardId={cardId}
                       index={index}
                       cardState={cardState}
                       setCardState={setCardState}
                     />
                   ))
                }
        </MyDragDropContext>
        {
              cardAdding
                ? (
                  <NewListCardCreateForm
                    cardAddFormRemove={() => setCardAdding(false)}
                    cardState={cardState}
                    setCardState={setCardState}
                    name="card"
                  />
                )
                : <NewListCardAdd cardAddingHandler={() => setCardAdding(true)} name="card" />
            }
      </div>
    </div>
  );
};

export default BoardMainContainer;
