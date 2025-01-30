import styled from "styled-components";

export const TodoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const Title = styled.h3`
  font-family: Oleo Script;
`;

export const Text = styled.p`
  margin-left: 5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;` 

export const CheckContainer = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  user-select: none;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Checkmark = styled.span`
  position: absolute;

  left: 0;
  height: 20px;
  width: 20px;
  background-color: #F4FFC3;
  border-radius: 4px;
  border: 1px solid #F4FFC3;
  transition: background-color 0.3s;

  ${Checkbox}:checked + & {
    background-color: #5D8736;
    border: none;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 7px;
    top: 3px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  ${Checkbox}:checked + &::after {
    display: block;
  }
`;

export const Button = styled.button`
border: none;
background: transparent;
cursor: pointer;
margin-left: 10px;

`
