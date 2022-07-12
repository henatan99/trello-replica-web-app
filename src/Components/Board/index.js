import React from 'react';
import BoardMainContainer from './BoardMain';
import BoardTopStrip from './boardTopStrip';

const Board = () => (
  <main>
    <section>
      <BoardTopStrip />
      <BoardMainContainer />
    </section>
  </main>
);

export default Board;
