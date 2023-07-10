import Image from 'next/image'
import img1 from "../../images/img1.jpg"

export default function Home() {
  return (
    <>
        <h1>Welcome to blog page</h1>
      <div style={{
        overflow: "hidden"
      }}>
        <Image
            src={img1} alt={"image 1"}
            quality={100}
            placeholder={"blur"}
            sizes={"100vw"}
        />
      </div>


    </>
  )
}
