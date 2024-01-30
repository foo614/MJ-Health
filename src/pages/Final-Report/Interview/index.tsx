import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import ResponsiveAppBar from 'components/AppBar'
import FinalReportHeader from 'components/FinalReport/Header'
import UserHeader from 'components/UserHeader'
import { FINAL_REPORT } from 'constant'
import styles from './_final-report-interview.module.scss'
import { useState } from 'react'
import ConditionHistory from 'pages/Interview-Info/components/condition-history'
import FinalReportInterviewQuestionnaire from './components/questionnaire'

const FinalReportInterview = () => {
    const [tabPage, setTabPage] = useState<string>('conditionHistory')

    return (
        <>
            <ResponsiveAppBar />

            <UserHeader />

            <FinalReportHeader
                title="HEALTH SCREENING REPORT - FINAL REPORT"
                to={FINAL_REPORT}
            />

            <Container maxWidth="xl" sx={{ marginTop: '30px' }}>
                <Card>
                    <CardHeader
                        title="Interview"
                        titleTypographyProps={{ className: styles.cardTitle }}
                        sx={{ padding: '1rem 1.5rem' }}
                    />

                    <Divider
                        sx={{
                            margin: '1rem 0',
                        }}
                    />

                    <CardContent sx={{ padding: '0 1.5rem' }}>
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                onClick={() => setTabPage('conditionHistory')}
                                className={`${styles.tabButton} ${
                                    tabPage == 'conditionHistory'
                                        ? styles.active
                                        : ''
                                }`}
                            >
                                Condition & History
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => setTabPage('questionnaire')}
                                className={`${styles.tabButton} ${
                                    tabPage == 'questionnaire'
                                        ? styles.active
                                        : ''
                                }`}
                            >
                                Questionnaire
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => setTabPage('personalComplaint')}
                                className={`${styles.tabButton} ${
                                    tabPage == 'personalComplaint'
                                        ? styles.active
                                        : ''
                                }`}
                            >
                                Personal Complaint
                            </Button>
                        </Stack>
                    </CardContent>

                    <Divider
                        sx={{
                            margin: '1rem 0',
                        }}
                    />

                    <CardContent sx={{ padding: '0 1.5rem' }}>
                        {tabPage == 'conditionHistory' && (
                            <ConditionHistory
                                readonly
                                questionnaireAction={() => {
                                    setTabPage('questionnaire')
                                }}
                            />
                        )}

                        {tabPage == 'questionnaire' && (
                            <FinalReportInterviewQuestionnaire />
                        )}
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default FinalReportInterview
