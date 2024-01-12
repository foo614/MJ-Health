import ResponsiveAppBar from 'components/AppBar'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import styles from './_physician-consultation.module.scss'
import PhysicianConsultationWaitingListTable from './components/waiting-list-table'
import { Container, Stack } from '@mui/material'
import PhysicianConsultationCheckoutListTable from './components/check-out-list-table'
import { useState } from 'react'
import ViewPDFModal from './components/view-pdf-modal'
const PhysicianConsultation = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

    const fakeWaitingListData = [
        {
            id:1,
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
            id:2,
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
            id:2,
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
            id:2,
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
            id:2,
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
            id:2,
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
            id:2,
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
            id:2,
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
            id:2,
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
            id:2,
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
            id:2,
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
            id:2,
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
            id:2,
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
            id:2,
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
            id:2,
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
            <div
                className={styles.physicianConsultationHeader}
                style={
                    lgUp ? { paddingLeft: '3rem', paddingRight: '3rem' } : {}
                }
            >
                {lgUp ? (
                    <>
                        <div className={styles.physicianConsultationSearchDiv}>
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
                                placeholder="Search..."
                                className={
                                    styles.physicianConsultationSearchInput
                                }
                            />
                        </div>
                        <div>
                            <p>abc</p>
                        </div>
                        <div>
                            <p
                                className={
                                    styles.physicianConsultationHeaderTitle
                                }
                            >
                                PHYSICIAN CONSULTATION
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <p
                                className={
                                    styles.physicianConsultationHeaderTitle
                                }
                            >
                                PHYSICIAN CONSULTATION
                            </p>
                            <div style={{ textAlign: 'center' }}>
                                <TextField
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon
                                                    className={
                                                        styles.searchIcon
                                                    }
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    placeholder="Search..."
                                    className={
                                        styles.physicianConsultationSearchInputMobile
                                    }
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Container maxWidth="xl" style={{ marginTop: '1rem' }}>
                <div>
                    <PhysicianConsultationWaitingListTable
                        fakeData={fakeWaitingListData}
                        matches={matches}
                    />
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <PhysicianConsultationCheckoutListTable
                        fakeData={checkoutList}
                    />
                </div>
            </Container>
        </>
    )
}

export default PhysicianConsultation
