import { FC, useState, useCallback } from "react";
import "modules/homepage/style.css";
import { Footer } from "modules/homepage/footer";
import { Counter } from "./counter";
import { Link } from "react-router-dom";
import { Header } from "./header";

const title = "Vítame Ťa v našej testovacej aplikácií";
const subTitle =
  "Tvojou úlohou bude refactoring zložky homepage a second-page. Hlavný cieľ bude maximálna optimalizácia výkonu kódu. Urob to tak, aby sa veci rendrovali iba vtedy, keď je to nevyhnutné a aby bol kód dobre štrukturovaný a dobre čitateľný. Ak máš chuť, môžes sa samozrejme pozrieť aj na vizuálnu stránku aplikácie. Prajeme Ti veľa dobrých nápadov. Ukáž čo je v tebe!";

export const Homepage: FC = () => {
  const [apiFetchDone, setApiFetchDone] = useState(false);
  const [clicks, setClicks] = useState(0);

  const dispatchApiFetch = useCallback(() => {
    const timer = setTimeout(() => {
      setApiFetchDone(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClicks = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []);

  return (
    <main className="containter" onClick={handleClicks}>
      <Header title={title} subTitle={subTitle} />
      <div className="body">
        <Counter label="Klik sem" />
        <Counter label="Klik tam" />
        <Link className="link" to={"/second-page"}>
          GO TO SECOND PAGE
        </Link>
      </div>
      <hr />

      <Footer
        clicks={clicks}
        dispatchApiFetch={dispatchApiFetch}
        apiFetchDone={apiFetchDone}
      />
    </main>
  );
};
