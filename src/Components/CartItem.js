import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import styles from '../CSS/CartItem.module.css'


const CartItem = () => {

    const {cartState, removeFromCart} = useContext(CartContext)
    const [cart] = cartState


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