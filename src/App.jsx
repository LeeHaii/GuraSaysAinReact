import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import guraPic from "./pics/gura.png" // ko the goi src trong the img trc tiep tu may dc
import guraSound from "./pics/gawr-gura-a.mp3"
import './App.css'

function App() {
  // so thay doi, log ra update state 1 lan thoi
  const [click, setClick] = useState(0)
  useEffect(guraA, [click]) // useEffect(logRa, [click]) dependencies thay doi thi chay function o trc (lan init thi van in) (hứng state thay đổi) 
  useEffect(guraJump, [click])
  function guraA(){
    const sayA = document.createElement('audio')
    sayA.src = guraSound
    sayA.play();
  }

  const guraImg = document.getElementById('pic')

  function jump(){
    if(guraImg){
      guraImg.style.top = '-100px'
    }
  }

  function drop(){
    if(guraImg){
      guraImg.style.top = '0px'
    }
  }

  function guraJump(){
    jump()
    setTimeout(() => {drop()}, 100)
  }
  
  function handleClick(){
    setClick(click+1);
  }
  return (
    <>
      <div className="all" onClick={handleClick}>
        <div className="txtHeader">Click anywhere to make me say A!</div>
        <div className="txtCount">I have A!ed for {click} times</div>
        <div className='fake'></div>
        <div className='picRela'>
          <div className="pic" id='pic'>
            <img src={guraPic} alt="gura-a" />
          </div>
        </div>
      </div>
    </>
  );
}
export default App
