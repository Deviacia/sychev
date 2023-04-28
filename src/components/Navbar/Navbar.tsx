import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    const routes = [
        { href: '/', name: 'Home' },
        // { href: '/portfolio', name: 'Portfolio' },
        // { href: '/contact', name: 'Contact' }
    ];

    const socials = [
        { href: 'https://www.linkedin.com/in/deviacia/', name: 'LinkedIn' },
        { href: 'https://github.com/Deviacia', name: 'Github' },
        { href: 'https://www.behance.net/deviacia', name: 'Behance' },
    ]

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {routes.map((route, index) => (
                    <li key={index} className={styles.item}>
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
                {socials.map((social, index) => (
                    <li key={index}>
                        <a
                            className={styles.link}
                            href={social.href}
                            target="_blank"
                        >
                            {social.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar