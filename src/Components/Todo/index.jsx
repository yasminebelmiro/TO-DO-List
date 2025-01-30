import React from "react";

import {
  Button,
  Checkbox,
  CheckContainer,
  Checkmark,
  Row,
  Text,
  Title,
  TodoContainer,
} from "./style";
import { FaTrash } from "react-icons/fa";

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <TodoContainer>
      <Row>
        <CheckContainer>
          <Checkbox onClick={() => completeTodo(todo.id)} />
          <Checkmark></Checkmark>
        </CheckContainer>

        <Title>{todo.title}</Title>
      </Row>
      <Text>{todo.category}</Text>
      <Row>
      <Text>{todo.date}</Text>
      <Button onClick={() => removeTodo(todo.id)} >
        <FaTrash size={20}color="#809D3C"/>
      </Button>
      </Row>
      
    </TodoContainer>
  );
};

export default Todo;
