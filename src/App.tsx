/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Konami } from "./utils/konami";
import { KonamiBackground } from "./lib";



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
        {konamiActive ? 
            <KonamiBackground {...props} /> : 
                <div id={'init'}>
                    <strong>Super konami:</strong>
                    <label>up, up, down, down, left, right, left, right, b, a, enter</label>
                </div>
            } 
    </>
  );
}

export default App
