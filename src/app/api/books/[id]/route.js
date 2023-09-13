import { NextResponse } from "next/server";
import data from "@/lib/books.json";

export async function GET(request, { params }) {
  if (
    data.library.filter((x) => x.book.ISBN === decodeURIComponent(params.id))
      .length === 0
  )
    return NextResponse.json({
      code: 404,
      message: "THAT BOOK DOESNT EXIST IN OUR LIBRARY",
    });

  return NextResponse.json(
    data.library.filter((x) => x.book.ISBN === decodeURIComponent(params.id))
  );
}
