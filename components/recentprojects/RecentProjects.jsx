import styles from './projects.module.scss';
import globalstyles from '@/app/globals.module.scss';


const RecentProjects = () => {


    const headerText = [
        {
            title:"Some of our",
            className:`${globalstyles.title}`
        },
        {
            titleTwo:"recent projects",
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

    return (
        <>
        <section>
            <div className={globalstyles.singleContainer}>
            <div>
            <div>
                {headerText.map((title, index) => (
                    <div key={index}>
                        <h3>{title.title}</h3>
                        <h3>{title.titleTwo}</h3>
                    </div>
                ))}

            </div>
            <div>
                <div className={styles.gridnav}>
                    {gridNav.map((content, index) => (
                        <span  key={index}>{content.content}</span>
                    ))}
                </div>


            </div>

            </div>


            </div>
        </section>
        </>
    )
}

export default RecentProjects