import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string;
  symbol?: number | string;
  isTop?: boolean;
};

const Item: React.FC<Props> = (props) => {
  return (
    <li
      className={`flex ${props.isTop ? "items-start" : "items-center"} gap-4 leading-5`}
    >
      <span className={`ml-2 md:mx-2 ${props.className}`}>{props.symbol}</span>
      <p className="text-WengeBrown">{props.children}</p>
    </li>
  );
};

export default Item;
