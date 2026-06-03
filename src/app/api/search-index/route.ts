import { NextResponse } from "next/server";
import { getSearchIndex } from "@/lib/content-loader";

export async function GET() {
  const articles = getSearchIndex();
  return NextResponse.json(articles);
}
