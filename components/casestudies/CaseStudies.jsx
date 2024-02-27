'use client'

import React, {useState} from "react";
import styles from './casestudies.module.scss';
import globalstyles from '@/app/globals.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import {dashboard} from './imports'

const CaseStudies = () => {
    
    const [currentStudy, setCurrentStudy] = useState(0)

    const headerContent = [
        {
            title: "Case Studies",
            className:`${styles.title}`,
            description: "Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of you and your business."
        }
    ]

    const caseStudies = [
        { id: 1, title: "Project Title Here", image:  dashboard, description: "Short project description goes here To explain what the project is all about.", link: "Read more" },
        { id: 2, title: "Project Title Here", image:  dashboard, description: "Short project description goes here To explain what the project is all about.", link: "Read more" },
        { id: 3, title: "Project Here", image: dashboard, description: "Short project description goes here To explain what the project is all about.", link: "Read more" },
    ];

    const handleStudyScroll = (direction) => {
        const container = document.querySelector('.' + styles.studyContainer);
        const containerWidth = container.offsetWidth;
        const itemWidthPercent = 100;
        const itemWidth = (containerWidth * itemWidthPercent) / 100 // get width as a percentage
    

        
        console.log(container)
    
        if (direction === -1 && currentStudy > 0) {
            // Scroll left
            container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
            setCurrentStudy(currentStudy - 1);
        } else if (direction === 1 && currentStudy < caseStudies.length - 1) {
            // Scroll right
            container.scrollBy({ left: itemWidth, behavior: 'smooth' });
            setCurrentStudy(currentStudy + 1);
        }
    };

    // const filteredStudies = currentStudy === 1 ? caseStudies : caseStudies.filter(item => item.id === currentStudy)

    return (
        <>
        <div>
            
        </div>
        <section className={styles.casestudies}>
        <div className={globalstyles.wideContainer}>
            
                {headerContent.map((item, index) =>  (
                    <div key={index} className={styles.header}>
                        <h3 className={item.className}>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            <div className={styles.studyContainer}>
                {caseStudies.map((study, index) => (
                   
                        <div id={`item-${study.id}`} key={`${index}-${study.id}`} className={styles.studyItem}>
                            <div className={styles.imageWrap}>
                            <Image
                            
                            src={study.image}
                            objectFit="cover"
                            layout="responsive"/>
                            </div>

                            <div className={styles.textWrap}>

                            <div className={styles.studyText}>

                                <div className={styles.textItems}>
                                <h3>{study.title}</h3>
                                <p>{study.description}</p>
                                <Link href="#">{study.link}</Link>
                                </div>
                               

                            <div className={styles.buttonContainer}>
                                <div onClick={() => handleStudyScroll(-1)} className={styles.buttonWrap}>
                                    <MdArrowForwardIos className={styles.buttonLeft}/>
                                </div>
                    
                                <div onClick={() => handleStudyScroll(1)} className={styles.buttonWrap}>
                                    <MdArrowForwardIos className={styles.buttonRight}/>
                                </div>
                            </div>

                        </div>
                    </div>



                        </div>
              
                ))}
            </div>
            
        </div>
        </section>
        </>
    )
}

export default CaseStudies