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

    const state = {
        userState: [user, setUser],
        verifyUser: verifyUser
    }

    return (
        <UserContext.Provider value = {state}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }