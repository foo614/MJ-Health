import Box from '@mui/material/Box'
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
import { useState } from 'react'
import EditIcon from 'images/member-edit.png'
import styles from './_visual-and-ocular-tension-test.module.scss'
import Grid from '@mui/material/Grid'
import VisualAndOcularTensionTestExamReport from 'pages/Screening-Room-System/Visual-And-Ocular-Tension-Test/detail/components/exam-report'

const FinalReportVisualAndOcularTensionTest = () => {
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
                                        Vision & Ocular Tension Test
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
                        <VisualAndOcularTensionTestExamReport
                            readonly={readonly}
                        />
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default FinalReportVisualAndOcularTensionTest
