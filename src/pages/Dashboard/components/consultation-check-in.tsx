import { FunctionComponent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './_consultation-check-in.module.scss'
import ConsultationCheckIn2 from './consultation-check-in2'
import PortalPopup from './portal-popup'

const ConsultationCheckIn: FunctionComponent = () => {
    const [isConsultationCheckIn2Open, setConsultationCheckIn2Open] =
        useState(false)
    const navigate = useNavigate()

    const openConsultationCheckIn2 = useCallback(() => {
        setConsultationCheckIn2Open(true)
    }, [])

    const closeConsultationCheckIn2 = useCallback(() => {
        setConsultationCheckIn2Open(false)
    }, [])

    const onGroupContainerClick = useCallback(() => {
        navigate('/')
    }, [navigate])

    return (
        <>
            <div className={styles.consultationCheckIn}>
                <b className={styles.checkInRoom}>Check In Room</b>
                <div
                    className={styles.consultationCheckInChild}
                    onClick={openConsultationCheckIn2}
                />
                <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector@2x.png"
                />
                <div className={styles.div}>-</div>
                <b className={styles.sept2022}>22 SEPT 2022 : 01:00 PM</b>
                <div className={styles.consultationCheckInItem} />
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
            {isConsultationCheckIn2Open && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeConsultationCheckIn2}
                >
                    <ConsultationCheckIn2 />
                </PortalPopup>
            )}
        </>
    )
}

export default ConsultationCheckIn
