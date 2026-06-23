import { NextResponse } from "next/server";
import { runPipeline } from "@/lib/pipeline";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Vercel Cron Job endpoint.
 * Triggered every hour on the hour via vercel.json cron config.
 * Protected by CRON_SECRET header.
 */
export async function GET(request: Request) {
  const authHeader = request.headers.get("Authorization");
  const expectedSecret = `Bearer ${process.env.CRON_SECRET || ""}`;

  if (!expectedSecret || authHeader !== expectedSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  console.log("Cron trigger: update-content pipeline starting");

  const result = await runPipeline();

  return NextResponse.json(result, {
    status: result.success ? 200 : 500,
  });
}
