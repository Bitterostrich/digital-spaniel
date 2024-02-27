'use client'

import React, {useState} from "react";
import styles from './missionstatement.module.scss';
import globalstyles from '@/app/globals.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import {    officedesk,
    officepeople,
    officesign,
    officeway,} from './imports';


const MissionStatement = () => {

    const missionHeader  = [
        {
            content: "What are",
            className: `${globalstyles.title}`
        },
        {
            content: "we all about?",
            className: `${globalstyles.titleTwo}`
        }
    ]

    return (
        <>
        <section className={styles.missionstatement}>
            <div className={styles.headerContainer}>
           

            {missionHeader.map((title, index) => (
                    <div key={index} className={styles.header}>
                        <h3 className={title.className}>{title.content}</h3>
                    </div>
                ))}
                 </div>


                <div className={styles.background}>
                <div className={globalstyles.container}>
                   <div className={styles.itemsLeft}>
                    <Image
                    src={officedesk}
                    alt="image for office desk"
                    layout="responsive"
                    objectFit="cover"/>

                    <div className={styles.itemsText}>
                    <p>About</p>
                    <p>Careers</p>
                   </div>
                   </div>


                    <div className={styles.items}>
                        <div className={styles.imageContainers}>
                        <Image
                            alt="image for office people"
                            src={officepeople}
                            layout="responsive"
                            objectFit="cover"/>


                        <div className={styles.imagetrial}>
                        <Image
                            src={officesign}
                            alt="image for office wall sign"
                            layout="responsive"
                            objectFit="cover"/>
                        </div>

                        </div>
                        <div className={styles.imageContainers}>
                        <Image
                            alt="image for office hallway"
                            src={officeway}
                            layout="responsive"
                            objectFit="cover"/>


                        </div>

                    </div>
                </div>

            </div>
            

         

        </section>
        </>
    )
}

export default MissionStatement