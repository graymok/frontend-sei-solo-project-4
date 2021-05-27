import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../CSS/SingleProduct.module.css'
import ProductDetails from '../Components/ProductDetails'


const SingleProduct = (props) => {

    const [product, setProduct] = useState([])

    const getProduct = async () => {
        let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${props.id}`)
        setProduct(response.data.product)
    }

    useEffect(() => {
        getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps          
    }, [])
    useEffect(() => {
        window.scrollTo(0,0)
    // eslint-disable-next-line react-hooks/exhaustive-deps          
    }, [])         

    return (
        <div className={styles.container}>
            { product.length === 0 ?
            <div>Retrieving crystal inventory</div>            
            :
            <ProductDetails product={product} />
            }
        </div>
    )
}


export default SingleProduct