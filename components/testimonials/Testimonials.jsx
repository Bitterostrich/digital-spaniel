'use client'

import React, {useContext} from 'react'
import {TestimonialContext} from '../../contexts/TestimonialContext'
import styles from './testimonials.module.scss';
import globalstyles from '@/app/globals.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Testimonials = () => {
    const {testimonials, loading} = useContext(TestimonialContext)

    if (loading) {
        return <div>Loading Testimonials</div>
    }

    const header = [
        {
            content: "Kind words",
            className: `${globalstyles.title}`
        },
        {
            content: "from our clients",
            className: `${globalstyles.titleTwo}`
        }
    ]

   
    return (
        <>
        <section className={styles.testimonials}>
            <div className={globalstyles.singleContainer}>
             
                    {header.map((title, index) => (
                           <div key={index} className={styles.header}>
                            <h3 className={title.className}>{title.content}</h3>
                            </div>
                    ))}
            </div>

            <div className={styles.testimonyContainer}>
                    {testimonials.map((testimonial, index) => (
                        <div id={`${testimonial.id}`} key={`${index} - ${testimonial.id}`} className={styles.testContainer}>
                            <div className={styles.testItems}>
                            
                            <div className={styles.testimonyTop}>
                            <p>{testimonial.testimony}</p>
                            </div>
                            <div className={styles.testimonyBottom}>

                            <Image
                            height={100}
                            width={100}
                            objectFit="cover"
                            src={testimonial.picture} />
                            <p className={styles.fontbold}>{testimonial.name}</p>
                            
                            <p >{testimonial.position}, {testimonial.company}</p>
                            </div>

                            </div>

                        </div>
                    ))}
                    
            </div>

        </section>
        </>
    )
}

export default Testimonials

