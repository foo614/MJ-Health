import { FunctionComponent, useCallback, useState } from 'react'
import styles from './_consultation-check-in3.module.scss'
import HealthManagementConsultation from './health-management-consultation'
import PhysicianConsultationCheckI from './physician-consultation-check-i'
import PortalPopup from './portal-popup'

const ConsultationCheckIn3: FunctionComponent = () => {
    const [
        isHealthManagementConsultation2Open,
        setHealthManagementConsultation2Open,
    ] = useState(false)
    const [
        isPhysicianConsultationCheckIOpen,
        setPhysicianConsultationCheckIOpen,
    ] = useState(false)

    const openHealthManagementConsultation2 = useCallback(() => {
        setHealthManagementConsultation2Open(true)
    }, [])

    const closeHealthManagementConsultation2 = useCallback(() => {
        setHealthManagementConsultation2Open(false)
    }, [])

    const openPhysicianConsultationCheckI = useCallback(() => {
        setPhysicianConsultationCheckIOpen(true)
    }, [])

    const closePhysicianConsultationCheckI = useCallback(() => {
        setPhysicianConsultationCheckIOpen(false)
    }, [])

    return (
        <>
            <div className={styles.consultationCheckIn3}>
                <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.groupItem} />
                    <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector@2x.png"
                    />
                    <div className={styles.healthManagementConsultation}>
                        Health Management Consultation
                    </div>
                </div>
                <div
                    className={styles.healthManagementConsultation1}
                    onClick={openHealthManagementConsultation2}
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
            {isHealthManagementConsultation2Open && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeHealthManagementConsultation2}
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

export default ConsultationCheckIn3
