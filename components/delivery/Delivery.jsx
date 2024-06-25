'use client'
import './deliveryStyle.css'
import React from 'react'
import Image from 'next/image'
import takeAway from '../../public/takeAway.svg'
import { motion } from 'framer-motion'

export default function Delivery() {
  return (
    <section id='delivery-section'>

        <div className='delivery-information'>
            
            <motion.div
            initial={{ x: -1200, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            >
                <h1 id='delivery-h1'>We Are Ready To Deliver Your Food</h1>
            </motion.div>
            <motion.div
            initial={{ x: -1200, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                <p id='parag-information-delivery'>Craving delicious food without leaving the comfort of your home? We&apos;ve got you covered! Our lightning-fast delivery service ensures your favorite meals arrive at your doorstep fresh, hot, and ready to enjoy. </p>
            </motion.div>

            
            
               
            
            <motion.div className='stats-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                >
                         <div className='box-single-stats'>
                            <h1 className='main-stat-box-element'>5.4</h1>
                            <div className='wrapper-parags-stats'>
                                <p className='parag-stats-box'>Years</p>
                                <p className='parag-stats-box'>Expirience</p>
                            </div>
                        </div>
                        <div className='box-single-stats'>
                            <h1 className='main-stat-box-element'>7.6K</h1>
                            <div className='wrapper-parags-stats'>
                                <p className='parag-stats-box'>All Time</p>
                                <p className='parag-stats-box'>Users</p>
                            </div>
                        </div>
            </motion.div>


        </div>

        
        

        <motion.div id='ilustration-delivery'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                    <Image src={takeAway} alt='take away image' id='image-delivery' ></Image>  
        </motion.div>
    </section>
  )
}
