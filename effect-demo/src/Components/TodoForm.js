import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import { v4 } from 'uuid'

const TodoForm = ({ addTodos }) => {
    const [todoString, setTodoString] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (todoString === "") {
        return alert("Please fill some value");
      }
      const todo = {
        todoString: todoString,
        id: v4()
      };
  
      addTodos(todo);
  
      setTodoString("");
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="todo"
              id="todo"
              placeholder="Enter a todo string"
              value={todoString}
              onChange={e => setTodoString(e.target.value)}
            />
            <InputGroupAddon addonType="prepend">
              <Button type="submit" color="success">Add Todo</Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  };
  
  export default TodoForm;
  