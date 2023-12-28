import { FunctionComponent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './_check-in-screening-room1.module.scss'
import PortalPopup from './portal-popup'
import ScreeningChoice from './screening-choice'

type Props = {
    onClose?: () => void
}

const CheckInScreeningRoom1: FunctionComponent = (props: Props) => {
    const [isScreeningChoiceOpen, setScreeningChoiceOpen] = useState(false)
    const navigate = useNavigate()

    const openScreeningChoice = useCallback(() => {
        setScreeningChoiceOpen(true)
    }, [])

    const closeScreeningChoice = useCallback(() => {
        setScreeningChoiceOpen(false)
    }, [])

    const onGroupContainerClick = useCallback(() => {
        navigate('/')
    }, [navigate])

    return (
        <>
            <div className={styles.checkInScreeningRoom1}>
                <b className={styles.checkInRoom}>Check In Room</b>
                <div
                    className={styles.checkInScreeningRoom1Child}
                    onClick={openScreeningChoice}
                />
                <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector@2x.png"
                />
                <div className={styles.div}>-</div>
                <b className={styles.sept2022}>22 SEPT 2022 : 01:00 PM</b>
                <div className={styles.checkInScreeningRoom1Item} />
                <div
                    className={styles.rectangleParent}
                    onClick={onGroupContainerClick}
                >
                    <div className={styles.groupChild} />
                    <b className={styles.cancel}>Cancel</b>
                </div>
                <div className={styles.rectangleGroup}>
                    <div className={styles.groupItem} />
                    <b className={styles.confirm}>Confirm</b>
                </div>
            </div>
            {isScreeningChoiceOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeScreeningChoice}
                >
                    <ScreeningChoice />
                </PortalPopup>
            )}
        </>
    )
}

export default CheckInScreeningRoom1
