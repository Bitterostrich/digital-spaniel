'use client'

import React, {useState} from 'react'
import styles from './about.module.scss'
import globalstyles from '@/app/globals.module.scss'
import herostyles from '../hero/hero.module.scss'




const About = () => {

    const [showButton, setShowButton] = useState(false)
    
    const leftItems = [
        {
            content: "What are",
            className:`${herostyles.title}`
        },
        {
            content: "we capable of",
            className:`${herostyles.titleTwo}`
        }, 
        {
            content:"By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.",
            className:`${herostyles.description}`
        },
        {
            content:"Our process",
            className:`${herostyles.link}`
        }
    ]

    const rightItems = [
        {   
            category: "Brand",
            items: [
                {content: "Brand Strategy", link: "/strategy"},
                {content: "Logo & Name", link: "/logo"},
                {content: "Identity & Collateral", link: "/identity"},
            ],
        },

        {   
            category: "Marketing",
            items: [
                {content: "Digital", link: "/digital"},
                {content: "Market Research", link: "/marketresearch"},
            ],
        },

        {   
            category: "Development",
            items: [
                {content: "eCommerce", link: "/ecommerce"},
                {content: "Web Development", link: "/webdevelopment"},
                {content: "Mobile Apps", link: "/mobileapps"},
            ],
        },


    ]
    
    return (
        <>
        <section className={styles.about}>
            <div className={globalstyles.container}>
            <div className={styles.contentContainer}>
                {leftItems.map((item, index) =>(
                    <p key={index} className={item.className}>{item.content}</p>
                ))}
                

            </div>
            
            <div className={styles.listContainer}>
                {rightItems.map((category, index) => (
                    <div key={index} className={styles.gridItems}>
                        <h3 className={styles.listTitle}>{category.category}</h3>
                        {category.items.map((item, itemIndex) => (
                            <p onMouseEnter={() =>{setShowButton(!showButton)}} key={itemIndex} className={`${styles.listItem} ${showButton ? styles.activeButton : "" }`}>
                                {item.content}
                           
                            </p>
                        ))}
                    </div>
                ))}

            
            </div>
            </div>

        </section>
        
        </>
    )
}

export default About 