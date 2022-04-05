import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscirbeButton( { priceId }: SubscribeButtonProps) {
    return (
        <button
        type="button"
        className={styles.subscribe}
        >
            Subscribe now
        </button>
    )
}