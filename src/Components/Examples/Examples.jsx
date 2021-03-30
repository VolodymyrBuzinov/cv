import styles from './Examples.module.scss';

export default function Examples () {
    return(<section className={styles.examples}>
    <ul className={styles.examplesList}>
        <li className={styles.examplesListItem}>
            <a className={styles.examplesLink} href="https://603d0c86c60193009278fe9f--focused-cori-67b014.netlify.app/" aria-label='go to phonebook app'>
                <img src="https://i.ibb.co/8dFwVTL/30-03-2021-17-19-33.png" alt="Phonebook app"/>
            </a>
        </li>
        <li className={styles.examplesListItem}>
            <a className={styles.examplesLink} href="https://forrask.netlify.app/" aria-label='go to raskachaem'>
                <img src="https://i.ibb.co/wNxKn5g/raskachaem.png" alt="raskachaem app"/>
            </a>
        </li>
        <li className={styles.examplesListItem}>
            <a className={styles.examplesLink} href="https://603d0c86c60193009278fe9f--focused-cori-67b014.netlify.app/" aria-label='go to phonebook app'>
                <img src="https://i.ibb.co/8dFwVTL/30-03-2021-17-19-33.png" alt="Phonebook app"/>
            </a>
        </li>
        <li className={styles.examplesListItem}>
            <a className={styles.examplesLink} href="https://603d0c86c60193009278fe9f--focused-cori-67b014.netlify.app/" aria-label='go to phonebook app'>
                <img src="https://i.ibb.co/8dFwVTL/30-03-2021-17-19-33.png" alt="Phonebook app"/>
            </a>
        </li>
    </ul>
    </section>)
}