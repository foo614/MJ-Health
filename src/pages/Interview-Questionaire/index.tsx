import { Box, Card, Container, Button } from '@mui/material'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import { DASHBOARD_PAGE } from 'constant'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import BasicInfo from './components/basic-info'
import LifeStyleHabit from './components/life-style-habit'
import EatingHabit from './components/eating-habit'
import ExerciseHabit from './components/exercise-habit'
import SleepQualityStress from './components/sleep-quality-stress'
import PhysicalSymptoms1 from './components/physical-symptom-1'
import PhysicalSymptoms2 from './components/physical-symptom-2'
import PersonalFamilyHistory1 from './components/personal-family-history-1'
import PersonalFamilyHistory2 from './components/personal-family-history-2'
import PersonalFamilyHistory3 from './components/personal-family-history-3'
import * as React from 'react'
import { useState } from 'react'
import styles from './_interview-questionaire.module.scss'

type TabPanelProps = {
    children?: React.ReactNode
    index: number
    value: number
}

const InterviewQuestionaire = () => {
    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    function CustomTabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <div style={{ marginTop: '15px' }}>
                        <>{children}</>
                    </div>
                )}
            </div>
        )
    }

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
    }

    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader to={DASHBOARD_PAGE} title="INTERVIEW" />
            <Container maxWidth="xl" sx={{ marginTop: '25px' }}>
                <Card sx={{ padding: '25px' }}>
                    <Box>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            TabIndicatorProps={{
                                sx: { display: 'none' },
                            }}
                            sx={{
                                '& .MuiTabs-flexContainer': {
                                    flexWrap: 'wrap',
                                    columnGap: '40px',
                                },
                                '& .Mui-selected': {
                                    borderBottom: '4px solid #3adebb',
                                },
                            }}
                        >
                            <Tab
                                label="Basic Information"
                                {...a11yProps(0)}
                                classes={{ root: styles.tabButton }}
                            />
                            <Tab
                                label="Lifestyle Habits"
                                {...a11yProps(1)}
                                classes={{ root: styles.tabButton }}
                            />
                            <Tab
                                label="Eating Habits"
                                {...a11yProps(2)}
                                classes={{ root: styles.tabButton }}
                            />
                            <Tab
                                label="Exercise Habits"
                                {...a11yProps(3)}
                                classes={{ root: styles.tabButton }}
                            />
                            <Tab
                                label="Sleep Quality & Stress"
                                {...a11yProps(4)}
                                classes={{ root: styles.tabButton }}
                            />
                            <Tab
                                label="Physical Symptoms 1"
                                {...a11yProps(5)}
                                classes={{ root: styles.tabButton }}
                            />
                            <Tab
                                label="Physical Symptoms 2"
                                {...a11yProps(6)}
                                classes={{ root: styles.tabButton }}
                            />
                            <Tab
                                label="Personal and Family History 1"
                                {...a11yProps(7)}
                                classes={{ root: styles.tabButton }}
                            />
                            <Tab
                                label="Personal and Family History 2"
                                {...a11yProps(8)}
                                classes={{ root: styles.tabButton }}
                            />
                            <Tab
                                label="Personal and Family History 3"
                                {...a11yProps(9)}
                                classes={{ root: styles.tabButton }}
                            />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <BasicInfo />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <LifeStyleHabit />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <EatingHabit />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        <ExerciseHabit />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={4}>
                        <SleepQualityStress />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={5}>
                        <PhysicalSymptoms1 />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={6}>
                        <PhysicalSymptoms2 />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={7}>
                        <PersonalFamilyHistory1 />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={8}>
                        <PersonalFamilyHistory2 />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={9}>
                        <PersonalFamilyHistory3 />
                    </CustomTabPanel>
                    <div style={{ marginTop: '2rem', textAlign: 'end' }}>
                        <Button
                            variant="contained"
                            className={styles.questionaire_save_bttn}
                            sx={{ width: '220px', height: '64px' }}
                        >
                            Save
                        </Button>
                    </div>
                </Card>
            </Container>
        </>
    )
}

export default InterviewQuestionaire
