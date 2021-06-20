import styles from "./Examples.module.scss";
import { CSSTransition } from "react-transition-group";
export default function Examples() {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames={styles}>
      <section className={styles.examples}>
        <h2 className={styles.examplesTitle}>Team projects</h2>
        <ul className={styles.examplesList}>
          <li className={styles.examplesListItem}>
            <a
              className={styles.examplesLink}
              href="https://cant-leave-without-node.netlify.app/"
              aria-label="go to weather app"
            >
              <img
                src="https://i.ibb.co/rwKGR1x/questify.jpg"
                alt="weather app"
              />
            </a>
          </li>
          <li className={styles.examplesListItem}>
            <a
              className={styles.examplesLink}
              href="https://hotelsmy.netlify.app/"
              aria-label="go to weather app"
            >
              <img
                src="https://i.ibb.co/vcpYpr0/05-04-2021-18-45-52.png"
                alt="weather app"
              />
            </a>
          </li>
          <li className={styles.examplesListItem}>
            <a
              className={styles.examplesLink}
              href="https://freewebweather.netlify.app/"
              aria-label="go to weather app"
            >
              <img
                src="https://i.ibb.co/C1Lnrbg/web-weather.png"
                alt="weather app"
              />
            </a>
          </li>
          <li className={styles.examplesListItem}>
            <a
              className={styles.examplesLink}
              href="https://shop-web-project.netlify.app/"
              aria-label="go to shop app"
            >
              <img src="https://i.ibb.co/nffGWKm/shop.png" alt="shop app" />
            </a>
          </li>
          <li className={styles.examplesListItem}>
            <a
              className={styles.examplesLink}
              href="https://volodymyrbuzinov.github.io/barber-finalle/index.html"
              aria-label="go to barber shop"
            >
              <img
                src="https://i.ibb.co/QFQ5fK5/barber-shop.png"
                alt="barber shop"
              />
            </a>
          </li>
        </ul>
        <h2 className={styles.examplesTitle}>Solo projects</h2>
        <ul className={styles.examplesList}>
          <li className={styles.examplesListItem}>
            <a
              className={styles.examplesLink}
              href="https://603d0c86c60193009278fe9f--focused-cori-67b014.netlify.app/"
              aria-label="go to phonebook app"
            >
              <img
                src="https://i.ibb.co/8dFwVTL/30-03-2021-17-19-33.png"
                alt="Phonebook app"
              />
            </a>
          </li>
          <li className={styles.examplesListItem}>
            <a
              className={styles.examplesLink}
              href="https://forrask.netlify.app/"
              aria-label="go to raskachaem"
            >
              <img
                src="https://i.ibb.co/wNxKn5g/raskachaem.png"
                alt="raskachaem app"
              />
            </a>
          </li>
          <li className={styles.examplesListItem}>
            <a
              className={styles.examplesLink}
              href="https://myladyslim.netlify.app/"
              aria-label="go to lady slim"
            >
              <img
                src="https://i.ibb.co/FbdSkL7/lady-slim.png"
                alt="lady slim"
              />
            </a>
          </li>
        </ul>
      </section>
    </CSSTransition>
  );
}
