import { memo, FC } from "react";

interface Props {
  title: string;
  subTitle: string;
}

const HeaderBase: FC<Props> = ({ title, subTitle }) => (
  <header className="header">
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
  </header>
);

export const Header = memo(HeaderBase);
