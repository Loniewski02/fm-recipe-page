import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <h2 className=" text-BrandyRed serif mb-6 text-[28px] ">
      {children}
    </h2>
  );
};

export default Heading;
