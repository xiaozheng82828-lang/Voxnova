"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const generate = async () => {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice: "en-US" })
    });

    const data = await res.json();
    new Audio(data.audio_url).play();
  };

  return (
    <main style={{ padding: 30 }}>
      <h1>Voxnova TTS</h1>

      <textarea
        rows={5}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type text here"
      />

      <br /><br />

      <button onClick={generate}>Generate Voice</button>
    </main>
  );
}
