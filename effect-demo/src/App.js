import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Todos from './Components/Todos';
import { Container } from 'reactstrap';
import TodoForm from './Components/TodoForm';

function App() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({ localStorage });
    if (localTodos) {
      setTodos(JSON.parse(localTodos))
    }
  }, [])

  const addTodos = async todo => {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  const markComplete = (id) => {
    setTodos(todos.filter(todo=>todo.id !== id))
  }

  return (
    <Container fluid>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
}

export default App