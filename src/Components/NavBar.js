import { NavLink } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { CartContext } from '../Context/CartContext'
import { useState, useContext } from 'react'
import styles from '../CSS/NavBar.module.css'


const NavBar = (props) => {

    const {userState} = useContext(UserContext)
    const [user] = userState

    const {cartCountState} = useContext(CartContext)
    const [cartCount] = cartCountState

    const [forceAffinity, setForceAffinity] = useState('')

    const darkURL = "https://i.pinimg.com/originals/7b/62/c9/7b62c9368c9b701f8182bc8af9cb13df.png"
    const lightURL = "https://i.pinimg.com/originals/8b/1d/b1/8b1db129a61fb67f791dec4a12cddc73.png"

    return (
        <>
            { user.name !== null ?
            <nav className={styles.navContainer}>
            <div className={styles.primary} onClick={() => {setForceAffinity('')}}>
                <div className={styles.primaryNav}>
                    <span className="nav-side-margin"></span>
                </div>
                <div className={styles.primaryLogo}>
                    <NavLink className={styles.navLogo} to='/'>KYBER PARKER</NavLink>
                </div>
                <div className={styles.primaryNav}>
                    <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/about'>About</NavLink>
                    <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/account'>Account</NavLink>
                    { cartCount === 0 && <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/cart'>Cart</NavLink> }
                    { cartCount > 0 && <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/cart'>Cart ({cartCount})</NavLink>}
                </div>
            </div>
            { forceAffinity === '' && 
            <div className={styles.secondary}>
                <span className={styles.btnForce} onClick={() => {setForceAffinity('single')}}>Single Crystal</span>
                <span className={styles.btnForce} onClick={() => {setForceAffinity('double')}}>Double Crystal</span>
            </div>                
            }
            { forceAffinity === 'single' && 
            <div className={styles.secondary}>
                <span className={styles.btnForceActive} onClick={() => {setForceAffinity('single')}}>Single Crystal</span>
                <span className={styles.btnForce} onClick={() => {setForceAffinity('double')}}>Double Crystal</span>
            </div>                
            }
            { forceAffinity === 'double' && 
            <div className={styles.secondary}>
                <span className={styles.btnForce} onClick={() => {setForceAffinity('single')}}>Single Crystal</span>
                <span className={styles.btnForceActive} onClick={() => {setForceAffinity('double')}}>Double Crystal</span>
            </div>                
            }                                
            { forceAffinity === 'single' && 
            <div className={styles.forceMenu}>
                <div className={styles.forceNav}>
                    <div className={styles.forceBox}>
                        <NavLink className={styles.forceCaptionLeft} to='/single/light' onClick={() => {setForceAffinity('')}}>Shop Light Side</NavLink>
                        <img className={styles.forceImg} alt="Light Side Crystal" src={lightURL}/>
                    </div>
                    <div className={styles.forceBox}> 
                        <NavLink className={styles.forceCaptionRight} to='/single/dark' onClick={() => {setForceAffinity('')}}>Shop Dark Side</NavLink>
                        <img className={styles.forceImg} alt="Dark Side Crystal" src={darkURL}/>
                    </div>
                </div>
                <div className={styles.forceBottom} onClick={() => {setForceAffinity('')}}></div>
            </div>
            }
            { forceAffinity === 'double' && 
            <div className={styles.forceMenu}>
                <div className={styles.forceNav}>
                    <div className={styles.forceBox}>
                        <NavLink className={styles.forceCaptionLeft} to='/double/light' onClick={() => {setForceAffinity('')}}>Shop Light Side</NavLink>
                        <img className={styles.forceImg} alt="Light Side Crystal" src={lightURL}/>
                    </div>
                    <div className={styles.forceBox}> 
                        <NavLink className={styles.forceCaptionRight} to='/double/dark' onClick={() => {setForceAffinity('')}}>Shop Dark Side</NavLink>
                        <img className={styles.forceImg} alt="Dark Side Crystal" src={darkURL}/>
                    </div>
                </div>
                <div className={styles.forceBottom} onClick={() => {setForceAffinity('')}}></div>
            </div>
            }                
        </nav>                
            :
            <nav className={styles.navContainer}>
                <div className={styles.primary} onClick={() => {setForceAffinity('')}}>
                    <div className={styles.primaryNav}>
                        <span className="nav-side-margin"></span>
                    </div>
                    <div className={styles.primaryLogo}>
                        <NavLink className={styles.navLogo} to='/'>KYBER PARKER</NavLink>
                    </div>
                    <div className={styles.primaryNav}>
                        <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/about'>About</NavLink>
                        <NavLink className={styles.navLink} activeClassName={styles.navActive} to='/signin'>Sign in</NavLink>
                    </div>
                </div>
                { forceAffinity === '' && 
                <div className={styles.secondary}>
                    <span className={styles.btnForce} onClick={() => {setForceAffinity('single')}}>Single Crystal</span>
                    <span className={styles.btnForce} onClick={() => {setForceAffinity('double')}}>Double Crystal</span>
                </div>                
                }
                { forceAffinity === 'single' && 
                <div className={styles.secondary}>
                    <span className={styles.btnForceActive} onClick={() => {setForceAffinity('single')}}>Single Crystal</span>
                    <span className={styles.btnForce} onClick={() => {setForceAffinity('double')}}>Double Crystal</span>
                </div>                
                }
                { forceAffinity === 'double' && 
                <div className={styles.secondary}>
                    <span className={styles.btnForce} onClick={() => {setForceAffinity('single')}}>Single Crystal</span>
                    <span className={styles.btnForceActive} onClick={() => {setForceAffinity('double')}}>Double Crystal</span>
                </div>                
                }                                
                { forceAffinity === 'single' && 
                <div className={styles.forceMenu}>
                    <div className={styles.forceNav}>
                        <div className={styles.forceBox}>
                            <NavLink className={styles.forceCaptionLeft} to='/single/light' onClick={() => {setForceAffinity('')}}>Shop Light Side</NavLink>
                            <img className={styles.forceImg} alt="Light Side Crystal" src={lightURL}/>
                        </div>
                        <div className={styles.forceBox}> 
                            <NavLink className={styles.forceCaptionRight} to='/single/dark' onClick={() => {setForceAffinity('')}}>Shop Dark Side</NavLink>
                            <img className={styles.forceImg} alt="Dark Side Crystal" src={darkURL}/>
                        </div>
                    </div>
                    <div className={styles.forceBottom} onClick={() => {setForceAffinity('')}}></div>
                </div>
                }
                { forceAffinity === 'double' && 
                <div className={styles.forceMenu}>
                    <div className={styles.forceNav}>
                        <div className={styles.forceBox}>
                            <NavLink className={styles.forceCaptionLeft} to='/double/light' onClick={() => {setForceAffinity('')}}>Shop Light Side</NavLink>
                            <img className={styles.forceImg} alt="Light Side Crystal" src={lightURL}/>
                        </div>
                        <div className={styles.forceBox}> 
                            <NavLink className={styles.forceCaptionRight} to='/double/dark' onClick={() => {setForceAffinity('')}}>Shop Dark Side</NavLink>
                            <img className={styles.forceImg} alt="Dark Side Crystal" src={darkURL}/>
                        </div>
                    </div>
                    <div className={styles.forceBottom} onClick={() => {setForceAffinity('')}}></div>
                </div>
                }                
            </nav>    
            }

        </>    
    )
}

export default NavBar