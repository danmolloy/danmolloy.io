import { useEffect, useState } from "react"
import Realistic from "./realistic"
import { useTimer } from 'react-use-precision-timer';


const words = ["FORTIFIED", "DEPRAVITY", "BALANCES", "ENTAILING", "INHERITED", "DEVALUING", "SICKENING", "OUTLINING", "PAROCHIAL", "AMOUNTING", "CHAPERONE", "TURNOVER", "RECYCLING", "EXQUISITE", "GROUNDING", "FABRICANT", "LABELLING", "MACADAMIA", "MACAROONS", "PACEMAKER", "QUADRATIC", "SABOTAGED", "VACANCIES", "VACCINATE", "WACKINESS", "YACHTSMAN", "AARDVARKS", "BABBLINGS", "EAGERNESS", "EARLINESS", "FABRICANT"]

export default function Game() {
  const [gameState, setGameState] = useState("idle")
  const [wordIndex, setWordIndex] = useState(null)
  const [word, setWord] = useState(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [shake, setShake] = useState(false)
  const timer = useTimer({ delay: 1000, callback: () => {
    if (timer.getElapsedResumedTime() > 30000) {
      timer.pause()
      setGameState("timedOut")
    }
  } });


  useEffect(() => {
    if (gameState === "playing") {
      shuffle()
    } else {
      setWord(null)
    }
    
  }, [wordIndex])

  const startGame = () => {

    setWordIndex(Math.floor(Math.random() * words.length))
    //shuffle()
    setUserAnswer("")
    setGameState("playing")
    timer.start()
  }

  const shuffle = async () => {
    let newWord = words[wordIndex]
    let newArr = newWord.split('').sort(() => Math.random() - 0.5)
    await new Promise(res => setTimeout(res, 200))
    setWord(newArr.join(''))
  }

  const submit = async() => {
    if (userAnswer.toUpperCase() === words[wordIndex]) {
      timer.pause()
      setGameState("completed")
    } else {
      setShake(true)
      await new Promise(res => setTimeout(res, 200))
      setShake(false)
    }
  }

  return (
    <div className="game-div p-4 flex flex-col items-center mt-8">
      <div className="game-header">
        <p>Upon pressing start, nine letters will be revealed below.</p>
        <p>You have 30 seconds to form a single word using all nine letters.</p>
      </div>
      {gameState !== "idle" && 
      <p>
        {String(timer.getElapsedRunningTime()).length < 4 
        ? "0" 
        :String(timer.getElapsedRunningTime()).slice(0, -3)}
        </p>}
      <div className="game-word h-12">
        <p>{word}</p>
      </div>
        <input className={shake ? "shake border border-black rounded" : "border border-black rounded"} type={"text"} value={userAnswer} onChange={e => setUserAnswer(e.target.value)}/>
        {gameState === "playing" ?
        <div className="game-controls">
          <button className="start-btn border rounded bg-blue-500 text-white m-2 p-2" onClick={() => shuffle()}>Jumble</button>
          <button className="start-btn border rounded bg-green-500 text-white m-2 p-2" onClick={() => submit()}>Submit</button>
        </div> 
        : gameState === "completed" ?
          <div>
            <Realistic />
            <p>Well done!</p>
            <button className="start-btn border rounded bg-orange-500 text-white m-2 p-2" onClick={() => startGame()}>Reset</button>
          </div>
        : gameState === "timedOut" ?
        <div>
          <p>{words[wordIndex]}</p>
          <button className="start-btn border rounded bg-orange-500 text-white m-2 p-2" onClick={() => startGame()}>Try again</button>
        </div>
        : <button className="start-btn border rounded bg-orange-500 text-white m-2 p-2" onClick={() => startGame()}>Start</button>
      }
    </div>
  )
}