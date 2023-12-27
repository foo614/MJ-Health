import CircleIcon from '@mui/icons-material/Circle'
import Button from '@mui/material/Button'
import styles from '../_mpa.module.scss'

type Status = {
    status: number
    text: string
}
const MPAStatusComponent: React.FC<Status> = ({ status, text }: Status) => {
    return (
        <Button
            startIcon={
                status === 0 ? null : status === 1 ? (
                    <CircleIcon className={styles.selectedIcon} />
                ) : (
                    <CircleIcon className={styles.unselectedIcon} />
                )
            }
            className={styles.statusButton}
            disabled
            classes={{ disabled: styles.disabledStatusButton }}
        >
            {text}
        </Button>
    )
}

export default MPAStatusComponent
