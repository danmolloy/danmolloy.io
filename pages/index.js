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
      <Home />
    </Layout>
  )
}
