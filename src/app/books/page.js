"use client";

import Aside from "@/components/aside/aside";
import RenderBooks from "@/components/books/render";
import FiltersContainer from "@/components/filters/filters-container";
import ReadList from "@/components/read-list/read-list";
import { BooksContext } from "@/context/book-context-provider";
import { useContext } from "react";

const Books = () => {
  const { readList } = useContext(BooksContext);

  return (
    <main className="flex lg:flex-row flex-col justify-center items-center lg:items-start gap-8 px-4 py-7">
      <header className="lg:hidden p-4 w-full">
        <FiltersContainer />
      </header>
      <aside className="hidden lg:block">
        <Aside />
      </aside>
      <RenderBooks />
      {readList.length > 0 && <ReadList />}
    </main>
  );
};

export default Books;
