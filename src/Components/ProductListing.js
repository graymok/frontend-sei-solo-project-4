import { NavLink } from 'react-router-dom'
import styles from '../CSS/ProductListing.module.css'

const ProductListing = (props) => {
    return (
        <div className={styles.mainContainer}>
            {props.products.map((item) => (
                <div className={styles.container} key={item.id}>
                    <img className={styles.image} src={item.image} alt={item.name} />
                    <div className={styles.txtContainer}>
                        <NavLink className={styles.name} exact to={`/products/${item.id}`}>{item.name}</NavLink>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default ProductListing