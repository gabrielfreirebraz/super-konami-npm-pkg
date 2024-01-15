/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { KonamiBackground } from "./components/KonamiBackground";
import { Konami } from "./utils/konami";



function App(props?: PropsKonami) {

  const [konamiActive, setKonamiActive] = useState(false); // default is false

  useEffect(() => {
      console.log(konamiActive)

      Konami.start(() => { 
          setKonamiActive((currValue: any) => !currValue);
      });

  },[konamiActive])

  return (
      <>
          {konamiActive && <KonamiBackground {...props} />} 
      </>
  );
}

export default App
