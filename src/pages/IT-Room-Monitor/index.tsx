import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import CustomHeaderSearchInput from 'components/CustomHeader/EndAdornment/SearchInput'
import CustomTable from './components/table'

function ITRoomMonitor() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader
                title="IT ROOM MONITOR"
                endAdornment={
                    <CustomHeaderSearchInput placeholder="Search..." />
                }
            />
            <CustomTable />
        </>
    )
}

export default ITRoomMonitor
