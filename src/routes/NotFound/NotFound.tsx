import Container from "../../components/Container/Container";
import NotFound from '../../components/NotFound/NotFound';
import styles from './NotFound.module.css';

const NotFoundPage = () => {
    return (
        <Container className={styles.page}>
            <NotFound />
        </Container>
    )
}

export default NotFoundPage