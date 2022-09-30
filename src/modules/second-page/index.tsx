import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
export const SecondPage: FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        return prevSeconds + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container second-page">
      doba trvania: {seconds}
      <br />
      <div>Text na zobrazenie</div>
      <Link className="link" to={"/"}>
        GO TO HOME PAGE
      </Link>
    </div>
  );
};
