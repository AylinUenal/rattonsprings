import ImageCard from "../components/ImageCard";

export default function team() {
  return (
    <div className="mx-40">
      <h1 className="text-center py-10">Our team</h1>
      <p>Meet our lovely and highly skilled employees!</p>
      <div className="flex py-10 flex-wrap">
        <ImageCard />
      </div>
    </div>
  )
}