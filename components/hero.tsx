import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center h-screen justify-evenly sm:flex-row font-display w-screen">
        <div className="text-center my-3">
        <h1 className="text-3xl">
          Daniel Molloy
        </h1>
        <p className="text-xl">
          Double Bassist
        </p>
        </div>
        <div className="rounded-lg overflow-hidden mx-4">
        <Image className=" " src={"/images/IMG_1288.jpeg"} alt="" width={590/2} height={788/2} />

{/*         <Image className=" " src={"/images/dan-boat.jpeg"} alt="" width={833/2} height={768/2} />
 */}        </div>
      </div>
  )
}