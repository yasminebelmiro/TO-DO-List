import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100wh;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #a9c46c;
`;

export const ListContainer = styled.div`
  width: 55%;
  min-height: 500px;

  background-image: url("https://i.pinimg.com/736x/63/59/91/63599123d7f0048709e3875384f1a156.jpg");
  background-size: contain;
  background-repeat: repeat;

  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 10px 10px #809d3c;
`;

export const Row = styled.div`
  display: row;
  flex-direction: row;
`;

export const Title = styled.h1`
  font-family: Oleo Script;
  font-weight: bold;
  color: #5d8736;
  margin: 30px;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 30px;

  padding-left: 20px;

  border-radius: 20px;
  border: 2px solid #5d8736;

  &:focus {
    outline: 1px solid #5d8736;
  }

  &::placeholder {
    color: #5d8736;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 35px;

  border-radius: 20px;
  border: none;

  margin-left: 10px;
  background-color: #5d8736;

  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #809d3c;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
`;

export const TodosContainer = styled.div`
  width: 70%;
  display: grid;
  gap: 20px;
  margin-bottom: 40px;
  grid-template-columns: auto auto;
`;

export const FilterContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const Text = styled.p`
  font-weight: bold;
`;

export const ButtonFilter = styled.button`
  width: 80px;
  height: 30px;
  border: transparent;
  background-color: #809d3c;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #a9c46c;
  }
`;
