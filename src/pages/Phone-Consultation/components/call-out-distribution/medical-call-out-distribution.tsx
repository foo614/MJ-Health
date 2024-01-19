import CallOutDistributionHeader from './call-out-distribution-header'
import CallOutDistributionTable from './call-out-distribution-table'

const MedicalCallOutDistribution = () => {
    return (
        <>
            <CallOutDistributionHeader allowCreate={false} />
            <CallOutDistributionTable />
        </>
    )
}

export default MedicalCallOutDistribution
