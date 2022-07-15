import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import CardTask from './cardTask';
import { NewTaskAdd, NewTaskCreateForm } from './newListCardFrom';

const BoardCard = (props) => {
  const {
    cardId, card, cardState, setCardState,
  } = props;
  const { data, title } = card;
  const [taskAdding, setTaskAdding] = useState(false);

  return (
    <div className="list_card_main_container">
      <div className="list_card_title_wrapper">
        <h3 className="list_card_title">
          {title}
        </h3>
        <span className="material_icons"></span>
      </div>

      <Droppable droppableId={cardId} key={cardId}>
        {(provided /* , snapshot */) => (
          <div
            className="list_card_task_list_wrapper"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {
                            data && data.length > 0 && data.map((task, index) => {
                              const { idx } = task;
                              return (
                                <CardTask
                                  key={idx}
                                  cardIndex={cardId}
                                  taskIndex={idx}
                                  index={index}
                                  task={task}
                                />
                              );
                            })
                        }
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {
                taskAdding
                  ? (
                    <NewTaskCreateForm
                      taskAddFormRemove={() => setTaskAdding(false)}
                      cardState={cardState}
                      setCardState={setCardState}
                      cardId={cardId}
                    />
                  )
                  : <NewTaskAdd taskAddingHandler={() => setTaskAdding(true)} />
            }

    </div>
  );
};

BoardCard.defaultProps = {
  cardId: null,
  card: null,
  cardState: {},
  setCardState: {},
};

BoardCard.propTypes = {
  cardId: PropTypes.string,
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.instanceOf(Array),
  }),
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

export default BoardCard;
