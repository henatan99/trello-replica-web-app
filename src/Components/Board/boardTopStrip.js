import React from 'react';
import './index.css';

const BoardTopStrip = () => (
  <div className="boardpage_top_strip">
    <div>
      <img className="board_earthicon" src="images/earth_green.f5dba22e.svg" alt="earth_green" />
      <span className="board_message">
        This board is set to public. Board admins can change its visibility setting at any time.
      </span>
      <a className="board_knowmore" href="/">
        Learn more here
      </a>
    </div>
    <span className="material_icons"></span>
  </div>
);

export default BoardTopStrip;
