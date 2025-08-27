import { memo, useEffect, useMemo, useRef, useState } from "react";
import { Link } from 'react-router-dom'


 
function Gallery(){
    const sectionRef = useRef(null);
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
    const [count,setCount] = useState(1)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim');
          } else {
            entry.target.classList.remove('anim'); // Сбрасываем класс, когда элемент выходит из зоны видимости
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    const currentRef1 = sectionRef1.current;
    const currentRef2 = sectionRef2.current;
    
    if (currentRef , currentRef1 , currentRef2) {
      observer.observe(currentRef);
       observer.observe(currentRef1);
       observer.observe(currentRef2);
    }

    return () => {
      if (currentRef ,currentRef1 ,currentRef2 ) {
        observer.unobserve(currentRef);
        observer.unobserve(currentRef1);
        observer.unobserve(currentRef2);  // Очищаем наблюдатель при размонтировании компонента
      }
    };
    
  }, []);

    return<>
   <div className='w-[auto] h-[4.3vh] flex justify-between text-xs md:text-xl border-b-1 sticky z-3 top-0 left-0' id='header' >
  <Link to="/" className='w-[30%] flex items-center text-2xs md:w-[15%]  justify-center  font-serif-uniq  h-[100%]'>Shore Guesthouse</Link>
  <div className='w-[57%] h-[100%] md:w-[37%] flex justify-evenly ' >
<Link to="/Gallery" className='button-header text-center flex items-center justify-center font-serif-uniq' >Gallery </Link>
<Link to="/Information" className='button-header flex items-center justify-center  font-serif-uniq' >Information</Link>
<button className='button-header bg-black hover:bg-orange-200 hover:text-black text-white font-normal active:bg-amber-100 active:text-black active:shadow-amber-200' >Book now</button>
  </div>
</div>
<div className="sticky top-[25vh] ml-[4vw] z-1 text-4xl md:text-7xl font-serif-uniq" > Gallery</div>
<div className="w-full mt-[25vh] md:mt-[30vh] relative z-2 h-auto bg-white">
    <div className="w-full h-[58vh] galleryhs1 
    flex justify-center items-center font-serif-uniq
     text-white text-clip text-2xl md:text-5xl "><p ref={sectionRef1} className="opacity-0 text-center" >Experience Shore Guesthouse.<br></br>
Explore our gallery and start planning.</p></div>
<div ref={sectionRef}  className="w-full opacity-0 h-[80vh] " >
<div className="w-full h-[4vh] mt-[20vh] flex justify-center items-center  font-serif-uniq p-[1vmin]" >Exterior Views</div>
<div className="w-full h-[8vh]  flex justify-center items-center  font-serif-uniq p-[1vmin]  text-2xl md:text-5xl" >Welcome to Shore Guesthouse.</div>
<div className="w-[60%] h-[80%] mx-auto mt-[2vh] flex md:flex-row flex-col md:items-center justify-evenly" >
<div className="flex mr-[5vw] flex-col" >
    <img className="w-full  md:w-auto  md:h-[28vh] shadow-2xl" src="./bed16-9.jpg" ></img>
    <p className="font-serif-uniq text-2xs md:text-xl p-[1vmin]" >Sink into the plush comfort of the canopy bed.</p>
</div>
<div className="flex flex-col" >
    <img className="w-[53vw] mt-[5vh] md:mt-[0vh] md:w-[22vw] h-auto shadow-2xl" src="./loungeroom2-3.jpg" ></img>
    <p className="font-serif-uniq  text-2xs md:text-xl p-[1vmin]  " >The Lounge room.</p>
</div>

</div>

</div>
  <div  className="w-full mt-[25vh] opacity-0 " ref={sectionRef2}  >
    <img src="./tableonopenair.jpg"  className=" w-[55%]  scale-y-95 mx-auto" ></img>
    <h1 className="text-xl md:text-2xl font-serif-uniq text-stone-800 text-center ml-[3vw]" >The outer deck.</h1>
</div>
  <div className="w-full h-[115vh] md:h-[90vh] bg-[#3a3c54] text-white mt-[20vh]" >
<p className="text-center font-serif-uniq pt-[5vh]" >Interior views</p>
<h1 className="font-serif-uniq text-center mt-[2vh] text-3xl md:text-5xl" >Uncover the  guesthouse’s charm and character.</h1>
<div className="w-[65vw] md:w-[30vw] h-[10vh] mt-[8vh] flex justify-between mx-auto" >
    <button className={`h-[7.5vh] w-[13vw] md:w-[4.5vw] bg1 hover:scale-105 hover:rotate-3 active:scale-95 transition-all bg-lime-600 ${count === 1 ? 'transition-all border-4 border-orange-200':''} `} onClick={()=> setCount(1)} ></button>
    <button className={`h-[7.5vh] w-[13vw] md:w-[4.5vw] bg2 hover:scale-105 hover:rotate-3 active:scale-95 transition-all bg-lime-600 ${count === 2 ? 'transition-all border-4 border-orange-200':''} `} onClick={()=> setCount(2)}  ></button>
    <button className={`h-[7.5vh] w-[13vw] md:w-[4.5vw] bg3 hover:scale-105 hover:rotate-3 active:scale-95 transition-all bg-lime-600 ${count === 3 ? 'transition-all border-4 border-orange-200':''} `} onClick={()=> setCount(3)}  ></button>
    <button className={`h-[7.5vh] w-[13vw] md:w-[4.5vw] bg4 hover:scale-105 hover:rotate-3 active:scale-95 transition-all bg-lime-600 ${count === 4 ? 'transition-all border-4 border-orange-200':''} `} onClick={()=> setCount(4)}  ></button>
</div>
<div className="w-full h-[50vh] g-blue-500 flex flex-row items-center justify-center" >
<button className="border-1 p-[0.5vmin] md:p-[1vmin] hover:scale-105 hover:shadow-2xl active:scale-95 transition-all ml-[1vw] mr-[1vw] md:mr-[0vw] md:ml-[5vw] " onClick={()=> {count === 1 ? setCount(4) : setCount(count-1)}} >Previous</button>    
<div className={`w-[70%]  h-[100%] mx-auto mt-[4vh] ${count === 1 ? 'bg1':count === 2 ? 'bg2': count === 3 ? 'bg3': count === 4 ? 'bg4':'none'}`} ></div>
<button className="border-1 p-[0.5vmin] md:p-[1vmin] hover:scale-105 hover:shadow-2xl active:scale-95 transition-all ml-[3vw] mr-[3vw] md:ml-[0vw] md:mr-[5vw]" onClick={()=> {count === 4 ? setCount(1): setCount(count+1)}} >Next</button> 
</div>
  </div>
<div  className="w-full mt-[25vh] " >
    <img src="seaview.jpg" className=" w-[100%] scale-y-95 mx-auto" ></img>
</div>
<div className='w-auto h-[55vh] text-white p-[5vmin] mt-[30.5vh] footer-1 ' >
  <h3 className='font-serif-uniq md:text-xl text-2xs' >Plan Your Dream Getaway:</h3>
  <h1 className='font-serif-uniq md:text-6xl text-2xl mt-[1vh] mb-[3vh] ' >Summer 2025 Dates Available</h1>
  <button className='font-normal text-black text-xl bg-white p-[1.5vmin] rounded-4xl hover:bg-black hover:text-white hover:shadow-2xl transition-all active:scale-95 '>Book now</button>
</div>
</div>

<div className='w-full h-[10vh] flex items-center justify-center bg-black' >
  <h1 className='text-white' >Сайт был сделан Матвеем Синицким по <span className='text-blue-300 underline' ><a href='https://www.figma.com/community/file/1498065693504546249/sophisticated-vacation-house-rental' >референсу</a></span></h1>
</div>



</>
}

export default memo(Gallery)