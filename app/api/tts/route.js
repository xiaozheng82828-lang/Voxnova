import { NextResponse } from "next/server";

export async function POST(req) {
  const { text, voice } = await req.json();

  if (!text || text.length > 3000) {
    return NextResponse.json(
      { error: "Max 3000 characters allowed" },
      { status: 400 }
    );
  }

  const response = await fetch("https://api.deapi.ai/tts", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.DEAPI_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text, voice })
  });

  const data = await response.json();
  return NextResponse.json(data);
}
