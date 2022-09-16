import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import biggieImage from '../public/Biggie-Hero-TW.svg'

export default function Home() {
  const orderButton = useRef();
  const biggieHero = useRef();
  const mainHero = useRef([]);

  const tl = gsap.timeline({
    defaults: {
      opacity: 1,
      y: 0,
      ease: "back.out(2)",
      duration: 0.5,
    }
  })

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
  })

  useEffect(() => {
    tl.to(mainHero.current, {})
    tl.to(biggieHero.current, {})
  }, [])


  return (
    <div className="box-border m-0 p-0">
      <Head>
        <title>Biggie&apos;s Burgers</title>
        <meta name="description" content="Biggie's Burgers" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className="flex justify-end bg-red-800 text-yellow-50 h-16 items-center">
        <p className="bg-yellow-400 p-2 rounded text-sm cursor-pointer mr-4" ref={orderButton}>Order Now</p>
      </header>

      <main className="box-border m-0 p-0 w-screen h-full">
        <div 
        className="bg-yellow-50 flex flex-col md:flex-row items-center md:items-between text-center w-screen md:h-136">
          <div 
          ref={mainHero}
          className="p-4 w-screen sm:w-5/6 flex flex-col justify-between items-center my-12 md:my-0 md:w-1/2 2xl:w-1/2">
            <p className="text-red-800 text-5xl font-bold">Biggies Burgers</p>
            <p className="text-red-800 text-2xl font-light my-8">We got the juiciest burgers in town. And if you don&apos;t know, now you know.</p>
            <button className="bg-yellow-400 p-4 w-36 rounded text-yellow-50">Menu</button>
          </div>
          <div ref={biggieHero} className="flex relative lg:absolute md:w-full 2xl:relative 2xl:w-1/2 justify-end">
            <Image
            src={biggieImage} 
            alt="Biggie Hero" 
            />
          </div>
        </div>
        <div className="bg-red-800 h-1/2 w-full py-16 px-4">
          <div className="flex flex-col justify-center items-center text-center">
              <p className="text-5xl text-yellow-50">Sicker than your average.</p>
              <p className="text-xl font-light text-yellow-50 mt-8">Biggie patties are made from a blend of sirloin and chuck, sourced locally from Upstate Farms. We don’t sacrifice on quality.</p>
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
