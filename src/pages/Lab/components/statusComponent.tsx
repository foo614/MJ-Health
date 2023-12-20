import CircleIcon from '@mui/icons-material/Circle'
import Button from '@mui/material/Button'
import styles from '../_lab.module.scss'

type Status = {
    status: number
}
const StatusComponent: React.FC<Status> = ({ status }: Status) => {
    const currentStatus =
        status === 0 ? '-' : status === 1 ? 'Complete' : 'Fail'
    return (
        <Button
            startIcon={
                status === 0 ? null : status === 1 ? (
                    <CircleIcon className={styles.successIcon} />
                ) : (
                    <CircleIcon className={styles.failIcon} />
                )
            }
            className={styles.statusButton}
            disabled
            classes={{ disabled: styles.disabledStatusButton }}
        >
            {currentStatus}
        </Button>
    )
}

export default StatusComponent
