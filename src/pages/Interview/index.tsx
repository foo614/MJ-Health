import ResponsiveAppBar from 'components/AppBar'
import {
    Grid,
    Button,
    TextField,
    InputAdornment,
    Container,
} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from './_interview.module.scss'
import CheckOutModal from 'components/CheckOutModal'
import { useState } from 'react'
import InterviewWaitingListTable from './components/interview-waiting-list-table'
import InterviewCheckOutListTable from './components/interview-checkout-list-table'
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
            <Grid container className={styles.header}>
                <Grid xs={12} md={3} textAlign={matches ? 'center' : 'start'}>
                    <Button
                        variant="contained"
                        className={styles.viewPDFBttn}
                        startIcon={<LogoutIcon />}
                        onClick={() => setOpenCheckOutModal(true)}
                    >
                        Check Out
                    </Button>
                </Grid>
                <Grid xs={3} md={6} className={styles.headerTitle}>
                    INTERVIEW
                </Grid>
                <Grid xs={12} md={3}>
                    <div style={{ paddingRight: '30px', paddingLeft: '30px' }}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon
                                            className={styles.searchIcon}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                            size="small"
                            margin="dense"
                            fullWidth
                            placeholder="Search..."
                            className={styles.headerSearchInput}
                        />
                    </div>
                </Grid>
            </Grid>
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