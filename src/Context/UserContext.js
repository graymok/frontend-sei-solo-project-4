import { useState, createContext } from 'react'
import axios from 'axios'

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        id: '',
        name: null,
        email: '',
    })

    const verifyUser = async () => {
        const userId = localStorage.getItem('userId')

        if (userId) {
            let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/verify`, {
                headers: {
                    Authorization: userId
                }
            })
            setUser({
                ...user,
                id: response.data.user_id,
                name: response.data.user.name,
                email: response.data.user.email,
            })
        }
    }

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [stateAddress, setStateAddress] = useState('')
    const [zipcode, setZipcode] = useState('')

    const [creditCard, setCreditCard] = useState('')
    const [creditCode, setCreditCode] = useState('')
    const [creditZip, setCreditZip] = useState('')
    const [creditExpiryMonth, setCreditExpiryMonth] = useState('')
    const [creditExpiryYear, setCreditExpiryYear] = useState('')

    const state = {
        userState: [user, setUser],
        addressState: [address, setAddress],
        cityState: [city, setCity],
        stateAddressState: [stateAddress, setStateAddress],
        zipcodeState: [zipcode, setZipcode],
        creditCardState: [creditCard, setCreditCard],
        creditCodeState: [creditCode, setCreditCode],
        creditZipState: [creditZip, setCreditZip],
        creditExpiryMonthState: [creditExpiryMonth, setCreditExpiryMonth],
        creditExpiryYearState: [creditExpiryYear, setCreditExpiryYear],
        verifyUser: verifyUser
    }

    return (
        <UserContext.Provider value = {state}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }