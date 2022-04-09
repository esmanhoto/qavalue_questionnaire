import styled from "styled-components";

export const Container = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
`;

export const QuestionNumber = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin-top: 15px;
`;

export const QuestionTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};
  line-height: 1.5;
  width: 80%;
  margin: 20px auto 0 auto;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  width: 35%;
  height: 35px;
  margin: 20px 10px;

  border: none;
  border-radius: 20px;
  background: rgba(252, 158, 0, 255);
  box-shadow: 0px 2px 10px 2px rgba(255, 255, 255, 0.3);
  color: ${({ theme }) => theme.textColor};
  &:hover {
    background: rgba(252, 158, 0, 0.7);
  }
  &:active {
    box-shadow: 0px 1px 8px 1px rgba(255, 255, 255, 0.3);
  }
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
`;
