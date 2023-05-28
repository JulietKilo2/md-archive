import React, { FC } from "react";

type Params = {
  title?: string;
  children?: React.ReactNode;
};

const DefaultCard: FC<Params> = ({ title, children }) => {
  return (
    <div className="card-layout">
      {title && (
        <h3 className="text-md font-semibold border-b border-gray-100 py-[8px] px-[16px]">
          {title}
        </h3>
      )}
      <div className="py-[12px] px-[16px]">{children}</div>
    </div>
  );
};

export default DefaultCard;
