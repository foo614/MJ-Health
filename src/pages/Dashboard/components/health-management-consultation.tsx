import { FunctionComponent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './_health-management-consultation.module.scss'
import ConsultationCheckIn3 from './consultation-check-in3'
import PortalPopup from './portal-popup'

const HealthManagementConsultation: FunctionComponent = () => {
    const [isConsultationCheckIn3Open, setConsultationCheckIn3Open] =
        useState(false)
    const navigate = useNavigate()

    const openConsultationCheckIn3 = useCallback(() => {
        setConsultationCheckIn3Open(true)
    }, [])

    const closeConsultationCheckIn3 = useCallback(() => {
        setConsultationCheckIn3Open(false)
    }, [])

    const onGroupContainerClick = useCallback(() => {
        navigate('/')
    }, [navigate])

    const onGroupContainer1Click = useCallback(() => {
        // Please sync "Screening Room System-Health Management Consultation" to the project
    }, [])

    return (
        <>
            <div className={styles.healthManagementConsultation}>
                <b className={styles.checkInRoom}>Check In Room</b>
                <div
                    className={styles.healthManagementConsultationChild}
                    onClick={openConsultationCheckIn3}
                />
                <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector@2x.png"
                />
                <div className={styles.healthManagementConsultation1}>
                    Health Management Consultation
                </div>
                <b className={styles.sept2022}>22 SEPT 2022 : 01:00 PM</b>
                <div className={styles.healthManagementConsultationItem} />
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
            {isConsultationCheckIn3Open && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeConsultationCheckIn3}
                >
                    <ConsultationCheckIn3 />
                </PortalPopup>
            )}
        </>
    )
}

export default HealthManagementConsultation
