import { UserContext } from '../Context/UserContext'
import { CartContext } from '../Context/CartContext'
import { useContext, useState, useEffect } from 'react'
import styles from '../CSS/ShoppingCart.module.css'
import CartItem from '../Components/CartItem'


const ShoppingCart = () => {

    const {userState} = useContext(UserContext)
    const [user] = userState
    const {cartState, getCart, totalState} = useContext(CartContext)
    const [cart, setCart] = cartState
    const [total] = totalState

    useEffect(() => {
        getCart()
      // eslint-disable-next-line react-hooks/exhaustive-deps  
      }, [])

    return (
        <div className={styles.container}>
            { cart.length > 0 &&
            <div className={styles.table}>
                <span className={styles.tableHeader}>Name</span>
                <span className={styles.tableHeader}>Type</span>
                <span className={styles.tableHeader}>Force</span>
                <span className={styles.tableHeader}>Price</span>
                <span className={styles.tableHeader}>Modify</span>
            </div>            
            }
            { cart.length === 0 ? 
            <div className={styles.empty}>Your cart is empty.</div>
            :
            <CartItem />
            }
            { cart.length > 0 && 
            <div className={styles.tableTotal}>
                <span className={styles.tableHeader}></span>
                <span className={styles.tableHeader}></span>
                <span className={styles.tableHeader}></span>
                <span className={styles.tableHeader}></span>
                <span className={styles.tableHeader}>Total: ${total}</span>
            </div>            
            }            
        </div>
    )
}


export default ShoppingCart