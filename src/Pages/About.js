import HeroImageItem from '../Components/HeroImageItem'
import styles from '../CSS/About.module.css'
import { useEffect } from 'react'

const About = () => {

    //useEffect(() => {
    //    window.scrollTo(0,0)
    // eslint-disable-next-line react-hooks/exhaustive-deps          
    //}, []) 

    const aboutImg = "https://www.syfy.com/sites/syfy/files/mon-calamari-sweater-the-mandalorian.jpg"
    const aboutCaption = `Every Kyber Parker crystal is reclaimed, tempered back into fighting form by our talented team of Mon Calamari artisans.`

    const meImg = "https://media-exp1.licdn.com/dms/image/C4D03AQFKLXoMQb4RMg/profile-displayphoto-shrink_800_800/0/1615204919800?e=1623888000&v=beta&t=ChVvXo9geEIVC_6sfN3HnD2O8nJu5KNS1SyTG6AZNuU"

    return (
        <div className={styles.container}>
            <HeroImageItem imageSrc={aboutImg} imageAlt={"Reclaimed Kyber Crystals"} caption={aboutCaption} />
            <div className={styles.aboutMe}>
                <div className={styles.aboutMeText}>
                    <span className={styles.headline}>Thanks for visiting Kyber Parker!</span>
                    <span className={styles.text}>Hello! My name is Tim Mok, and I created this full stack web application in 7 days as my final solo project for <a href="https://generalassemb.ly/education/software-engineering-immersive/new-york-city" target="_blank">General Assembly's Software Engineering Immersive</a></span>
                    <span className={styles.text}>Project achievements include front-end development, back-end development, user authentication, user encryption, hashed user passwords in the database, database management, associations, CRUD routes, code-splitting/lazy-loading, CSS modules, and production deployment.</span>
                    <span className={styles.text}>Technologies used include Javascript, HTML, CSS Modules, Python, Flask, SQLAlchemy, and PostgreSQL</span>
                    <span className={styles.textLinks}><a href="https://www.linkedin.com/in/tim-mok/" target="_blank">Linkedin</a> | <a href="https://github.com/graymok" target="_blank">GitHub</a></span>
                </div>
                <img className={styles.aboutMeImage} src={meImg} alt="The creator" />
            </div>            
        </div>
    )
}


export default About