import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../CSS/ProductDetails.module.css'
import ProductDetails from '../Components/ProductDetails'


const SingleProduct = (props) => {

    const [product, setProduct] = useState([])

    const getProduct = async () => {
        let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${props.id}`)
        console.log(response.data.product)
        setProduct(response.data.product)
    }

    useEffect(() => {
        getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps          
    }, [])    

    return (
        <div>
            Hello from SingleProduct!
        </div>
    )
}


export default SingleProduct