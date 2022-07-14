import React, { useState } from "react";

export const NewListCardAdd = (props) => {
    const { cardAddingHandler } = props;
    return (
        <div className="newListCard_NewListWrapper" onClick={cardAddingHandler}>
            <div className="newListCard_AddMoreWrapper">
            <span className="material_icons"></span>
                Add another list
            </div>
        </div>
    )
}

export const NewTaskAdd = (props) => {
    const { taskAddingHandler} = props;
    return (
        <div>
            <div className=" ">
                <div className="newTaskCard_AddMoreWrapper" onClick={taskAddingHandler} >
                    <span className="material_icons"></span>
                    Add a card
                </div>
            </div>
        </div> 
    )
}

export const NewListCardCreateForm = (props) => {
    const { cardAddFormRemove, cardState, setCardState } = props;
    console.log('cardState', cardState);
    const [cardName, addCardName] = useState('');

    const cardAddFormSubmit = (e) => {
        e.preventDefault();
        const cards = {...cardState};
        cards.addCard(cardName);
        setCardState(cards);
        cardAddFormRemove();
    }

    return (
        <div className="newListCard_NewListWrapper newListCard_CreateFormOpen">
            <div>
                <form onSubmit={cardAddFormSubmit}>
                    <input 
                    className="newListCard_InputBox" 
                    type="text" required="" 
                    placeholder="Enter list title..." 
                    name="listTitle"
                    onChange={(e) => addCardName(e.target.value)}
                    />
                    <div className="newListCard_ButtonWrapper">
                        <button className="button_buttonwrapper button_primary" type="submit">
                            <span className="button_label">Add list</span>
                        </button>
                        <span className="material_icons" onClick={cardAddFormRemove}></span>
                    </div>
                </form>
            </div>
        </div>
    )
}


export const NewTaskCreateForm = (props) => {
    const { taskAddFormRemove, cardState, setCardState, cardId } = props;
    const [taskMessage, setTaskMessage] = useState();

    const taskAddFormSubmit = (e) => {
        e.preventDefault();
        const cards = {...cardState};
        cards.addTask(cardId, taskMessage);
        setCardState(cards);
        taskAddFormRemove();
    }

    return (
        <div>
            <div className=" ">
                <div>
                    <form onSubmit={taskAddFormSubmit}>
                        <input 
                            className="NewTaskCard_InputBox" 
                            type="text" 
                            required="" 
                            placeholder="Enter a title for this card..." 
                            name="cardTitle"
                            onChange={(e) => setTaskMessage(e.target.value)}
                        />
                        <div className="NewTaskCard_ButtonWrapper">
                            <button className="button_buttonwrapper button_primary" type='submit'>
                                <span className="button_label">Add card</span>
                            </button>
                            <span className="material_icons" onClick={taskAddFormRemove}></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}