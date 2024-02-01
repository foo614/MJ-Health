import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import BasicInfo from 'pages/Interview-Questionaire/components/basic-info'
import EatingHabit from 'pages/Interview-Questionaire/components/eating-habit'
import ExerciseHabit from 'pages/Interview-Questionaire/components/exercise-habit'
import LifeStyleHabit from 'pages/Interview-Questionaire/components/life-style-habit'
import PersonalFamilyHistory1 from 'pages/Interview-Questionaire/components/personal-family-history-1'
import PersonalFamilyHistory2 from 'pages/Interview-Questionaire/components/personal-family-history-2'
import PersonalFamilyHistory3 from 'pages/Interview-Questionaire/components/personal-family-history-3'
import PhysicalSymptoms1 from 'pages/Interview-Questionaire/components/physical-symptom-1'
import PhysicalSymptoms2 from 'pages/Interview-Questionaire/components/physical-symptom-2'
import SleepQualityStress from 'pages/Interview-Questionaire/components/sleep-quality-stress'
import styles from './_interview-questionnaire.module.scss'
import { useState } from 'react'

type TabPanelProps = {
    children?: React.ReactNode
    index: number
    value: number
}

type Props = {
    readonly: boolean
}

const FinalReportInterviewQuestionnaire = ({ readonly }: Props) => {
    const [value, setValue] = useState<number>(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
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

    return (
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
                <BasicInfo readonly={readonly} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <LifeStyleHabit readonly={readonly} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <EatingHabit readonly={readonly} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <ExerciseHabit readonly={readonly} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <SleepQualityStress readonly={readonly} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                <PhysicalSymptoms1 readonly={readonly} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
                <PhysicalSymptoms2 readonly={readonly} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={7}>
                <PersonalFamilyHistory1 readonly={readonly} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={8}>
                <PersonalFamilyHistory2 readonly={readonly} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={9}>
                <PersonalFamilyHistory3 readonly={readonly} />
            </CustomTabPanel>
        </Card>
    )
}

export default FinalReportInterviewQuestionnaire
