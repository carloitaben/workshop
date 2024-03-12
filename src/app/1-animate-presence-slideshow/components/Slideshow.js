/* eslint-disable @next/next/no-img-element */

const images = [
  "https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg",
  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
  "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg",
  "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg",
  "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg",
  "https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg",
]

export default function Slideshow() {
  return (
    <img src={images[0]} alt="" className="aspect-square object-cover w-96" />
  )
}
