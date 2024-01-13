import {
    Box,
    Button,
    Grid,
    InputAdornment,
    Stack,
    TextField,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import ResponsiveAppBar from 'components/AppBar'
import styles from './_staff-management.module.scss'
import SearchIcon from '@mui/icons-material/Search'
import { StaffData } from './types/StaffData'
import StaffManagementTable from './components/staff-management-table'

const StaffManagement = () => {
    const theme = useTheme()

    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

    const fakeData: StaffData[] = [
        {
            id: 1,
            staffId: 'MYJB-0001',
            name: 'Lee Shen Long',
            gender: 'Male',
            icNo: '1501031979081310',
            position: 'Doctor',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 2,
            staffId: 'MYJB-0002',
            name: 'Wong Xing Ling',
            gender: 'Female',
            icNo: '1501031979081310',
            position: 'Lab Technician',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 3,
            staffId: 'MYJB-0003',
            name: 'Liu Bii',
            gender: 'Male',
            icNo: '1501031979081310',
            position: 'Information Technology',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 4,
            staffId: 'MYJB-0004',
            name: 'Lok Cat Wang',
            gender: 'Female',
            icNo: '1501031979081310',
            position: 'Staff',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 5,
            staffId: 'MYJB-0005',
            name: 'Angelina Shabby',
            gender: 'Female',
            icNo: '1501031979081310',
            position: 'Nurse',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 6,
            staffId: 'MYJB-0006',
            name: 'Siti Bin Aidin',
            gender: 'Female',
            icNo: '1501031979081310',
            position: 'Nurse',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 7,
            staffId: 'MYJB-0007',
            name: 'Alfred de Saiyanrito',
            gender: 'Male',
            icNo: '1501031979081310',
            position: 'Management',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 8,
            staffId: 'MYJB-0008',
            name: 'Wong Xing Ling',
            gender: 'Male',
            icNo: '1501031979081310',
            position: 'Doctor',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 9,
            staffId: 'MYJB-0009',
            name: 'Marine Albrado',
            gender: 'Female',
            icNo: '1501031979081310',
            position: 'Nurse',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 10,
            staffId: 'MYJB-0010',
            name: 'Luciano Helbe',
            gender: 'Male',
            icNo: '1501031979081310',
            position: 'Nurse',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 11,
            staffId: 'MYJB-0011',
            name: 'Lok Cat Wang',
            gender: 'Female',
            icNo: '1501031979081310',
            position: 'Nurse',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 12,
            staffId: 'MYJB-0012',
            name: 'Luciano Helbe',
            gender: 'Male',
            icNo: '1501031979081310',
            position: 'Doctor',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 13,
            staffId: 'MYJB-0013',
            name: 'Siti Bin Aidin',
            gender: 'Female',
            icNo: '1501031979081310',
            position: 'Nurse',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
        {
            id: 14,
            staffId: 'MYJB-0014',
            name: 'Liu Bii',
            gender: 'Female',
            icNo: '1501031979081310',
            position: 'Information Technology',
            dob: '',
            joinDate: '',
            leaveDate: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            postcode: '',
            city: '',
            country: '',
            password: '',
        },
    ]

    return (
        <>
            <ResponsiveAppBar />
            <div
                className={styles.staffManagementHeader}
                style={
                    lgUp ? { paddingLeft: '3rem', paddingRight: '3rem' } : {}
                }
            >
                {lgUp ? (
                    <>
                        <div className={styles.newStaffBttnDiv}>
                            <Button
                                variant="contained"
                                fullWidth
                                className={styles.newStaffBttn}
                                // onClick={() => setOpenPrintStickerModal(true)}
                            >
                                New Staff
                            </Button>
                        </div>
                        <div className={styles.staffManagementSearchDiv}>
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
                                className={styles.staffManagementSearchInput}
                            />
                        </div>
                        <div>
                            <p className={styles.staffManagementHeaderTitle}>
                                STAFF MANAGEMENT
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <p className={styles.staffManagementHeaderTitle}>
                                STAFF MANAGEMENT
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
                                        styles.staffManagementSearchInputMobile
                                    }
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>

            <Box
                sx={{
                    paddingLeft: '3rem',
                    paddingRight: '3rem',
                    marginTop: '2rem',
                    paddingBottom: '2rem',
                }}
            >
                <StaffManagementTable fakeData={fakeData} />
            </Box>
        </>
    )
}

export default StaffManagement
