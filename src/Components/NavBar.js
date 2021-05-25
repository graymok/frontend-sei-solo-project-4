import { NavLink } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { useContext } from 'react'
import styles from '../CSS/NavBar.module.css'


const NavBar = (props) => {

    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

    return (
        <>
            { user.name !== null ?
        <nav className={styles.navContainer}>
            <div className={styles.primary}>
                <div className={styles.primaryNav}>
                    <span className="nav-side-margin"></span>
                </div>
                <div className={styles.primaryLogo}>
                    <NavLink className={styles.navLogo} to='/landing'>KYBER PARKER</NavLink>
                </div>
                <div className={styles.primaryNav}>
                    <NavLink className={styles.navLink} activeClassName="nav-active" to='/account'>Account</NavLink>
                    <NavLink className={styles.navLink} activeClassName="nav-active" to='/cart'>Cart</NavLink>
                </div>
            </div>
            <div className={styles.secondary}>
                <NavLink className={styles.navLink} activeClassName="nav-active" to='/single'>Single Lightsaber</NavLink>
                <NavLink className={styles.navLink} activeClassName="nav-active" to='/double'>Double Lightsaber</NavLink>
                <NavLink className={styles.navLink} activeClassName="nav-active" to='/about'>About</NavLink>
            </div>
        </nav>                
            :
            <nav className={styles.navContainer}>
                <div className={styles.primary}>
                    <div className={styles.primaryNav}>
                        <span className="nav-side-margin"></span>
                    </div>
                    <div className={styles.primaryLogo}>
                        <NavLink className={styles.navLogo} to='/landing'>KYBER PARKER</NavLink>
                    </div>
                    <div className={styles.primaryNav}>
                        <NavLink className={styles.navLink} activeClassName="nav-active" to='/login'>Login</NavLink>
                        <NavLink className={styles.navLink} activeClassName="nav-active" to='/cart'>Cart</NavLink>
                    </div>
                </div>
                <div className={styles.secondary}>
                    <NavLink className={styles.navLink} activeClassName="nav-active" to='/single'>Single Lightsaber</NavLink>
                    <NavLink className={styles.navLink} activeClassName="nav-active" to='/double'>Double Lightsaber</NavLink>
                    <NavLink className={styles.navLink} activeClassName="nav-active" to='/about'>About</NavLink>
                </div>
            </nav>    
            }

        </>    
    )
}

export default NavBar