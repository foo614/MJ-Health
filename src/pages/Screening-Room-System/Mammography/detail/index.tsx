import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import ResponsiveAppBar from 'components/AppBar'
import ScreeningRoomInfoHeader from 'components/ScreeningRoom/InfoHeader'
import UserHeader from 'components/UserHeader'
import { MAMMOGRAPHY_PAGE } from 'constant'
import styles from './_mammography-detail.module.scss'
import AllergyModal from 'pages/Physician-Consultation-Info/components/allergy-modal'
import { useState } from 'react'
import ScreeningRoomPersonalComplaintModal from 'components/PersonalComplaintModal'
import MedicalHistoryModal from 'pages/Physician-Consultation-Info/components/medical-history-modal'
import { Card, Divider, useMediaQuery, useTheme } from '@mui/material'
import MammographyExamReport from './components/exam-report'
import ButtonCard from './components/button-card'
import AddOnService from 'components/ScreeningRoom/AddOnService'
import ViewCommentModal from 'components/ScreeningRoom/ViewCommentModal'
import CommentSuggestionList from 'components/ScreeningRoom/CommentSuggestionList'

const MammographyDetail = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'))

    const [tabPage, setTabPage] = useState<string>('examReport')
    const [openMedicalHistoryModal, setOpenMedicalHistoryModal] =
        useState<boolean>(false)
    const [openAllergyModal, setOpenAllergyModal] = useState<boolean>(false)
    const [openPersonalComplaintModal, setOpenPersonalComplaintModal] =
        useState<boolean>(false)
    const [openViewCommentModal, setOpenViewCommentModal] =
        useState<boolean>(false)

    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />
            <ScreeningRoomInfoHeader
                title="MAMMOGRAPHY"
                to={MAMMOGRAPHY_PAGE}
            />

            <Box
                sx={{
                    marginLeft: matchesMd ? '5rem' : '1.5rem',
                    marginRight: matchesMd ? '5rem' : '1.5rem',
                    marginTop: '2rem',
                }}
            >
                <Grid container spacing={5}>
                    <Grid item md={2} xs={12}>
                        <Stack
                            direction={matchesMd ? 'column' : 'row'}
                            spacing={2}
                        >
                            <ButtonCard
                                onClick={() => setOpenMedicalHistoryModal(true)}
                                label="Medical History"
                            />
                            <ButtonCard
                                onClick={() => setOpenAllergyModal(true)}
                                label="Allergy/ Drug Hx"
                            />
                            <ButtonCard
                                onClick={() =>
                                    setOpenPersonalComplaintModal(true)
                                }
                                label="Personal Complaint"
                            />
                            <ButtonCard
                                onClick={() => setOpenViewCommentModal(true)}
                                label="View Comment"
                            />
                        </Stack>
                    </Grid>
                    <Grid item md={10} xs={12}>
                        <Card sx={{ padding: matches ? '2rem 3rem' : '1rem' }}>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="contained"
                                    onClick={() => setTabPage('examReport')}
                                    className={`${styles.tabButton} ${
                                        tabPage == 'examReport'
                                            ? styles.active
                                            : ''
                                    }`}
                                >
                                    Exam. Report
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => setTabPage('addonService')}
                                    className={`${styles.tabButton} ${
                                        tabPage == 'addonService'
                                            ? styles.active
                                            : ''
                                    }`}
                                >
                                    Add On Service
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        setTabPage('commentAndSuggestion')
                                    }
                                    className={`${styles.tabButton} ${
                                        tabPage == 'commentAndSuggestion'
                                            ? styles.active
                                            : ''
                                    }`}
                                >
                                    Comment & Suggestion
                                </Button>
                            </Stack>

                            <Divider
                                sx={{
                                    height: '1px',
                                    background: 'var(--color-whitesmoke-300',
                                    marginTop: '1.5rem',
                                    marginBottom: '1.5rem',
                                }}
                            />

                            {tabPage == 'examReport' && (
                                <MammographyExamReport />
                            )}

                            {tabPage == 'addonService' && <AddOnService />}

                            {tabPage == 'commentAndSuggestion' && (
                                <CommentSuggestionList />
                            )}
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* This is shared component, should move to component folder. */}
            <MedicalHistoryModal
                matches={undefined}
                setOpen={setOpenMedicalHistoryModal}
                open={openMedicalHistoryModal}
            />
            {/* This is shared component, should move to component folder. */}
            <AllergyModal
                matches={undefined}
                setOpen={setOpenAllergyModal}
                open={openAllergyModal}
            />

            <ScreeningRoomPersonalComplaintModal
                setOpen={setOpenPersonalComplaintModal}
                open={openPersonalComplaintModal}
            />

            <ViewCommentModal
                open={openViewCommentModal}
                handleClose={() => setOpenViewCommentModal(false)}
            />
        </>
    )
}

export default MammographyDetail
