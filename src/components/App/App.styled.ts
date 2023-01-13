import styled, { css } from "styled-components";
import { Center } from "styles/mixins";
import image from "assets/pexels-tyler-lastovich-572688.jpg";
import { phone } from "styles/media";

const headerHeight = 80;
const phoneHeaderHeight = 40;
const footerHeight = 40;
const phoneFooterHeight = 20;

export const Header = styled.header`
  ${Center}
  height: ${headerHeight}px;
  background: var(--white);
  border-bottom: 1px solid var(--border);
  ${phone(css`
    height: ${phoneHeaderHeight}px;
  `)}
`;

export const Heading = styled.h1`
  margin: 0;
  ${phone(css`
    font-size: 20px;
  `)}
`;

export const Footer = styled.footer`
  ${Center}
  height: ${footerHeight}px;
  font-size: 18px;
  background: var(--white);
  border-top: 1px solid var(--border);
  ${phone(css`
    font-size: 12px;
    height: ${phoneFooterHeight}px;
  `)}
`;

export const RouteWrapper = styled.main`
  ${Center}
  height: calc(100vh - ${headerHeight + footerHeight}px);
  ${phone(css`
    height: calc(100vh - ${phoneHeaderHeight + phoneFooterHeight}px);
  `)}
`;

export const AppWrapper = styled.div`
  background: url(${image}) center center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
