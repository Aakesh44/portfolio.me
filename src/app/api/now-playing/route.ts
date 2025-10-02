import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/spotify";

export async function GET() {

  const response = await getNowPlaying();

  console.log("response", response);

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false });
  }

  const song = await response.json();

  if (!song.is_playing) {
    return NextResponse.json({ isPlaying: false });
  }

  console.log("song", song);

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((a: {name: string}) => a.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  const progress_ms = song.progress_ms ?? 0;
  const duration_ms = song.item.duration_ms ?? 0;

  return NextResponse.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
    progress_ms,
    duration_ms
  },{
    headers: {
      "Cache-Control": "no-store",
    }
  });
}
