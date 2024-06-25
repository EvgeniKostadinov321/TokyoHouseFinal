'use client'
import './hero.css'
import Image from 'next/image'
import React from 'react'
import zinnia from '../../public/icons/zinnia.png'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function TextHero() {
  return (
    <>
        <motion.div
        initial={{ x: -1200, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        >
            <h1 id='hero_h1'>YOUR <Image className='textImageHero' src={zinnia} alt='circular pattern in red'></Image> ASIAN <Image className='textImageHero' src={zinnia} alt='circular pattern in red'></Image> CULINARY DREAM</h1>
        </motion.div> 

        <motion.div
        initial={{ x: -1200, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.85 }}
        >
            <p id='hero_paragh'>Welcome to our temporary - a place where every plate becomes a real work of art that you can enjoy.</p>
        </motion.div>

        <motion.div
        initial={{ x: -1200, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.95 }}
        >
            <Link href='/menu'><button id='hero_ord_btn'>MAKE AN ORDER</button></Link>
        </motion.div>
        
        
        
    </>
  )
}
