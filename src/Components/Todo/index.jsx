import React from "react";
import {
  Text,
  Title,
  TodoContainer,
} from "./style";

const Todo = (todo) => {
  return (
    <TodoContainer>
     

      <Title>{todo.title}</Title>
      <Text>{todo.category}</Text>
      <Text>{todo.date}</Text>
      <input type="checkbox" />
    </TodoContainer>
  );
};

export default Todo;
