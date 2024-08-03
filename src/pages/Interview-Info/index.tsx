import ResponsiveAppBar from 'components/AppBar'
import UserHeader from 'components/UserHeader'
import { Grid, Button, Stack, Card, Divider } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
    INTERVIEW_INFO_PAGE,
    INTERVIEW_PAGE,
    INTERVIEW_QUESTIONAIRE_PAGE,
} from 'constant'
import { useNavigate } from 'react-router-dom'
import styles from './_interview-info.module.scss'
import { useState } from 'react'
import ConditionHistory from './components/condition-history'
import PersonalComplaint from './components/personal-complaint'
import AddOnService from './components/add-on-service'
import PersonalStatusScreeningFlow from './components/personal-status-screening-flow'
import HIVConsentFormModal from 'components/HIVConsentModal'
import LetterAuthorizationModal from 'components/AuthorizationLetterModal'
import CallHistoryModal from 'components/CallHistoryModal'
import PregnancyWaiverForm from './components/pregnancy-waiver-form'
import ExitStationModal from './components/exit-station-modal'
const InterviewInfo = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    const navigate = useNavigate()
    const [currentSection, setCurrentSection] = useState(1)
    const [openHIVModal, setOpenHIVModal] = useState<boolean>(false)
    const [openLetterAuthorizationModal, setOpenLetterAuthorizationModal] =
        useState<boolean>(false)
    const [openCallHistoryModal, setOpenCallHistoryModal] =
        useState<boolean>(false)

    const [openPregnancyWaiverFormModal, setOpenPregnancyWaiverFormModal] =
        useState<boolean>(false)

    const [openExitStationModal, setOpenExitStationModal] =
        useState<boolean>(false)

    const handleDisplayCurrentSection = (section: number) => {
        setCurrentSection(section)
    }

    const displayCurrentSection = () => {
        switch (currentSection) {
            case 1:
                return (
                    <ConditionHistory
                        questionnaireAction={() =>
                            navigate(
                                `${INTERVIEW_INFO_PAGE}/1${INTERVIEW_QUESTIONAIRE_PAGE}`
                            )
                        }
                    />
                )
            case 2:
                return <PersonalComplaint />
            case 3:
                return <AddOnService />
            case 4:
                return <PersonalStatusScreeningFlow />
            default:
                return null
        }
    }

    const listData = [
        {
            id: 1,
            date: '03-03-2023',
            relative: 1,
            remark: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            pic: 'MYJB-0001',
            status: 1,
        },
        {
            id: 2,
            date: '03-03-2023',
            relative: 2,
            remark: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            pic: 'MYJB-0001',
            status: 4,
        },
        {
            id: 3,
            date: '03-03-2023',
            relative: 1,
            remark: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            pic: 'MYJB-0001',
            status: 4,
        },
        {
            id: 4,
            date: '03-03-2023',
            relative: 1,
            remark: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            pic: 'MYJB-0001',
            status: 4,
        },
        {
            id: 5,
            date: '03-03-2023',
            relative: 2,
            remark: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            pic: 'MYJB-0001',
            status: 4,
        },
    ]

    const listOption = [
        {
            id: 1,
            label: 'Daughter',
        },
        {
            id: 2,
            label: 'Son',
        },
    ]

    const statusOption = [
        { id: 1, label: 'Call Again' },
        { id: 2, label: 'No Answer' },
        { id: 3, label: 'Follow Up' },
        { id: 4, label: 'Closed' },
    ]

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
                        onClick={() => navigate(INTERVIEW_PAGE)}
                    >
                        Back
                    </Button>
                </Grid>
                <Grid xs={3} md={8} className={styles.headerTitle}>
                    INTERVIEW
                </Grid>
                <Grid xs={12} md={2} textAlign={matches ? 'center' : 'start'}>
                    <Button
                        variant="contained"
                        className={styles.exitStationBttn}
                        onClick={() => setOpenExitStationModal(true)}
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
                        <Stack direction="column" spacing={2}>
                            <div
                                className={styles.smallCard}
                                onClick={() => setOpenHIVModal(true)}
                            >
                                <p className={styles.smallCardTitle}>
                                    HIV Consent Form
                                </p>
                            </div>
                            <div
                                className={styles.smallCard}
                                onClick={() =>
                                    setOpenPregnancyWaiverFormModal(true)
                                }
                            >
                                <p className={styles.smallCardTitle}>
                                    Pregnancy Waiver Form
                                </p>
                            </div>

                            <div
                                className={styles.smallCard}
                                onClick={() =>
                                    setOpenLetterAuthorizationModal(true)
                                }
                            >
                                <p className={styles.smallCardTitle}>
                                    Letter of Authorization
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
                        </Stack>
                    </Grid>
                    <Grid item md={8} xs={12} lg={8} xl={10}>
                        <Card className={styles.card}>
                            <div style={{ padding: '25px 25px  0px 25px' }}>
                                <div
                                    className={
                                        matches
                                            ? styles.interviewInfoMenuDiv
                                            : styles.interviewInfoMenuDivMobile
                                    }
                                >
                                    <div>
                                        <Button
                                            variant="contained"
                                            className={
                                                currentSection === 1
                                                    ? styles.selectedBttn
                                                    : styles.unSelectedBttn
                                            }
                                            onClick={() =>
                                                handleDisplayCurrentSection(1)
                                            }
                                        >
                                            Condition & History
                                        </Button>
                                    </div>
                                    <div>
                                        <Button
                                            variant="contained"
                                            className={
                                                currentSection === 2
                                                    ? styles.selectedBttn
                                                    : styles.unSelectedBttn
                                            }
                                            onClick={() =>
                                                handleDisplayCurrentSection(2)
                                            }
                                        >
                                            Personal Complaint
                                        </Button>
                                    </div>
                                    <div>
                                        <Button
                                            variant="contained"
                                            className={
                                                currentSection === 3
                                                    ? styles.selectedBttn
                                                    : styles.unSelectedBttn
                                            }
                                            onClick={() =>
                                                handleDisplayCurrentSection(3)
                                            }
                                        >
                                            Add On Service
                                        </Button>
                                    </div>
                                    <div>
                                        <Button
                                            variant="contained"
                                            className={
                                                currentSection === 4
                                                    ? styles.selectedBttn
                                                    : styles.unSelectedBttn
                                            }
                                            onClick={() =>
                                                handleDisplayCurrentSection(4)
                                            }
                                        >
                                            Physical Status And Screening Flow
                                        </Button>
                                    </div>
                                </div>
                                <Divider className={styles.divLine} />
                            </div>
                            {displayCurrentSection()}
                        </Card>
                    </Grid>
                    <Grid item md={2} xs={12} lg={2} xl={1}></Grid>
                </Grid>
            </div>
            {openHIVModal ? (
                <HIVConsentFormModal
                    open={openHIVModal}
                    setOpen={setOpenHIVModal}
                    matches={matches}
                />
            ) : null}
            {openLetterAuthorizationModal ? (
                <LetterAuthorizationModal
                    open={openLetterAuthorizationModal}
                    setOpen={setOpenLetterAuthorizationModal}
                    matches={matches}
                />
            ) : null}
            {openCallHistoryModal ? (
                <CallHistoryModal
                    open={openCallHistoryModal}
                    setOpen={setOpenCallHistoryModal}
                    // listData={listData}
                    // listOption={listOption}
                    // statusOption={statusOption}
                />
            ) : null}
            {openPregnancyWaiverFormModal ? (
                <PregnancyWaiverForm
                    open={openPregnancyWaiverFormModal}
                    setOpen={setOpenPregnancyWaiverFormModal}
                    matches={matches}
                    mdUp={mdUp}
                />
            ) : null}
            {openExitStationModal ? (
                <ExitStationModal
                    open={openExitStationModal}
                    setOpen={setOpenExitStationModal}
                />
            ) : null}
        </>
    )
}
export default InterviewInfo
