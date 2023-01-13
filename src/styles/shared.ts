import styled, { css } from "styled-components";
import { phone, shortScreen, smallPhone, widePhone } from "./media";

export const Wrapper = styled.section`
  border: 1px solid var(--border);
  padding: 25px;
  width: 70%;
  max-width: 1024px;
  border-radius: 20px;
  background: var(--white);
  box-shadow: 0 2px 10px var(--shadow);
  max-height: 100%;
  overflow-y: hidden;
  margin: 0 auto;
  ${phone(css`
    width: 80%;
  `)}
  ${smallPhone(css`
    width: 100%;
  `)}
  ${shortScreen(css`
    overflow-y: scroll;
  `)}
`;

export const Heading = styled.h2`
  position: relative;
  margin: 0;
  margin-bottom: 15px;
  text-align: center;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px;
    height: 2px;
    width: 100%;
    background: var(--black);
  }
  ${phone(css`
    font-size: 18px;
  `)}
`;

export const Button = styled.button`
  padding: 6px 12px 8px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: auto;
  }
  ${phone(css`
    font-size: 16px;
    padding: 3px 6px 4px;
  `)}
`;
