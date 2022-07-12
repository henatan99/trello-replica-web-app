import React from "react";
import './index.css';

const BoardTopStrip = () => {
    return (
        <div class="boardpage_top_strip">
            <div>
                <img class="board_earthicon" src="images/earth_green.f5dba22e.svg" />
                <span class="board_message">
                    This board is set to public. Board admins can change its visibility setting at any time.
                </span>
                <a class="board_knowmore">
                    Learn more here
                </a>
            </div>
            <span class="material-icons"></span>
        </div>
    )
}

export default BoardTopStrip;