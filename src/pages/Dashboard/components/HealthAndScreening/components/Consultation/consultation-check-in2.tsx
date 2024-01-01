import { FunctionComponent, useCallback, useState } from 'react'
import HealthManagementConsultation from '../../../health-management-consultation'
import PhysicianConsultationCheckI from '../../../physician-consultation-check-i'
import PortalPopup from '../../../portal-popup'
import styles from './_consultation-check-in2.module.scss'

const ConsultationCheckIn2: FunctionComponent = () => {
    const [isConsultationCheckInOpen, setConsultationCheckInOpen] =
        useState(false)
    const [
        isHealthManagementConsultation1Open,
        setHealthManagementConsultation1Open,
    ] = useState(false)
    const [
        isPhysicianConsultationCheckIOpen,
        setPhysicianConsultationCheckIOpen,
    ] = useState(false)

    const openConsultationCheckIn = useCallback(() => {
        setConsultationCheckInOpen(true)
    }, [])

    const closeConsultationCheckIn = useCallback(() => {
        setConsultationCheckInOpen(false)
    }, [])

    const openHealthManagementConsultation1 = useCallback(() => {
        setHealthManagementConsultation1Open(true)
    }, [])

    const closeHealthManagementConsultation1 = useCallback(() => {
        setHealthManagementConsultation1Open(false)
    }, [])

    const openPhysicianConsultationCheckI = useCallback(() => {
        setPhysicianConsultationCheckIOpen(true)
    }, [])

    const closePhysicianConsultationCheckI = useCallback(() => {
        setPhysicianConsultationCheckIOpen(false)
    }, [])

    return (
        <>
            <div className={styles.consultationCheckIn2}>
                <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.groupItem} />
                    <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector@2x.png"
                        onClick={openConsultationCheckIn}
                    />
                    <div className={styles.div}>-</div>
                </div>
                <div
                    className={styles.healthManagementConsultation}
                    onClick={openHealthManagementConsultation1}
                >
                    Health Management Consultation
                </div>
                <div
                    className={styles.physicianConsultation}
                    onClick={openPhysicianConsultationCheckI}
                >
                    Physician Consultation
                </div>
            </div>
            {/* {isConsultationCheckInOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeConsultationCheckIn}
                >
                    <ConsultationCheckIn />
                </PortalPopup>
            )} */}
            {isHealthManagementConsultation1Open && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeHealthManagementConsultation1}
                >
                    <HealthManagementConsultation />
                </PortalPopup>
            )}
            {isPhysicianConsultationCheckIOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closePhysicianConsultationCheckI}
                >
                    <PhysicianConsultationCheckI />
                </PortalPopup>
            )}
        </>
    )
}

export default ConsultationCheckIn2
