"use client";
import data from "../../lib/filters.json";
import { useContext } from "react";
import { BooksContext } from "@/context/book-context-provider.js";

const OrderBy = () => {
  const { orderBy, setOrderBy, setIsDescendent, isDescendent } =
    useContext(BooksContext);

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-sm md:text-lg font-medium">Ordenar Por</span>
      <select
        onChange={(e) =>
          setOrderBy(
            data.orders.filter((x) => x.label === e.target.value)[0].value
          )
        }
        className="px-2 md:px-4 py-1 border-[1px] border-zinc-900 font-black outline-none rounded"
      >
        {data.orders.map((g, i) => {
          return <option key={i}>{g.label}</option>;
        })}
      </select>
    </div>
  );
};

export default OrderBy;
