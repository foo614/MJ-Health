import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import ResponsiveAppBar from 'components/AppBar'
import FinalReportHeader from 'components/FinalReport/Header'
import UserHeader from 'components/UserHeader'
import { FINAL_REPORT } from 'constant'
import { useState } from 'react'
import EditIcon from 'images/member-edit.png'
import CommentSuggestionList from 'components/ScreeningRoom/CommentSuggestionList'
import PapsSmearExamReport from 'pages/Screening-Room-System/Paps-Smear/detail/components/exam-report'
import styles from './_paps-smear.module.scss'

const FinalReportPapsSmear = () => {
    const [readonly, setReadonly] = useState<boolean>(true)

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
                        title={
                            <Grid
                                container
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid>
                                    <p className={styles.cardTitle}>
                                        Pap&apos;s Smear
                                    </p>
                                </Grid>
                                <Grid>
                                    <Box>
                                        {readonly ? (
                                            <Button
                                                variant="text"
                                                onClick={() =>
                                                    setReadonly(false)
                                                }
                                            >
                                                <Stack
                                                    direction="row"
                                                    spacing={1}
                                                    alignItems="center"
                                                >
                                                    <span>Edit</span>
                                                    <img
                                                        src={EditIcon}
                                                        alt=""
                                                    />
                                                </Stack>
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                onClick={() =>
                                                    setReadonly(true)
                                                }
                                            >
                                                Confirm Changes
                                            </Button>
                                        )}
                                    </Box>
                                </Grid>
                            </Grid>
                        }
                        titleTypographyProps={{ className: styles.cardTitle }}
                        sx={{ padding: '1rem 1.5rem' }}
                    />

                    <Divider
                        sx={{
                            margin: '1rem 0',
                        }}
                    />

                    <CardContent sx={{ padding: '0 1.5rem' }}>
                        <PapsSmearExamReport readonly={readonly} />
                    </CardContent>

                    <CardContent
                        sx={{ padding: '0 1.5rem', marginTop: '2rem' }}
                    >
                        <CommentSuggestionList readonly={readonly} />
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default FinalReportPapsSmear
