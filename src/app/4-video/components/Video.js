export default function Video() {
  return (
    <div className="max-w-lg mx-auto">
      <video width={1078} height={720}>
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
