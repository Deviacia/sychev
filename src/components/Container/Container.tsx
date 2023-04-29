import { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
    children: ReactNode,
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div
            className={
                className
                    ? [styles.container, className].join(' ')
                    : styles.container
            }
        >
            {children}
        </div>
    )
}

export default Container