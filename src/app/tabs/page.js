"use client"

import Tabs from "./components/Tabs"

export default function Page() {
  return (
    <html className="h-full">
      <body className="h-full grid place-items-center gap-2">
        <Tabs />
        <Tabs />
        <Tabs />
      </body>
    </html>
  )
}
