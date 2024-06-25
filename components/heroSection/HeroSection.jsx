import React from 'react'
import Image from 'next/image'
import './hero.css'


import stickWithSushi from '../../public/pngFlotable/stickAndSushi.png'
import MovingBar from './MovingBar'
import TextHero from './TextHero'


export default function HeroSection() {
  return (
    <section id='home-section'>
        <TextHero></TextHero>
        <MovingBar></MovingBar>

        <Image id='sushiSetHero_absolute' src={stickWithSushi} alt='circular pattern in red'></Image>

        
    </section>
  )
}
