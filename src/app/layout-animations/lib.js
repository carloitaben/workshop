export const items = [
  {
    src: "https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg",
    height: 150,
  },
  {
    src: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
    height: 300,
  },
  {
    src: "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg",
    height: 300,
  },
  {
    src: "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg",
    height: 300,
  },
  {
    src: "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg",
    height: 300,
  },
  {
    src: "https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg",
    height: 300,
  },
  {
    src: "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg",
    height: 200,
  },
  {
    src: "https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg",
    height: 300,
  },
  {
    src: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
    height: 200,
  },
  {
    src: "https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg",
    height: 400,
  },
  {
    src: "https://images.pexels.com/photos/2736834/pexels-photo-2736834.jpeg",
    height: 200,
  },
  {
    src: "https://images.pexels.com/photos/249074/pexels-photo-249074.jpeg",
    height: 150,
  },
  {
    src: "https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg",
    height: 400,
  },
  {
    src: "https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg",
    height: 200,
  },
]

export function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return [...arr]
}
