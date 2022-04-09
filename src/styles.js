import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  position: relative;
`;

export const Theme = styled.div`
  position: absolute;
  top: 91%;
  left: 55%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  font-size: 11px;
  letter-spacing: 1.4px;
  justify-content: flex-end;
  margin-top: auto;
  & p {
    margin-right: 10px;
    color: inherit;
  }
  & button {
    height: 20px;
    font-size: inherit;
    letter-spacing: inherit;
    font-weight: 500;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 1px 7px 2px #fca00042;
    /* background: ${({ theme }) => theme.secondaryColor}; */
    background-color: #171e19;
    color: #fff;
    &:last-child {
      background-color: #c3baae;
      color: #171e19;
      font-weight: bold;
    }
  }
`;
