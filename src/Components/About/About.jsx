import styles from './About.module.scss';
import sprite from '../../symbol-defs.svg'
import { CSSTransition } from 'react-transition-group';
export default function About () {
    return(
        <CSSTransition in={true} appear={true} timeout={500} classNames={styles}>
    <section className={styles.about}>
        <ul className={styles.aboutList}>
            <li className={styles.aboutListItem}>
                <svg>
                    <use href={`${sprite}#icon-git`}></use>
                </svg>
            </li>
            <li className={styles.aboutListItem}>
            <svg>
                    <use href={`${sprite}#icon-codecov`}></use>
                </svg>
            </li>
            <li className={styles.aboutListItem}>
            <svg>
                    <use href={`${sprite}#icon-figma`}></use>
                </svg>
            </li>
            <li className={styles.aboutListItem}>
            <svg>
                    <use href={`${sprite}#icon-webpack`}></use>
                </svg>
            </li>
            <li className={styles.aboutListItem}>
            <svg>
                    <use href={`${sprite}#icon-react`}></use>
                </svg>
            </li>
            <li className={styles.aboutListItem}>
            <svg>
                    <use href={`${sprite}#icon-javascript`}></use>
                </svg>
            </li>
            <li className={styles.aboutListItem}>
            <svg>
                    <use href={`${sprite}#icon-css3`}></use>
                </svg>
            </li>
            <li className={styles.aboutListItem}>
            <svg>
                    <use href={`${sprite}#icon-html5`}></use>
                </svg>
            </li>
        </ul>
    <p className={styles.aboutInfo}>At the moment I have a good experience both 
        as a team and independently, all this was 
        allowed by the full stack front end developer 
        courses, which prepare me for real work.
         What sets me apart is that I spend a lot 
         of time improving my abilities, I know how 
         to organize people, and self-organization. 
         I also have a good knowledge of all the 
         necessary programming languages ​​to get started, 
         it's HTML, CSS, REACT, JS, FIGMA, AVOCODE, GIT, WEBPACK also taught React Native,
         and most importantly that I never got tired of 
         learning and doing projects, I have a high 
         motivation and thirst for knowledge. </p>
    </section>
    </CSSTransition>)
}