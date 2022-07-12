import React from "react";
import CardTask from "./cardTask";

const BoardCard = (props) => {
    const { data, title, droppableId, droppableContextId } = props.props;
    console.log('card props', props);
    console.log('data', data);
    console.log('title', title);

    return (
        <div className="list_card_main_container">
            <div className="list_card_title_wrapper">
                <h3 className="list_card_title">
                    {title}
                </h3>
                <span className="material_icons"></span>
            </div>

            <div className="list_card_task_list_wrapper" data-rbd-droppable-id={droppableId} data-rbd-droppable-context-id={droppableContextId}>
                {
                    data && data.length > 0 &&  data.map((task) => {
                        const { idx } = task;
                        return(
                            <CardTask props={task} key={idx} />
                        )
                    })
                }
            </div>

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