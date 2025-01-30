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
  ButtonFilter,
  FilterContainer,
  Text,
} from "./style";
import Todo from "../Todo/index";
import TodoForm from "../TodoForm/index";
import { ImSortAlphaAsc, ImSortAlphaDesc } from "react-icons/im";

const index = () => {
  const [modalForm, setModalForm] = useState(false);
  const [sort, setSort] = useState("Asc");
  const [search, setSearch] = useState("");
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
    const filtereddTodo = newTodos.filter((todo) => todo.id !== id);
    setTodos(filtereddTodo);
    console.log("remove" + filtereddTodo);
  };

  const CompleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isComplete = !todo.isComplete) : todo
    );
    setTodos(newTodos);
    console.log(newTodos);
    IsLate("2020-01-09")
  };

  const IsLate = (date) => {
    const today = new Date();
    const taskDay = new Date(date);

    console.log("Dias" + (today > taskDay));
    
    return taskDay < today ;
  };
  

  return (
    <HomeContainer>
      <ListContainer>
        <Title>Todo List</Title>
        <Row>
          <SearchInput
            type="text"
            placeholder="O que procura?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={() => setSearch(SearchTodo)}>Buscar</Button>
          <Button onClick={() => setModalForm(true)}>Nova tarefa</Button>
        </Row>
        <FilterContainer>
          <Text>Filtrar por</Text>
          <ButtonFilter onClick={() => setSort("Asc")}>
            <ImSortAlphaAsc color="#FFF" size={16} />
          </ButtonFilter>
          <ButtonFilter onClick={() => setSort("Desc")}>
            <ImSortAlphaDesc color="#FFF" size={16} />
          </ButtonFilter>
        </FilterContainer>

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
          {todos
            .filter(
              (todo) =>
                todo.title.toLowerCase().includes(search.toLowerCase()) ||
                todo.category.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) =>
              sort === "Asc"
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title)
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={RemoveTodo}
                completeTodo={CompleteTodo}
                isLate={IsLate(todo.date)}
              />
            ))}
        </TodosContainer>
      </ListContainer>
    </HomeContainer>
  );
};

export default index;
