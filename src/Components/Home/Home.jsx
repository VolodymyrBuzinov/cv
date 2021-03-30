import styles from './Home.module.scss';


export default function Home () {
    return(<section className={styles.home}>
        <div className={styles.homeContainer}>
        <img className={styles.homeImage} src="https://i.ibb.co/4WqXhjK/IMG-0146-2.webp" alt="My profile icon"/>
        <div className={styles.homeTextContainer}>
            <h1>Hello!</h1>
            <p>My name is Volodymyr Buzinov</p>
            <p>And I am front-end developer</p>
        </div>
        </div>    
    </section>)
}