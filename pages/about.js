import Link from "next/link"
import Layout from "../components/layout"

export default function() {
  return (
    <Layout>
      <h1 className='title'>About</h1>
      <article>
        <p>Dan was born in Brisbane, Australia, although for most of his childhood he lived on the Gold Coast. He studied classical double bass at Queensland Conservatorium, and, having moved to London in 2014, at Guildhall School of Music & Drama. His professors have included Colin Paris, Michael Morgan and Dusan Walkowicz. 
        </p>
        <br />
        <p> 
            Since finishing his studies, Dan has enjoyed a delightful career as a freelance bassist. He performs with some of the leading ensembles in London, such as the BBC Symphony, London Symphony and Royal Philharmonic Orchestras. He is on a variety of film and television soundtracks such as The Crown, Downton Abbey and David Attenborough's Seven Worlds, One Planet.
        </p>
        <br />
        <p>
          Dan also is an enthusiastic private music teacher, putting students through exams of all levels, as well as preparing them for scholarship exams and recitals.
        </p>
        <br />
        <p>
          Away from music, Dan also enjoys creating web-based apps and getting involved in open source projects. You can see a sample of his projects on the <Link href="/projects"><a className="blue-links">Web Projects page</a></Link>.
        </p>
        <br />
        <p>
          Dan is also an active member of the Dulwich Squash Club. 
        </p>
        <br />
        <p>
          You can book Dan via the <Link href="https://maslink.co.uk/client-directory?client=MOLLD1&instrument=DOUBL1"><a className="blue-links">Musicians Answering Service</a></Link> or send a message via the <Link href="/contact"><a className="blue-links">Contact page</a></Link>.
        </p>
      </article>
    </Layout>
  )
}