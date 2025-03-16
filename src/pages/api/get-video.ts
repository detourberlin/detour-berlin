import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export  default async function GET() {
  try {
    const videoPrefix =
      process.env.NEXT_PUBLIC_VIDEO_PREFIX || "premium-background.mp4";
    const blob_key = process.env.BLOB_READ_WRITE_TOKEN;

    const { blobs } = await list({ prefix: videoPrefix,  limit: 1 , token: blob_key });

    if (blobs.length === 0) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    return NextResponse.json({ url: blobs[0].url });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch video" },
      { status: 500 }
    );
  }
}
