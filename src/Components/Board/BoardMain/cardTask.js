import React from "react";
import { Draggable } from "react-beautiful-dnd";

const hashString = str => {
    let hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
};


const getItemStyle = (isDragging, draggableStyle) => ({
    // change background colour if dragging
    background: isDragging ? "#eee" : "#fff",
    // styles we need to apply on draggables
    ...draggableStyle
});


const CardTask = (props) => {
    const {
        cardIndex,
        taskIndex, 
        index,
        task
    } = props;

    const { message } = task;

    console.log('card task props', props);
    return (
        <Draggable
            key={`${cardIndex}_${taskIndex}_${hashString(message)}`}
            draggableId={`${cardIndex}_${taskIndex}_${hashString(message)}`}
            index={index}
            >
            {
                (provided, snapshot) => (
                    <div 
                        className="list_card_task_card_wrapper" 
                        role="button" 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={
                            getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                            )
                        }
                    >
                        <div className="task_card_main_content">
                            <div className="task_card_task_label_wrapper" title="" ></div>
                            <h3 className="task_card_message">
                                {message}
                            </h3>
                        </div>
                    </div>
                )
            }
        </Draggable>
    )
}

export default CardTask;
