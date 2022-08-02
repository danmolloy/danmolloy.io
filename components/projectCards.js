import Image from "next/image";
import Link from "next/link";

export default function ProjectCard (props) {
  return (
    <Link href={props.project.link}>
      <a target="_blank" className="project-card" >
      <h3>{props.project.title}</h3>
      <div className="project-img-text">
      <div className="project-img-div">
        <Image src={props.project.image} layout="fill"/> 
      </div>
      <div className="project-text">
        <p>{props.project.blurb} </p>
        <div className="project-links">
          <Link href={props.project.link} ><a target="_blank" className="blue-links">Live Example</a></Link>
          <Link href={props.project.code}><a target="_blank" className="blue-links">Code</a></Link>
        </div>
      </div>
      <ul className="hidden sm:flex flex-col w-1/5 text-slate-500 ml-2">
        {props.project.stack.map(i => 
            <li key={i}>{i}</li>)}
      </ul>
    </div>
    </a>
    </Link>
  )
}