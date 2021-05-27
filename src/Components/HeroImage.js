import styles from '../CSS/HeroImage.module.css'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'


const HeroImage = (props) => {
    return (
        <div className={styles.container}>
            <LazyLoadImage className={styles.hero} src={props.imageSrc} alt={props.imageAlt} effect="opacity" />
        </div>
    )
}


export default HeroImage