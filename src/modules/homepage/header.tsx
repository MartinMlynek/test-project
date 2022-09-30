import { memo, FC } from "react";

interface Props {
  title: string;
  subTitle: string;
}

export const Header: FC<Props> = memo(({ title, subTitle }) => (
  <header className="header">
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
  </header>
));
