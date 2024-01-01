import { FunctionComponent, useCallback, useState } from 'react'
import HealthManagementConsultation from '../../../health-management-consultation'
import PhysicianConsultationCheckI from '../../../physician-consultation-check-i'
import PortalPopup from '../../../portal-popup'
import styles from './_consultation-check-in4.module.scss'

const ConsultationCheckIn4: FunctionComponent = () => {
    const [
        isHealthManagementConsultation1Open,
        setHealthManagementConsultation1Open,
    ] = useState(false)
    const [
        isPhysicianConsultationCheckIOpen,
        setPhysicianConsultationCheckIOpen,
    ] = useState(false)

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
            <div className={styles.consultationCheckIn4}>
                <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.groupItem} />
                    <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector@2x.png"
                    />
                    <div className={styles.physicianConsultation}>
                        Physician Consultation
                    </div>
                </div>
                <div
                    className={styles.healthManagementConsultation}
                    onClick={openHealthManagementConsultation1}
                >
                    Health Management Consultation
                </div>
                <div
                    className={styles.physicianConsultation1}
                    onClick={openPhysicianConsultationCheckI}
                >
                    Physician Consultation
                </div>
            </div>
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

export default ConsultationCheckIn4
