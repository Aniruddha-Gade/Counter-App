import React, { useState } from 'react'
import './App.css';

import plus from './images/plus-10.png'
import minus from './images/minus-10.png'


import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


// souds
import soundPlus from './sounds/coin.mp3';
import soundMinus from './sounds/fireball.mp3';
import soundPlus10 from './sounds/pause.mp3';
import soundMinus10 from './sounds/pipe.mp3';
import soundReset from './sounds/stomp.mp3';

function App() {

  const [count, setCount] = useState(0);

  // for play the music
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.currentTime = 0;
    audio.play();
  }


  return (

    <div style={{ fontFamily: 'Secular One, sans-serif' }}
      className="flex flex-col w-screen h-screen justify-center items-center bg-[#344151] gap-8
        ">

      <div className="flex flex-col justify-center items-center gap-8
       bg-neutral-100 w-[22rem] lg:w-[29rem] h-[26rem] rounded-3xl shadow-2xl shadow-gray-950  ">
        {/* Counter App heading  */}
        <p className='font-extrabold text-4xl text-[rgb(1301,58,10)] '>Counter App</p>


        <div className='flex justify-evenly items-center gap-10 rounded-md text-3xl p-[1rem] w-[19rem] lg:w-[20rem] bg-cyan-500 shadow-lg shadow-cyan-500/50'>
          <button onClick={() => { setCount(count - 1); playSound(soundMinus); }}
            className='text-[2.5rem] flex items-center active:scale-125 outline-none '>
            <AiOutlineMinus className=' ' />
          </button>


          <div style={{ borderLeft: '2px solid black', height: '100%' }}></div>

          <p className='font-bold text-[1.7rem] flex items-center justify-center w-10'>{count}</p>

          <div style={{ borderLeft: '2px solid black', height: '100%' }}></div>

          <button onClick={() => { setCount(count + 1); playSound(soundPlus); }}
            className='text-[2.5rem] flex items-center active:scale-125 outline-none '>
            <AiOutlinePlus className=' ' />
          </button>
        </div>



        {/* rewind back or front by 10 */}
        <div className='flex justify-evenly items-center gap-10 rounded-md text-3xl p-[1rem] w-[19rem] lg:w-[20rem]  bg-cyan-500 shadow-lg shadow-cyan-500/50'>
          <button onClick={() => { setCount(count - 10); playSound(soundMinus10); }}
            className='text-[2.5rem] flex items-center active:scale-110 select-none outline-none'>
            <img src={minus} width={40} />
          </button>

          <div style={{ borderLeft: '2px solid black', height: '100%' }}></div>

          {/* Reset button */}
          <p onClick={() => { setCount(0); playSound(soundReset); }}
            className='font-bold text-[1.7rem] flex items-center justify-center w-10 cursor-pointer 
            active:scale-110 select-none'>Reset</p>

          <div style={{ borderLeft: '2px solid black', height: '100%' }}></div>

          <button onClick={() => { setCount(count + 10); playSound(soundPlus10); }}
            className='text-[2.5rem] flex items-center active:scale-110 select-none outline-none '>
            <img src={plus} width={40} />
          </button>

        </div>
      </div>

    </div>
  );
}

export default App;
