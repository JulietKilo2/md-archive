import { Tags } from "@/models/tags";
import React, { FC } from "react";

type Params = {
  title: string;
  tags?: Tags[];
  description: string | undefined;
};

const ItemCard: FC<Params> = ({ title, tags, description }) => {
  return (
    <li className="card-layout py-[28px] px-[38px]">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <div className="mt-[8px]">
        {tags?.map((tag, index) => (
          <span key={index} className="font-light text-sm mr-2">
            #{tag}
          </span>
        ))}
      </div>
      <p className="font-normal line-clamp-2 mt-[12px]">{description}</p>
    </li>
  );
};

export default ItemCard;
