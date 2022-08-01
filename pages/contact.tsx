import ContactForm from '../components/form'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Contact()  {
  return (
    <Layout home="false">  
    <Head>
      <title>Dan Molloy</title>
      <meta name="description" content="Contact Dan Molloy" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className='title'>Contact</h1>
    <ContactForm />
    </Layout>
  )
}