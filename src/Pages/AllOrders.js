import styles from '../CSS/AllOrders.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'


const AllOrders = () => {

    const [orders, setOrders] = useState([])

    const getOrders = async () => {
        const userId = localStorage.getItem('userId')
        let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
            headers: {
                Authorization: userId
              },  
        })
        setOrders(response.data.orders)
    }

    useEffect(() => {
        getOrders()
    // eslint-disable-next-line react-hooks/exhaustive-deps          
    }, [])

    return (
        <div className={styles.container}>
            { orders.length === 0 ? 
            <div>Retrieving orders</div>
            :
            <div className={styles.orderContainer}>
                <span className={styles.headline}>Orders</span>
            {orders.map((item) => (
                <NavLink className={styles.orderNav} key={item.id} exact to={`/orders/${item.id}`}>
                    <span className={styles.orderItem}>Order#{item.id} - ${item.total}</span>
                </NavLink>
            ))}
            </div>
            }
        </div>
    )
}


export default AllOrders