import styles from '../CSS/HeroImageItem.module.css'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'


const HeroImageItem = (props) => {
    return (
        <div className={styles.container}>
            <span className={styles.caption}>{props.caption}</span>
            <LazyLoadImage className={styles.hero} src={props.imageSrc} alt={props.imageSrc} effect="opacity" />
        </div>
    )
}


export default HeroImageItem