import { useContext, useState, createContext } from 'react'
import axios from 'axios'
import { UserContext } from '../contexts/UserContext'

const CartContext = createContext()

const CartProvider = ({children}) => {
    // contexts
    const {userState} = useContext(UserContext)
    const [user] = userState

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0);

    let orderTotal = 0;

    // functions

    // get cart
    const getCart = async () =>
    {
        // grab cart
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cart`, {
            headers: { Authorization: user.id }
        })
        // console.log(response)
        response.data.cart.map((item) => {
            orderTotal = orderTotal + item.product.price
        })
        setTotal(orderTotal);
        // set cart to state
        setCart(response.data.cart);
    }

    // add item to cart
    const addToCart = async (productId) =>
    {
        // create item
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/cart/add`, {
            productId: productId
        }, {
            headers: { Authorization: user.id }
        })
        console.log(response.data.addItem);
        getCart();
    }
    
    // remove item from cart
    const removeFromCart = async (createdAt) =>
    {
        // delete item
        const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cart/delete`, {
            headers: { Authorization: user.id },
            data: {
                createdAt: createdAt
            }
        })
        console.log(response.data.message);
        getCart();
    }

    const state = {
        cartState: [cart, setCart],
        getCart,
        addToCart,
        removeFromCart,
        totalState: [total, setTotal]
    }

    return (
        <CartContext.Provider value = {state}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }