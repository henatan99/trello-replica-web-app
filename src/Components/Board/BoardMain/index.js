import React, { useState } from 'react';
import cards from '../../../helpers/seedData';
import BoardCard from './boardCard';
import BoardTitleWrapper from './boardTitleWrapper';
import './index.css';
import NewListCardForm from './newListCardFrom';
import MyDragDropContext from './DragDropContext/dragDropContext';

const BoardMainContainer = () => {
    console.log('cards', cards);
    const [cardState, setCardState] = useState(cards);
    // const [columns, setColumns] = useState(columnsFromBackend);
    return (
  
        <div className="board_main_container">
          <BoardTitleWrapper />
          <div className="board_list_wrapper">
            <MyDragDropContext
              cards={cardState}
              setCards={setCardState}
            >
                {
                    cardState && cardState.length > 0 && cardState.map((card, index) => {
                        const { idx } = card;
                        return <BoardCard card={card} key={idx} index={index} />
                    })
                }
            </MyDragDropContext>
            <NewListCardForm />
          </div>
        </div>
      );
} 

export default BoardMainContainer;
