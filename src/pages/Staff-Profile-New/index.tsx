import ResponsiveAppBar from 'components/AppBar'
import styles from './_staff-profile-new.module.scss'
import {
    Button,
    Card,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid,
    InputAdornment,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Stack,
    TextField,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CustomHeader from 'components/CustomHeader'
import { STAFF_MANAGEMENT_PAGE } from 'constant'
import AuthorizationModule from 'pages/Staff-Profile/components/authorization-module'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const StaffProfileNew = () => {
    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    const getCharacterValidationError = (str: string) => {
        return `Your password must have at least 1 ${str} character`
    }

    const formik = useFormik({
        initialValues: {
            region: '',
            position: '',
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
        },
        validationSchema: Yup.object({
            region: Yup.string().required('Region is required'),
            position: Yup.string().required('Position is required'),
            staffId: Yup.string().required('Staff ID is required'),
            name: Yup.string().required('Name is required'),
            gender: Yup.string().required('Gender is required'),
            dob: Yup.string().required('Birthday is required'),
            icNo: Yup.string().required('ID Card/Passport no. is required'),
            contactNo: Yup.string().required('Contact no. is required'),
            email: Yup.string().required('Email is required'),
            address1: Yup.string().required('Address 1 is required'),
            address2: Yup.string().required('Address 2 is required'),
            postcode: Yup.string().required('Postcode is required'),
            country: Yup.string().required('Country is required'),
            password: Yup.string()
                .required('Password is required') // check minimum characters
                .min(8, 'Password must have at least 8 characters')
                // different error messages for different requirements
                .matches(/[0-9]/, getCharacterValidationError('digit'))
                .matches(/[a-z]/, getCharacterValidationError('lowercase'))
                .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
            confirmPassword: Yup.string()
                .required('Please re-type the password')
                .oneOf([Yup.ref('password')], 'Passwords does not match'),
        }),
        onSubmit: (values) => {
            // Handle login logic here
            console.log('Form submitted with values:', values)
            // handleOpen()
            // navigate('/dashboard')
        },
    })

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

    return (
        <>
            <ResponsiveAppBar />

            <CustomHeader to={STAFF_MANAGEMENT_PAGE} title="STAFF PROFILE" />

            <Container maxWidth="xl" style={{ marginTop: '1rem' }}>
                <Card
                    className={styles.card}
                    sx={
                        matches ? { padding: '3rem 5rem' } : { padding: '1rem' }
                    }
                >
                    <form onSubmit={formik.handleSubmit}>
                        <p
                            className={styles.cardTitle}
                            style={{ marginBottom: '2rem' }}
                        >
                            MJ Health
                        </p>

                        <Grid
                            container
                            spacing={5}
                            style={{ paddingTop: '1rem' }}
                        >
                            <Grid item xs={12} md={12}>
                                <FormControl
                                    error={
                                        formik.touched.region &&
                                        Boolean(formik.errors.region)
                                    }
                                >
                                    <FormLabel id="radio-region">
                                        Region
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="region"
                                        name="region"
                                        value={formik.values.region}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <FormControlLabel
                                            value="centre"
                                            control={<Radio />}
                                            label="Centre"
                                        />
                                        <FormControlLabel
                                            value="southern"
                                            control={<Radio />}
                                            label="Southern"
                                        />
                                    </RadioGroup>
                                    <FormHelperText>
                                        {formik.touched.region &&
                                            formik.errors.region}
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            spacing={5}
                            style={{ paddingTop: '1rem' }}
                        >
                            <Grid item xs={12} md={6}>
                                <FormControl
                                    fullWidth
                                    error={
                                        formik.touched.position &&
                                        Boolean(formik.errors.position)
                                    }
                                >
                                    <FormLabel id="select-position">
                                        Position
                                    </FormLabel>

                                    <Select
                                        labelId="select-position"
                                        id="select-position"
                                        name="position"
                                        value={formik.values.position}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <MenuItem value={1}>Doctor</MenuItem>
                                        <MenuItem value={2}>
                                            Lab Technician
                                        </MenuItem>
                                        <MenuItem value={3}>
                                            Information Technology
                                        </MenuItem>
                                        <MenuItem value={4}>Staff</MenuItem>
                                        <MenuItem value={5}>Nurse</MenuItem>
                                    </Select>

                                    <FormHelperText>
                                        {formik.touched.position &&
                                            formik.errors.position}
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl
                                    fullWidth
                                    error={
                                        formik.touched.staffId &&
                                        Boolean(formik.errors.staffId)
                                    }
                                >
                                    <FormLabel id="input-staff-id">
                                        Staff ID
                                    </FormLabel>
                                    <TextField
                                        name="staffId"
                                        value={formik.values.staffId}
                                        id="input-staff-id"
                                        variant="outlined"
                                        error={
                                            formik.touched.staffId &&
                                            Boolean(formik.errors.staffId)
                                        }
                                        helperText={
                                            formik.touched.staffId &&
                                            formik.errors.staffId
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>

                        <hr
                            style={{ marginTop: '2rem', marginBottom: '2rem' }}
                        />

                        <p
                            className={styles.cardTitle}
                            style={{ marginBottom: '2rem' }}
                        >
                            Staff Information
                        </p>
                        <Grid
                            container
                            spacing={5}
                            style={{ paddingTop: '1rem' }}
                        >
                            <Grid item xs={12} md={6}>
                                <FormControl
                                    fullWidth
                                    error={
                                        formik.touched.name &&
                                        Boolean(formik.errors.name)
                                    }
                                >
                                    <FormLabel id="input-name">Name</FormLabel>
                                    <TextField
                                        name="name"
                                        value={formik.values.name}
                                        id="input-name"
                                        variant="outlined"
                                        error={
                                            formik.touched.name &&
                                            Boolean(formik.errors.name)
                                        }
                                        helperText={
                                            formik.touched.name &&
                                            formik.errors.name
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl
                                    error={
                                        formik.touched.gender &&
                                        Boolean(formik.errors.gender)
                                    }
                                >
                                    <FormLabel id="radio-gender">
                                        Gender
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="gender"
                                        name="gender"
                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio />}
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio />}
                                            label="Female"
                                        />
                                    </RadioGroup>
                                    <FormHelperText>
                                        {formik.touched.gender &&
                                            formik.errors.gender}
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={5}
                            style={{ paddingTop: '1rem' }}
                        >
                            <Grid item xs={12} md={6}>
                                <FormControl
                                    fullWidth
                                    error={
                                        formik.touched.dob &&
                                        Boolean(formik.errors.dob)
                                    }
                                >
                                    <FormLabel id="input-dob">
                                        Birthday
                                    </FormLabel>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <DatePicker
                                            slots={{
                                                textField: (params) => (
                                                    <TextField
                                                        name="dob"
                                                        value={
                                                            formik.values.dob
                                                        }
                                                        variant="outlined"
                                                        {...params}
                                                        size="small"
                                                        className={
                                                            styles.staffDobDateInput
                                                        }
                                                        InputProps={{
                                                            classes: {
                                                                input: styles.inputField,
                                                            },
                                                        }}
                                                        margin="dense"
                                                        error={
                                                            formik.touched
                                                                .dob &&
                                                            Boolean(
                                                                formik.errors
                                                                    .dob
                                                            )
                                                        }
                                                        helperText={
                                                            formik.touched
                                                                .dob &&
                                                            formik.errors.dob
                                                        }
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        onBlur={
                                                            formik.handleBlur
                                                        }
                                                    />
                                                ),
                                            }}
                                        />
                                    </LocalizationProvider>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl
                                    fullWidth
                                    error={
                                        formik.touched.icNo &&
                                        Boolean(formik.errors.icNo)
                                    }
                                >
                                    <FormLabel id="input-ic-no">
                                        ID Card/ Passport No.
                                    </FormLabel>
                                    <TextField
                                        name="icNo"
                                        value={formik.values.icNo}
                                        id="input-ic-no"
                                        variant="outlined"
                                        error={
                                            formik.touched.icNo &&
                                            Boolean(formik.errors.icNo)
                                        }
                                        helperText={
                                            formik.touched.icNo &&
                                            formik.errors.icNo
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={5}
                            style={{ paddingTop: '1rem' }}
                        >
                            <Grid item xs={12} md={6}>
                                <FormControl
                                    fullWidth
                                    error={
                                        formik.touched.contactNo &&
                                        Boolean(formik.errors.contactNo)
                                    }
                                >
                                    <FormLabel id="input-contact-no">
                                        Contact No.
                                    </FormLabel>
                                    <TextField
                                        name="contactNo"
                                        value={formik.values.contactNo}
                                        id="input-contact-no"
                                        variant="outlined"
                                        error={
                                            formik.touched.contactNo &&
                                            Boolean(formik.errors.contactNo)
                                        }
                                        helperText={
                                            formik.touched.contactNo &&
                                            formik.errors.contactNo
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl
                                    fullWidth
                                    error={
                                        formik.touched.email &&
                                        Boolean(formik.errors.email)
                                    }
                                >
                                    <FormLabel id="input-email">
                                        Email Address
                                    </FormLabel>
                                    <TextField
                                        name="email"
                                        value={formik.values.email}
                                        id="input-email"
                                        variant="outlined"
                                        error={
                                            formik.touched.email &&
                                            Boolean(formik.errors.email)
                                        }
                                        helperText={
                                            formik.touched.email &&
                                            formik.errors.email
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            alignItems={'flex-end'}
                            spacing={5}
                            style={{ paddingTop: '1rem' }}
                        >
                            <Grid item xs={12} md={6}>
                                <Stack spacing={0}>
                                    <FormControl
                                        fullWidth
                                        error={
                                            formik.touched.address1 &&
                                            Boolean(formik.errors.address1)
                                        }
                                    >
                                        <FormLabel id="input-address1">
                                            Address
                                        </FormLabel>
                                        <TextField
                                            name="address1"
                                            value={formik.values.address1}
                                            id="input-address1"
                                            variant="outlined"
                                            placeholder="Address Line 1"
                                            error={
                                                formik.touched.address1 &&
                                                Boolean(formik.errors.address1)
                                            }
                                            helperText={
                                                formik.touched.address1 &&
                                                formik.errors.address1
                                            }
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </FormControl>
                                    <FormControl
                                        fullWidth
                                        error={
                                            formik.touched.address2 &&
                                            Boolean(formik.errors.address2)
                                        }
                                    >
                                        <TextField
                                            name="address2"
                                            value={formik.values.address2}
                                            id="input-address2"
                                            variant="outlined"
                                            placeholder="Address Line 2"
                                            error={
                                                formik.touched.address2 &&
                                                Boolean(formik.errors.address2)
                                            }
                                            helperText={
                                                formik.touched.address2 &&
                                                formik.errors.address2
                                            }
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <TextField
                                            name="address3"
                                            value={formik.values.address3}
                                            id="input-address3"
                                            variant="outlined"
                                            placeholder="Address Line 3"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </FormControl>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={0}>
                                    <FormControl
                                        fullWidth
                                        error={
                                            formik.touched.postcode &&
                                            Boolean(formik.errors.postcode)
                                        }
                                    >
                                        <TextField
                                            name="postcode"
                                            value={formik.values.postcode}
                                            id="input-postcode"
                                            variant="outlined"
                                            placeholder="Postcode"
                                            error={
                                                formik.touched.postcode &&
                                                Boolean(formik.errors.postcode)
                                            }
                                            helperText={
                                                formik.touched.postcode &&
                                                formik.errors.postcode
                                            }
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </FormControl>
                                    <FormControl
                                        fullWidth
                                        error={
                                            formik.touched.country &&
                                            Boolean(formik.errors.country)
                                        }
                                    >
                                        <Select
                                            labelId="select-country"
                                            id="select-country"
                                            name="country"
                                            value={formik.values.country}
                                            placeholder="Country"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        >
                                            <MenuItem value={1}>
                                                Malaysia
                                            </MenuItem>
                                            <MenuItem value={2}>
                                                Singapore
                                            </MenuItem>
                                        </Select>
                                        <FormHelperText>
                                            {formik.touched.country &&
                                                formik.errors.country}
                                        </FormHelperText>
                                    </FormControl>
                                </Stack>
                            </Grid>
                        </Grid>

                        <hr
                            style={{ marginTop: '2rem', marginBottom: '2rem' }}
                        />

                        <p
                            className={styles.cardTitle}
                            style={{ marginBottom: '2rem' }}
                        >
                            Security & Password
                        </p>
                        <Grid
                            container
                            spacing={5}
                            style={{ paddingTop: '1rem' }}
                        >
                            <Grid item xs={12} md={6}>
                                <FormControl
                                    fullWidth
                                    error={
                                        formik.touched.password &&
                                        Boolean(formik.errors.password)
                                    }
                                >
                                    <FormLabel id="input-password">
                                        New Password
                                    </FormLabel>
                                    <TextField
                                        name="password"
                                        id="input-password"
                                        variant="outlined"
                                        type="password"
                                        error={
                                            formik.touched.password &&
                                            Boolean(formik.errors.password)
                                        }
                                        helperText={
                                            formik.touched.password &&
                                            formik.errors.password
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={5}
                            style={{ paddingTop: '1rem' }}
                        >
                            <Grid item xs={12} md={6}>
                                <FormControl
                                    fullWidth
                                    error={
                                        formik.touched.confirmPassword &&
                                        Boolean(formik.errors.confirmPassword)
                                    }
                                >
                                    <FormLabel id="input-confirm-password">
                                        Confirm Password
                                    </FormLabel>
                                    <TextField
                                        name="confirmPassword"
                                        id="input-confirm-password"
                                        variant="outlined"
                                        type="password"
                                        error={
                                            formik.touched.confirmPassword &&
                                            Boolean(
                                                formik.errors.confirmPassword
                                            )
                                        }
                                        helperText={
                                            formik.touched.confirmPassword &&
                                            formik.errors.confirmPassword
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>

                        <hr
                            style={{ marginTop: '2rem', marginBottom: '2rem' }}
                        />

                        <AuthorizationModule
                            serviceAuthorization={serviceAuthorization}
                            healthScreeningAuthorization={
                                healthScreeningAuthorization
                            }
                            otherAuthorization={otherAuthorization}
                            additionalAccessAuthorization={
                                additionalAccessAuthorization
                            }
                        />

                        <div
                            className={styles.saveButtonDiv}
                            style={{ float: 'right' }}
                        >
                            <Button
                                className={styles.saveButton}
                                variant="contained"
                                type="submit"
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </Card>
            </Container>
        </>
    )
}

export default StaffProfileNew
