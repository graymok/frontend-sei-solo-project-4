import { useContext, useState, createContext } from 'react'
import axios from 'axios'
import { UserContext } from './UserContext'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const {userState} = useContext(UserContext)
    const [user] = userState

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    let orderSum = 0

    const getCart = async () => {
        let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cart`, {
            headers: { Authorization: user.id }
        })
        console.log('Retrieved cart', response)
        response.data.cart_products.map((item) => {
            orderSum = orderSum + item.product_info.price
        })
        setTotal(orderSum)
        setCart(response.data.cart_products)
    }

    const addToCart = async (productId) => {
        let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/cart/add`, {
            product_id: productId
        }, {
            headers: { Authorization: user.id }
        })
        console.log('Added to cart', response)
        getCart()
    }
    
    const removeFromCart = async (cartId) => {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/cart/remove`, {
            cartId: cartId
        }, {
            headers: { Authorization: user.id }
        })
        console.log('Removed from cart', response)
        getCart()
    }

    const state = {
        cartState: [cart, setCart],
        getCart,
        addToCart,
        removeFromCart,
        totalState: [total, setTotal],
    }

    return (
        <CartContext.Provider value = {state}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }