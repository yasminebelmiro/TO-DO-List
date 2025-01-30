import React, { useState } from "react";
import {
  HomeContainer,
  ListContainer,
  Title,
  SearchInput,
  Button,
  Row,
  Modal,
  ModalContent,
  Close,
  TodosContainer,
} from "./style";
import Todo from "../Todo/index";
import TodoForm from "../TodoForm/index";

const index = () => {
  const [modalForm, setModalForm] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Task 1",
      category: "Trabalho",
      date: "2025-01-29",
      isComplete: false,
    },
    {
      id: 2,
      title: "Task 2",
      category: "Estudos",
      date: "2025-01-28",
      isComplete: false,
    },
    {
      id: 3,
      title: "Task 3",
      category: "Pessoal",
      date: "2025-02-22",
      isComplete: false,
    },
    {
      id: 4,
      title: "Task 4",
      category: "Estudos",
      date: "2025-01-22",
      isComplete: false,
    },
    {
      id: 5,
      title: "Task 5",
      category: "Trabalho",
      date: "2024-12-01",
      isComplete: false,
    },
    {
      id: 6,
      title: "Task 6",
      category: "Pessoal",
      date: "2025-01-30",
      isComplete: false,
    },
  ]);

  const addTodo = (title, category, date) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        title,
        category,
        date,
        isComplete: false,
      },
    ];
    setTodos(newTodos);
  };

  const RemoveTodo = (id) => {
    const newTodos = [...todos];
    const filtereddTodo = newTodos.filter((todo) =>
      todo.id !== id 
    );
    setTodos(filtereddTodo);
    console.log("remove" + filtereddTodo)
  };

  const CompleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isComplete = !todo.isComplete) : todo
    );
    setTodos(newTodos);
    console.log(newTodos);
  };

  
  return (
    <HomeContainer>
      <ListContainer>
        <Title>Todo List</Title>
        <Row>
          <SearchInput type="text" placeholder="O que procura?" />
          <Button>Buscar</Button>
          <Button onClick={() => setModalForm(true)}>Nova tarefa</Button>
        </Row>

        {modalForm && (
          <Modal className="modal" onClick={() => setModalForm(false)}>
            <ModalContent
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <Close className="close" onClick={() => setModalForm(false)}>
                &times;
              </Close>
              <TodoForm addTodo={addTodo} />
            </ModalContent>
          </Modal>
        )}
        <TodosContainer>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={RemoveTodo}
              completeTodo={CompleteTodo}
            />
          ))}
        </TodosContainer>
      </ListContainer>
    </HomeContainer>
  );
};

export default index;
