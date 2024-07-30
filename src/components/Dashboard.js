import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../App.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Container fluid className="p-3 bg-light min-vh-100">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center display-5">Task Manager</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mx-auto mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <TaskForm addTask={addTask} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <h4 className="mb-0">Tasks</h4>
            </Card.Header>
            <Card.Body>
              <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
