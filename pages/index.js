import Head from 'next/head'
import MenuIcon from '../components/menuIcon'
import Footer from '../components/footer'
import Layout from '../components/layout'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Home from '../components/home'


export default function Index() {

  return (
    <Layout home>
      <Head>
        <title>Dan Molloy Double Bassist | Web Developer London</title>
        <meta 
          name="description" 
          content="Dan Molloy is an Australian musician and web developer in London." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Dan Molloy Double Bassist | Web Developer London" />
        <meta
          property="og:description"
          content="Dan Molloy is an Australian musician and web developer in London."
        />
        {/* <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        /> */}
      </Head>
      <Home />
    </Layout>
  )
}
