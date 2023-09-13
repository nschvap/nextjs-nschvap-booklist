"use client";
import data from "../../lib/filters.json";
import { useContext } from "react";
import { BooksContext } from "@/context/book-context-provider.js";

const Descendent = () => {
  const { orderBy, setOrderBy, setIsDescendent, isDescendent } =
    useContext(BooksContext);

  return (
    <div className="flex justify-center items-center flex-col">
      {(orderBy == "year" || orderBy == "pages") && (
        <div className="flex gap-2 flex-col-reverse items-center justify-center">
          <span
            onClick={() => setIsDescendent(!isDescendent)}
            className={`w-5 h-5 ${
              isDescendent && "bg-blue-500"
            } border-2 border-blue-500 rounded-full cursor-pointer duration-200`}
          ></span>
          <small>{" "}</small>
          <label htmlFor="descendente" className="text-sm md:text-lg font-medium">
            Orden Descendiente
          </label>
        </div>
      )}
    </div>
  );
};

export default Descendent;
