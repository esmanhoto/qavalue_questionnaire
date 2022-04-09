import styled from "styled-components";

export const Container = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
`;
