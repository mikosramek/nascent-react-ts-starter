import styled from "styled-components";
import { Center } from "styles/mixins";

const headerHeight = 80;
const footerHeight = 40;

export const Header = styled.header`
  ${Center}
  height: ${headerHeight}px;
`;

export const Heading = styled.h1`
  margin: 0;
`;

export const Footer = styled.footer`
  ${Center}
  height: ${footerHeight}px;
  font-size: 18px;
`;

export const RouteWrapper = styled.main`
  ${Center}
  height: calc(100vh - ${headerHeight + footerHeight}px);
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;
