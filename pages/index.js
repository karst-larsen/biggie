import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import biggieImage from '../public/Biggie-Hero-TW.svg'
import { mainList, sidesList, dessertList } from '../src/components/Menu/Menu';


export default function Home() {
  const orderButton = useRef();
  const biggieHero = useRef();
  const mainHero = useRef();
  const menu = useRef();

  useEffect(() => {
    gsap.set(orderButton.current, {
      opacity: 0, 
      x: -20
    })
  }, []); 

  useEffect(() => {
    gsap.set(mainHero.current, {
      opacity: 0, 
      y: 20
    })
  }, []); 

  useEffect(() => {
    gsap.set(biggieHero.current, {
      opacity: 0, 
      y: 20,
      duration: 0.5
    })
  }, []); 

  useEffect(() => {
    gsap.to(orderButton.current, {
      opacity: 1, 
      x: 0,
      duration: 0.5,
      ease: "back.out(2)",
    })
  });

  const tl = gsap.timeline({
    defaults: {
      ease: "power2.out",
      duration: 0.5,
    }
  });


  useEffect(() => {
    tl.to(mainHero.current, {
       opacity: 1,
      y: 0,
    })
    tl.to(biggieHero.current, {
       opacity: 1,
      y: 0,
    })
  })

 let mainMenuList = mainList();
 let sidesMenuList = sidesList();
 let dessertsMenuList = dessertList();


  return (
    <div className="box-border m-0 p-0 scroll-smooth">
      <Head>
        <title>Biggie&apos;s Burgers</title>
        <meta name="description" content="Biggie's Burgers" />

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Manrope:wght@300;400;700&display=swap" rel="stylesheet"></link>
        
      </Head>
      <header className="flex justify-end bg-red-800 text-yellow-50 h-16 items-center">
        <p className="bg-yellow-400 py-2 px-4 uppercase rounded text-sm cursor-pointer mr-4 hover:bg-yellow-500" ref={orderButton}>Order Now</p>
      </header>

      <main className="box-border m-0 p-0 w-screen h-full">
        <div 
        className="bg-yellow-50 flex flex-col md:flex-row items-center md:items-between text-center w-screen md:h-136">
          <div 
          ref={mainHero}
          className="p-4 w-screen sm:w-5/6 flex flex-col justify-between items-center my-12 md:my-0 md:w-1/2 2xl:w-1/2 z-10">
            <p className="text-red-800 text-5xl font-bold font-Lora ">Biggies Burgers</p>
            <p className="text-red-800 text-2xl my-8 font-light font-Manrope">We got the juiciest burgers in town. And if you don&apos;t know, now you know.</p>
            <button className="bg-yellow-400 uppercase p-4 w-36 rounded text-yellow-50 hover:bg-yellow-500 z-10" onClick={() => menu.current?.scrollIntoView({behavior: 'smooth'})}>Menu</button>
          </div>
          <div ref={biggieHero} className="z-0 select-none flex relative lg:absolute md:w-full 2xl:relative 2xl:w-1/2 justify-end -mb-1 lg:mb-1">
            <Image
            src={biggieImage} 
            alt="Biggie Hero" 
            className="select-none"
            />
          </div>
        </div>
        <div className="bottomHero bg-red-800 h-1/2 w-full py-16 px-4" id="bottomHero">
          <div className="flex flex-col justify-center items-center text-center h-72" id="sickerThanAverage"> 
              <p className="text-5xl text-yellow-50 font-Lora font-bold">Sicker than your average.</p>
              <p className="text-xl font-light text-yellow-50 mt-8 font-Manrope font-light">Biggie patties are made from a blend of sirloin and chuck, sourced locally from Upstate Farms. We don’t sacrifice on quality.</p>
          </div>
        </div>
        <div className="bg-yellow-50 h-fit flex justify-center" id="menu" ref={menu}>
          <div className="w-5/6 border-4 border-red-800 mt-16 max-w-4xl">
            <h1 className="text-5xl text-center text-red-800 font-bold py-4 border-b-4 border-red-800 mb-8 font-Lora">Menu</h1>
          {
            mainMenuList.map(menuItem => {
               return (
                <div className="flex flex-col justify-center items-center text-center text-red-800 mb-8 py-4" key={menuItem.item}>
                  <h2 className="text-4xl font-bold px-4 font-Lora">{menuItem.item}</h2>
                  <p className="font-light w-5/6 py-4 font-Manrope">{menuItem.description}</p>
                  <span className="text-2xl font-bold font-Manrope">${menuItem.price}</span>
                </div>
                 )
            })
          }
            <div className="bg-red-800 h-fit pb-8">
              <h1 className="text-5xl text-center text-yellow-50 font-bold py-8 border-b-4 border-red-800 font-Lora">Sides</h1>
              <p className="text-yellow-50 mb-8 font-light border-b-2 pb-8 text-center italic font-Manrope">All of our potatoes are freshly imported from Idaho.</p>
              {
                sidesMenuList.map(menuItem => {
                  return (
                    <div className="flex flex-col justify-center text-center items-center text-yellow-50 mb-8 py-4" key={menuItem.item}>
                    <h2 className="text-4xl font-bold px-4 font-Lora">{menuItem.item}</h2>
                    <p className="font-light w-5/6 py-4 font-Manrope">{menuItem.description}</p>
                    <span className="text-2xl font-bold font-Manrope">${menuItem.price}</span>
                  </div>
                  )
                })
              }
            </div>
            <div className="h-fit">
              <h1 className="text-5xl text-center text-red-800 font-bold py-8">Desserts</h1>
              <p className="border-b-2 border-red-800 text-red-800 font-light pb-8 text-center italic mb-8">Featuring collaborations with our brothers over at Tang Bakery.</p>
              {
                dessertsMenuList.map(menuItem => {
                  return (
                    <div className="flex flex-col justify-center items-center text-red-800 mb-8 py-4 text-center" key={menuItem.item}>
                    <h2 className="text-4xl font-bold px-4 font-Lora">{menuItem.item}</h2>
                    <p className="font-light w-5/6 py-4 font-Manrope">{menuItem.description}</p>
                    <span className="text-2xl font-bold font-Manrope">${menuItem.price}</span>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
