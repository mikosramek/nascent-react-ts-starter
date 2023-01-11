import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  max-height: 50vh;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  background: var(--grey);
  padding: 5px;
  margin: 5px;
  width: calc((100% - 40px) / 4);
  &:nth-of-type(4n - 3) {
    margin-left: 0;
  }
  &:nth-of-type(4n) {
    margin-right: 0;
  }
`;
