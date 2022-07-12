import React from "react";

const CardTask = (props) => {
    const { 
        draggableContextId, 
        draggableId, 
        ariaDescribed, 
        dragHandleDraggableId, 
        dragHandleContextId, 
        draggable,
        title,
        style,
        message
    } = props.props;

    console.log('task props', props);
    console.log('task message', message)
    return (
        <div 
            className="list_card_task_card_wrapper" 
            // data-rbd-draggable-context-id={draggableContextId} 
            // data-rbd-draggable-id={draggableId} 
            tabIndex="0" 
            role="button" 
            // aria-describedby={ariaDescribed} 
            // data-rbd-drag-handle-draggable-id={dragHandleDraggableId} 
            // data-rbd-drag-handle-context-id={dragHandleContextId} 
            // draggable={draggable}
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

export default CardTask;