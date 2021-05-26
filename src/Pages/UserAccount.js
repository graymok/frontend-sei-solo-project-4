import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import styles from '../CSS/UserAccount.module.css'

const UserAccount = (props) => {

    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

    return (
        <div>
            <span className={styles.navLink} onClick={() => {
                localStorage.removeItem('userId')
                setUser({
                    ...user,
                    id: '',
                    name: null,
                    email: '',                         
                })
                props.setName('')
                props.setEmail('')
                props.setPassword('')
            }}>Logout</span>
        </div>
    )
}


export default UserAccount