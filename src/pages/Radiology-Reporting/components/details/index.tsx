import { Button, Divider, InputBase, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles'
import ResponsiveAppBar from 'components/AppBar'
import { useState } from 'react'
import UserHeader from '../user-header'
import ButtonCard from './buttonCard'
import Header from './header'

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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function RadiologyReportDetail() {
    //for tab
    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    //for row button
    const [isSelected, setIsSelected] = useState(0)

    const handleButtonChange = (value: number) => {
        setIsSelected(value)
    }

    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />
            <Header />
            <Grid container sx={{ background: '#EDEDED' }}>
                <Grid md={3} textAlign={'center'}>
                    <Stack
                        direction="column"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <>
                            <ButtonCard
                                label="Medical History"
                                onClick={() => console.log(1)}
                            />
                            <ButtonCard
                                label="Allergy/ Drug Hx"
                                onClick={() => console.log(1)}
                            />
                        </>

                        <ButtonCard
                            label="View Comment"
                            onClick={() => console.log(1)}
                        />
                    </Stack>
                </Grid>
                <Grid md={9}>
                    <Box sx={{ width: '80%' }}>
                        <Box sx={{ bgcolor: 'transparent', mt: 5 }}>
                            <AntTabs
                                value={value}
                                onChange={handleChange}
                                aria-label="ant example"
                            >
                                <AntTab label="CT Scan" />
                                <AntTab label="Mammography" />
                                <AntTab label="X-Ray" />
                                <AntTab label="Sonography" />
                            </AntTabs>
                            <Box sx={{ p: 3, bgcolor: '#fff' }}>
                                <TabPanel value={value} index={0}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    background:
                                                        isSelected === 1
                                                            ? '#fff'
                                                            : '#EDEDED',
                                                    boxShadow:
                                                        '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                                                    borderRadius: '5px',
                                                    color:
                                                        isSelected === 1
                                                            ? '#211D4E'
                                                            : '#5A567B',
                                                    fontWeight: 600,
                                                    marginRight: '1em',
                                                }}
                                                onClick={() =>
                                                    handleButtonChange(1)
                                                }
                                            >
                                                Exam. Report
                                            </Button>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    background:
                                                        isSelected === 0
                                                            ? '#fff'
                                                            : '#EDEDED',
                                                    boxShadow:
                                                        '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                                                    borderRadius: '5px',
                                                    color:
                                                        isSelected === 0
                                                            ? '#211D4E'
                                                            : '#5A567B',
                                                    fontWeight: 600,
                                                }}
                                                onClick={() =>
                                                    handleButtonChange(0)
                                                }
                                            >
                                                Comment & Suggestion
                                            </Button>

                                            <Divider light sx={{ my: 3 }} />
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
                                                    boxShadow:
                                                        '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset',
                                                    borderRadius: '5px',
                                                    minWidth: '100%',
                                                    padding: '10px 15px',
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Item Three
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    Item Four
                                </TabPanel>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default RadiologyReportDetail
