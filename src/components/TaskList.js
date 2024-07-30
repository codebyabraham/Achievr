import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ListGroup variant="flush">
      {tasks.map(task => (
        <ListGroup.Item key={task.id} className="d-flex align-items-center justify-content-between">
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => toggleTask(task.id)}
          >
            {task.name}
          </span>
          <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;
