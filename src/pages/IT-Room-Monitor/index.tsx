import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar'
import Header from './components/header'
import CustomTable from './components/table'

function ITRoomMonitor() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <>
            <ResponsiveAppBar />
            <Header />
            <CustomTable />
        </>
    )
}

export default ITRoomMonitor
