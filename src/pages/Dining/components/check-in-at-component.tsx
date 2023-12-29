import styles from '../_dining.module.scss'
import { Button } from '@mui/material'
type CheckInAtComponentProps = {
    value: any
    isEmpty: boolean
}

const CheckInAtComponent: React.FC<CheckInAtComponentProps> = ({
    value,
    isEmpty,
}: CheckInAtComponentProps) => {
    const checkInComponentWithValue = () => {
        return (
            <Button className={styles.checkInComponentWithValueBttn} fullWidth>
                <p className={styles.checkInComponentWithValueText}>{value}</p>
            </Button>
        )
    }

    const checkInComponentWithoutValue = () => {
        return (
            <Button className={styles.checkInComponentWithoutValueBttn} fullWidth>
                <p className={styles.checkInComponentWithoutValueText}>-</p>
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

export default CheckInAtComponent
