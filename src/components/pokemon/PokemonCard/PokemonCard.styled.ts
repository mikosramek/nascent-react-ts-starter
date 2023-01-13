import styled, { css } from "styled-components";
import { PokemonTypes } from "components/pokemon/PokemonTypes";
import { phone, smallPhone, tablet } from "styles/media";

export const InnerWrapper = styled.div`
  position: relative;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const ImageBase = css`
  object-fit: contain;
  position: absolute;
  left: 50%;
`;

export const Image = styled.img`
  ${ImageBase}
  z-index: 2;
  transition: all 0.1s ease-in;
  color: var(--white);
  height: 96px;
  width: 96px;
  top: 25px;
  transform: translate(-50%, 0);
`;

type PlaceholderProps = {
  loaded: boolean;
};
export const ImagePlaceholder = styled.div<PlaceholderProps>`
  ${ImageBase}
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background-color: var(--grey);
  z-index: 3;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-out;
  ${({ loaded }) => css`
    opacity: ${loaded ? 0 : 1};
  `}
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 36px;
    background: var(--impact);
    border-radius: 36px 36px 0 0;
  }
`;

export const Name = styled.h3`
  position: relative;
  font-size: 16px;
  z-index: 4;
  background: var(--text-backing);
  padding: 4px 12px 3px;
  color: var(--white);
  margin: 10px 0 0;
  text-transform: capitalize;
  border-radius: 15px;
`;

export const Types = styled(PokemonTypes)`
  margin: 0 0 10px;
  position: relative;
  z-index: 4;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0;
  border: none;
  cursor: inherit;
  background: none;
  height: 100%;
  &:hover,
  &:focus {
    ${Image} {
      top: 10px;
      transition: all 0.2s ease-out;
    }
  }
`;

export const Wrapper = styled.li`
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 2px 6px var(--shadow);
  margin: 5px;
  width: calc((100% - 40px) / 4); // TODO: breakpoint this
  cursor: pointer;
  height: 150px;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;
  &:hover {
    top: 3px;
    box-shadow: 0 2px 2px var(--shadow);
    transition: all 0.2s ease-out;
  }
  ${tablet(css`
    width: calc((100% - 30px) / 3);
  `)}
  ${phone(css`
    width: calc((100% - 20px) / 2);
  `)}
  ${smallPhone(css`
    width: 100%;
  `)}
`;
