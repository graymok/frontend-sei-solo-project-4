import { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext'
import styles from '../CSS/UserAccount.module.css'

const UserAccount = (props) => {

    useEffect(() => {
        window.scrollTo(0,0)
    // eslint-disable-next-line react-hooks/exhaustive-deps          
    }, []) 

    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

    return (
        <div className={styles.container}>
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