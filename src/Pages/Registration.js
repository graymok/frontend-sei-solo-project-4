import { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'
import styles from '../CSS/Registration.module.css'

const Registration = (props) => {

    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

    const [showPassword, setShowPassword] = useState(false)
    const [showLogin, setShowLogin] = useState(true)

    const handleLogin = (e) => {
        e.preventDefault()
        loginUser()
    }

    const loginUser = async () => {
        let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
            email: props.email,
            password: props.password
        })
        localStorage.setItem('userId', response.data.user_id)
        setUser({
            ...user,
            id: response.data.user_id,
            name: response.data.user.name,
            email: response.data.user.email
        })
    }
    
    const handleRegister = (e) => {
        e.preventDefault()
        createUser()
    }

    const createUser = async () => {
        let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/register`, {
            name: props.name,
            password: props.password,
            email: props.email
        })
        localStorage.setItem('userId', response.data.user_id)
        setUser({
            ...user,
            id: response.data.user_id,
            name: response.data.user.name,
            email: response.data.user.email
        })
    }

    return (
        <>
        { showLogin === true ? 
        <div className={styles.registration}>
            <span className={styles.headline}>Sign in</span>
            <form className={styles.inputBox} onSubmit={handleLogin}>
                <input className={styles.field} value={props.email} onChange={(e) => {props.setEmail(e.target.value)}} required placeholder="Email address"/>
                { showPassword === false ?
                <div className={styles.showPasswordBox}>
                    <span className={styles.showPassword} onClick={() => {setShowPassword(true)}}>Show</span>
                    <input className={styles.field} type="password" value={props.password} onChange={(e) => {props.setPassword(e.target.value)}} required placeholder="Password"></input>
                </div>
                :
                <div className={styles.showPasswordBox}>
                    <span className={styles.showPassword} onClick={() => {setShowPassword(false)}}>Hide</span>
                    <input className={styles.field} value={props.password} onChange={(e) => {props.setPassword(e.target.value)}} required placeholder="Password"></input>
                </div>  
                }
                <input className={styles.button} type="submit" value="Sign in" />
            </form>
            <div className={styles.divider}></div>
            <span className={styles.headline}>I'm new here</span>
            <span className={styles.navLink} onClick={() => {setShowLogin(false)}}>Create an account</span>
        </div>        
        :
        <div className={styles.registration}>
            <span className={styles.headline}>Create new account</span>
            <form className={styles.inputBox} onSubmit={handleRegister}>
                <input className={styles.field} value={props.name} onChange={(e) => {props.setName(e.target.value)}} required placeholder="First name"/>
                <input className={styles.field} value={props.email} onChange={(e) => {props.setEmail(e.target.value)}} required placeholder="Email address"/>
                { showPassword === false ?
                <div className={styles.showPasswordBox}>
                    <span className={styles.showPassword} onClick={() => {setShowPassword(true)}}>Show</span>
                    <input className={styles.field} type="password" value={props.password} onChange={(e) => {props.setPassword(e.target.value)}} required placeholder="Password"></input>
                </div>
                :
                <div className={styles.showPasswordBox}>
                    <span className={styles.showPassword} onClick={() => {setShowPassword(false)}}>Hide</span>
                    <input className={styles.field} value={props.password} onChange={(e) => {props.setPassword(e.target.value)}} required placeholder="Password"></input>
                </div>  
                }
                <input className={styles.button} type="submit" value="Create account" />
            </form>
            <div className={styles.divider}></div>
            <span className={styles.headline}>Returning user</span>
            <span className={styles.navLink} onClick={() => {setShowLogin(true)}}>Sign in</span>
        </div>
        }
        </>
               
    )
}


export default Registration