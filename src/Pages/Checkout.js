import styles from '../CSS/Checkout.module.css'
import { CartContext } from '../Context/CartContext'
import { UserContext } from '../Context/UserContext'
import { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'


const Checkout = () => {

    const {userState, addressState, cityState, stateAddressState, zipcodeState, creditCardState, creditCodeState, creditZipState, creditExpiryYearState, creditExpiryMonthState} = useContext(UserContext)
    const [user] = userState

    const [address, setAddress] = addressState
    const [city, setCity] = cityState
    const [stateAddress, setStateAddress] = stateAddressState
    const [zipcode, setZipcode] = zipcodeState

    const [creditCard, setCreditCard] = creditCardState
    const [creditCode, setCreditCode] = creditCodeState
    const [creditZip, setCreditZip] = creditZipState
    const [creditExpiryMonth, setCreditExpiryMonth] = creditExpiryMonthState
    const [creditExpiryYear, setCreditExpiryYear] = creditExpiryYearState

    const {cartState, totalState} = useContext(CartContext)
    const [cart, setCart] = cartState
    const [total] = totalState

    const [redirect, setRedirect] = useState(false)

    const handleCheckout = () => {
        createOrder()
        setCart([])
        setRedirect(true)
    }

    const createOrder = async () => {
        const userId = localStorage.getItem('userId')
        let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/orders/new`, {
            address: address,
            city: city,
            state: stateAddress,
            zipcode: zipcode,
            total: total
        }, {
            headers: {
                Authorization: userId
            }
        })
    }

    const handleAutoFill = () => {
        setAddress('123 Street')
        setCity('NY')
        setStateAddress('NY')
        setZipcode('00000')
        setCreditCard('0000000000000000')
        setCreditZip('00000')
        setCreditCode('000')
        setCreditExpiryMonth('01')
        setCreditExpiryYear('30')
    }

    const handleClearAuto = () => {
        setAddress('')
        setCity('')
        setStateAddress('')
        setZipcode('')
        setCreditCard('')
        setCreditZip('')
        setCreditCode('')
        setCreditExpiryMonth('')
        setCreditExpiryYear('')
    }


    return (
        <div className={styles.container}>
            { redirect && <Redirect to='/complete' /> }
            <div className={styles.checkout}>
                <div className={styles.shipping}>
                    <span className={styles.headline}>Shipping Information</span>
                    <form className={styles.inputBox}>
                        <input className={styles.field} value={address} onChange={(e) => {setAddress(e.target.value)}} required placeholder="Address"/>
                        <input className={styles.field} value={city} onChange={(e) => {setCity(e.target.value)}} required placeholder="City"/>
                        <input className={styles.field} value={stateAddress} onChange={(e) => {setStateAddress(e.target.value)}} required placeholder="State"/>
                        <input className={styles.field} value={zipcode} onChange={(e) => {setZipcode(e.target.value)}} required placeholder="Zipcode"/>                
                    </form>
                </div>
                <div className={styles.billing}>
                    <span className={styles.headline}>Billing Information</span>
                    <form className={styles.inputBox}>
                        <input className={styles.field} value={creditCard} onChange={(e) => {setCreditCard(e.target.value)}} required placeholder="Credit Card Number"/>
                        <div className={styles.codes}>
                            <input className={styles.fieldMini} value={creditExpiryMonth} onChange={(e) => {setCreditExpiryMonth(e.target.value)}} required placeholder="Month"/>
                            <input className={styles.fieldMini} value={creditExpiryYear} onChange={(e) => {setCreditExpiryYear(e.target.value)}} required placeholder="Year"/>
                            <input className={styles.fieldMini} type="password" value={creditCode} onChange={(e) => {setCreditCode(e.target.value)}} required placeholder="Code"/>
                        </div>
                        <input className={styles.field} value={creditZip} onChange={(e) => {setCreditZip(e.target.value)}} required placeholder="Billing Zipcode"/>              
                    </form>
                </div>
                <div className={styles.summary}>
                    <span className={styles.headline}>Order Summary</span>
                    {cart.map((item, i) => (
                        <div className={styles.table} key={i}>
                            <span className={styles.tableItem}>{item.product_info.name}</span>
                            <span className={styles.tablePrice}>${item.product_info.price}</span>
                        </div>
                    ))}
                    <span className={styles.total}>Total: ${total}</span>
                </div>
            </div>
            <div className={styles.containerAuto}>
                <span className={styles.buttonAuto} onClick={handleAutoFill}>Autofill Example</span>
                <span className={styles.buttonAuto} onClick={handleClearAuto}>Clear Example</span>
            </div>

            <span className={styles.button} onClick={handleCheckout}>Complete Checkout</span>

        </div>
    )
}


export default Checkout