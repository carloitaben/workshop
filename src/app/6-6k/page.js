/* eslint-disable @next/next/no-img-element */

"use client"

const State = {
  Loading: "loading",
  Sequence: "sequence",
  Finish: "finish",
}

export default function Page() {
  return (
    <html>
      <body>
        <img src="/image0.jpg" className="w-full" alt="" />
        <img src="/image1.jpg" className="w-full" alt="" />
        <img src="/image2.jpg" className="w-full" alt="" />
        <img src="/image3.jpg" className="w-full" alt="" />
      </body>
    </html>
  )
}
