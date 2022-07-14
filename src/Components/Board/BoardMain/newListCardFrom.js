import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const NewListCardAdd = (props) => {
  const { cardAddingHandler } = props;
  return (
    <div className="newListCard_NewListWrapper" onClick={cardAddingHandler} onKeyDown="">
      <div className="newListCard_AddMoreWrapper">
        <span className="material_icons"></span>
        Add another list
      </div>
    </div>
  );
};

NewListCardAdd.defaultProps = {
  cardAddingHandler: null,
};

NewListCardAdd.propTypes = {
  cardAddingHandler: PropTypes.func,
};

export const NewTaskAdd = (props) => {
  const { taskAddingHandler } = props;
  return (
    <div>
      <div className=" ">
        <div className="newTaskCard_AddMoreWrapper" onClick={taskAddingHandler}>
          <span className="material_icons"></span>
          Add a card
        </div>
      </div>
    </div>
  );
};

NewTaskAdd.defaultProps = {
  taskAddingHandler: null,
};

NewTaskAdd.propTypes = {
  taskAddingHandler: PropTypes.func,
};

export const NewListCardCreateForm = (props) => {
  const { cardAddFormRemove, cardState, setCardState } = props;
  const [cardName, addCardName] = useState('');

  const cardAddFormSubmit = (e) => {
    e.preventDefault();
    const cards = { ...cardState };
    cards.addCard(cardName);
    setCardState(cards);
    cardAddFormRemove();
  };

  return (
    <div className="newListCard_NewListWrapper newListCard_CreateFormOpen">
      <div>
        <form onSubmit={cardAddFormSubmit}>
          <input
            className="newListCard_InputBox"
            type="text"
            required=""
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
  );
};

NewListCardCreateForm.defaultProps = {
  cardAddFormRemove: null,
  cardState: {},
  setCardState: null,
};

NewListCardCreateForm.propTypes = {
  cardAddFormRemove: PropTypes.func,
  cardState: PropTypes.shape({
    tasks: PropTypes.objectOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        data: PropTypes.instanceOf(Array),
      }),
    ),
    lastCard: PropTypes.number,
    lastTask: PropTypes.number,
    addCard: PropTypes.func,
    addTask: PropTypes.func,
  }),
  setCardState: PropTypes.func,
};

export const NewTaskCreateForm = (props) => {
  const {
    taskAddFormRemove, cardState, setCardState, cardId,
  } = props;
  const [taskMessage, setTaskMessage] = useState();

  const taskAddFormSubmit = (e) => {
    e.preventDefault();
    const cards = { ...cardState };
    cards.addTask(cardId, taskMessage);
    setCardState(cards);
    taskAddFormRemove();
  };

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
              <button className="button_buttonwrapper button_primary" type="submit">
                <span className="button_label">Add card</span>
              </button>
              <span className="material_icons" onClick={taskAddFormRemove}></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

NewTaskCreateForm.defaultProps = {
  taskAddFormRemove: null,
  cardState: {},
  setCardState: null,
  cardId: null,
};

NewTaskCreateForm.propTypes = {
  taskAddFormRemove: PropTypes.func,
  cardState: PropTypes.shape({
    tasks: PropTypes.objectOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        data: PropTypes.instanceOf(Array),
      }),
    ),
    lastCard: PropTypes.number,
    lastTask: PropTypes.number,
    addCard: PropTypes.func,
    addTask: PropTypes.func,
  }),
  setCardState: PropTypes.func,
  cardId: PropTypes.number,
};
