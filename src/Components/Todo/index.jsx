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

const Todo = ({ todo, removeTodo, completeTodo, isLate }) => {
  return (
    <TodoContainer style={{ color: isLate ? "red" : "black" }}>
      <Row>
        <CheckContainer>
          <Checkbox onClick={() => completeTodo(todo.id)} />
          <Checkmark></Checkmark>
        </CheckContainer>

        <Title>{todo.title}</Title>
        <Button onClick={() => removeTodo(todo.id)}>
          <FaTrash size={20} color="#809D3C" />
        </Button>
      </Row>
      <Text>{todo.category}</Text>
      <Row>
        <Text>{todo.date}</Text>
      </Row>
    </TodoContainer>
  );
};

export default Todo;
