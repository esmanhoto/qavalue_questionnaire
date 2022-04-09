import styled from "styled-components";

export const Container = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
`;

export const RadioOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 25px 0px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.textColor};
  margin: 2px 20px 0 5px;
  font-weight: 600;
`;

export const RadioInput = styled.input`
  appearance: none;
  color: #fff;
  width: 10px;
  height: 10px;
  border: 0.1em solid #fff;
  margin-top: 5px;
  border-radius: 50%;
  transition: 120ms transform ease-in-out;
  &:checked {
    transform: scale(1.3);
    background-color: rgba(252, 158, 0, 1);
    transition: 120ms transform ease-in-out;
  }
`;
