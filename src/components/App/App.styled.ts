import styled from "styled-components";
import { Center } from "styles/mixins";
import image from "assets/pexels-tyler-lastovich-572688.jpg";

const headerHeight = 80;
const footerHeight = 40;

export const Header = styled.header`
  ${Center}
  height: ${headerHeight}px;
  background: var(--white);
  border-bottom: 1px solid var(--border);
`;

export const Heading = styled.h1`
  margin: 0;
`;

export const Footer = styled.footer`
  ${Center}
  height: ${footerHeight}px;
  font-size: 18px;
  background: var(--white);
  border-top: 1px solid var(--border);
`;

export const RouteWrapper = styled.main`
  ${Center}
  height: calc(100vh - ${headerHeight + footerHeight}px);
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const AppWrapper = styled.div`
  background: url(${image}) center center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
