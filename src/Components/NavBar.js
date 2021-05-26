import { NavLink } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { useState, useContext } from 'react'
import styles from '../CSS/NavBar.module.css'


const NavBar = (props) => {

    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

    const [forceAffinity, setForceAffinity] = useState(false)
    const [forceSingle, setForceSingle] = useState(false)
    const [forceDouble, setForceDouble] = useState(false)

    const darkURL = "https://i.pinimg.com/originals/7b/62/c9/7b62c9368c9b701f8182bc8af9cb13df.png"
    const lightURL = "https://i.pinimg.com/originals/8b/1d/b1/8b1db129a61fb67f791dec4a12cddc73.png"

    return (
        <>
            { user.name !== null ?
            <nav className={styles.navContainer}>
                <div className={styles.primary}>
                    <div className={styles.primaryNav}>
                        <span className="nav-side-margin"></span>
                    </div>
                    <div className={styles.primaryLogo}>
                        <NavLink className={styles.navLogo} to='/'>KYBER PARKER</NavLink>
                    </div>
                    <div className={styles.primaryNav}>
                        <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/about'>About</NavLink>
                        <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/account'>Account</NavLink>
                        <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/cart'>Cart</NavLink>
                    </div>
                </div>
                <div className={styles.secondary}>
                    <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/single'>Single Crystal</NavLink>
                    <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/double'>Double Crystal</NavLink>

                </div>
            </nav>                
            :
            <nav className={styles.navContainer}>
                <div className={styles.primary} onClick={() => {setForceAffinity(false)}}>
                    <div className={styles.primaryNav}>
                        <span className="nav-side-margin"></span>
                    </div>
                    <div className={styles.primaryLogo}>
                        <NavLink className={styles.navLogo} to='/'>KYBER PARKER</NavLink>
                    </div>
                    <div className={styles.primaryNav}>
                        <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/about'>About</NavLink>
                        <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/login'>Login</NavLink>
                        <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/cart'>Cart</NavLink>
                    </div>
                </div>
                <div className={styles.secondary}>
                    <span className={styles.btnForce} onClick={() => {setForceAffinity(true)}}>Single Crystal</span>
                    <span className={styles.btnForce} onClick={() => {setForceAffinity(true)}}>Double Crystal</span>

                </div>
                { forceAffinity === true && 
                <div className={styles.forceMenu}>
                    <div className={styles.forceNav}>
                        <div className={styles.forceBox}>
                            <span className={styles.forceCaptionLeft}>Shop Light Side</span>
                            <img className={styles.forceImg} src={lightURL}/>
                        </div>
                        <div className={styles.forceBox}> 
                            <span className={styles.forceCaptionRight}>Shop Dark Side</span>
                            <img className={styles.forceImg} src={darkURL}/>
                        </div>
                    </div>
                    <div className={styles.forceBottom} onClick={() => {setForceAffinity(false)}}></div>
                </div>
                }
            </nav>    
            }

        </>    
    )
}

export default NavBar