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
        task
    } = props;

    const { message, title } = task;

    console.log('card task props', props);
    return (
        <Draggable
            key={`${cardIndex}_${taskIndex}_${hashString(message)}`}
            draggableId={`${cardIndex}_${taskIndex}_${hashString(message)}`}
            index={taskIndex}
            >
            {
                (provided, snapshot) => (
                    <div 
                        className="list_card_task_card_wrapper" 
                        // tabIndex="0" 
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
                        // style={{
                        //     userSelect: "none",
                        //     padding: 16,
                        //     margin: "0 0 8px 0",
                        //     minHeight: "50px",
                        //     backgroundColor: snapshot.isDragging
                        //       ? "#263B4A"
                        //       : "#456C86",
                        //     color: "white",
                        //     ...provided.draggableProps.style
                        //   }}
                    >
                        <div className="task_card_main_content">
                            <div className="task_card_task_label_wrapper" title={title} ></div>
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
