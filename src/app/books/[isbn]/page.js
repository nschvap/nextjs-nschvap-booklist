"use client";

import Loading from "@/components/util/circular-loading";
import { BooksContext } from "@/context/book-context-provider";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function RenderBookData({ params }) {
  const [data, setData] = useState(null);
  const router = useRouter();

  const { readList, addToReadList, removeFromReadList } =
    useContext(BooksContext);

  useEffect(() => {
    fetch(`/api/books/${params.isbn}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0].book);
      });
  }, []);

  return data ? (
    <article className="mt-5">
      <section className="flex flex-col md:flex-row lg:flex-row justify-center md:items-start items-center lg:items-start gap-3">
        <div>
          <img
            src={data.cover}
            alt={data.title}
            className="rounded aspect-auto w-56"
          ></img>
        </div>
        <div className="flex flex-col justify-center py-6 w-full px-5 lg:w-1/3">
          <h1 className="font-black text-2xl">
            {data.title} ({data.year})
          </h1>
          <p className="max-w-lg">{data.synopsis}</p>
          <p className="mt-5">
            Género:{" "}
            <span className="px-3 py-1 bg-zinc-400 rounded-lg text-zinc-700">
              {data.genre}
            </span>
          </p>

          <p>
            Autor: <span>{data.author.name}</span>
          </p>
          <p className="flex flex-col items-start gap-2">
            Otros libros de este autor: <br />
            {data.author.otherBooks.map((ob, i) => (
              <span
                key={i}
                className="ml-2 px-3 py-1 bg-zinc-400 rounded-lg text-zinc-700"
              >
                {ob}
              </span>
            ))}
          </p>

          <div className="mx-auto pt-8 flex flex-col items-center gap-2">
            {readList.some((x) => x.ISBN === params.isbn) ? (
              <button
                onClick={() => removeFromReadList(params.isbn)}
                className="mt-auto px-4 py-2 rounded bg-red-500 text-white font-bold hover:brightness-75"
              >
                Remover de la lista de lectura
              </button>
            ) : (
              <button
                onClick={() => addToReadList(data)}
                className="mt-auto px-4 py-2 rounded bg-sky-500 text-white font-bold hover:brightness-75"
              >
                Añadir a la lista de lectura
              </button>
            )}
            <button
              className="px-4 py-2 bg-zinc-400 text-zinc-800 font-bold hover:brightness-75 mx-auto rounded"
              onClick={() => router.replace("/books")}
            >
              Volver
            </button>
          </div>
        </div>
      </section>
    </article>
  ) : (
    <Loading />
  );
}

// "book": {
//   "title": "El Señor de los Anillos",
//   "pages": 1200,
//   "genre": "Fantasía",
//   "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
//   "synopsis": "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
//   "year": 1954,
//   "ISBN": "978-0618640157",
//   "author": {
//       "name": "J.R.R. Tolkien",
//       "otherBooks": [
//           "El Hobbit",
//           "El Silmarillion"
//       ]
//   }
// }
