import React from 'react';
import cards from '../../../helpers/seedData';
import BoardCard from './boardCard';
import BoardTitleWrapper from './boardTitleWrapper';
import './index.css';
import NewListCardForm from './newListCardFrom';

const BoardMainContainer = () => {
    console.log('cards', cards);

    return (
  
        <div className="board_main_container">
          <BoardTitleWrapper />
          <div className="board_list_wrapper">
              {
                  cards && cards.length > 0 && cards.map((card) => {
                      const { idx } = card;
                      return <BoardCard props={card} key={idx} />
                  })
              }
              <NewListCardForm />
          </div>
        </div>
      );
} 

export default BoardMainContainer;
