import { Container } from '@mui/material'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import TopSectionPanel from './components/top-section-panel'
import FinalReportTable from './components/final-report-table'

const FinalReport = () => {
    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader title="FINAL REPORT" />
            <Container maxWidth="xl" sx={{ paddingBottom: '5rem' }}>
                <TopSectionPanel />
                <FinalReportTable />
            </Container>
        </>
    )
}
export default FinalReport
