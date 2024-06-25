import React from 'react'
import './menu.css'
import Image from 'next/image'
import Link from 'next/link'

import DUMMY_MEALS from '@/data/mealData'

export default function MenuSection() {
  return (
    <section id='menuSection'>
        
        <div className='menu-wrapper'>
            <div id='menu-wrapper_items'>
                {DUMMY_MEALS.map((meal, index) => {
                    return (
                        <div className='card-meal' key={index}>
                            <div className='image-meal'>
                                <Image
                                    src={meal.imageSRC}
                                    alt={meal.title}
                                    className='imageComp_element'
                                />
                            </div>
                            
                            <div className='stats-meal'>
                                <h1 className='h1_single_meal'>{meal.title}</h1>
                                <p className='parag_single_meal'>{meal.description}</p>

                                <Link className='link-single-meal-slug'  href={`/menu/${meal.linkName}`}><button id='add_btn'><p className='parag_white'>{meal.price}$ / {meal.size}</p> <p className='parag_white'>ADD TO CART</p></button></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    </section>
  )
}
