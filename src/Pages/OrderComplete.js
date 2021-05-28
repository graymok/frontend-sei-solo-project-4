import styles from '../CSS/OrderComplete.module.css'
import HeroImageItem from '../Components/HeroImageItem'

const OrderComplete = () => {

    const imageSrc = "https://img.cinemablend.com/filter:scale/quill/2/1/e/5/e/3/21e5e394036c0c037e58821175a607fb0ec8455b.png?fw=1200"
    const imageAlt = "Baby Yoda"
    const caption = "Thank you for your order, on behalf of Baby Yoda and the Kyber Parker team!"

    return (
        <div className={styles.container}>
            <HeroImageItem imageSrc={imageSrc} imageAlt={imageAlt} caption={caption} />
        </div>
    )
}


export default OrderComplete