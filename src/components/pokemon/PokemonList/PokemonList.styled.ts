import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  max-height: 50vh;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  background: var(--white);
`;

export const ListItem = styled.li`
  margin: 5px;
  width: calc((100% - 40px) / 4);
`;
