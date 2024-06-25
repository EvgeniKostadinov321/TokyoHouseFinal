// Header.js
'use client'
import './header.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profile from '../../public/icons/user.png'
import basket from '../../public/icons/basket.png'
import burgerMenu from '../../public/icons/burger-bar.png'
import closeIcon from '../../public/icons/close.png'
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from '@/context/ThemeContext'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [styleBrgMenu, setStyleBrgMenu] = useState('closedBrgMenu')

    const [styleBacground_mobile_header, setStyleBacground_mobile_header] = useState('')
   
    const { isDarkMode } = useTheme();
    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            if (isDarkMode) {
                setStyleBrgMenu('dark_background_header')
            } else {
                setStyleBrgMenu('opennedBrgMenu')
            }
            
        } else {
            setStyleBrgMenu('closedBrgMenu')
        }
    }, [isOpen,isDarkMode])
    
    const menuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0 }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    }

    
    

    

    return (
        <header>
            <div className='links-wrapper' id='left-nav'>
                <Link href='/'>TOKYO</Link>
                <Link href='/'>HOUSE</Link>
            </div>
            <div className='links-wrapper' id='middle-nav'>
                
                <Link href='/about'>ABOUT</Link>
                <Link href='/menu'>MENU</Link>
                <Link href='/delivery'>DELIVERY</Link>
                <Link href='/'>HOME</Link>
            </div>
            <div className='links-wrapper' id='right-nav'>
                <Link className='circle-nav-icons' href='/login'>
                    <Image
                        priority
                        src={profile}
                        alt='icon image of profile person'
                        className='icons-header-comp'>
                    </Image>
                </Link>
                <Link className='circle-nav-icons' href='/cart'>
                    <Image
                        priority
                        src={basket}
                        alt='icon image of basket'
                        className='icons-header-comp'>
                    </Image>
                </Link>
            </div>

            <Image
                src={burgerMenu}
                alt='burger menu-phone'
                id='burger_icon_component'
                onClick={toggleHamburger}
            >
            </Image>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        id={styleBrgMenu}
                        
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='closedControls_div'>
                            <Image
                                src={closeIcon}
                                alt='close icon'
                                id='close_menu_btn'
                                onClick={toggleHamburger}
                            />
                        </div>
                        <div>
                            <Link onClick={toggleHamburger}  href='/about'>ABOUT</Link>  
                        </div>
                        <div>
                            <Link onClick={toggleHamburger} href='/menu'>MENU</Link>
                            
                            </div>
                            <div>
                        <Link onClick={toggleHamburger} href='/delivery'>DELIVERY</Link>
                        </div>
                        <div>
                            <Link onClick={toggleHamburger} href='/'>HOME</Link>
                        </div>
                        <div>
                            <Link className='circle-nav-icons' href='/login'>
                                <Image
                                    priority
                                    src={profile}
                                    alt='icon image of profile person'
                                    className='icons-header-comp'
                                    onClick={toggleHamburger}
                                    >
                                </Image>
                            </Link>
                            </div>
                        <div>
                            <Link className='circle-nav-icons' href='/cart'>
                                <Image
                                    priority
                                    src={basket}
                                    alt='icon image of basket'
                                    className='icons-header-comp'
                                    onClick={toggleHamburger}
                                    >
                                </Image>
                            </Link>
                            </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
