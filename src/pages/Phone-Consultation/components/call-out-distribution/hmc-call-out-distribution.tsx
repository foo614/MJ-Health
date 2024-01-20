import CallOutDistributionHeader from './call-out-distribution-header'
import CallOutDistributionTable from './call-out-distribution-table'
import { useState } from 'react'
import CreatePhoneConsultationModal from './create-phone-consultation-modal'

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
            <CallOutDistributionTable />

            <CreatePhoneConsultationModal
                openCreateModal={openCreateModal}
                setOpenCreateModal={setOpenCreateModal}
            />
        </>
    )
}

export default HmcCallOutDistribution
