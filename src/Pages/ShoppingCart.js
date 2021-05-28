import { CartContext } from '../Context/CartContext'
import { useContext, useEffect } from 'react'
import styles from '../CSS/ShoppingCart.module.css'
import CartItem from '../Components/CartItem'
import { NavLink } from 'react-router-dom'


const ShoppingCart = () => {

    const {cartState, getCart, totalState} = useContext(CartContext)
    const [cart] = cartState
    const [total] = totalState

    useEffect(() => {
        getCart()
      // eslint-disable-next-line react-hooks/exhaustive-deps  
      }, [])

    useEffect(() => {
        window.scrollTo(0,0)
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
                <span className={styles.tableHeaderTotal}>Order Total: ${total}</span>
            </div>            
            }
            { cart.length > 0 && 
            <NavLink to='/checkout' className={styles.button}>Checkout</NavLink>            
            }                        
        </div>
    )
}


export default ShoppingCart