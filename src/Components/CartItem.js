import { UserContext } from '../Context/UserContext'
import { CartContext } from '../Context/CartContext'
import { useContext, useState, useEffect } from 'react'
import styles from '../CSS/CartItem.module.css'


const CartItem = () => {

    const {userState} = useContext(UserContext)
    const [user] = userState
    const {cartState, getCart, totalState, removeFromCart} = useContext(CartContext)
    const [cart, setCart] = cartState
    const [total] = totalState


    return (
        <>
        {cart.map((item, i) => (
            <div className={styles.table} key={i}>
                <span className={styles.tableItem}>{item.product_info.name}</span>
                <span className={styles.tableItem}>{item.product_info.type}</span>
                <span className={styles.tableItem}>{item.product_info.force}</span>
                <span className={styles.tableItem}>${item.product_info.price}</span>
                <span className={styles.tableRemove} onClick={() => {removeFromCart(item.product.id)}}>Remove</span>
            </div>
        ))}
        </>
    )
}


export default CartItem