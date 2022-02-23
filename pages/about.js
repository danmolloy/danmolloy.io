import Image from "next/image"
import Link from "next/link"
import Layout from "../components/layout"

export default function() {
  return (
    <Layout>
      <h1 className='title'>About</h1>
      <div className="img-container">
        <Image src="/images/dan-bass.jpeg" width="3024" height="4032"/>
      </div>
      <article>
        <p>I was born in Brisbane, Australia, although for most of my childhood I lived on the Gold Coast. I studied classical double bass at Queensland Conservatorium, and having moved to London in 2014, at Guildhall School of Music & Drama.
        </p>
        <br />
        <p> 
            Since finishing my studies, I've has enjoyed a rewarding career as a freelance orchestral bassist. I perform with some of the leading ensembles in London, such as the BBC Symphony, London Symphony and Royal Philharmonic Orchestras. One of my favourite avenues of work is commercial recordings - I'm on a variety of film and television soundtracks such as <i>The Crown</i>, <i>Downton Abbey</i> and David Attenborough's <i>Seven Worlds, One Planet</i>.
        </p>
        <br />
        <p>
          I'm also an enthusiastic private music teacher, putting students through exams of all levels, as well as preparing them for scholarship exams and recitals.
        </p>
        <br />
        <p>Since 2020, I’ve shifted my focus to learning web development. I absolutely love creating solutions and overcoming challenges. My stack includes: </p>
        <ul>
          <li>• React</li>
          <li>• Next JS</li>
          <li>• Redux</li>
          <li>• Node JS</li>
          <li>• Apollo Client & Server</li>
          <li>• Jest</li>
          <li>• TypeScript</li>
          <li>• Tailwind</li>
          <li>• Prisma</li>
        </ul>
        <br />
        <p>Being a freelance musician, the past few years have been extremely difficult. I’m hoping to turn my hobby of web development into a career and am currently seeking any opportunities on offer. I am hard working, disciplined, enjoy working in a team but am also content working alone. </p>
        <br />
        <p>You can find a sample of my projects on the Web Projects page.</p>
        <br />
        <p>Away from music and coding, I’m actively involved at Dulwich Squash Club.</p>
        <br />
        <p>
          You can view my music CV at <Link href="https://maslink.co.uk/client-directory?client=MOLLD1&instrument=DOUBL1"><a className="blue-links">Musicians Answering Service</a></Link>, or send me a message via the <Link href="/contact"><a className="blue-links">Contact page</a></Link>.
        </p>
      </article>
    </Layout>
  )
}