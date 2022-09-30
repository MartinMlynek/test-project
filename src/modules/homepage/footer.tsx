import { FC } from "react";

interface Props {
  clicks: number;
  apiFetchDone: boolean;
  dispatchApiFetch(): void;
}

export const Footer: FC<Props> = ({
  clicks,
  apiFetchDone,
  dispatchApiFetch,
}) => {
  if (clicks % 5 !== 0) return null;
  const someBadassComponent = <div>half clicks: {clicks / 2}</div>;

  return (
    <footer>
      {someBadassComponent}
      <div>click counter: {clicks}</div>
      <button onClick={dispatchApiFetch}> API CALL </button>
      <div>API status: {apiFetchDone ? "Done" : "Not done"}</div>
    </footer>
  );
};
