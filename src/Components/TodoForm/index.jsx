import React, { useState } from "react";
import {
  Form,
  FormContainer,
  Subtitle,
  Button,
  Input,
  Option,
  Select,
} from "./style";

const index = ({ addTodo }) => {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    if (!title && !category && !date) return;
    addTodo(title, category, date);
    console.log(title, category, date);
  };

  return (
    <FormContainer>
      <Subtitle>Adicionar tarefa</Subtitle>

      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Nome da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Data de entrega"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <Option value="">Selecione uma categoria</Option>
          <Option value="Trabalho">Trabalho</Option>
          <Option value="Estudos">Estudos</Option>
          <Option value="Pessoal">Pessoal</Option>
        </Select>
        <Button type="submit">Criar</Button>
      </Form>
      
    </FormContainer>
  );
};

export default index;
