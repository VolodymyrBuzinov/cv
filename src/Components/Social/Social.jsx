import styles from './Social.module.scss';
import sprite from '../../symbol-defs.svg'
export default function Social () {
    return(<div className={styles.social}>
        <ul className={styles.socialList}>
            <li className={styles.socialListItem}>
             <a href="https://twitter.com/BuzinovV"><svg>
                 <use href={`${sprite}#icon-twitter`}></use>
                 </svg></a>
            </li>
            <li className={styles.socialListItem}>
            <a href="https://www.instagram.com/buzinov_volodymyr/?hl=ru"><svg>
            <use href={`${sprite}#icon-instagram`}></use>
                 </svg></a>
            </li>
            <li className={styles.socialListItem}>
            <a href="https://www.linkedin.com/in/volodymyr-buzinov-b399741bb"><svg>
            <use href={`${sprite}#icon-linkedin`}></use>
                 </svg></a>
            </li>
            <li className={styles.socialListItem}>
            <a href="https://t.me/Fever88"><svg>
            <use href={`${sprite}#icon-telegram`}></use>
                 </svg></a>
            </li>
        </ul>
    </div>)
}