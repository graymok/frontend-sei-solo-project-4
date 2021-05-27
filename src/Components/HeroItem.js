import styles from '../CSS/HeroItem.module.css'
import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'


const HeroItem = (props) => {
    return (
        <div className={styles.container}>
            <LazyLoadComponent>
                <div className={styles.hero}>
                    <span className={styles.text}>{props.quote}</span>
                    <span className={styles.author}>{props.author}</span>
                </div>
            </LazyLoadComponent>
        </div>
    )
}



export default HeroItem