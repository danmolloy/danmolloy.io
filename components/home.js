
import { useEffect, useState } from 'react'
import Image from 'next/image'

const wordList = ['musician', 'double bassist', 'web developer', 'music teacher', 'squash player']

export default function Home() {
  const [word, setWord] = useState("")
  
  const scrollingText = async () => {

    for (let j = 0; j < wordList.length; j++) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      for (let i = 0; i <= wordList[j].length; i++) {
        await new Promise(resolve => setTimeout(resolve, 100))
        setWord(wordList[j].slice(0, i))
      }
      await new Promise(resolve => setTimeout(resolve, 1500))
      for (let i = wordList[j].length; i >= 0; i--) {
        await new Promise(resolve => setTimeout(resolve, 75))
        setWord(wordList[j].slice(0, i))
      }

      if (j === wordList.length - 1) {
        j = - 1
      }
    }

  }

  useEffect(() => {
    scrollingText()
  }, [])

  return (
    <div className='main'>
      <h1 className='font-semibold'>Hi, I'm Dan.</h1>
      <h2 className='font-light'>I am a <span className='text-orange-500 font-semibold'>{word}</span></h2>
      <div className='self-center mt-4'>
        <Image src='/images/IMG_1127.jpeg' height="600" width="500" />
      </div>
    </div>
  )
}


/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest"> */