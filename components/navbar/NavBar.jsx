'use client'

import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import '../../app/globals.css';
import Image from 'next/image';
import styles from './navbar.module.scss';
import Link from 'next/link';
import SpaneilLogo from '../../public/images/digital-logo.png'

const NavBar = () => {
    const [isActive, setIsActive] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true); 
    const [lastScrollY, setLastScrollY] = useState(0);
    

    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {

            const currentScrollY = window.scrollY;

            if (currentScrollY === 0) {
                setShowNavbar(true)
            } else  {
                setShowNavbar(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])


    const navItems = {
        services: { 
            label:"Services",
            link:'/services' },
        work: {
            label:"Work",
            link:"/work"},
        about: {
            label:"About",
            link:"/about"},
        blog: {
            label:"Blog",
            link:"/blog"},
        contact: {
            label:"Contact",
            link:"/contact"},
        }


    return (
        <>
        <div className={`${styles.navbar} ${showNavbar ? styles.showNavbar : styles.hideNavbar}`}>
            <div>
                <Image
                src={SpaneilLogo}
                width={197}
                height={90}
                styles={{objectFit:"cover"}}/>
            </div>
            <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""} `}></div>

            </div>

       
                        <ul className={`${styles.navbarLinks} ${isActive ? styles.mobileLinks : ""}`}> 
                        {Object.entries(navItems).map(([key, value]) => (
                            <div key={key} className={router.pathname === value.link ? styles.active : ''}>
                                <Link href={value.link}>{value.label}</Link>
        
                            </div>
                        ))}
        
        
                    </ul>
       

        </div>
        </>
    )
}

export default NavBar