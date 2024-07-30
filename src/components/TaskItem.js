import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="mr-2"
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name}
        </span>
      </div>
      <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default TaskItem;
