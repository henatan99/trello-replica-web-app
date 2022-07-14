import React from "react";
import CardTask from "./cardTask";
import { Droppable } from "react-beautiful-dnd";

const BoardCard = (props) => {
    const { cardId, index, card } = props;
    const { data, title } = card;

    return (
        <div className="list_card_main_container">
            <div className="list_card_title_wrapper">
                <h3 className="list_card_title">
                    {title}
                </h3>
                <span className="material_icons"></span>
            </div>

            <Droppable droppableId={cardId} key={cardId}>
                {(provided, snapshot) => (
                    <div 
                    className="list_card_task_list_wrapper" 
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    // style={{
                    //     background: snapshot.isDraggingOver
                    //       ? "lightblue"
                    //       : "lightgrey",
                    //     padding: 4,
                    //     width: 250,
                    //     minHeight: 500
                    //   }}
                    >
                        {
                            data && data.length > 0 &&  data.map((task, index) => {
                                const { idx } = task;
                                return(
                                    <CardTask key={idx} cardIndex={cardId} taskIndex={idx} index={index} task={task} />
                                )
                            })
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <div>
                <div className=" ">
                    <div className="newTaskCard_AddMoreWrapper">
                        <span className="material_icons"></span>
                        Add a card
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardCard;