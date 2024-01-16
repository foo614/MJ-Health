import ResponsiveAppBar from 'components/AppBar'
import UserHeader from '../../components/UserHeader'
import { Grid, Button, Stack, Divider, Card } from '@mui/material'
import {
    HEALTH_MANAGEMENT_CONSULTATION_PAGE,
    MONITOR_SYSTEM_PAGE,
} from 'constant'
import { useNavigate } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from './_health-management-consultation-info.module.scss'
import { useState, useRef } from 'react'
import CurrentExamReport from './components/current-exam-report'
import HighRiskGroup from './components/high-risk-group'
import LifeStyleRiskFactor from './components/lifestyle-risk-factor'
import DietaryAssessment from './components/dietary-assessment'
import MPA from './components/mpa'
import HMPReport from './components/hmp-report'
import CommentSuggestion from './components/comment-suggestion'
import PersonalComplaintModal from './components/personal-complaint-modal'
import CallHistoryModal from './components/call-history-modal'
import HMCRecordModal from './components/hmc-record-modal'
const HealthManagementConsultationInfo = () => {
    const [currentSection, setCurrentSection] = useState(1)
    const navigate = useNavigate()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [openPersonalComplaintModal, setOpenPersonalComplaintModal] =
        useState<boolean>(false)
    const [openCallHistoryModal, setOpenCallHistoryModal] =
        useState<boolean>(false)
    const [openHMCReportModal, setOpenHMCReportModal] = useState<boolean>(false)
    const dragRef = useRef<HTMLDivElement>(null)
    const [isMouseDown, setIsMouseDown] = useState(false)
    const mouseCoords = useRef({
        startX: 0,
        startY: 0,
        scrollLeft: 0,
        scrollTop: 0,
    })

    const handleDragStart = (e: any) => {
        if (!dragRef.current) return
        const slider = dragRef.current as any
        console.log(slider)
        const startX = e.pageX - slider.offsetLeft
        const startY = e.pageY - slider.offsetTop
        const scrollLeft = slider.scrollLeft
        const scrollTop = slider.scrollTop
        mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
        setIsMouseDown(true)
        document.body.style.cursor = 'grabbing'
    }

    const handleDragEnd = () => {
        setIsMouseDown(false)
        if (!dragRef.current) return
        document.body.style.cursor = 'default'
    }

    const handleDrag = (e: any) => {
        if (!isMouseDown || !dragRef.current) return
        e.preventDefault()
        const slider = dragRef.current as any
        const x = e.pageX - slider.offsetLeft
        const y = e.pageY - slider.offsetTop
        const walkX = (x - mouseCoords.current.startX) * 1.5
        const walkY = (y - mouseCoords.current.startY) * 1.5
        slider.scrollLeft = mouseCoords.current.scrollLeft - walkX
        slider.scrollTop = mouseCoords.current.scrollTop - walkY
    }

    const handleDisplayCurrentSection = (section: number) => {
        setCurrentSection(section)
    }

    const displayCurrentSection = () => {
        switch (currentSection) {
            case 1:
                return <CurrentExamReport />
            case 2:
                return <HighRiskGroup />
            case 3:
                return <LifeStyleRiskFactor />
            case 4:
                return <DietaryAssessment />
            case 5:
                return <MPA />
            case 6:
                return <HMPReport />
            case 7:
                return <CommentSuggestion />
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
                        onClick={() =>
                            navigate(HEALTH_MANAGEMENT_CONSULTATION_PAGE)
                        }
                    >
                        Back
                    </Button>
                </Grid>
                <Grid xs={3} md={8} className={styles.headerTitle}>
                    HEALTH MANAGEMENT CONSULTATION
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
                        <Stack direction="column" spacing={2}>
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
                                onClick={() => setOpenHMCReportModal(true)}
                            >
                                <p className={styles.smallCardTitle}>
                                    HMC Record
                                </p>
                            </div>

                            <div className={styles.smallCard}>
                                <p className={styles.smallCardTitle}>
                                    Report Enquiry
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
                                            ? styles.healthManagementConsultationInfoMenuDiv
                                            : styles.healthManagementConsultationInfoMenuDivMobile
                                    }
                                    onMouseDown={handleDragStart}
                                    onMouseUp={handleDragEnd}
                                    onMouseMove={handleDrag}
                                    ref={dragRef}
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
                                            Current Exam.Report
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
                                            High Risk Group
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
                                            Life-Style Risk Factors
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
                                            Dietary Assessment
                                        </Button>
                                    </div>
                                    <div>
                                        <Button
                                            variant="contained"
                                            className={
                                                currentSection === 5
                                                    ? styles.selectedBttn
                                                    : styles.unSelectedBttn
                                            }
                                            onClick={() =>
                                                handleDisplayCurrentSection(5)
                                            }
                                        >
                                            MPA
                                        </Button>
                                    </div>
                                    <div>
                                        <Button
                                            variant="contained"
                                            className={
                                                currentSection === 6
                                                    ? styles.selectedBttn
                                                    : styles.unSelectedBttn
                                            }
                                            onClick={() =>
                                                handleDisplayCurrentSection(6)
                                            }
                                        >
                                            HMP Report
                                        </Button>
                                    </div>
                                    <div>
                                        <Button
                                            variant="contained"
                                            className={
                                                currentSection === 7
                                                    ? styles.selectedBttn
                                                    : styles.unSelectedBttn
                                            }
                                            onClick={() =>
                                                handleDisplayCurrentSection(7)
                                            }
                                        >
                                            Comment & Suggestion
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
            {openPersonalComplaintModal ? (
                <PersonalComplaintModal
                    open={openPersonalComplaintModal}
                    setOpen={setOpenPersonalComplaintModal}
                    matches={matches}
                />
            ) : null}
            {openCallHistoryModal ? (
                <CallHistoryModal
                    open={openCallHistoryModal}
                    setOpen={setOpenCallHistoryModal}
                />
            ) : null}
            {openHMCReportModal ? (
                <HMCRecordModal
                    open={openHMCReportModal}
                    setOpen={setOpenHMCReportModal}
                />
            ) : null}
        </>
    )
}

export default HealthManagementConsultationInfo
