"use client";
import { useContext, useEffect, useMemo, useState } from "react";

import Book from "./book";
import { BooksContext } from "@/context/book-context-provider";

export default function RenderBooks() {
  const { genre, orderBy, pagesNumber, isDescendent, readList } =
    useContext(BooksContext);

  const [data, setData] = useState([]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setBookList(data.sort((a, b) => b.book.year - a.book.year));
      });
  }, []);

  const sortedBooks = useMemo(() => {
    let sorted = [...data];

    switch (orderBy) {
      case "year":
        sorted.sort((a, b) => {
          return isDescendent
            ? b.book.year - a.book.year
            : a.book.year - b.book.year;
        });
        break;
      case "pages":
        sorted.sort((a, b) => {
          return isDescendent
            ? a.book.pages - b.book.pages
            : b.book.pages - a.book.pages;
        });
        break;
      case "random":
        sorted.sort(() => Math.random() - 0.5);
        break;
      default:
        break;
    }

    return sorted;
  }, [data, orderBy, isDescendent]);

  useEffect(() => {
    if (genre === "Cualquiera") {
      setBookList(sortedBooks);
    } else {
      setBookList(sortedBooks.filter((x) => x.book.genre === genre));
    }
  }, [genre, sortedBooks]);

  useEffect(() => {
    setBookList(data.filter((x) => x.book.pages <= pagesNumber));
  }, [pagesNumber]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-7">
      {bookList
        .filter((x) => !readList.some((b) => b.ISBN === x.book.ISBN))
        .map(({ book }, i) => {
          return <Book key={book["ISBN"]} id={i} book={book} />;
        })}
    </div>
  );
}
