import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import CustomHeaderSearchInput from 'components/CustomHeader/EndAdornment/SearchInput'
import CompleteTable from './components/complete-table'
import MemberTable from './components/member-table'

function RadiologyReport() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader
                title="RADIOLOGY REPORTING"
                endAdornment={
                    <CustomHeaderSearchInput placeholder="Search Member Seq No..." />
                }
            />
            <MemberTable />
            <CompleteTable />
        </>
    )
}

export default RadiologyReport
