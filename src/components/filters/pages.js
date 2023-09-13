"use client";

import { BooksContext } from "@/context/book-context-provider";
import { useContext } from "react";

const PagesNumber = () => {
  const { setPagesNumber, pagesNumber } = useContext(BooksContext);

  return (
    <div className="flex flex-col items-center">
      <p className="text-sm md:text-lg font-medium">Numero de paginas</p>
      <small>{pagesNumber}</small>
      <input
        type="range"
        className="w-full"
        min={200}
        max={1200}
        value={pagesNumber}
        onChange={(e) => setPagesNumber(e.target.value)}
      />
    </div>
  );
};

export default PagesNumber;
