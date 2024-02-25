import styles from './projects.module.scss';
import globalstyles from '@/app/globals.module.scss';
import {whellies,
    newspaper,
    makerek,
    dinamonews,
    rider } from './imports';

import Image from 'next/image';
import Link from 'next/link'

const RecentProjects = () => {



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
        {
            content:"All"
        },
        {
            content:"Branding"
        },
        {
            content:"Web Design"
        },
        {
            content:"Digital Marketing"
        }
    ]

    const gridContent = [
        {
            image:whellies,
            items: [
                {title: "Make Ideas happen", 
                description:"A local paper with big ideas needed",
                link: "Full project"}
            ]
        },
        {
            image:newspaper,
            items: [
                {title: "Make Ideas happen", 
                description:"A local paper with big ideas needed",
                link: "Full project"}
            ]
        },
        {
            image:makerek,
            items: [
                {title: "Make Ideas happen", 
                description:"A local paper with big ideas needed",
                link: "Full project"}
            ]
        },
        {
            image:dinamonews,
            items: [
                {title: "Make Ideas happen", 
                description:"A local paper with big ideas needed",
                link: "Full project"}
            ]
        },
        {
            image:rider,
            items: [
                {title: "Make Ideas happen", 
                description:"A local paper with big ideas needed",
                link: "Full project"}
            ]
        },
    ]

    return (
        <>
        <section className={styles.recentprojects}>
            <div className={globalstyles.singleContainer}>
 
            <div>
                {headerText.map((title, index) => (
                    
                        <h3 key={index}>{title.title}</h3>
                ))}
            </div>


            <div className={styles.gridWrapper}>
                <div className={styles.gridnav}>
                    {gridNav.map((content, index) => (
                        <span  key={index}>{content.content}</span>
                    ))}
                </div>
                <div className={styles.grid}>
                    {gridContent.map((image, index) => (
                        <div className={styles.gridItem} key={index}>
                        <Image
                        className={styles.picture}
                        
                        width={420}
                        height={420}
                     
                        objectFit="cover"
                       
                        src={image.image}/>

                        {image.items.map((item, itemIndex) => (
                            <div className={styles.gridText} key={itemIndex}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <Link href="#">{item.link}</Link>
                            </div>
                        ))}
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