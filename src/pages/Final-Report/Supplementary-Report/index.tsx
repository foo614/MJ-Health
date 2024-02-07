import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar'
import FinalReportHeader from 'components/FinalReport/Header'
import UserHeader from 'components/UserHeader'
import { FINAL_REPORT } from 'constant'
import ButtonCard from './components/button-card'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import styles from './_supplementary-report.module.scss'
import { useState } from 'react'
import PapsSmearExamReport from 'pages/Screening-Room-System/Paps-Smear/detail/components/exam-report'
import CommentSuggestionList from 'components/ScreeningRoom/CommentSuggestionList'
import EditIcon from 'images/member-edit.png'
import XRayExamReport from 'pages/Screening-Room-System/X-Ray/detail/components/exam-report'

const SupplementaryReport = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))

    const [readonly, setReadonly] = useState<boolean>(true)
    const [tabPage, setTabPage] = useState<string>('papsSmear')
    const [innerTabPage, setInnerTabPage] = useState<string>('examReport')

    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />

            <FinalReportHeader
                title="Supplementary Report  03-03-2023"
                to={FINAL_REPORT}
            />

            <Box
                sx={{
                    marginLeft: mdUp ? '5rem' : '1.5rem',
                    marginRight: mdUp ? '5rem' : '1.5rem',
                    marginTop: '2rem',
                }}
            >
                <Grid container spacing={5}>
                    <Grid item md={2} xs={12}>
                        <Stack direction={mdUp ? 'column' : 'row'} spacing={2}>
                            <ButtonCard
                                onClick={() => true}
                                label="Final Comment & Suggestion"
                            />
                        </Stack>
                    </Grid>
                    <Grid item md={10} xs={12}>
                        <Stack direction="row">
                            <Button
                                variant="contained"
                                onClick={() => setTabPage('papsSmear')}
                                className={`${styles.tabButton} ${
                                    tabPage == 'papsSmear' ? styles.active : ''
                                }`}
                            >
                                Pap&apos;s Smear
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => setTabPage('xRay')}
                                className={`${styles.tabButton} ${
                                    tabPage == 'xRay' ? styles.active : ''
                                }`}
                            >
                                X-Ray
                            </Button>
                        </Stack>
                        <Card sx={{ padding: matches ? '2rem 3rem' : '1rem' }}>
                            <Grid
                                container
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid>
                                    <Stack direction="row" spacing={2}>
                                        <Button
                                            variant="contained"
                                            onClick={() =>
                                                setInnerTabPage('examReport')
                                            }
                                            className={`${
                                                styles.innerTabButton
                                            } ${
                                                innerTabPage == 'examReport'
                                                    ? styles.active
                                                    : ''
                                            }`}
                                        >
                                            Exam. Report
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={() =>
                                                setInnerTabPage(
                                                    'commentAndSuggestion'
                                                )
                                            }
                                            className={`${
                                                styles.innerTabButton
                                            } ${
                                                innerTabPage ==
                                                'commentAndSuggestion'
                                                    ? styles.active
                                                    : ''
                                            }`}
                                        >
                                            Comment & Suggestion
                                        </Button>
                                    </Stack>
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

                            <Divider
                                sx={{
                                    height: '1px',
                                    background: 'var(--color-whitesmoke-300)',
                                    marginTop: '1.5rem',
                                    marginBottom: '1.5rem',
                                }}
                            />

                            {tabPage == 'papsSmear' &&
                                innerTabPage == 'examReport' && (
                                    <PapsSmearExamReport readonly={readonly} />
                                )}

                            {tabPage == 'papsSmear' &&
                                innerTabPage == 'commentAndSuggestion' && (
                                    <CommentSuggestionList
                                        readonly={readonly}
                                    />
                                )}

                            {tabPage == 'xRay' &&
                                innerTabPage == 'examReport' && (
                                    <XRayExamReport readonly={readonly} />
                                )}

                            {tabPage == 'xRay' &&
                                innerTabPage == 'commentAndSuggestion' && (
                                    <CommentSuggestionList
                                        readonly={readonly}
                                    />
                                )}
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default SupplementaryReport
