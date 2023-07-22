
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Game from './game'


const wordList = ["Hi, I'm Dan."]

export default function Home() {
  const [word, setWord] = useState("")
  
 const scrollingText = async () => {
    for (let j = 0; j < wordList.length; j++) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      for (let i = 0; i <= wordList[j].length; i++) {
        await new Promise(resolve => setTimeout(resolve, 100))
        setWord(wordList[j].slice(0, i))
      }
    /*   await new Promise(resolve => setTimeout(resolve, 1500))
      for (let i = wordList[j].length; i >= 0; i--) {
        await new Promise(resolve => setTimeout(resolve, 75))
        setWord(wordList[j].slice(0, i))
      }

      if (j === wordList.length - 1) {
        j = - 1
      } */
    } 
  } 



  useEffect(() => {
    scrollingText()
  }, [])

  

  return (
    <div className='main'>
      <div className='h-24 '>
      <h1 className='font-semibold '>{word}</h1>
      </div>
      <div className='my-2'>
        <p className='font-light '>I am a freelance double bassist in London. I regularly perform for many leading ensembles and am on a variety of soundtracks.</p>
      </div>
      <div className='my-2'>
        <p> You can view my CV and book me through {` `}
        <Link href="https://maslink.co.uk/client-directory?client=MOLLD1&instrument=DOUBL1" target="_blank" className='text-orange-500'>
            MAS
          </Link>.
        </p>
        </div>
        <div className='my-2'>
      </div>
      <div className='my-2'>
      <p className=' font-light h-36 sm:h-auto'>Feel free to {` `}
      <Link href="/contact" className='text-orange-500'>contact me</Link>
      .</p>
      </div>
     

    
    </div>
  )
}
