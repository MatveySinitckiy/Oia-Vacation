import { memo, useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'

function Information(){
 const sectionRef = useRef(null);
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);

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

return <>  

 <div className='w-[auto] h-[4.3vh] flex justify-between text-xs md:text-xl border-b-1 sticky z-3 top-0 left-0' id='header' >
  <Link to="/" className='w-[30%] flex items-center text-2xs md:w-[15%]  justify-center  font-serif-uniq  h-[100%]'>Shore Guesthouse</Link>
  <div className='w-[57%] h-[100%] md:w-[37%] flex justify-evenly ' >
<Link to="/Gallery" className='button-header text-center flex items-center justify-center font-serif-uniq' >Gallery </Link>
<Link to="/Information" className='button-header flex items-center justify-center  font-serif-uniq' >Information</Link>
<button className='button-header bg-black hover:bg-orange-200 hover:text-black text-white font-normal active:bg-amber-100 active:text-black active:shadow-amber-200' >Book now</button>
  </div>
</div>
<div className="sticky top-[25vh] ml-[4vw] z-1 text-5xl md:text-7xl  font-serif-uniq" > Information</div>
<div className="w-full mt-[30vh] relative z-2 h-auto bg-white">
    <div className="w-full h-[58vh] infhs1 
    flex justify-center items-center font-serif-uniq
     text-white text-2xl md:text-5xl "><p ref={sectionRef} className="opacity-0 text-center" >This house, and this village, have been a part of our lives for <br></br> generations.</p></div>
    <div ref={sectionRef1} className="w-full opacity-0 h-[99vh] flex-row flex justify-evenly mt-[25vh] border-t-1" >
    <h1 className="font-serif-uniq text-2xl m-[5vmin] md:m-[0vmin] md:text-5xl pt-[10vh]" >History of the Neighbourhood</h1>
    <div className="flex flex-col pt-[5vh]" >
        <img src="./idk1.jpg" className="w-[40vw] h-auto md:w-[40vw] md:h-[35vw]" ></img>
        <p className="font-serif-uniq text-clip  mt-[4vh] text-2xs md:text-2xl" >Oia is a living, breathing village. Wander the streets and you'll find hidden<br></br>
         courtyards and locals chatting over coffee. Skip the fancy restaurants and enjoy<br></br>
          today’s catch at a family-run taverna. Catch the sunset for a moment of peace.<br></br>
           And, if you can, strike up a conversation with a local – they’ll tell you stories of<br></br> Oia that no guidebook can. </p>
    </div>
</div>
<div  className="w-full mt-[25vh]"   >
    <img src="./infhs2.jpg"  className=" w-[95%] scale-y-95 mx-auto" ></img>

</div>
<div className="w-full h-[180vh] md:h-[120vh] opacity-0 mt-[15vh]" ref={sectionRef2}   >
    <div className="flex flex-col justify-evenly" >
        <h1 className="font-serif-uniq text-4xl md:text-5xl mb-[2vh] ml-[7.5%]" >Visit</h1>
        <div className=" w-[85%] h-[33%] border-t-1 mx-auto py-[3vmin] flex flex-row justify-between" >

            <div className="font-serif-uniq text-xl mx-[3vmin] md:text-3xl" >
                <h1 className="text-nowrap" >Option 1</h1>
                <h2 className="mt-[1vw] text-nowrap" >Private Transfer</h2>
            </div>
            <div className="font-serif-uniq  md:text-2xl">
            <p>For a stress-free arrival, we can arrange a private transfer for you. A driver will<br></br>
             be waiting at the port with a sign and will bring you directly to Shore<br></br>
              Guesthouse in about 35–40 minutes.</p>
              <p className="mt-[2vw] text-2xs mb-[1vw]" >Price:</p>
              <h1 className="text-2xl" >€40–€60 (varies by season)</h1>
                   <p className="mt-[2vw] text-2xs mb-[1vw]" >How to Book:</p>
              <h1 className="text-2xl" >Just send us your ferry details, and we’ll take care of it!</h1>
            </div>

        </div>
         <div className="w-[85%] h-[33%] border-t-1  mt-[10vh] mx-auto py-[3vmin] flex flex-row justify-between" >

            <div className="font-serif-uniq text-xl mr-[20vw] md:mr-[0vw] md:text-3xl" >
                <h1 lassName="text-nowrap"  >Option 2</h1>
                <h2 className="mt-[1vw]  text-nowrap" >Taxi</h2>
            </div>
            <div className="font-serif-uniq md:text-2xl">
            <p>Taxis are available at the port but can be scarce during peak times.</p>
              <p className="mt-[2vw] text-2xs mb-[1vw]" >Price:</p>
              <h1 className="text-2xl" >€40–€60 (varies by season)</h1>
                   <p className="mt-[2vw] text-2xs mb-[1vw]" >About:</p>
              <h1 className="md:text-2xl" >Drivers may drop you at a central spot in Oia (due to pedestrian-only areas),<br></br> but we’ll guide you from there</h1>
            </div>

        </div>
         <div className="w-[85%] h-[33%] border-t-1  mt-[10vh] mx-auto py-[3vmin] flex flex-row justify-between" >

            <div className="font-serif-uniq text-xl mr-[12vw] md:mr-[0vw] md:text-3xl" >
                <h1 className="text-nowrap" >Option 3</h1>
                <h2 className="mt-[1vw] text-nowrap" >Public Bus</h2>
            </div>
            <div className="font-serif-uniq mr-[8.5vw] text-2xl">
            <p>Take a bus from Athinios Port to Fira (€2.50,  ~30–40 min).</p>
              <p className="mt-[2vw] text-2xs mb-[1vw]" >Price:</p>
              <h1 className="text-2xl" >€5</h1>
                  
            </div>

        </div>
    </div>
</div>
<div className='w-auto h-[55vh] text-white p-[5vmin] mt-[30.5vh] footer-2 ' >
  <h3 className='font-serif-uniq md:text-xl text-2xs' >Plan Your Dream Getaway:</h3>
  <h1 className='font-serif-uniq md:text-6xl text-2xl mt-[1vh] mb-[3vh]  ' >Summer 2025 Dates Available</h1>
  <button className='font-normal text-black text-xl bg-white p-[1.5vmin] rounded-4xl hover:bg-black hover:text-white hover:shadow-2xl transition-all active:scale-95 '>Book now</button>
</div>

</div>
<div className='w-full h-[10vh] flex items-center justify-center bg-black' >
  <h1 className='text-white' >Сайт был сделан Матвеем Синицким по <span className='text-blue-300 underline' ><a href='https://www.figma.com/community/file/1498065693504546249/sophisticated-vacation-house-rental' >референсу</a></span></h1>
</div>




</>
}
export default memo(Information)