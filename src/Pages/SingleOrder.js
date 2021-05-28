import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../CSS/SingleOrder.module.css'

const SingleOrder = (props) => {

    const [singleOrder, setSingleOrder] = useState([])
    const [singleTotal, setSingleTotal] = useState(0)

    const getOrder = async () => {
        const userId = localStorage.getItem('userId')
        let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/orders/${props.id}`, {
            headers: {
                Authorization: userId
              },             
        })
        setSingleTotal(response.data.order.total)
        setSingleOrder(response.data.order_products)
    }

    useEffect(() => {
        getOrder()
    // eslint-disable-next-line react-hooks/exhaustive-deps          
    }, [])


    return (
        <div className={styles.container}>
            { singleOrder.length === 0 ?
            <div>Retrieving order</div>
            :
            <div className={styles.orderContainer}>
                <span className={styles.headline}>Order# {props.id}</span>
            {singleOrder.map((item, i) => (
                <div className={styles.table} key={i}>
                    <span className={styles.tableItem}>{item.product_info.name}</span>
                    <span className={styles.tableItem}>{item.product_info.type}</span>
                    <span className={styles.tableItem}>{item.product_info.force}</span>
                    <span className={styles.tableItem}>${item.product_info.price}</span>
                </div>
            ))}
            </div>
            }
        </div>
    )
}


export default SingleOrder