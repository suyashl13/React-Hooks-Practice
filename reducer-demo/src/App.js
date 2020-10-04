import React, { useReducer } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import todoReducer from './context/reducer'
import { TodoContext } from './context/TodoContext';
import './App.css'
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  const [todo, dispatch] = useReducer(todoReducer, [])
  return (
    <TodoContext.Provider value={{todo, dispatch}}>
      <Container fluid>
        <h1>Todo App with Context Api</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  )
}

export default App;