import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import CustomHeaderSearchInput from 'components/CustomHeader/EndAdornment/SearchInput'
import CompleteTable from 'pages/Radiology-Reporting/components/complete-table'
import MemberTable from 'pages/Radiology-Reporting/components/member-table'

function CTScan() {
    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader
                title="CT Scan"
                endAdornment={
                    <CustomHeaderSearchInput placeholder="Search Member Seq No..." />
                }
            />
            <MemberTable />
            <CompleteTable />
        </>
    )
}

export default CTScan
