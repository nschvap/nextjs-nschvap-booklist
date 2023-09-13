import { NextResponse } from "next/server";
import data from "@/lib/books.json";

export async function GET(request) {
  return NextResponse.json(data.library);
}
