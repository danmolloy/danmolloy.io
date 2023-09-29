import Image from "next/image";
import IndexDiv from "./indexDiv";

const aboutData = {
  snippets: [ 
    "For 12 years I have worked as a double bassist and play with some of the U.K.'s leading ensembles.", 
    "I was born in Brisbane, and have lived in London for 9 years.",
  ],
}

export default function AboutSection() {
  return (
    <IndexDiv title="About">
      <div className="lg:w-2/3 ">
          {aboutData.snippets.map(i => (
            <p className="text-zinc-500 text-[18px] m-3 tracking-wider" key={i}>
              {i}
            </p>
          ))}
          <p className="text-zinc-500 text-[18px] m-3 tracking-wider">My CV is available on <a href="https://maslink.co.uk/client-directory?client=MOLLD1&instrument=DOUBL1" target="_blank" className="text-blue-500 hover:underline">MAS</a>.</p>

        </div>
      </IndexDiv>
  )
}