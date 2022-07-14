import React, { useState } from 'react';
import cards from '../../../helpers/seedData';
import BoardCard from './boardCard';
import BoardTitleWrapper from './boardTitleWrapper';
import './index.css';
import NewListCardForm from './newListCardFrom';
import MyDragDropContext from './DragDropContext/dragDropContext';

const BoardMainContainer = () => {
    const cardsObj = cards.tasks;
    const [cardState, setCardState] = useState(cardsObj);
    return (
  
        <div className="board_main_container">
          <BoardTitleWrapper />
          <div className="board_list_wrapper">
            <MyDragDropContext
              cards={cardState}
              setCards={setCardState}
            >
                {
                    Object.entries(cardState).map(([cardId, card], index) => {
                        return <BoardCard card={card} key={cardId} cardId={cardId} index={index} />
                    })
                }
            </MyDragDropContext>
            <NewListCardForm />
          </div>
        </div>
      );
} 

export default BoardMainContainer;
