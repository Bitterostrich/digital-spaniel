import styles from './projects.module.scss';
import React, {useState} from 'react'
import globalstyles from '@/app/globals.module.scss';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import {whellies,
    newspaper,
    makerek,
    dinamonews,
    rider } from './imports';

import Image from 'next/image';
import Link from 'next/link'

const RecentProjects = () => {
    const [currentNav, setCurrentNav] = useState("All"); 



    const headerText = [
        {
            title:"Some of our",
            className:`${globalstyles.title}`
        },
        {
            title:"recent projects",
            className:`${globalstyles.titleTwo}`
        }

    ]

    const gridNav = [
        "All", "Branding", "Web Design", "Digital Marketing"
    ]

    const gridContent = [
        {
            category: "All",
            items: [ 
                {
                image:whellies,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
                {
                image:newspaper,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
                {
                image:makerek,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
                {
                image:dinamonews,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },

                {
                image:rider,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
            ]
        },

        {
            category: "Branding",
            items: [ 

                {
                image:newspaper,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
                {
                image:makerek,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
                {
                image:dinamonews,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },

            ]
        },

        {
            category: "Web Design",
            items: [ 

                {
                image:newspaper,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
                {
                image:makerek,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
                {
                image:dinamonews,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },

                {
                image:rider,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
            ]
        },

        {
            category: "Digital Marketing",
            items: [ 
                {
                image:whellies,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
                {
                image:newspaper,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
                {
                image:makerek,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
                {
                image:dinamonews,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },

                {
                image:rider,
                title: "Make Ideas happen", 
                description:"A local paper with big ideas needed A sharp new brand to inspire readers.",
                link: "Full project"
                },
            ]
        },

    ]

    const handleNavChange = (direction) => {
        const currentIndex = gridNav.indexOf(currentNav);
        let newIndex = currentIndex
        
        if (direction === "next" && currentIndex < gridNav.length - 1) {
            newIndex = currentIndex + 1
        } else if (direction === "prev" && currentIndex > 0) {
            newIndex = currentIndex - 1
        }

        const newCategory = gridNav[newIndex]
        setCurrentNav(newCategory)
    }

    const filteredContent = currentNav === "All" ? gridContent : gridContent.filter(item => item.category === currentNav)

    const gridFooter = [
        {
            content:"See all work"
        }
    ]


    const category = gridContent.map(({category}) => category)
    console.log(category)

    return (
        <>
        <section className={styles.recentprojects}>
            <div className={globalstyles.singleContainer}>
 
            <div>
                {headerText.map((title, index) => (
                    
                        <h3 className={title.className} key={index}>{title.title}</h3>
                ))}
            </div>


            <div className={styles.gridWrapper}>
                <div className={styles.gridnav}>
                    {gridContent.map(({category}, index) => (
                        <span  key={index} 
                        onClick={() => setCurrentNav(category)} 
                        
                        className={`${styles.nav} ${currentNav === category ? styles.activeNav : ""}`}>{category}</span>
                    ))}
                </div>



                <div className={styles.gridfooter}>  
                {gridFooter.map((item, index) => (
                    <p key={index} onClick={() => setCurrentNav("All")} className={styles.footerText}>{item.content}</p>
                ))}
                <div className={styles.footerButtons}>
                    <div onClick={() => handleNavChange('prev')} className={`${styles.buttonWrap} ${currentNav === category ? styles.activeNav : ""}`}>
                    <MdArrowForwardIos className={styles.buttonLeft}/>
                    </div>
                    
                    <div onClick={() => handleNavChange('next')} className={styles.buttonWrap}>
                    <MdArrowForwardIos className={styles.buttonRight}/>
                    </div>
                    

                </div>
            </div>


                <div className={styles.grid}>
                    {filteredContent.length > 0 && filteredContent[0].items.map((item, index) => (
                        <div className={styles.gridItem} key={index}>
                        <Image
                        className={styles.picture}
                        layout="responsive"
                        objectFit="cover"
                        src={item.image}/>

                   
                            <div className={styles.gridText}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <Link href="#">{item.link}</Link>
                            </div>
            
                        </div>
                    ))}
            </div>
            </div>

           



            </div>
        </section>
        </>
    )
}

export default RecentProjects