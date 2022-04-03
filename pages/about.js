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
            Since finishing my studies, I've enjoyed a rewarding career as a freelance orchestral bassist. I perform with some of the leading ensembles in London, such as the BBC Symphony, London Symphony and Royal Philharmonic Orchestras. One of my favourite avenues of work is commercial recordings - I'm on a variety of film and television soundtracks such as <i>The Crown</i>, <i>Downton Abbey</i> and David Attenborough's <i>Seven Worlds, One Planet</i>.
        </p>
        <br />
        <p>
          I'm also an enthusiastic private music teacher, putting students through exams of all levels, as well as preparing them for scholarship exams and recitals.
        </p>
        <br />
        <p>Since 2020, I’ve spent my free time learning web development. You can find a sample of my projects on the <Link href="/projects"><a className="blue-links">Web Projects page</a></Link>.</p>
        <br />
        <p>Away from music and coding, I’m actively involved at Dulwich Squash Club.</p>
        <br />
        <p>
          You can view my music CV and book me at <Link href="https://maslink.co.uk/client-directory?client=MOLLD1&instrument=DOUBL1"><a className="blue-links">Musicians Answering Service</a></Link>, or send me a message via the <Link href="/contact"><a className="blue-links">Contact page</a></Link>.
        </p>
      </article>
    </Layout>
  )
}