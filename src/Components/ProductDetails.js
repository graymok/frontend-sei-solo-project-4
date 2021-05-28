import { UserContext } from '../Context/UserContext'
import { CartContext } from '../Context/CartContext'
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../CSS/ProductDetails.module.css'

const ProductDetails = (props) => {

    const {userState} = useContext(UserContext)
    const [user] = userState
    const {addToCart} = useContext(CartContext)



    return (
        <div className={styles.container}>
            <img className={styles.image} src={props.product.image} alt={props.product.name} />
            <div className={styles.txtContainer}>
                <span className={styles.headline}>{props.product.name}</span>
                <div className={styles.line}></div>
                <span className={styles.description}>{props.product.description}</span>
                <span className={styles.price}>${props.product.price}</span>
                
                { user.name !== null ?
                <span className={styles.button} onClick={() => {addToCart(props.product.id)}}>Add to cart</span> 
                :
                <NavLink className={styles.button} to='/signin'>Sign in to purchase</NavLink>
                }
            </div>
        </div>
    )
}


export default ProductDetails