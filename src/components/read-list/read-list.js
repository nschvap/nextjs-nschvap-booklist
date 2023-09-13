"use client";

import { BooksContext } from "@/context/book-context-provider";
import { useContext } from "react";
import Book from "../books/book";

function ReadList() {
  const { readList } = useContext(BooksContext);

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center bg-zinc-100 rounded p-4 max-w-xl">
        <h2 className="mb-4 text-2xl font-black text-center">
          Lista de lectura
        </h2>
        <div className="flex flex-wrap gap-4 lg:items-start items-center lg:justify-start justify-center">
          {readList.map((book, i) => (
            <Book key={i} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReadList;
