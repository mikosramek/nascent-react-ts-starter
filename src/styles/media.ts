import { css } from "styled-components";

type Styles = ReturnType<typeof css>;

export const shortScreen = (styles: Styles) => {
  return css`
    @media (max-height: 480px) {
      ${styles}
    }
  `;
};

export const tablet = (styles: Styles) => {
  return css`
    @media (max-width: 1024px) {
      ${styles}
    }
  `;
};

export const widePhone = (styles: Styles) => {
  return css`
    @media (max-width: 815px) {
      ${styles}
    }
  `;
};

export const phone = (styles: Styles) => {
  return css`
    @media (max-width: 768px) {
      ${styles}
    }
  `;
};

export const smallPhone = (styles: Styles) => {
  return css`
    @media (max-width: 400px) {
      ${styles}
    }
  `;
};
