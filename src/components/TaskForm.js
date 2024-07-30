import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTask(taskName);
    setTaskName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add a new task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">Add Task</Button>
    </Form>
  );
};

export default TaskForm;
