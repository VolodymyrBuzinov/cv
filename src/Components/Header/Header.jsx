import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './Header.module.scss';

export default function Header () {
    return(
        <CSSTransition in={true} appear={true} timeout={1000} classNames={styles}>
    <header className={styles.header}>
    <div className={styles.headerContainer}>
        <div className={styles.headerLogoContainer}>
        <NavLink className={styles.headerLogo} to='/'>Volodymyr Buzinov</NavLink>
        </div>
        
        <nav className={styles.headerNav}>
            <ul className={styles.headerList}>
                <li className={styles.headerListItem}>
                   <NavLink className={styles.navLink} activeClassName={styles.navLinkActive} exact to='/'>Home</NavLink>
                </li>
                <li className={styles.headerListItem}><NavLink exact to='/about' className={styles.navLink} activeClassName={styles.navLinkActive}>About</NavLink></li>
                <li className={styles.headerListItem}><NavLink exact to='/examples' className={styles.navLink} activeClassName={styles.navLinkActive}>Examples</NavLink></li>                
            </ul>
        </nav>
        
    </div>
    </header>
    </CSSTransition>
    )
}