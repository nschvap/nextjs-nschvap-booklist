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

import Link from "next/link";

const Book = ({ book }) => {
  return (
    <article className="relative max-w-[256px] rounded overflow-hidden flex flex-col justify-center items-center hover:scale-105 duration-200">
      <img
        src={book.cover}
        width={256}
        alt={`Book portrait from ${book.title}`}
        title={book.title}
        className="rounded z-30 aspect-auto h-full"
      ></img>
      <div className="absolute bottom-0 z-50 p-4">
        <Link
          href={`/books/${encodeURIComponent(book.ISBN)}`}
          className="text-white font-light text-lg"
          title={book.title}
        >
          {book.title}
        </Link>
        <p className="text-gray-400 text-sm">
          {book.synopsis} <small>({book.year})</small>
        </p>
      </div>

      <div className="z-40 bg-gradient-to-t from-black via-black/60 to-black/10 w-full h-full absolute"></div>
    </article>
  );
};

export default Book;
