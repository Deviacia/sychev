import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    const routes = [
        { href: '/', name: 'Home' },
        // { href: '/portfolio', name: 'Portfolio' },
        // { href: '/contact', name: 'Contact' }
    ];

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {routes.map((route, index) => (
                    <li key={index}>
                        <NavLink
                            to={route.href}
                            className={styles.link}
                        >
                            {route.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <ul className={styles.list}>
                <li><a className={styles.link} href="https://www.linkedin.com/in/deviacia/">LinkedIn</a></li>
                <li><a className={styles.link} href="https://github.com/Deviacia">Github</a></li>
                <li><a className={styles.link} href="https://www.behance.net/deviacia">Behance</a></li>
            </ul>
        </nav>
    )
}

export default Navbar