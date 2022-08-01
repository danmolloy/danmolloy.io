import Head from 'next/head'
import Layout from "../components/layout";
import ProjectCard from '../components/projectCards';

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Dan Molloy</title>
        <meta name="description" content="Dan Molloy's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='title'>Projects</h1>
      {projects.map(i => (
        <ProjectCard key={i.key} project={i}/>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/projects')
  const json = await res.json()
  return {
    props: {
      projects: json.projects
    }
  }
}