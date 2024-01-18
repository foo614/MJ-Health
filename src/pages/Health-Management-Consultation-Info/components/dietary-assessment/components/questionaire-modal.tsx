import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import IconButton from '@mui/material/IconButton'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import * as React from 'react'
import styles from '../../../_health-management-consultation-info.module.scss'
import CloseIcon from '@mui/icons-material/Close'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import BasicInfo from './basic-info'
import LifeStyleHabit from './life-style-habit'
import EatingHabit from './eating-habit'
import ExerciseHabit from './exercise-habit'
import SleepQuality from './sleep-quality'
import PhysicalSymptoms1 from './physical-symptoms-1'
import PhysicalSymptoms2 from './physical-symptoms-2'
import PersonalFamilyHistory1 from './personal-family-history-1'
import PersonalFamilyHistory2 from './personal-family-history-2'
import PersonalFamilyHistory3 from './personal-family-history-3'

type Props = {
    open: boolean
    setOpen: any
}
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type TabPanelProps = {
    children?: React.ReactNode
    index: number
    value: number
}

const QuestionaireModal: React.FC<Props> = ({ open, setOpen }: Props) => {
    const [value, setValue] = React.useState(0)

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
                    <div className={styles.questionaire_modal_child_div}>
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
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpen(false)}
                classes={{ paper: styles.questionaire_modal }}
            >
                <DialogTitle className={styles.infoModalColor}>
                    <p className={styles.infoModalTitle}>
                        Health Management Consultation Record
                    </p>
                </DialogTitle>
                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 15,
                        color: (theme) => theme?.palette?.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent sx={{ padding: '0' }}>
                    <Box
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                background: '#FDFDFD',
                                borderBottom: '2px solid #EDEDED',
                            }}
                        >
                            <Box sx={{ padding: '20px' }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    TabIndicatorProps={{
                                        sx: { display: 'none' },
                                    }}
                                    sx={{
                                        '& .MuiTabs-flexContainer': {
                                            flexWrap: 'wrap',
                                            columnGap: '20px',
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
                            <SleepQuality />
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
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default QuestionaireModal
