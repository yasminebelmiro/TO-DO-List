import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled.h2`
  font-family: Oleo Script;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  margin-top: 10px;

  padding-left: 10px;

  border-radius: 10px;
  border: 2px solid #809D3C;
  color: #809D3C;

  &:focus {
    outline: 1px solid #809D3C;
  }

  &::placeholder {
    color: #809D3C;
  }
`;

export const Select = styled.select`
  height: 30px;
  margin-top: 10px;

  border-radius: 10px;
  border: 2px solid #809D3C;

  color: #809D3C;

  &:focus {
    outline: 1px solid #809D3C;
  }

  &::placeholder {
    color: #809D3C;
  }
`;

export const Option = styled.option`
  color: #809D3C;
`;

export const Button = styled.button`
  height: 30px;

  border-radius: 20px;
  border: none;
  margin-top: 10px;
  background-color: #809D3C;

  color: #ffffff;
  cursor: pointer;
`;
