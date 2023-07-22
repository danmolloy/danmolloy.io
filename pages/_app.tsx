import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Inconsolata, Raleway, Poiret_One } from 'next/font/google'

const raleway = Raleway({subsets: ['latin'], variable: "--font-raleway"})
//const poiretOne = Poiret_One({weight: '400', subsets: ["latin"], variable:"--font-poiret"})
const inconsolata = Inconsolata({subsets: ["latin"], variable:"--font-inconsolata"})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${raleway.variable} ${inconsolata.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}