import CallOutDistributionHeader from './call-out-distribution-header'
import MedicalCallOutDistributionTable from './medical-call-out-distribution-table'

const MedicalCallOutDistribution = () => {
    return (
        <>
            <CallOutDistributionHeader allowCreate={false} />
            <MedicalCallOutDistributionTable />
        </>
    )
}

export default MedicalCallOutDistribution
