import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Button, Divider, Grid, Stack } from '@mui/material'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar'
import { MONITOR_SYSTEM_PAGE, PHYSICIAN_CONSULTATION_PAGE } from 'constant'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './_physician-consultation-info.module.scss'
import AllergyModal from './components/allergy-modal'
import CallHistoryModal from './components/call-history-modal'
import CommentSection from './components/comment-section'
import CurrentTable from './components/current-table'
import CurrentTableEditModal from './components/current-table-edit-modal'
import FollowUpModal from './components/follow-up-modal'
import GeneralExaminationModal from './components/general-examination-modal'
import LowerLimbEdemaModal from './components/lower-limb-edema-modal'
import MedicalHistoryModal from './components/medical-history-modal'
import PersonalComplaintModal from './components/personal-complaint-modal'
import PhysicalExamOutcomeCommentModal from './components/physical-exam-outcome-comment-modal'
import Recommendation from './components/recommendation'
import ScreeningOutcome from './components/screening-outcome'
import SystemicExaminationModal from './components/systemic-examination-modal'
import UserHeader from './components/user-header'

const PhysicianConsultationInfo = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
    const navigate = useNavigate()
    const [selectedSection, setSelectedSection] = useState<number>(1)

    // Modal control at left.
    const [openMedicalHistoryModal, setOpenMedicalHistoryModal] =
        useState<boolean>(false)
    const [openPersonalComplaintModal, setOpenPersonalComplaintModal] =
        useState<boolean>(false)
    const [openAllergyModal, setOpenAllergyModal] = useState<boolean>(false)
    const [openCallHistoryModal, setOpenCallHistoryModal] =
        useState<boolean>(false)
    const [openLowerLimbEdemaModal, setOpenLowerLimbEdemaModal] =
        useState<boolean>(false)
    const [openGeneralExaminationModal, setOpenGeneralExaminationModal] =
        useState<boolean>(false)
    const [openSystemicExaminationModal, setOpenSystemicExaminationModal] =
        useState<boolean>(false)

    // Modal control at right.
    const [
        openPhysicalExamOutcomeCommentModal,
        setOpenPhysicalExamOutcomeCommentModal,
    ] = useState<boolean>(false)
    const [openFollowUpModal, setOpenFollowUpModal] = useState<boolean>(false)

    const displaySelectedSection = () => {
        switch (selectedSection) {
            case 1:
                return <CommentSection />
            case 2:
                return <ScreeningOutcome />
            case 3:
                return <Recommendation />
            default:
                return null
        }
    }
    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />
            <Grid container className={styles.header}>
                <Grid xs={12} md={2} textAlign={matches ? 'center' : 'start'}>
                    <Button
                        variant="text"
                        className={styles.backButton}
                        startIcon={<ChevronLeftIcon fontSize={'large'} />}
                        onClick={() => navigate(PHYSICIAN_CONSULTATION_PAGE)}
                    >
                        Back
                    </Button>
                </Grid>
                <Grid xs={3} md={8} className={styles.headerTitle}>
                    PHYSICIAN CONSULTATION
                </Grid>
                <Grid xs={12} md={2} textAlign={matches ? 'center' : 'start'}>
                    <Button
                        variant="contained"
                        className={styles.exitStationBttn}
                        onClick={() => navigate(MONITOR_SYSTEM_PAGE)}
                    >
                        Exit Station
                    </Button>
                </Grid>
            </Grid>
            <div
                style={{
                    marginLeft: '5rem',
                    marginRight: '5rem',
                    marginTop: '2rem',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item md={2} xs={12} lg={2} xl={1}>
                        <Stack
                            direction="column"
                            spacing={2}
                            // sx={{
                            //     width: lgUp ? '150px' : '100%',
                            //     margin: 'auto',
                            // }}
                        >
                            <div
                                className={styles.smallCard}
                                onClick={() => setOpenMedicalHistoryModal(true)}
                            >
                                <p className={styles.smallCardTitle}>
                                    Medical History
                                </p>
                            </div>
                            <div
                                className={styles.smallCard}
                                onClick={() =>
                                    setOpenPersonalComplaintModal(true)
                                }
                            >
                                <p className={styles.smallCardTitle}>
                                    Personal Complaint
                                </p>
                            </div>
                            <div
                                className={styles.smallCard}
                                onClick={() => setOpenAllergyModal(true)}
                            >
                                <p className={styles.smallCardTitle}>
                                    Allergy/ Drug Hx
                                </p>
                            </div>
                            <div
                                className={styles.smallCard}
                                onClick={() => setOpenCallHistoryModal(true)}
                            >
                                <p className={styles.smallCardTitle}>
                                    Call History
                                </p>
                            </div>

                            <div
                                className={styles.smallCard}
                                onClick={() => setOpenLowerLimbEdemaModal(true)}
                            >
                                <p className={styles.smallCardTitle}>
                                    Lower Limb Edema
                                </p>
                            </div>

                            <div
                                className={styles.smallCard}
                                onClick={() =>
                                    setOpenGeneralExaminationModal(true)
                                }
                            >
                                <p className={styles.smallCardTitle}>
                                    General Examination
                                </p>
                            </div>

                            <div
                                className={styles.smallCard}
                                onClick={() =>
                                    setOpenSystemicExaminationModal(true)
                                }
                            >
                                <p className={styles.smallCardTitle}>
                                    Systemic Examination
                                </p>
                            </div>
                        </Stack>
                    </Grid>
                    <Grid item md={8} xs={12} lg={8} xl={10}>
                        <Card className={styles.card}>
                            <div style={{ padding: '25px 25px  0px 25px' }}>
                                <Stack
                                    direction={{
                                        xs: 'column',
                                        sm: 'column',
                                        md: 'column',
                                        lg: 'row',
                                        xl: 'row',
                                    }}
                                    spacing={2}
                                >
                                    <Button
                                        variant="contained"
                                        className={
                                            selectedSection === 1
                                                ? styles.selectedBttn
                                                : styles.unSelectedBttn
                                        }
                                        onClick={() => setSelectedSection(1)}
                                    >
                                        Current
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className={
                                            selectedSection === 2
                                                ? styles.selectedBttn
                                                : styles.unSelectedBttn
                                        }
                                        onClick={() => setSelectedSection(2)}
                                    >
                                        Trend of Health Screening Outcome
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className={
                                            selectedSection === 3
                                                ? styles.selectedBttn
                                                : styles.unSelectedBttn
                                        }
                                        onClick={() => setSelectedSection(3)}
                                    >
                                        Recommendation
                                    </Button>
                                </Stack>
                                <Divider className={styles.divLine} />
                                {displaySelectedSection()}
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={2} xs={12} lg={2} xl={1}>
                        <Stack
                            direction="column"
                            spacing={2}
                            // sx={{
                            //     width: lgUp ? '150px' : '100%',
                            //     margin: 'auto',
                            // }}
                        >
                            <div className={styles.smallCard}>
                                <p className={styles.smallCardTitle}>Images</p>
                            </div>

                            <div
                                className={styles.smallCard}
                                onClick={() =>
                                    setOpenPhysicalExamOutcomeCommentModal(true)
                                }
                            >
                                <p className={styles.smallCardTitle}>
                                    The Comment for physical exam outcome
                                </p>
                            </div>

                            <div className={styles.smallCard}>
                                <p className={styles.smallCardTitle}>
                                    Ultrasound
                                </p>
                            </div>

                            <div className={styles.smallCard}>
                                <p className={styles.smallCardTitle}>ENT</p>
                            </div>

                            <div className={styles.smallCard}>
                                <p className={styles.smallCardTitle}>
                                    Retinography
                                </p>
                            </div>

                            <div
                                className={styles.smallCard}
                                onClick={() => setOpenFollowUpModal(true)}
                            >
                                <p className={styles.smallCardTitle}>
                                    Follow-up
                                </p>
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
            {openMedicalHistoryModal ? (
                <MedicalHistoryModal
                    open={openMedicalHistoryModal}
                    setOpen={setOpenMedicalHistoryModal}
                    matches={matches}
                />
            ) : null}
            {openPersonalComplaintModal ? (
                <PersonalComplaintModal
                    open={openPersonalComplaintModal}
                    setOpen={setOpenPersonalComplaintModal}
                    matches={matches}
                />
            ) : null}
            {openAllergyModal ? (
                <AllergyModal
                    open={openAllergyModal}
                    setOpen={setOpenAllergyModal}
                    matches={matches}
                />
            ) : null}
            {openCallHistoryModal ? (
                <CallHistoryModal
                    open={openCallHistoryModal}
                    setOpen={setOpenCallHistoryModal}
                />
            ) : null}
            {openLowerLimbEdemaModal && (
                <LowerLimbEdemaModal
                    open={openLowerLimbEdemaModal}
                    setOpen={setOpenLowerLimbEdemaModal}
                />
            )}
            {openGeneralExaminationModal && (
                <GeneralExaminationModal
                    open={openGeneralExaminationModal}
                    setOpen={setOpenGeneralExaminationModal}
                />
            )}
            {openSystemicExaminationModal && (
                <SystemicExaminationModal
                    open={openSystemicExaminationModal}
                    setOpen={setOpenSystemicExaminationModal}
                />
            )}
            {openPhysicalExamOutcomeCommentModal && (
                <PhysicalExamOutcomeCommentModal
                    matches={matches}
                    open={openPhysicalExamOutcomeCommentModal}
                    setOpen={setOpenPhysicalExamOutcomeCommentModal}
                />
            )}
            {openFollowUpModal && (
                <FollowUpModal
                    matches={matches}
                    open={openFollowUpModal}
                    setOpen={setOpenFollowUpModal}
                />
            )}
        </>
    )
}

export default PhysicianConsultationInfo
