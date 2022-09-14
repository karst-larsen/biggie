import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import biggieImage from '../public/Biggie-Hero-TW.svg'

export default function Home() {
  const test = useRef();
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
    gsap.set(mainHero.current, {
      opacity: 0, 
      y: 20
    })
  }, []); 

  useEffect(() => {
    gsap.set(biggieHero.current, {
      opacity: 0, 
      y: 20
    })
  }, []); 

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
        <p className="bg-yellow-400 p-2 rounded text-sm cursor-pointer mr-4" ref={test}>Order Now</p>
      </header>
      <main className="box-border m-0 p-0 flex justify-start text-white bg-yellow-50 h-fit md:h-screen items-center md:px-8">
        <div 
        className="flex flex-col md:flex-row items-center md:items-between text-center w-full h-3/5 border ">
          <div 
          ref={mainHero}
          className="w-1/2 flex flex-col justify-evenly items-center">
            <p className="text-red-800 text-5xl font-bold">Biggies Burgers</p>
            <p className="text-red-800 text-2xl font-light my-8">We got the juiciest burgers in town. And if you don&apos;t know, now you know.</p>
            <button className="bg-yellow-400 p-4 w-36 rounded">Menu</button>
          </div>
          <div ref={biggieHero} className="relative right-0 md:w-3/5">
            <Image 
            src={biggieImage} 
            alt="Biggie Hero" 
            />
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
