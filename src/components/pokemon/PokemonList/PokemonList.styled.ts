import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  background: var(--white);
  margin: 10px 0;
  padding: 5px 0;
  max-height: 35vh;
  border-top: 1px solid var(--shadow);
  border-bottom: 1px solid var(--shadow);
`;
