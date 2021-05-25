import { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'

const Registration = (props) => {

    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

    return (
        <div className="registration-container">
            { props.type === 'Login' && 
            <div className="form-container">
                <span className="form-headline">Welcome back!</span>
                <form className="form-inputs" >
                    <label className="input-label" htmlFor="login-email">Email</label>
                    <input className="input-field" value={props.email} onChange={(e) => {props.setEmail(e.target.value)}} required />
                    <label className="input-label" htmlFor="login-password">Password</label>
                    <input className="input-field" type="password" value={props.password} onChange={(e) => {props.setPassword(e.target.value)}} required />               
                    <input className="input-button" type="submit" value="LOGIN" />
                </form>
            </div>            
            }
            { props.type === 'Register' &&
            <div className="form-container-register">
                <span className="form-headline">Let's get started!</span>
                <form className="form-inputs" >
                    <label className="input-label" htmlFor="register-name">First Name</label>
                    <input className="input-field" value={props.name} onChange={(e) => {props.setName(e.target.value)}} required />
                    <label className="input-label" htmlFor="register-email">Email</label>
                    <input className="input-field" value={props.email} onChange={(e) => {props.setEmail(e.target.value)}} required />
                    <label className="input-label" htmlFor="register-password">Password</label>
                    <input className="input-field" type="password" value={props.password} onChange={(e) => {props.setPassword(e.target.value)}} required />               
                    <input className="input-button" type="submit" value="NEXT" />
                </form>
            </div>            
            }     
        </div>
    )
}


export default Registration