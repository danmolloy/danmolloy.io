
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Game from './game'


const wordList = ["Hi, I'm Dan."]

export default function Home() {
  const [word, setWord] = useState("")
  const [showGame, setShowGame] = useState(false)
  
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
        <p className='font-light '>I am a <span className='text-orange-500 font-semibold'>musician</span>. </p>
        <p> You can view my CV and book me through {` `}
        <Link href="https://maslink.co.uk/client-directory?client=MOLLD1&instrument=DOUBL1">
            <a target="_blank" className='text-blue-600'>
            MAS
            </a>
          </Link>.
        </p>
        </div>
        <div className='my-2'>
      <p className='font-light'>I also like to write <span className='text-green-500 font-semibold'>code</span>. 
      </p>
      <p>You can find my projects on{` `}
        <Link href="https://github.com/danmolloy">
          <a target="_blank" className='text-blue-600'>
          GitHub
          </a>
        </Link>.
      </p>
      </div>
      <div className='my-2'>
      <p className=' font-light h-36 sm:h-auto'>Feel free to {` `}
      <Link href="/contact" >
        <a className='text-blue-600'>contact me</a></Link>
      .</p>
      </div>
     

    {showGame && <Game />}
    </div>
  )
}
