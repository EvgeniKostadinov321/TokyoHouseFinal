import React from 'react'
import './subHero.css'
import Image from 'next/image'
import RamenBow from '../../public/foods/bow_1.png'
import Link from 'next/link'


export default function SubHero() {
  return (
    <section id='subHeroSection'>
        <div id='subHero_left_side'>
            <h1 id='Sub_hero_h1'>A TASTE OF ASIAN TRADITION IN EVERY SERVINGS</h1>
            <p id='subParag_1' className='parag_subHero'>Discover the magic of Asian cuisine with our times. Each serving is filled with authentic flavors and aromas of Asia, which attract visitors from different parts of the world. Immerse yourself in the world of unique recipes and traditions that give our novel its unique taste.</p>
            <p id='subParag_2' className='parag_subHero'>Our novelties promise sweet, sour and spicy notes, an exquisite combination of ingredients and unusual textures to capture your imagination and satisfy the most demanding taste preferences.</p>
            <Link href='/menu'><button id='hero_ord_btn'>SHOW MENU</button></Link>
        </div>
        <div id='subHero_Absolute_Component'>
            <Image
                src={RamenBow}
                alt='Bow of ramen'
                id='bow_1'
            >
            </Image>

            
        </div>

    </section>
  )
}
