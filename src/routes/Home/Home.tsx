import styles from './Home.module.css';
import MainThreeScene from '../../three/scenes/MainThreeScene';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {

    return (
        <>
            <header className={styles.header}>
                <Navbar />
                <MainThreeScene />
            </header>
            <main className={styles.main}></main>
        </>
    )
}

export default Home