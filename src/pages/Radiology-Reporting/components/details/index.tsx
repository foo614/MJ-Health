import {
    Button,
    Divider,
    FormControl,
    InputBase,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles'
import ResponsiveAppBar from 'components/AppBar'
import CustomModal from 'components/Modal'
import UserHeader from 'components/UserHeader'
import XRayExamReport from 'pages/Screening-Room-System/X-Ray/detail/components/exam-report'
import { useState } from 'react'
import ButtonCard from './buttonCard'
import Header from './header'
import ViewCommentModal from './modal'
// import SonographyExamReport from './sonography-exam-report'
import CustomizedTables from './table'
import SonographyExamReport from 'pages/Screening-Room-System/Sonography/detail/components/exam-report'

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: 'transparent',
    },
})
type StyledTabProps = {
    label: string
}
const AntTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    fontWeight: 500,
    // marginRight: theme.spacing(1),
    color: '#5A567B',
    backgroundColor: '#DDDDDD',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.08)',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    '&:hover': {
        color: '#40a9ff',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: '#211D4E',
        fontWeight: 600,
        background: '#FFF',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'red',
    },
}))

type TabPanelProps = {
    children?: React.ReactNode
    dir?: string
    index: number
    value: number
}

type ModalState = {
    medicalHistory: boolean
    allergyDrugHx: boolean
    viewComment: boolean
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                //     <Box sx={{ p: 0 }}>
                //     <Typography>{children}</Typography>
                // </Box>
                <Typography>{children}</Typography>
            )}
        </div>
    )
}

const CommentSuggestionList = () => {
    return (
        <>
            <Grid xs={12}>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#219B8E',
                        fontSize: '20px',
                        fontWeight: 600,
                    }}
                >
                    Overview
                </Typography>
            </Grid>
            <Grid xs={12}>
                <InputBase
                    id="outlined-search"
                    placeholder="Search..."
                    type="search"
                    sx={{
                        background: '#F9F9F9',
                        boxShadow: '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset',
                        borderRadius: '5px',
                        minWidth: '100%',
                        padding: '10px 15px',
                    }}
                />
                <CustomizedTables />
            </Grid>
            <Grid xs={12} md={2} mdOffset={10}>
                <Button
                    size="small"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3 }}
                >
                    Confirm
                </Button>
            </Grid>
        </>
    )
}
function RadiologyReportDetail() {
    //for tab
    const [currentIndex, setCurrentIndex] = useState(0)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentIndex(newValue)
        setSelectedType('report')
    }

    const [selectedType, setSelectedType] = useState('report')

    const handleButtonChange = (type: string) => {
        setSelectedType(type)
    }

    //sidemenu
    const [openMedicalHistory, setOpenMedicalHistory] = useState<boolean>(false)
    const [openAllergyDrugHx, setOpenAllergyDrugHx] = useState<boolean>(false)
    const [openViewComment, setOpenViewComment] = useState<boolean>(false)

    //for mammography
    const [mammography, setMammography] = useState('')

    const handleMammography = (event: SelectChangeEvent) => {
        setMammography(event.target.value)
    }

    const RowButtonOptions = (currentIndex: any) => {
        return (
            <Grid xs={12}>
                <Button
                    variant="contained"
                    size={matches ? 'medium' : 'small'}
                    sx={{
                        background:
                            selectedType === 'report' ? '#fff' : '#EDEDED',
                        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                        borderRadius: '5px',
                        color:
                            selectedType === 'report' ? '#211D4E' : '#5A567B',
                        fontWeight: 600,
                        marginRight: '1em',
                        '&:hover': {
                            color: '#fff', // Change font color to white on hover
                        },
                    }}
                    onClick={() => handleButtonChange('report')}
                >
                    Exam. Report
                </Button>
                <Button
                    variant="contained"
                    size={matches ? 'medium' : 'small'}
                    sx={{
                        background:
                            selectedType === 'comment' ? '#fff' : '#EDEDED',
                        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                        borderRadius: '5px',
                        color:
                            selectedType === 'comment' ? '#211D4E' : '#5A567B',
                        fontWeight: 600,
                        '&:hover': {
                            color: '#fff', // Change font color to white on hover
                        },
                    }}
                    onClick={() => handleButtonChange('comment')}
                >
                    Comment & Suggestion
                </Button>
                {/* <Divider light sx={{ my: 3 }} /> */}
                {currentIndex.currentIndex === 3 ? null : (
                    <Divider light sx={{ my: 3 }} />
                )}
                {/* {!isExamReport ? <Divider light sx={{ my: 3 }} /> : null} */}
            </Grid>
        )
    }

    const ItemCard = ({
        label,
        isCurrent,
    }: {
        label: string
        isCurrent: boolean
    }) => {
        return (
            <Box
                sx={{
                    background: isCurrent ? '#DDDDDD' : '#F9F9F9',
                    borderRadius: '8px',
                }}
            >
                <Grid container>
                    <Grid xs={12}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#211D4E',
                                fontSize: '16px',
                                fontWeight: 500,
                                textAlign: 'center',
                                mt: 2,
                            }}
                        >
                            {label}
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <FormControl
                            sx={{
                                p: 3,
                            }}
                            size="small"
                            fullWidth
                        >
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={mammography}
                                onChange={handleMammography}
                                sx={{
                                    background: '#fff',
                                }}
                                placeholder="Normal"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Normal'}>Normal</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        )
    }

    const RowItemCard = ({ name }: { name: string }) => {
        return (
            <Grid xs={12}>
                <div>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={3}>
                            <>
                                <Grid container>
                                    <Grid xs={12}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: '#219B8E',
                                                fontSize: '20px',
                                                fontWeight: 600,
                                            }}
                                        >
                                            Items
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Box
                                            sx={{
                                                my: 3,
                                            }}
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: '#211D4E',
                                                fontSize: '16px',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {name}
                                        </Typography>
                                        <Divider
                                            sx={{
                                                mt: 1,
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <ItemCard label="Current" isCurrent={true} />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <ItemCard label="22-09-2020" isCurrent={false} />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <ItemCard label="22-09-2018" isCurrent={false} />
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        )
    }
    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />
            <Header />
            <Grid container sx={{ background: '#EDEDED' }}>
                <Grid xs={12} md={2} sx={{ mt: matches ? 4 : 2 }}>
                    <Stack
                        direction={{ xs: 'row', sm: 'column' }}
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        p={{
                            xs: 1,
                        }}
                    >
                        <>
                            <ButtonCard
                                label="Medical History"
                                onClick={() => setOpenMedicalHistory(true)}
                            />
                            <ButtonCard
                                label="Allergy/ Drug Hx"
                                onClick={() => setOpenAllergyDrugHx(true)}
                            />
                        </>
                        <Box sx={{ py: matches ? 8 : 0 }}>
                            <ButtonCard
                                label="View Comment"
                                onClick={() => setOpenViewComment(true)}
                            />
                        </Box>
                    </Stack>
                </Grid>
                <Grid md={10}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ bgcolor: 'transparent', mt: 5 }}>
                            <AntTabs
                                value={currentIndex}
                                onChange={handleChange}
                                aria-label="ant example"
                                variant="scrollable"
                            >
                                <AntTab label="CT Scan" />
                                <AntTab label="Mammography" />
                                <AntTab label="X-Ray" />
                                <AntTab label="Sonography" />
                            </AntTabs>
                            <Box
                                sx={{
                                    p: currentIndex === 3 ? 0 : 3,
                                    bgcolor: '#fff',
                                }}
                            >
                                <TabPanel value={currentIndex} index={0}>
                                    <Grid container>
                                        <RowButtonOptions
                                            currentIndex={currentIndex}
                                        />
                                        {selectedType === 'report' && (
                                            <RowItemCard name="CT Scan" />
                                        )}
                                        {selectedType === 'report' && (
                                            <Grid xs={12} md={2} mdOffset={10}>
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    fullWidth
                                                    sx={{ mt: 3 }}
                                                >
                                                    Save
                                                </Button>
                                            </Grid>
                                        )}
                                        {selectedType === 'comment' && (
                                            <CommentSuggestionList />
                                        )}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value={currentIndex} index={1}>
                                    <Grid container>
                                        <RowButtonOptions
                                            currentIndex={currentIndex}
                                        />
                                        {selectedType === 'report' && (
                                            <RowItemCard name="Mammography" />
                                        )}

                                        {selectedType === 'report' && (
                                            <Grid xs={12} md={2} mdOffset={10}>
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    fullWidth
                                                    sx={{ mt: 3 }}
                                                >
                                                    Save
                                                </Button>
                                            </Grid>
                                        )}
                                        {selectedType === 'comment' && (
                                            <CommentSuggestionList />
                                        )}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value={currentIndex} index={2}>
                                    <RowButtonOptions
                                        currentIndex={currentIndex}
                                    />
                                    {selectedType === 'report' && (
                                        <XRayExamReport />
                                    )}

                                    {selectedType === 'report' && (
                                        <Grid xs={12} md={2} mdOffset={10}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                fullWidth
                                                sx={{ mt: 3 }}
                                            >
                                                Save
                                            </Button>
                                        </Grid>
                                    )}
                                    {selectedType === 'comment' && (
                                        <CommentSuggestionList />
                                    )}
                                </TabPanel>
                                <TabPanel value={currentIndex} index={3}>
                                    <Box sx={{ p: 3 }}>
                                        <RowButtonOptions
                                            currentIndex={currentIndex}
                                        />
                                    </Box>
                                    {selectedType === 'report' && (
                                        <>
                                            <SonographyExamReport />
                                        </>
                                    )}
                                    <Box sx={{ p: 3 }}>
                                        {selectedType === 'comment' && (
                                            <CommentSuggestionList />
                                        )}
                                    </Box>
                                </TabPanel>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            {openMedicalHistory && (
                <CustomModal
                    open={openMedicalHistory}
                    setOpen={setOpenMedicalHistory}
                    title="Medical History"
                    width="md"
                >
                    <Grid container>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Medical History
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>Diabetes</li>
                                <li>Uraemia</li>
                            </ul>
                        </Grid>
                        <Grid xs={12}>
                            <Divider sx={{ my: 2 }} />
                        </Grid>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Previous Surgery
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>Kidney Surgery</li>
                            </ul>
                        </Grid>
                        <Grid xs={12}>
                            <Divider sx={{ my: 2 }} />
                        </Grid>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Family Medical History
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>High Blood Pressure</li>
                                <li>Type 2 Diabetes</li>
                                <li>Cardiovascular Disease</li>
                                <li>Obesity</li>
                                <li>Myocarditis</li>
                                <li>High Blood Pressure</li>
                                <li>Type 2 Diabetes</li>
                                <li>Cardiovascular Disease</li>
                                <li>Obesity</li>
                                <li>Myocarditis</li>
                                <li>High Blood Pressure</li>
                                <li>Type 2 Diabetes</li>
                                <li>Cardiovascular Disease</li>
                                <li>Obesity</li>
                                <li>Myocarditis</li>
                            </ul>
                        </Grid>
                    </Grid>
                </CustomModal>
            )}

            {openAllergyDrugHx && (
                <CustomModal
                    open={openAllergyDrugHx}
                    setOpen={setOpenAllergyDrugHx}
                    title="Allergy/Drug Hx"
                    width="md"
                >
                    <Grid container>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Medication
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>Calories Control</li>
                                <li>Blood Pressure Control</li>
                                <li>Glycemia Manager</li>
                            </ul>
                        </Grid>
                        <Grid xs={12}>
                            <Divider sx={{ my: 2 }} />
                        </Grid>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Allergy History
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>Milk sensitization reaction</li>
                                <li>Logan pulp sensitization reaction</li>
                                <li>
                                    Severe snow fungus sensitization reaction
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </CustomModal>
            )}

            {openViewComment && (
                <ViewCommentModal
                    open={openViewComment}
                    handleClose={() => setOpenViewComment(false)}
                />
            )}
        </>
    )
}

export default RadiologyReportDetail
