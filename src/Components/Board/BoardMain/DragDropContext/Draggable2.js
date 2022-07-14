import React from "react";
import Task from "./task";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const hashString = str => {
  let hash = 0,
    i,
    chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const TaskList = ({
  tasks,
  setTasks,
  handleRemoveTask,
  handleCompleteTask
}) => {
  // a little function to help us with reordering the result
  const reorderTasks = (tasks, startIndex, endIndex) => {
    const result = [...tasks];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    // change background colour if dragging
    background: isDragging ? "#eee" : "#fff",
    // styles we need to apply on draggables
    ...draggableStyle
  });

  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorderTasks(
      tasks,
      result.source.index,
      result.destination.index
    );

    setTasks(items);
  };

  return tasks && tasks.length > 0 ? (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="task-list-container"
          >
            {tasks.map((task, index) => (
              <Draggable
                key={`${index}_${hashString(task.description)}`}
                draggableId={`${index}_${hashString(task.description)}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    className="task"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <Task
                      task={task}
                      index={index}
                      handleRemoveTask={handleRemoveTask}
                      handleCompleteTask={handleCompleteTask}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  ) : null;
};

export default TaskList;
