import LogoutIcon from '@mui/icons-material/Logout'
import { Button, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar'
import CheckOutModal from 'components/CheckOutModal'
import CustomHeader from 'components/CustomHeader'
import CustomHeaderSearchInput from 'components/CustomHeader/EndAdornment/SearchInput'
import { useState } from 'react'
import styles from './_interview.module.scss'
import InterviewCheckOutListTable from './components/interview-checkout-list-table'
import InterviewWaitingListTable from './components/interview-waiting-list-table'
const Interview = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const [openCheckOutModal, setOpenCheckOutModal] = useState<boolean>(false)

    const fakeWaitingListData = [
        {
            id: 1,
            seqNo: '001',
            name: 'Jeffery Mohamad Bin Christofa',
            age: 54,
            gender: 'Male',
            package: 'K1',
            checkInAt: '13:05',
            waitingAt: '12:00',
            hs_report: 'View PDF',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '002',
            name: 'Lok Wing Ching',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: '13:05',
            waitingAt: '12:00',
            hs_report: 'View PDF',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '003',
            name: 'Liu Yan',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: null,
            waitingAt: '12:00',
            hs_report: 'View PDF',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: null,
            waitingAt: '12:00',
            hs_report: 'View PDF',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: null,
            waitingAt: '12:00',
            hs_report: 'View PDF',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: null,
            waitingAt: '12:00',
            hs_report: 'View PDF',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: null,
            waitingAt: '12:00',
            hs_report: 'View PDF',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: null,
            waitingAt: null,
            hs_report: 'View PDF',
            options: 'Check In',
        },
    ]

    const checkoutList = [
        {
            id: 2,
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: '08:00',
            waitingAt: '09:00',
            checkOutAt: '06:00',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '005',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: '08:00',
            waitingAt: '09:00',
            checkOutAt: '06:00',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '005',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: '08:00',
            waitingAt: '09:00',
            checkOutAt: '06:00',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '005',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: '08:00',
            waitingAt: '09:00',
            checkOutAt: '06:00',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '005',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: '08:00',
            waitingAt: '09:00',
            checkOutAt: '06:00',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '005',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: '08:00',
            waitingAt: '09:00',
            checkOutAt: '06:00',
            options: 'Check In',
        },
        {
            id: 2,
            seqNo: '005',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: '08:00',
            waitingAt: '09:00',
            checkOutAt: '06:00',
            options: 'Check In',
        },
    ]

    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader
                title="INTERVIEW"
                startAdornment={
                    <Button
                        variant="contained"
                        className={styles.viewPDFBttn}
                        size={matches ? 'medium' : 'small'}
                        startIcon={<LogoutIcon />}
                        onClick={() => setOpenCheckOutModal(true)}
                    >
                        Check Out
                    </Button>
                }
                endAdornment={
                    <CustomHeaderSearchInput
                        placeholder={'Search Member Seq No...'}
                    />
                }
            />
            <Container maxWidth="xl" style={{ marginTop: '1rem' }}>
                <div>
                    <InterviewWaitingListTable fakeData={fakeWaitingListData} />
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <InterviewCheckOutListTable fakeData={checkoutList} />
                </div>
            </Container>
            {openCheckOutModal ? (
                <CheckOutModal
                    open={openCheckOutModal}
                    setOpen={setOpenCheckOutModal}
                />
            ) : null}
        </>
    )
}

export default Interview
