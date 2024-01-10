import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar'
import CompleteTable from './components/complete-table'
import Header from './components/header'
import MemberTable from './components/member-table'

function RadiologyReport() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <>
            <ResponsiveAppBar />
            <Header />
            <MemberTable />
            <CompleteTable />
        </>
    )
}

export default RadiologyReport
