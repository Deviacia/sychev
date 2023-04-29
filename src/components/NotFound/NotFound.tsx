import { useNavigate } from "react-router-dom";
import styles from './NotFound.module.css';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>NotFound</h1>
            <button onClick={() => navigate('/', { replace: true })}>
                Back
            </button>
        </div>
    )
}

export default NotFound