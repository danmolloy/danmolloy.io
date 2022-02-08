import Image from "next/image";
import Layout from "../components/layout";

export default function Music() {
  return (
    <Layout>
      <h1 className='title'>Music</h1>
      <div className="w-2/3">
        <Image src="/images/dan-bass.jpeg" width="3024" height="4032"/>
      </div>
      <p className=" p-2 self-start">Coming soon..</p>
    </Layout>
  )
}