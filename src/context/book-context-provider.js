"use client";

import { createContext, useEffect, useState } from "react";

export const BooksContext = createContext(null);

export function Provider({ children }) {
  const [genre, setGenre] = useState("Cualquiera");
  const [orderBy, setOrderBy] = useState("year");
  const [pagesNumber, setPagesNumber] = useState(1200);
  const [isDescendent, setIsDescendent] = useState(false);

  const [readList, setReadList] = useState([]);

  const addToReadList = (book) => {
    setReadList((list) => [...list, book]);
  };
  const removeFromReadList = (isbn) => {
    setReadList((list) => list.filter((book) => book.ISBN != isbn));
  };
  const clearReadList = () => {
    setReadList([]);
  };

  useEffect(() => {
    if (localStorage.getItem("read-list")) {
      const localData = localStorage.getItem("read-list");
      let parsed;

      try {
        parsed = JSON.parse(localData);
      } catch (error) {
        localStorage.removeItem("read-list");
      } finally {
        setReadList(parsed);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("read-list", JSON.stringify(readList));
  }, [readList]);

  return (
    <BooksContext.Provider
      value={{
        genre,
        setGenre,
        orderBy,
        setOrderBy,
        pagesNumber,
        setPagesNumber,
        readList,
        addToReadList,
        removeFromReadList,
        clearReadList,
        isDescendent,
        setIsDescendent,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
