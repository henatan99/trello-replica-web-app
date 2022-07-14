import React, { useState } from 'react';
import cards from '../../../helpers/seedData';
import BoardCard from './boardCard';
import BoardTitleWrapper from './boardTitleWrapper';
import './index.css';
import { NewListCardAdd, NewListCardCreateForm } from './newListCardFrom';
import MyDragDropContext from './DragDropContext/dragDropContext';

const BoardMainContainer = () => {
    // const cardsObj = cards.tasks;
    const [cardState, setCardState] = useState(cards);
    const [cardAdding, setCardAdding] = useState(false);

    const addTaskHandler = () => {

    }

    return (
  
        <div className="board_main_container">
          <BoardTitleWrapper />
          <div className="board_list_wrapper">
            <MyDragDropContext
              cards={cardState}
              setCards={setCardState}
            >
                {
                    Object.entries(cardState.tasks).map(([cardId, card], index) => {
                        return <BoardCard card={card} key={cardId} cardId={cardId} index={index} cardState={cardState} setCardState={setCardState}/>
                    })
                }
            </MyDragDropContext>
            {
              cardAdding ? 
              <NewListCardCreateForm  
                cardAddFormRemove={() => setCardAdding(false)}
                cardState={cardState}
                setCardState={setCardState}
                name='card'
              /> :
              <NewListCardAdd cardAddingHandler={() => setCardAdding(true)} name='card' />
            }
          </div>
        </div>
      );
} 

export default BoardMainContainer;
