import { useState } from 'react'
import CallOutDistributionHeader from './call-out-distribution-header'
import CreatePhoneConsultationModal from './create-phone-consultation-modal'
import HmcCallOutDistributionTable from './hmc-call-out-distribution-table'

const HmcCallOutDistribution = () => {
    const [openCreateModal, setOpenCreateModal] = useState<boolean>(false)
    const [openConfirmationModal, setOpenConfirmationModal] =
        useState<boolean>(false)
    const [consultationDate, setConsultationDate] = useState<Date>(new Date())

    return (
        <>
            <CallOutDistributionHeader
                allowCreate={true}
                setOpenCreateModal={setOpenCreateModal}
            />
            <HmcCallOutDistributionTable />

            <CreatePhoneConsultationModal
                openCreateModal={openCreateModal}
                setOpenCreateModal={setOpenCreateModal}
            />
        </>
    )
}

export default HmcCallOutDistribution
