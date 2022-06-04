import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footerContainer}>
        <ul>
            <li className={styles.listHeading}>Feautures</li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
        </ul>

        <ul>
            <li className={styles.listHeading}>Resources</li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
        </ul>

        <ul>
            <li className={styles.listHeading}>About</li>
            <li>Company</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Footer