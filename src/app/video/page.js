"use client"

import Video from "./components/Video"

export default function Page() {
  return (
    <html className="">
      <body className="flex flex-col gap-8 py-8">
        <Video />
        <div className="max-w-lg mx-auto aspect-video w-full bg-slate-50 rounded-3xl" />
        <div className="max-w-lg mx-auto aspect-video w-full bg-slate-50 rounded-3xl" />
        <div className="max-w-lg mx-auto aspect-video w-full bg-slate-50 rounded-3xl" />
      </body>
    </html>
  )
}
