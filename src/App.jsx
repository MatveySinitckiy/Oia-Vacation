import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
return<>

<div className='w-[auto] h-[4.3vh] flex justify-between text-xs md:text-xl' id='header' >
  <Link to="/" className='w-[30%] flex items-center text-2xs md:w-[15%] lg:w-[10%] justify-center  font-serif-uniq  h-[100%]'>Shore Guesthouse</Link>
  <div className='w-[57%] h-[100%] md:w-[37%] flex justify-evenly ' >
<Link to="/Gallery" className='button-header text-center flex items-center justify-center font-serif-uniq' >Gallery </Link>
<Link to="/Information" className='button-header flex items-center justify-center  font-serif-uniq' >Information</Link>
<button className='button-header bg-black hover:bg-orange-200 hover:text-black text-white font-normal active:bg-amber-100 active:text-black active:shadow-amber-200' >Book now</button>
  </div>
</div>
<div className='bg-lime-400 w-auto h-[90vh] flex items-center justify-center img-1' >
  <h1 className='text-white/95 text-3xl md:text-5xl text-center tracking-tight font-extralight anim  font-serif-uniq text-clip' >Where Comfort and Charm Meet the Aegean</h1>
</div>
<div className='w-[90vw] h-[24vh] mx-auto mt-[8vh] font-serif-uniq bg-stone-100 p-[5vmin]' >
  <p className='md:text-xl text-2xs' >Gallery</p>
  <h2 className='md:text-5xl text-2xl text-stone-800 mt-[1vmin] mb-[0.5vh] md:mb-[2vh]' >Experience Shore Guesthouse.</h2>
  <Link to="/Gallery" className='md:text-5xl text-2xl text-blue-500 underline' ><a>View full gallery</a></Link>

</div>
<div id='gallery' className='overflow-hidden w-auto font-serif-uniq  gap-[20vw] p-[2vmin] h-[350vh] md:h-[32.5vh] mt-[3.5vh]' >
  <div id='gallery-container' className='w-[100%] flex-col md:flex-row justify-evenly  items-center flex h-[100%]' >
    <div id='gallery-card' className='flex justify-evenly md:justify-center items-center flex-col' >
      <img src='./door.jpg' className='md:w-[18vw] w-[92vw] gc h-auto' ></img>
      <h1 className='p-[2vmin]' >A haven lies behind the blue door.</h1>
    </div>
    <div id='gallery-card' className='flex justify-center items-center flex-col' >
      <img src='./drinkbypool.jpg' className='md:w-[13vw] w-[80vw] gc h-auto' ></img>
      <h1 className='p-[2vmin]' >Enjoy a drink by the pool.</h1>
    </div>
    <div id='gallery-card' className='flex justify-center items-center flex-col' >
      <img src='./bed.jpg' className='md:w-[17vw] gc w-[88vw] h-auto' ></img>
      <h1 className='p-[2vmin]' >Sink into the plush comfort of the canopy bed.</h1>
    </div>
    <div id='gallery-card' className='flex justify-center items-center flex-col' >
      <img src='./loungeroom.jpg' className='md:w-[10vw] w-[70vw] gc h-auto' ></img>
      <h1 className='p-[2vmin]' >Unwind in our lounge room.</h1>
    </div>
    <div id='gallery-card' className='flex justify-center items-center flex-col' >
      <img src='./sea.jpg' className='md:w-[14vw] w-[78vw] gc h-auto' ></img>
      <h1 className='p-[2vmin]' >Explore the sea.</h1>
    </div>
   
    </div>
   
   
 
   </div>


<div className='w-[auto] font-serif-uniq p-[5vmin] h-[45vh]  mt-[3.5vh]' >
 <p className='md:text-xl text-2xs' >About</p>
 <p className='md:text-5xl text-xl mt-[3vh]'>Tucked into the rugged cliffs of Santorini, the <br></br> Shore Guesthouse offers a retreat with <br></br> uninterrupted views of the caldera. </p>
 <Link to="/Information" className='md:text-5xl text-xl mt-[6vh] text-stone-950/90' ><a href='#' className='text-blue-500 underline' >Read our story</a> to learn the history behind Shore <br></br> Guesthouse and the beauty of Santorini.</Link>
</div>
<div className='w-auto h-[55vh] text-white p-[5vmin] mt-[7.5vh] footer ' >
  <h3 className='font-serif-uniq md:text-xl text-2xs' >Plan Your Dream Getaway:</h3>
  <h1 className='font-serif-uniq md:text-6xl text-2xl mt-[1vh] mb-[3vh] ' >Summer 2025 Dates Available</h1>
  <button className='font-normal text-black md:text-xl text-2xs bg-white p-[1.5vmin] rounded-4xl hover:bg-black hover:text-white hover:shadow-2xl transition-all active:scale-95 '>Book now</button>
</div>
<div className='w-full h-[10vh] flex items-center justify-center bg-black' >
  <h1 className='text-white' >Сайт был сделан Матвеем Синицким по <span className='text-blue-300 underline' ><a href='https://www.figma.com/community/file/1498065693504546249/sophisticated-vacation-house-rental' >референсу</a></span></h1>
</div>
</>

  
}

export default App

