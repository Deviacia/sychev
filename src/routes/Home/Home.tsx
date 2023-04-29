import styles from './Home.module.css';
import MainThreeScene from '../../three/scenes/MainThreeScene';
import Navbar from '../../components/Navbar/Navbar';

const HomePage = () => {

    return (
        <>
            <header className={styles.header}>
                <MainThreeScene />
            </header>
            {/* <main className={styles.main}></main> */}
        </>
    )
}

export default HomePage