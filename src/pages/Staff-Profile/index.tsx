import {
    Button,
    Card,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    Select,
    Stack,
    Tab,
    Tabs,
    TextField,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import { STAFF_MANAGEMENT_PAGE } from 'constant'
import React, { useEffect, useState } from 'react'
import styles from './_staff-profile.module.scss'
import ConfirmationModal from 'components/ConfirmationModal'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import AuthorizationModule from './components/authorization-module'
import { StaffData } from 'pages/Staff-Management/types/StaffData'
import { useNavigate, useParams } from 'react-router-dom'
import ReactivateIcon from 'images/reject.png'
import DeactivateIcon from 'images/cancel-appointment.png'

const StaffProfile = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const { id } = useParams()

    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    const [tabPage, setTabPage] = useState(1)
    const [open, setOpen] = useState(false)
    const [fakeStaffData, setFakeStaffData] = useState<StaffData>()

    const fakeData: StaffData[] = [
        {
            id: 1,
            staffId: 'MYJB-0001',
            name: 'Lee Shen Long',
            gender: 'Male',
            icNo: '1501031979081310',
            position: '1',
            dob: '14-01-2000',
            joinDate: '14-01-2024',
            leaveDate: '-',
            contactNo: '0123456789',
            email: 'shenlong.lee@mjhealth.com',
            address1: '11, jalan abc',
            address2: 'taman abd',
            postcode: '81300',
            city: 'Johor Bahru',
            country: 'Malaysia',
            password: '',
            status: true,
        },
        {
            id: 2,
            staffId: 'MYJB-0002',
            name: 'Wong Xing Ling',
            gender: 'Female',
            icNo: '1501031979081310',
            position: '2',
            dob: '13-01-1999',
            joinDate: '13-01-2024',
            leaveDate: '-',
            contactNo: '0123456999',
            email: 'xingling.wong@mjhealth.com',
            address1: '11, jalan abc',
            address2: 'taman abc',
            postcode: '81300',
            city: '',
            country: 'Malaysia',
            password: '',
            status: false,
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
            status: true,
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
            status: true,
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
            status: true,
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
            status: true,
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
            status: true,
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
            status: true,
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
            status: true,
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
            status: true,
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
            status: true,
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
            status: true,
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
            status: true,
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
            status: true,
        },
    ]

    useEffect(() => {
        const data = fakeData.find((data) => data.id.toString() == id)

        if (data != undefined) {
            setFakeStaffData(data)
        } else {
            navigate(STAFF_MANAGEMENT_PAGE)
        }
    }, [])

    const serviceAuthorization = [
        {
            id: 0,
            label: 'Self-Kiosk UI',
            isDisabled: false,
            isSelected: true,
        },
        {
            id: 0,
            label: 'Receipting Counter',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Print Sticker',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Dining',
            isDisabled: false,
            isSelected: false,
        },
    ]

    const healthScreeningAuthorization = [
        {
            id: 0,
            label: 'Interview',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Audiometry',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Bone Mineral Density',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Electrocardiogram',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'ENT Examination',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'General Measurement',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Lung Function Test',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Mammography',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Pap’s Smear',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Pulmonary Function',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Peripheral Vascular',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Retinography',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Sonography',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Vision & Ocular Tension Test',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'X-Ray',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Lab Test',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'HMC',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Physician Consultation',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Monitor System',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Queue Management',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Radiology Reporting',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Phone Consultation',
            isDisabled: false,
            isSelected: false,
        },
    ]

    const otherAuthorization = [
        {
            id: 0,
            label: 'IT Room Monitor',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'IT Prinitng Room',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Staffs Management',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'MUL Report',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Word Bank',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Room Management',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Final Report',
            isDisabled: false,
            isSelected: false,
        },
    ]

    const additionalAccessAuthorization = [
        {
            id: 0,
            label: 'Lab Test Edit Access',
            isDisabled: true,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Sonography Edit Access',
            isDisabled: true,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Word Bank (view)',
            isDisabled: true,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Word Bank (edit)',
            isDisabled: true,
            isSelected: false,
        },
        {
            id: 0,
            label: 'HMC Call Distribution',
            isDisabled: false,
            isSelected: true,
        },
        {
            id: 0,
            label: 'Medical Call Distribution',
            isDisabled: false,
            isSelected: true,
        },
        {
            id: 0,
            label: 'Call Out Records',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Reports & Statistics',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Personal Complaints',
            isDisabled: false,
            isSelected: false,
        },
        {
            id: 0,
            label: 'Add-on List',
            isDisabled: true,
            isSelected: false,
        },
    ]

    const formik = useFormik({
        initialValues: {
            region: '',
            position: fakeStaffData?.position,
            staffId: '',
            name: '',
            gender: '',
            dob: '',
            icNo: '',
            contactNo: '',
            email: '',
            address1: '',
            address2: '',
            address3: '',
            postcode: '',
            country: '',
            password: '',
            confirmPassword: '',
            status: true,
        },
        validationSchema: Yup.object({
            //     region: Yup.string().required('Region is required'),
            position: Yup.string().required('Position is required'),
            //     staffId: Yup.string().required('Staff ID is required'),
            //     name: Yup.string().required('Name is required'),
            //     gender: Yup.string().required('Gender is required'),
            //     dob: Yup.string().required('Birthday is required'),
            //     icNo: Yup.string().required('ID Card/Passport no. is required'),
            //     contactNo: Yup.string().required('Contact no. is required'),
            //     email: Yup.string().required('Email is required'),
            //     address1: Yup.string().required('Address 1 is required'),
            //     address2: Yup.string().required('Address 2 is required'),
            //     postcode: Yup.string().required('Postcode is required'),
            //     country: Yup.string().required('Country is required'),
            //     password: Yup.string()
            //         .required('Password is required') // check minimum characters
            //         .min(8, 'Password must have at least 8 characters')
            //         // different error messages for different requirements
            //         .matches(/[0-9]/, getCharacterValidationError('digit'))
            //         .matches(/[a-z]/, getCharacterValidationError('lowercase'))
            //         .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
            //     confirmPassword: Yup.string()
            //         .required('Please re-type the password')
            //         .oneOf([Yup.ref('password')], 'Passwords does not match'),
        }),
        onSubmit: (values) => {
            // Handle login logic here
            console.log('Form submitted with values:', values)
            // handleOpen()
            // navigate('/dashboard')
        },
    })

    return (
        <>
            {fakeStaffData && (
                <>
                    <ResponsiveAppBar />

                    <CustomHeader
                        to={STAFF_MANAGEMENT_PAGE}
                        title="STAFF PROFILE"
                    />

                    <Container maxWidth="lg" style={{ marginTop: '1rem' }}>
                        <Card
                            className={styles.card}
                            sx={
                                matches
                                    ? { padding: '3rem 3rem' }
                                    : { padding: '1rem' }
                            }
                        >
                            <div>
                                <Stack
                                    direction="row"
                                    justifyContent={'space-between'}
                                >
                                    <Stack direction="row" spacing={2}>
                                        <Button
                                            variant="contained"
                                            onClick={() => setTabPage(1)}
                                            className={`${styles.tabButton} ${
                                                tabPage == 1
                                                    ? styles.active
                                                    : ''
                                            }`}
                                        >
                                            Staff Information
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={() => setTabPage(2)}
                                            className={`${styles.tabButton} ${
                                                tabPage == 2
                                                    ? styles.active
                                                    : ''
                                            }`}
                                        >
                                            Position & Authorization
                                        </Button>
                                    </Stack>

                                    {fakeStaffData.status ? (
                                        <Button
                                            variant="contained"
                                            className={styles.deactivateButton}
                                            onClick={() => setOpen(true)}
                                        >
                                            Deactivate Button
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            className={styles.activateButton}
                                            onClick={() => setOpen(true)}
                                        >
                                            Activate Button
                                        </Button>
                                    )}
                                </Stack>
                            </div>

                            {tabPage == 1 && (
                                <div className={styles.staffInfoTabContent}>
                                    <Grid container px={3}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={5}>
                                                <Grid container spacing={2}>
                                                    <Grid
                                                        item
                                                        xs={5}
                                                        className={
                                                            styles.staffInfoLabel
                                                        }
                                                    >
                                                        Staff ID :
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={7}
                                                        className={
                                                            styles.staffInfoData
                                                        }
                                                    >
                                                        {fakeStaffData.staffId}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid
                                            container
                                            spacing={2}
                                            style={{ marginTop: '1rem' }}
                                        >
                                            <Grid item xs={12} md={5}>
                                                <Grid container spacing={2}>
                                                    <Grid
                                                        item
                                                        xs={5}
                                                        className={
                                                            styles.staffInfoLabel
                                                        }
                                                    >
                                                        Name :
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={7}
                                                        className={
                                                            styles.staffInfoData
                                                        }
                                                    >
                                                        {fakeStaffData.name}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} md={7}>
                                                <Grid container spacing={2}>
                                                    <Grid
                                                        item
                                                        xs={4}
                                                        className={
                                                            styles.staffInfoLabel
                                                        }
                                                    >
                                                        Gender :
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={8}
                                                        className={
                                                            styles.staffInfoData
                                                        }
                                                    >
                                                        {fakeStaffData.gender}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid
                                            container
                                            spacing={2}
                                            style={{ marginTop: '1rem' }}
                                        >
                                            <Grid item xs={12} md={5}>
                                                <Grid container spacing={2}>
                                                    <Grid
                                                        item
                                                        xs={5}
                                                        className={
                                                            styles.staffInfoLabel
                                                        }
                                                    >
                                                        Birthday :
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={7}
                                                        className={
                                                            styles.staffInfoData
                                                        }
                                                    >
                                                        {fakeStaffData.dob}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} md={7}>
                                                <Grid
                                                    container
                                                    spacing={2}
                                                    className={
                                                        styles.staffInfoLabel
                                                    }
                                                >
                                                    <Grid item xs={4}>
                                                        IC No. :
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={8}
                                                        className={
                                                            styles.staffInfoData
                                                        }
                                                    >
                                                        {fakeStaffData.icNo}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <hr
                                        style={{
                                            marginTop: '2rem',
                                            marginBottom: '2rem',
                                        }}
                                    />
                                    <Grid container px={3}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={5}>
                                                <Grid container spacing={2}>
                                                    <Grid
                                                        item
                                                        xs={5}
                                                        className={
                                                            styles.staffInfoLabel
                                                        }
                                                    >
                                                        Join Date :
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={7}
                                                        className={
                                                            styles.staffInfoData
                                                        }
                                                    >
                                                        {fakeStaffData.joinDate}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} md={7}>
                                                <Grid
                                                    container
                                                    spacing={2}
                                                    className={
                                                        styles.staffInfoLabel
                                                    }
                                                >
                                                    <Grid item xs={4}>
                                                        Leave Date :
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={8}
                                                        className={
                                                            styles.staffInfoData
                                                        }
                                                    >
                                                        {
                                                            fakeStaffData.leaveDate
                                                        }
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <hr
                                        style={{
                                            marginTop: '2rem',
                                            marginBottom: '2rem',
                                        }}
                                    />
                                    <Grid container px={3}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={5}>
                                                <Stack>
                                                    <Grid container spacing={2}>
                                                        <Grid
                                                            item
                                                            xs={5}
                                                            className={
                                                                styles.staffInfoLabel
                                                            }
                                                        >
                                                            Contact No. :
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={7}
                                                            className={
                                                                styles.staffInfoData
                                                            }
                                                        >
                                                            {
                                                                fakeStaffData.contactNo
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        spacing={2}
                                                        style={{
                                                            marginTop: '1rem',
                                                        }}
                                                    >
                                                        <Grid
                                                            item
                                                            xs={5}
                                                            className={
                                                                styles.staffInfoLabel
                                                            }
                                                        >
                                                            Email Address :
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={7}
                                                            className={
                                                                styles.staffInfoData
                                                            }
                                                        >
                                                            {
                                                                fakeStaffData.email
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={7}>
                                                <Grid
                                                    container
                                                    spacing={2}
                                                    className={
                                                        styles.staffInfoLabel
                                                    }
                                                >
                                                    <Grid item xs={4}>
                                                        Living Address :
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={8}
                                                        className={
                                                            styles.staffInfoData
                                                        }
                                                    >
                                                        <Stack>
                                                            <p
                                                                className={
                                                                    styles.addressLine
                                                                }
                                                            >
                                                                {fakeStaffData.address1 !=
                                                                    '' &&
                                                                    fakeStaffData.address1 +
                                                                        ','}
                                                            </p>
                                                            <p
                                                                className={
                                                                    styles.addressLine
                                                                }
                                                            >
                                                                {fakeStaffData.address2 !=
                                                                    '' &&
                                                                    fakeStaffData.address2 +
                                                                        ','}
                                                            </p>
                                                            <p
                                                                className={
                                                                    styles.addressLine
                                                                }
                                                            >
                                                                {fakeStaffData.postcode !=
                                                                    '' &&
                                                                    fakeStaffData.postcode +
                                                                        ','}
                                                                {fakeStaffData.city !=
                                                                    '' &&
                                                                    fakeStaffData.city +
                                                                        ','}
                                                                {fakeStaffData.country !=
                                                                    '' &&
                                                                    fakeStaffData.country +
                                                                        ','}
                                                            </p>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <hr
                                        style={{
                                            marginTop: '2rem',
                                            marginBottom: '2rem',
                                        }}
                                    />
                                    <Grid container px={3}>
                                        <Grid
                                            container
                                            spacing={2}
                                            columns={18}
                                            alignItems={'center'}
                                        >
                                            <Grid
                                                item
                                                xs={18}
                                                md={3}
                                                className={
                                                    styles.staffInfoLabel
                                                }
                                            >
                                                Reset Password :
                                            </Grid>
                                            <Grid item xs={18} md={8}>
                                                <FormControl
                                                    fullWidth
                                                    // error={
                                                    //     formik.touched.name &&
                                                    //     Boolean(formik.errors.name)
                                                    // }
                                                >
                                                    <TextField
                                                        name="resetPassword"
                                                        // value={formik.values.name}
                                                        id="input-name"
                                                        variant="outlined"
                                                        // error={
                                                        //     formik.touched.name &&
                                                        //     Boolean(formik.errors.name)
                                                        // }
                                                        // helperText={
                                                        //     formik.touched.name &&
                                                        //     formik.errors.name
                                                        // }
                                                        // onChange={formik.handleChange}
                                                        // onBlur={formik.handleBlur}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={18} md={7}>
                                                <Button
                                                    variant="contained"
                                                    className={
                                                        styles.savePasswordButton
                                                    }
                                                >
                                                    Save
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>
                            )}

                            {tabPage == 2 && (
                                <>
                                    <hr
                                        style={{
                                            marginTop: '2rem',
                                            marginBottom: '2rem',
                                        }}
                                    />
                                    {/* Position & Authorization */}

                                    <Grid
                                        container
                                        columns={5}
                                        alignItems={'center'}
                                    >
                                        <Grid item md={1}>
                                            <p className={styles.cardTitle}>
                                                Position
                                            </p>
                                        </Grid>
                                        <Grid item md={2}>
                                            <FormControl
                                                fullWidth
                                                error={
                                                    formik.touched.position &&
                                                    Boolean(
                                                        formik.errors.position
                                                    )
                                                }
                                            >
                                                <Select
                                                    labelId="select-position"
                                                    id="select-position"
                                                    name="position"
                                                    value={
                                                        fakeStaffData.position
                                                    }
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                >
                                                    <MenuItem value={1}>
                                                        Doctor
                                                    </MenuItem>
                                                    <MenuItem value={2}>
                                                        Lab Technician
                                                    </MenuItem>
                                                    <MenuItem value={3}>
                                                        Information Technology
                                                    </MenuItem>
                                                    <MenuItem value={4}>
                                                        Staff
                                                    </MenuItem>
                                                    <MenuItem value={5}>
                                                        Nurse
                                                    </MenuItem>
                                                </Select>

                                                <FormHelperText>
                                                    {formik.touched.position &&
                                                        formik.errors.position}
                                                </FormHelperText>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <hr
                                        style={{
                                            marginTop: '2rem',
                                            marginBottom: '2rem',
                                        }}
                                    />

                                    <AuthorizationModule
                                        serviceAuthorization={
                                            serviceAuthorization
                                        }
                                        healthScreeningAuthorization={
                                            healthScreeningAuthorization
                                        }
                                        otherAuthorization={otherAuthorization}
                                        additionalAccessAuthorization={
                                            additionalAccessAuthorization
                                        }
                                    />

                                    <p
                                        style={{
                                            textAlign: 'center',
                                            marginTop: '3rem',
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            className={
                                                styles.saveAuthorizationButton
                                            }
                                        >
                                            Save
                                        </Button>
                                    </p>
                                </>
                            )}
                        </Card>

                        {/* Reactivate/Deactivate account. */}
                        <ConfirmationModal
                            title={
                                fakeStaffData.status
                                    ? 'Deactivate the staff account?'
                                    : 'Reactivate the staff account?'
                            }
                            context={
                                fakeStaffData.status
                                    ? 'Do you want to deactivate the staff’s account?'
                                    : 'Do you want to reactivate the staff’s account?'
                            }
                            image={
                                fakeStaffData.status
                                    ? DeactivateIcon
                                    : ReactivateIcon
                            }
                            decline={() => setOpen(false)}
                            accept={() => setOpen(false)}
                            setOpen={setOpen}
                            open={open}
                            width="md"
                        />
                    </Container>
                </>
            )}
        </>
    )
}

export default StaffProfile
