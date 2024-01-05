import styles from '../_reception.module.scss'
import { Button } from '@mui/material'
type Props = {
    value: any
    isEmpty: boolean
}

const TimeComponent: React.FC<Props> = ({ value, isEmpty }: Props) => {
    const checkInComponentWithValue = () => {
        return (
            <Button className={styles.timeComponentWithValueBttn} fullWidth>
                <p className={styles.timeComponentWithValueText}>{value}</p>
            </Button>
        )
    }

    const checkInComponentWithoutValue = () => {
        return (
            <Button className={styles.timeComponentWithoutValueBttn} fullWidth>
                <p className={styles.timeComponentWithoutValueText}>-</p>
            </Button>
        )
    }
    return (
        <>
            {isEmpty
                ? checkInComponentWithoutValue()
                : checkInComponentWithValue()}
        </>
    )
}

export default TimeComponent
