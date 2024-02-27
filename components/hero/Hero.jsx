'use client'

import React from 'react';
import styles from './hero.module.scss';
import globalstyles from '@/app/globals.module.scss'
import Image from 'next/image'
import SpanielHero from '../../public/images/Spaniel01_gradient.png'

const Hero = () => {
    const heroContent = [
        {
            content:"Brand, Dev, Ecom, Marketing",
            className:`${styles.fineprint}`
        },
        {
            content:"We unleash",
            className:`${styles.title}`
        }, 
        {
            content:"business potential",
            className:`${styles.titleTwo}`

        },

        {
            content:"We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.",
            className:`${styles.description}`
        },

        {
            content: "Let's talk",
            className:`${styles.link}`
        }

    ]

    return (
        <>
        <section className={styles.hero}>
        <div className={globalstyles.container}>
        <div className={styles.contentContainer}>
                {heroContent.map((item,index) => (
                    <p key={index} className={item.className}>{item.content}</p>
                ))}
            </div>

            <div className={styles.imageContainer}>
                <Image
                alt="image for spaniel"
                className={styles.picture}
                src={SpanielHero}
                width={1900}
                height={1900}
                />
            </div>
        </div>

        </section>
        </>
    )
}

export default Hero