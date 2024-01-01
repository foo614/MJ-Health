import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Cardiogram from 'images/cardiogram-1@2x.png'
import Chat1 from 'images/chat-1-1@2x.png'
import Group2 from 'images/group@2x.png'
import LineIcon from 'images/line-1@2x.png'
import PhoneIcon from 'images/phone-1-1@2x.png'
import Frame2 from 'images/screening-1@2x.png'
import Swab from 'images/swab-1@2x.png'
import { useCallback, useState } from 'react'
import CustomBoxButton from '../CustomBoxButton'
import PortalPopup from '../portal-popup'
import styles from './_healthAndScreening.module.scss'
import ConsultationCheckIn from './components/Consultation/consultation-check-in'
import CheckInLabTest2 from './components/LabTest/check-in-lab-test2'
import CheckInScreeningRoom1 from './components/ScreeningRoomSystem/check-in-screening-room1'

const HealthAndScreening = () => {
    const [isCheckInLabTest2Open, setCheckInLabTest2Open] = useState(false)
    const [isCheckInScreeningRoom1Open, setCheckInScreeningRoom1Open] =
        useState(false)
    const [isConsultationCheckInOpen, setConsultationCheckInOpen] =
        useState(false)
    const closeCheckInLabTest2 = useCallback(() => {
        setCheckInLabTest2Open(false)
    }, [])
    const openCheckInLabTest2 = useCallback(() => {
        setCheckInLabTest2Open(true)
    }, [])
    const openCheckInScreeningRoom1 = useCallback(() => {
        setCheckInScreeningRoom1Open(true)
    }, [])

    const closeCheckInScreeningRoom1 = useCallback(() => {
        setCheckInScreeningRoom1Open(false)
    }, [])
    const openConsultationCheckIn = useCallback(() => {
        setConsultationCheckInOpen(true)
    }, [])
    const closeConsultationCheckIn = useCallback(() => {
        setConsultationCheckInOpen(false)
    }, [])

    return (
        <Grid container sx={{ mb: 4 }}>
            <Grid xs={12} display="flex" sx={{ mb: 3 }}>
                <img
                    className={styles.headphonesIcon}
                    alt=""
                    src={Cardiogram}
                />
                <div className={styles.services}>Health & Screening</div>
            </Grid>
            <Grid>
                <Stack direction="row" spacing={2}>
                    <CustomBoxButton
                        image={Frame2}
                        label="Screening Room System"
                        onClick={openCheckInScreeningRoom1}
                    />
                    {/* prompt */}
                    <CustomBoxButton
                        image={Swab}
                        label="Lab Test"
                        onClick={openCheckInLabTest2}
                    />
                    {/* prompt */}
                    <CustomBoxButton
                        image={Chat1}
                        label="Consultation"
                        onClick={openConsultationCheckIn}
                    />
                    <CustomBoxButton image={LineIcon} label="Monitor System" />
                    <CustomBoxButton
                        image={LineIcon}
                        label="Queue Management"
                    />
                    <CustomBoxButton
                        image={Group2}
                        label="Rediology Reporting"
                    />
                    <CustomBoxButton
                        image={PhoneIcon}
                        label="Phone Consultation"
                    />
                </Stack>
            </Grid>
            {isCheckInLabTest2Open && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeCheckInLabTest2}
                >
                    <CheckInLabTest2 onClose={() => closeCheckInLabTest2()} />
                </PortalPopup>
            )}
            {isCheckInScreeningRoom1Open && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeCheckInScreeningRoom1}
                >
                    <CheckInScreeningRoom1
                        onClose={() => closeCheckInScreeningRoom1()}
                    />
                </PortalPopup>
            )}
            {isConsultationCheckInOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeConsultationCheckIn}
                >
                    <ConsultationCheckIn
                        onClose={() => closeConsultationCheckIn()}
                    />
                </PortalPopup>
            )}
        </Grid>
    )
}

export default HealthAndScreening
