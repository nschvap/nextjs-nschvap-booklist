"use client";
import data from "../../lib/filters.json";
import { useContext } from "react";
import { BooksContext } from "@/context/book-context-provider.js";

const FilterByGenre = () => {
  const { setGenre } = useContext(BooksContext);

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-sm md:text-lg font-medium">Genero</span>
      <select
        onChange={(e) => setGenre(e.target.value)}
        className="px-2 md:px-4 py-1 border-[1px] border-zinc-900 font-black outline-none rounded"
      >
        {data.genres.map((g, i) => {
          return <option key={i}>{g}</option>;
        })}
      </select>
    </div>
  );
};

export default FilterByGenre;
