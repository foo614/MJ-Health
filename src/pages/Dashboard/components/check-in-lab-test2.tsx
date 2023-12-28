import { FunctionComponent, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './_check-in-lab-test2.module.scss'

const CheckInLabTest2: FunctionComponent = () => {
    const navigate = useNavigate()

    const onRectangle2Click = useCallback(() => {
        navigate('/')
    }, [navigate])

    const onRectangle3Click = useCallback(() => {
        // Please sync "Lab- List" to the project
    }, [])

    return (
        <div className={styles.checkInLabTest2}>
            <div className={styles.checkInLabTest2Child} />
            <div className={styles.checkInLabTest2Item} />
            <b className={styles.checkInRoom}>Check In Room</b>
            <div className={styles.labTest}>Lab Test</div>
            <b className={styles.sept2022}>22 SEPT 2022 : 01:00 PM</b>
            <div className={styles.rectangleParent}>
                <div
                    className={styles.groupChild}
                    onClick={onRectangle2Click}
                />
                <b className={styles.cancel}>Cancel</b>
            </div>
            <div className={styles.rectangleGroup}>
                <div className={styles.groupItem} onClick={onRectangle3Click} />
                <b className={styles.confirm}>Confirm</b>
            </div>
        </div>
    )
}

export default CheckInLabTest2
