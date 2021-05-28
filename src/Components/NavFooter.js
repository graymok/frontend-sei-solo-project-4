import styles from '../CSS/NavFooter.module.css'


const NavFooter = () => {
    return (
        <div className={styles.navContainer}>
            <span className={styles.disclaimer}>Footer and links for visualization purposes</span>
            <div className={styles.footerContainer}>
                <div className={styles.footerColumn}>
                    <span className={styles.footerTitle}>PRODUCTS</span>
                    <span className={styles.footerText}>Single Crystal</span>
                    <span className={styles.footerText}>Double Crystal</span>
                    <span className={styles.footerText}>Polishing Kits</span>
                </div>
                <div className={styles.footerColumn}>
                    <span className={styles.footerTitle}>EDUCATION</span>
                    <span className={styles.footerText}>Tempering</span>
                    <span className={styles.footerText}>Reclamation Process</span>
                    <span className={styles.footerText}>Community Outreach</span>
                </div>
                <div className={styles.footerColumn}>
                    <span className={styles.footerTitle}>ABOUT US</span>
                    <span className={styles.footerText}>Showroom</span>
                    <span className={styles.footerText}>Leadership</span>
                    <span className={styles.footerText}>Culture</span>
                    <span className={styles.footerText}>Careers</span>
                </div>
            </div>
        </div>
    )
}

export default NavFooter