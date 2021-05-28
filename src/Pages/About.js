import HeroImageItem from '../Components/HeroImageItem'
import styles from '../CSS/About.module.css'
import { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    // eslint-disable-next-line react-hooks/exhaustive-deps          
    }, []) 

    const aboutImg = "https://www.syfy.com/sites/syfy/files/mon-calamari-sweater-the-mandalorian.jpg"
    const aboutCaption = `Every Kyber Parker crystal is reclaimed, tempered back into fighting form by our talented team of Mon Calamari artisans.`

    return (
        <div className={styles.container}>
            <HeroImageItem imageSrc={aboutImg} imageAlt={"Reclaimed Kyber Crystals"} caption={aboutCaption} />            
        </div>
    )
}


export default About