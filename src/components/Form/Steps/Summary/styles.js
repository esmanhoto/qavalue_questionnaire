import styled from "styled-components";

export const SummaryText = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.textColor};
  line-height: 1.5;
  width: 80%;
  margin: 20px auto 0 auto;
  & span {
    font-weight: 600;
    padding: 3px;
  }
`;
