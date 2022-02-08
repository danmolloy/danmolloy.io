import Head from 'next/head'
import Layout from "../components/layout";
import ProjectCard from '../components/projectCards';

export default function Projects() {
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

const projects = [
  {
  title: "Online Store",
   image: "/images/e-commerce.png",
   blurb: "A typical online store, complete with Stripe checkout integration.",
   link: "https://e-commerce-danmolloy.vercel.app/",
   code: "https://github.com/danmolloy/e-commerce",
   stack: ["Next.js", "Stripe", "Use-Shopping-Cart", "Tailwind"],
   key: 3
  },
  {
   title: "Twitter Clone",
   image: "/images/twitter.png",
   blurb: "A full stack social network, complete with authentication, authorization, notifications and direct messaging. Share your thoughts with your friends and interact with them.",
   link: "https://sharp-hugle-251ecd.netlify.app/",
   code: "https://github.com/danmolloy/twitter-clone",
   stack: ["React", "Apollo Client", "TypeScript", "Tailwind", "Jest", "React Router", "Node.js", "Apollo Server", "Prisma", "SQLIte",],
   key: 1
 },
 {
   title: "Battleships",
   image: "/images/battleships.png",
   blurb: "Play the classic board game against the computer. Go face-to-face with the computer to see who will win the battle. Try and beat the highscores!",
   link: "https://mystifying-saha-d28822.netlify.app/",
   code: "https://github.com/danmolloy/battleships",
   stack: ["React", "Redux", "Tailwind", "Typescript", "Jest", "Mirage JS"],
   key: 2
 }
]