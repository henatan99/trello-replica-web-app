import React from 'react';
import './index.css';

const BoardTitleWrapper = () => (
  <div className="board_title_wrapper">
    <h1 className="board_title">
      Kanban Board
    </h1>
    <div className="board_star_wrapper">
      <span className="material_icons"></span>
    </div>
    <div className="board_separator" />
    <button className="button_buttonwrapper button_secondary">
      <img className="button_icon" src="images/earth_white.b0d834ac.svg" />
      <span className="button_label">
        Public
      </span>
    </button>
    <div className="board_separator" />
    <span className="user_avatar_default">
      AH
    </span>
  </div>
);

export default BoardTitleWrapper;
