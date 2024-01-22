/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from "styled-components";

interface PropsStylesKonami {
  backgroundImage?: string | null | undefined;
  text: string;
}

export const KonamiBackgroundContainer: any = styled.div<PropsStylesKonami>`
  ${(props) => {
    if (props?.backgroundImage) {
      return css`
        background: url(${props.backgroundImage}) no-repeat top left;
      `;
    } else {
      return css`
        background: red;
      `;
    }
  }}
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: top;

  h1 {
    margin: 5rem;
    padding: 2rem;
    color: #fff;
    font-size: 2rem;
    background-color: ${(props) => (props?.text ? "#000" : "transparent")};
    height: fit-content;
  }
`;
