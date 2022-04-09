import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 400px;
  background: ${({ theme }) => theme.background};
  margin: 50px auto;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 2px 7px 3px rgba(0, 0, 0, 0.5);
  & img {
    align-self: center;
    height: 36px;
    width: 200px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;
