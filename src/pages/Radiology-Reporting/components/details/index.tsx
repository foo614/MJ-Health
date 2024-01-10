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

type StyledTabsProps = {
    children?: React.ReactNode
    value: number
    onChange: (event: React.SyntheticEvent, newValue: number) => void
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
})

type StyledTabProps = {
    label: string
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}))

function RadiologyReportDetail() {
    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }
    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />
            <Header />
            <Grid container>
                <Grid md={3}>
                    <ButtonCard />
                </Grid>
                <Grid md={9}>
                    <Box sx={{ bgcolor: '#2e1534' }}>
                        <StyledTabs
                            value={value}
                            onChange={handleChange}
                            aria-label="styled tabs example"
                        >
                            <StyledTab label="Workflows" />
                            <StyledTab label="Datasets" />
                            <StyledTab label="Connections" />
                        </StyledTabs>
                        <Box sx={{ p: 3 }} />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default RadiologyReportDetail
