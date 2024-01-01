import { FunctionComponent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ConsultationCheckIn4 from './HealthAndScreening/components/Consultation/consultation-check-in4'
import styles from './_physician-consultation-check-i.module.scss'
import PortalPopup from './portal-popup'

const PhysicianConsultationCheckI: FunctionComponent = () => {
    const [isConsultationCheckIn4Open, setConsultationCheckIn4Open] =
        useState(false)
    const navigate = useNavigate()

    const openConsultationCheckIn4 = useCallback(() => {
        setConsultationCheckIn4Open(true)
    }, [])

    const closeConsultationCheckIn4 = useCallback(() => {
        setConsultationCheckIn4Open(false)
    }, [])

    const onGroupContainerClick = useCallback(() => {
        navigate('/')
    }, [navigate])

    const onGroupContainer1Click = useCallback(() => {
        // Please sync "Screening Room System-Physician Consultation" to the project
    }, [])

    return (
        <>
            <div className={styles.physicianConsultationCheckI}>
                <b className={styles.checkInRoom}>Check In Room</b>
                <div
                    className={styles.physicianConsultationCheckIChild}
                    onClick={openConsultationCheckIn4}
                />
                <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector@2x.png"
                />
                <div className={styles.physicianConsultation}>
                    Physician Consultation
                </div>
                <b className={styles.sept2022}>22 SEPT 2022 : 01:00 PM</b>
                <div className={styles.physicianConsultationCheckIItem} />
                <div
                    className={styles.rectangleParent}
                    onClick={onGroupContainerClick}
                >
                    <div className={styles.groupChild} />
                    <b className={styles.cancel}>Cancel</b>
                </div>
                <div
                    className={styles.rectangleGroup}
                    onClick={onGroupContainer1Click}
                >
                    <div className={styles.groupItem} />
                    <b className={styles.confirm}>Confirm</b>
                </div>
            </div>
            {isConsultationCheckIn4Open && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeConsultationCheckIn4}
                >
                    <ConsultationCheckIn4 />
                </PortalPopup>
            )}
        </>
    )
}

export default PhysicianConsultationCheckI
