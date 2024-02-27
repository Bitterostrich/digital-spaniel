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
             
                    {header.map((title, index) => {
                           <div key={index} className={styles.header}>
                            <h3 className={title.className}>{title.content}</h3>
                            </div>
                    })}
                
            </div>

        </section>
        </>
    )
}

export default Testimonials

