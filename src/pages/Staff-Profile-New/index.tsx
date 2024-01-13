import ResponsiveAppBar from 'components/AppBar'
import styles from './_staff-profile-new.module.scss'
import {
    Button,
    Card,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import SearchIcon from '@mui/icons-material/Search'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const StaffProfileNew = () => {
    const theme = useTheme()

    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    const serviceAuthorization = [
        {
            id: 0,
            label: 'Self-Kiosk UI',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Receipting Counter',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Print Sticker',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Dining',
            isDisabled: false,
        },
    ]

    const healthScreeningAuthorization = [
        {
            id: 0,
            label: 'Interview',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Audiometry',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Bone Mineral Density',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Electrocardiogram',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'ENT Examination',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'General Measurement',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Lung Function Test',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Mammography',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Pap’s Smear',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Pulmonary Function',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Peripheral Vascular',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Retinography',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Sonography',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Vision & Ocular Tension Test',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'X-Ray',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Lab Test',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'HMC',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Physician Consultation',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Monitor System',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Queue Management',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Radiology Reporting',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Phone Consultation',
            isDisabled: false,
        },
    ]

    const otherAuthorization = [
        {
            id: 0,
            label: 'IT Room Monitor',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'IT Prinitng Room',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Staffs Management',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'MUL Report',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Word Bank',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Room Management',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Final Report',
            isDisabled: false,
        },
    ]

    const additionalAccessAuthorization = [
        {
            id: 0,
            label: 'Lab Test Edit Access',
            isDisabled: true,
        },
        {
            id: 0,
            label: 'Sonography Edit Access',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Word Bank (view)',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Word Bank (edit)',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'HMC Call Distribution',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Medical Call Distribution',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Call Out Records',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Reports & Statistics',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Personal Complaints',
            isDisabled: false,
        },
        {
            id: 0,
            label: 'Add-on List',
            isDisabled: false,
        },
    ]

    return (
        <>
            <ResponsiveAppBar />

            <div
                className={styles.staffProfileNewHeader}
                style={
                    lgUp ? { paddingLeft: '3rem', paddingRight: '3rem' } : {}
                }
            >
                {lgUp ? (
                    <>
                        <div className={styles.backButtonDiv}>
                            <Button
                                variant="text"
                                className={styles.backButton}
                                startIcon={
                                    <ChevronLeftIcon fontSize={'large'} />
                                }
                                // onClick={() => navigate(to)}
                            >
                                <span style={{ marginLeft: '-5px' }}>Back</span>
                            </Button>
                        </div>

                        <div>
                            <p className={styles.staffProfileNewHeaderTitle}>
                                STAFF PROFILE
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.backButtonDiv}>
                            <Button
                                variant="text"
                                className={styles.backButton}
                                startIcon={
                                    <ChevronLeftIcon fontSize={'large'} />
                                }
                                // onClick={() => navigate(to)}
                            >
                                <span style={{ marginLeft: '-5px' }}>Back</span>
                            </Button>
                        </div>
                        <div>
                            <p className={styles.staffProfileNewHeaderTitle}>
                                STAFF MANAGEMENT
                            </p>
                        </div>
                    </>
                )}
            </div>

            <Container maxWidth="lg" style={{ marginTop: '1rem' }}>
                <Card
                    className={styles.card}
                    sx={
                        matches ? { padding: '3rem 5rem' } : { padding: '1rem' }
                    }
                >
                    <p
                        className={styles.cardTitle}
                        style={{ marginBottom: '2rem' }}
                    >
                        MJ Health
                    </p>
                    <Grid container spacing={5} style={{ paddingTop: '1rem' }}>
                        <Grid item xs={12} md={12}>
                            <FormControl>
                                <FormLabel id="radio-region">Region</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="region"
                                    name="region"
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
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} style={{ paddingTop: '1rem' }}>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <FormLabel id="select-position">
                                    Position
                                </FormLabel>

                                <Select
                                    labelId="select-position"
                                    id="select-position"
                                    value={0}
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={0}>-</MenuItem>
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
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <FormLabel id="input-staff-id">
                                    Staff ID
                                </FormLabel>
                                <TextField
                                    name="staffId"
                                    id="input-staff-id"
                                    variant="outlined"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <hr style={{ marginTop: '2rem', marginBottom: '2rem' }} />

                    <p
                        className={styles.cardTitle}
                        style={{ marginBottom: '2rem' }}
                    >
                        Staff Information
                    </p>
                    <Grid container spacing={5} style={{ paddingTop: '1rem' }}>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <FormLabel id="input-name">Name</FormLabel>
                                <TextField
                                    name="name"
                                    id="input-name"
                                    variant="outlined"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl>
                                <FormLabel id="radio-gender">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="gender"
                                    name="gender"
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
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} style={{ paddingTop: '1rem' }}>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <FormLabel id="input-dob">Birthday</FormLabel>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        slots={{
                                            textField: (params) => (
                                                <TextField
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
                                                />
                                            ),
                                        }}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <FormLabel id="input-ic-no">
                                    ID Card/ Passport No.
                                </FormLabel>
                                <TextField
                                    name="icNo"
                                    id="input-ic-no"
                                    variant="outlined"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} style={{ paddingTop: '1rem' }}>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <FormLabel id="input-contact-no">
                                    Contact No.
                                </FormLabel>
                                <TextField
                                    name="contactNo"
                                    id="input-contact-no"
                                    variant="outlined"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <FormLabel id="input-email">
                                    Email Address
                                </FormLabel>
                                <TextField
                                    name="email"
                                    id="input-email"
                                    variant="outlined"
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
                                <FormControl fullWidth>
                                    <FormLabel id="input-contact-no">
                                        Address
                                    </FormLabel>
                                    <TextField
                                        name="address1"
                                        id="input-address1"
                                        variant="outlined"
                                        placeholder="Address Line 1"
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField
                                        name="address2"
                                        id="input-address2"
                                        variant="outlined"
                                        placeholder="Address Line 2"
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField
                                        name="address3"
                                        id="input-address3"
                                        variant="outlined"
                                        placeholder="Address Line 3"
                                    />
                                </FormControl>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={0}>
                                <FormControl fullWidth>
                                    <TextField
                                        name="postcode"
                                        id="input-postcode"
                                        variant="outlined"
                                        placeholder="Postcode"
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <Select
                                        labelId="select-country"
                                        id="select-country"
                                        name="country"
                                        value={0}
                                        placeholder="Country"
                                    >
                                        <MenuItem value={0}>Country</MenuItem>
                                        <MenuItem value={1}>Malaysia</MenuItem>
                                        <MenuItem value={2}>Singapore</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                    </Grid>

                    <hr style={{ marginTop: '2rem', marginBottom: '2rem' }} />

                    <p
                        className={styles.cardTitle}
                        style={{ marginBottom: '2rem' }}
                    >
                        Security & Password
                    </p>
                    <Grid container spacing={5} style={{ paddingTop: '1rem' }}>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <FormLabel id="input-new-password">
                                    New Password
                                </FormLabel>
                                <TextField
                                    name="newPassword"
                                    id="input-new-password"
                                    variant="outlined"
                                    type="password"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} style={{ paddingTop: '1rem' }}>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <FormLabel id="input-confirm-password">
                                    Confirm Password
                                </FormLabel>
                                <TextField
                                    name="confirmPassword"
                                    id="input-confirm-password"
                                    variant="outlined"
                                    type="password"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <hr style={{ marginTop: '2rem', marginBottom: '2rem' }} />

                    <p
                        className={styles.cardTitle}
                        style={{ marginBottom: '2rem' }}
                    >
                        Authorization
                    </p>

                    <p
                        className={styles.authorizationTitle}
                        style={{ marginTop: '1rem', marginBottom: '1rem' }}
                    >
                        Service
                    </p>
                    <Grid container spacing={2} columns={15}>
                        {serviceAuthorization.map((item) => (
                            <Grid xs={15} md={3} key={item.id} item>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={item.label}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    <p
                        className={styles.authorizationTitle}
                        style={{ marginTop: '2rem', marginBottom: '1rem' }}
                    >
                        Health & Screening
                    </p>
                    <Grid container spacing={2} columns={15}>
                        {healthScreeningAuthorization.map((item) => (
                            <Grid xs={15} md={3} key={item.id} item>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={item.label}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    <p
                        className={styles.authorizationTitle}
                        style={{ marginTop: '2rem', marginBottom: '1rem' }}
                    >
                        Other Function
                    </p>
                    <Grid container spacing={2} columns={15}>
                        {otherAuthorization.map((item) => (
                            <Grid xs={15} md={3} key={item.id} item>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={item.label}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    <p
                        className={styles.authorizationTitle}
                        style={{ marginTop: '2rem', marginBottom: '1rem' }}
                    >
                        Additional Access
                    </p>
                    <Grid container spacing={2} columns={15}>
                        {additionalAccessAuthorization.map((item) => (
                            <Grid xs={15} md={3} key={item.id} item>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={item.label}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    <div
                        className={styles.saveButtonDiv}
                        style={{ float: 'right' }}
                    >
                        <Button
                            className={styles.saveButton}
                            variant="contained"
                        >
                            Save
                        </Button>
                    </div>
                </Card>
            </Container>
        </>
    )
}

export default StaffProfileNew
