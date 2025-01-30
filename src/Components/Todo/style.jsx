import styled from "styled-components";

export const TodoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
 
  border-radius: 10px;
  padding: 5px;
  background-color: rgba(244, 255, 195, 0.5);
  
  &:hover {
    box-shadow: 5px 5px rgb(169, 196, 108, 0.5);
  }
`;

export const Title = styled.h3`
  font-family: Oleo Script;
`;

export const Text = styled.p`
  margin-left: 5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

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
  background-color: #a9c46c;
  border-radius: 4px;
  border: none;
  transition: background-color 0.3s;

  ${Checkbox}:checked + & {
    background-color: #5d8736;
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
  position: relative;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-left: 10px;
  left: 65%;
`;
