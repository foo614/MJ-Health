import CloseIcon from '@mui/icons-material/Close'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { styled } from '@mui/material/styles'
import React, { useState } from 'react'
import ReadTable from './readTable'

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
    color: '#fff',
    // backgroundColor: '#DDDDDD',
    boxShadow: 'none',
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
    value: number
    index: number
}

const TabPanel: React.FC<TabPanelProps> = ({
    children,
    value,
    index,
    ...other
}) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    )
}

type CustomModalWithTabsProps = {
    open: boolean
    handleClose: () => void
}

const ViewCommentModal: React.FC<CustomModalWithTabsProps> = ({
    open,
    handleClose,
}) => {
    const [tabValue, setTabValue] = useState(0)

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={'md'}
            PaperProps={{
                sx: { borderRadius: '10px' },
            }}
        >
            <AppBar position="static" elevation={0}>
                <AntTabs value={tabValue} onChange={handleTabChange}>
                    <AntTab label="22-09-2020" />
                    <AntTab label="22-09-2018" />
                    {/* Add more tabs as needed */}
                </AntTabs>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    sx={{ position: 'absolute', top: 8, right: 15 }}
                >
                    <CloseIcon />
                </IconButton>
            </AppBar>

            <TabPanel value={tabValue} index={0}>
                {/* Content for Tab 1 */}
                <ReadTable />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                {/* Content for Tab 2 */}
                <ReadTable />
            </TabPanel>
            {/* Add more TabPanels as needed */}
        </Dialog>
    )
}

export default ViewCommentModal
