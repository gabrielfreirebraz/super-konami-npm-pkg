/* eslint-disable @typescript-eslint/no-explicit-any */
import { KonamiBackgroundContainer } from "./styles";


export const KonamiBackground = (props?: PropsKonami | any) => {

  return (
    <KonamiBackgroundContainer {...props}>
      <h1>{props?.text ?? ''}</h1>
    </KonamiBackgroundContainer>
  )
};
