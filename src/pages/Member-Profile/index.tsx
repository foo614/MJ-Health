import { Card, Grid } from '@mui/material'
import { Box } from '@mui/system'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import { RECEPTION_PAGE } from 'constant'
import TextField from '@mui/material/TextField'
import styles from './_member-profile.module.scss'
import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import Checkbox from '@mui/material/Checkbox'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '../../images/reception-search.png'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import PDFIcon from '../../images/member-profile-pdf.png'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MemberEditIcon from '../../images/member-edit.png'
import CancelAppointmentModal from './components/cancel-appointment-modal'
import SaveAppointmentModal from './components/save-appointment-modal'
import Autocomplete from '@mui/material/Autocomplete'
import OptionalItemModal from './components/optional-item-modal'
import MemberEditDisabledIcon from '../../images/member-edit-disabled.png'
import HIVConsentFormModal from './components/hiv-consent-form-modal'
import PDPAConsentFormModal from './components/pdpa-consent-form-modal'
const MemberProfile = () => {
    const [isEdit, setIsEdit] = React.useState<boolean>(false)
    const [openCancelAppointmentModal, setOpenCancelAppointmentModal] =
        React.useState<boolean>(false)

    const [openSaveAppointmentModal, setOpenSaveAppointmentModal] =
        React.useState<boolean>(false)

    const [openOptionalItemModal, setOpenOptionalItemModal] =
        React.useState<boolean>(false)

    const [openHIVModal, setOpenHIVModal] = React.useState<boolean>(false)
    const [openPDPAModal, setOpenPDPAModal] = React.useState<boolean>(false)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const formik = useFormik({
        initialValues: {
            fullName: 'Jeffery Mohamad Bin Christofa',
            gender: 'male',
            displayMember: 'show',
            replacedName: 'Mr.J',
            identityNo: '830516015213',
            dateOfBirth: '16 - 05 - 1983',
            age: '54',
            memberId: '0401 1010 0007 3001',
            contactNo: '+60-100600660',
            secondaryContactNo: '-',
            emailAddress: 'jefferym@gmail.com',
            addressLine1: '116, Jalan Persona 12',
            addressLine2: 'Taman Pelangi Indah',
            addressLine3: 'Johor Bahru',
            addressLine4: '81100',
            addressLine5: 'Johor',
            addressLine6: 1,
            package: 1,
            optionalItems: '',
            diet: 1,
            stoolStatus: 1,
            printingLanguage: 3,
            wheelchair_user: true,
            request_early_meal: false,
            with_companion: false,
            en_language: true,
            bm_language: false,
            cn_language: false,
            remark: 'Type in your remark',
        },
        // validationSchema: Yup.object({
        //     staffId: Yup.string().required('Staff ID is required'),
        //     password: Yup.string().required('Password is required'),
        // }),
        onSubmit: (values) => {
            // Handle login logic here
            console.log('Form submitted with values:', values)
        },
    })

    const packageOption = [
        {
            id: 1,
            label: 'K3- New Premium',
        },
        {
            id: 2,
            label: 'H2- Comprehensive Health Screening',
        },
        {
            id: 3,
            label: 'S2- Premium Health Screening',
        },
        {
            id: 4,
            label: 'K2- New Premium',
        },
        {
            id: 5,
            label: 'J2- New Deluxe',
        },
        {
            id: 6,
            label: 'G2- New Comprehensive',
        },
        {
            id: 7,
            label: 'FS2- Health Management Package',
        },
        {
            id: 8,
            label: 'F1- Compresive Health Screening Service',
        },
        {
            id: 9,
            label: 'F2- Compresive Health Screening Service',
        },
    ]

    const diet = [
        {
            id: 1,
            label: 'Vegetarian',
        },
        {
            id: 2,
            label: 'Non-Vegetarian',
        },
    ]

    const stoolStatus = [
        { id: 0, label: 'Pending' },
        { id: 1, label: 'Done' },
    ]

    const printingLanguage = [
        { id: 1, label: 'English' },
        { id: 2, label: 'Chinese' },
        { id: 3, label: 'Mix (English & Chinese)' },
    ]

    const countryList = [
        { id: 1, label: 'Malaysia' },
        { id: 2, label: 'Singapore' },
    ]

    const optionalItems = [
        {
            id: 1,
            item: 'Gynecological Sonography',
            price: 120,
        },
        {
            id: 2,
            item: 'Body Composition Test',
            price: 150,
        },
        {
            id: 3,
            item: 'CA15-3',
            price: 60,
        },
        {
            id: 4,
            item: 'CA15-3',
            price: 60,
        },
        {
            id: 5,
            item: 'CA15-3',
            price: 60,
        },
        {
            id: 6,
            item: 'CA15-3',
            price: 60,
        },
    ]
    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader to={RECEPTION_PAGE} title="MEMBER PROFILE" />
            <Box
                sx={{
                    paddingLeft: matches ? '5rem' : '1rem',
                    paddingRight: matches ? '5rem' : '1rem',
                    marginTop: '2rem',
                }}
            >
                <Card sx={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
                    <div
                        style={{
                            textAlign: 'end',
                            paddingLeft: '2rem',
                            paddingRight: '2rem',
                        }}
                    >
                        <Button
                            variant="text"
                            endIcon={
                                <img
                                    src={
                                        isEdit
                                            ? MemberEditDisabledIcon
                                            : MemberEditIcon
                                    }
                                    height={25}
                                    width={25}
                                />
                            }
                            className={
                                isEdit
                                    ? styles.editBttnDisabled
                                    : styles.editBttn
                            }
                            onClick={() => setIsEdit(true)}
                        >
                            Edit
                        </Button>
                    </div>

                    <Grid container spacing={2} sx={{ marginLeft: '0' }}>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            sx={{
                                paddingLeft: '3rem !important',
                                paddingRight: '3rem !important',
                                borderRight: matches ? '2px solid #EDEDED' : '',
                            }}
                        >
                            <Box>
                                <p className={styles.memberProfileTitle}>
                                    Member&apos;s Information
                                </p>
                                <p className={styles.memberProfileFieldTitle}>
                                    Member Fullname
                                </p>
                                <TextField
                                    InputProps={{
                                        classes: {
                                            input: styles.inputField,
                                        },
                                        readOnly: isEdit ? false : true,
                                    }}
                                    name="fullName"
                                    value={formik.values.fullName}
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    className={
                                        isEdit
                                            ? styles.editField
                                            : styles.readOnlyField
                                    }
                                />
                            </Box>
                            <Box>
                                <FormControl>
                                    <FormLabel>
                                        <p
                                            className={
                                                styles.memberProfileFieldTitle
                                            }
                                        >
                                            Gender
                                        </p>
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        name="gender"
                                        value={formik.values.gender}
                                    >
                                        <FormControlLabel
                                            defaultChecked
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
                            </Box>
                            <Box>
                                <Grid container>
                                    <Grid item md={6} xs={12}>
                                        <FormControl>
                                            <FormLabel>
                                                <p
                                                    className={
                                                        styles.memberProfileFieldTitle
                                                    }
                                                >
                                                    Display Member&apos;s Name
                                                </p>
                                            </FormLabel>
                                            <RadioGroup
                                                row
                                                name="displayMember"
                                                value={
                                                    formik.values.displayMember
                                                }
                                                sx={{ marginTop: '8px' }}
                                            >
                                                <FormControlLabel
                                                    value="hide"
                                                    control={<Radio />}
                                                    label="Hide"
                                                />
                                                <FormControlLabel
                                                    value="show"
                                                    control={<Radio />}
                                                    label="Show"
                                                />
                                                <FormControlLabel
                                                    value="replace"
                                                    control={<Radio />}
                                                    label="Replace"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <p
                                            className={
                                                styles.memberProfileFieldTitle
                                            }
                                        >
                                            Replaced Name
                                        </p>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                                readOnly: isEdit ? false : true,
                                            }}
                                            variant="outlined"
                                            size="small"
                                            name="replacedName"
                                            value={formik.values.replacedName}
                                            margin="dense"
                                            fullWidth
                                            className={
                                                isEdit
                                                    ? styles.editField
                                                    : styles.readOnlyField
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <p className={styles.memberProfileFieldTitle}>
                                    Identity No.
                                </p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                        readOnly: isEdit ? false : true,
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    value={formik.values.identityNo}
                                    name="identityNo"
                                    fullWidth
                                    className={
                                        isEdit
                                            ? styles.editField
                                            : styles.readOnlyField
                                    }
                                />
                            </Box>
                            <Box>
                                <Grid container spacing={1}>
                                    <Grid item md={6} xs={12}>
                                        <p
                                            className={
                                                styles.memberProfileFieldTitle
                                            }
                                        >
                                            Date of Birth
                                        </p>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                                readOnly: isEdit ? false : true,
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="dateOfBirth"
                                            value={formik.values.dateOfBirth}
                                            fullWidth
                                            className={
                                                isEdit
                                                    ? styles.editField
                                                    : styles.readOnlyField
                                            }
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <p
                                            className={
                                                styles.memberProfileFieldTitle
                                            }
                                        >
                                            Age
                                        </p>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                                readOnly: isEdit ? false : true,
                                            }}
                                            value={formik.values.age}
                                            name="age"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            className={
                                                isEdit
                                                    ? styles.editField
                                                    : styles.readOnlyField
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <p className={styles.memberProfileFieldTitle}>
                                    Member ID
                                </p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                        readOnly: isEdit ? false : true,
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    value={formik.values.memberId}
                                    name="memberId"
                                    className={
                                        isEdit
                                            ? styles.editField
                                            : styles.readOnlyField
                                    }
                                />
                            </Box>
                            <Box>
                                <p className={styles.memberProfileTitle}>
                                    Contact Information
                                </p>
                                <p className={styles.memberProfileFieldTitle}>
                                    Contact No.
                                </p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                        readOnly: isEdit ? false : true,
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    name="contactNo"
                                    value={formik.values.contactNo}
                                    className={
                                        isEdit
                                            ? styles.editField
                                            : styles.readOnlyField
                                    }
                                />
                                <p className={styles.memberProfileFieldTitle}>
                                    Secondary Contact No.
                                </p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                        readOnly: isEdit ? false : true,
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    name="secondaryContactNo"
                                    value={formik.values.secondaryContactNo}
                                    fullWidth
                                    className={
                                        isEdit
                                            ? styles.editField
                                            : styles.readOnlyField
                                    }
                                />
                                <p className={styles.memberProfileFieldTitle}>
                                    Email Address
                                </p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                        readOnly: isEdit ? false : true,
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    value={formik.values.emailAddress}
                                    name="emailAddress"
                                    className={
                                        isEdit
                                            ? styles.editField
                                            : styles.readOnlyField
                                    }
                                />
                                <p className={styles.memberProfileFieldTitle}>
                                    Address
                                </p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                        readOnly: isEdit ? false : true,
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    value={formik.values.addressLine1}
                                    name="addressLine1"
                                    className={
                                        isEdit
                                            ? styles.editField
                                            : styles.readOnlyField
                                    }
                                />
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                        readOnly: isEdit ? false : true,
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    value={formik.values.addressLine2}
                                    name="addressLine2"
                                    className={
                                        isEdit
                                            ? styles.editField
                                            : styles.readOnlyField
                                    }
                                />
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                        readOnly: isEdit ? false : true,
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    value={formik.values.addressLine3}
                                    name="addressLine3"
                                    className={
                                        isEdit
                                            ? styles.editField
                                            : styles.readOnlyField
                                    }
                                />
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                        readOnly: isEdit ? false : true,
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    value={formik.values.addressLine4}
                                    name="addressLine4"
                                    fullWidth
                                    className={
                                        isEdit
                                            ? styles.editField
                                            : styles.readOnlyField
                                    }
                                />
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                        readOnly: isEdit ? false : true,
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    value={formik.values.addressLine5}
                                    name="addressLine5"
                                    className={
                                        isEdit
                                            ? styles.editField
                                            : styles.readOnlyField
                                    }
                                />
                                <Autocomplete
                                    disablePortal
                                    options={countryList}
                                    classes={{
                                        inputRoot: styles.inputField,
                                        listbox: styles.inputField,
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            name="addressLine6"
                                            {...params}
                                            size="small"
                                            fullWidth
                                            margin="dense"
                                            className={
                                                isEdit
                                                    ? styles.editField
                                                    : styles.readOnlyField
                                            }
                                            value={formik.values.addressLine6}
                                        />
                                    )}
                                />
                                {/* <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={
                                        isEdit
                                            ? styles.editField
                                            : styles.readOnlyField
                                    }
                                >
                                    <Select
                                        className={styles.inputField}
                                        name="addressLine6"
                                        value={formik.values.addressLine6}
                                        inputProps={{
                                            readOnly: isEdit ? false : true,
                                        }}
                                    >
                                        {countryList.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.inputField
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl> */}
                            </Box>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            sx={{
                                paddingLeft: '3rem !important',
                                paddingRight: '3rem !important',
                            }}
                        >
                            <p className={styles.memberProfileTitle}>
                                Package Information
                            </p>
                            <p className={styles.memberProfileFieldTitle}>
                                Package
                            </p>
                            <FormControl
                                size="small"
                                fullWidth
                                margin="dense"
                                className={styles.editField}
                            >
                                <Select
                                    className={styles.inputField}
                                    name="package"
                                    value={formik.values.package}
                                    onChange={formik.handleChange}
                                >
                                    {packageOption.map(
                                        (item: any, index: number) => {
                                            return (
                                                <MenuItem
                                                    value={item.id}
                                                    key={index}
                                                    className={
                                                        styles.inputField
                                                    }
                                                >
                                                    {item.label}
                                                </MenuItem>
                                            )
                                        }
                                    )}
                                </Select>
                            </FormControl>
                            <p className={styles.memberProfileFieldTitle}>
                                Optional Items
                            </p>
                            <TextField
                                InputProps={{
                                    classes: {
                                        input: styles.inputField,
                                        adornedEnd: styles.adornedEndCss,
                                    },
                                    endAdornment: (
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignContent: 'center',
                                                backgroundColor: isEdit
                                                    ? '#ededed'
                                                    : '#3adebb',
                                                height: 42,
                                                width: 100,
                                                borderRadius: '0px 5px 5px 0px',
                                                cursor: 'pointer',
                                                pointerEvents: isEdit
                                                    ? 'none'
                                                    : 'unset',
                                            }}
                                            onClick={() =>
                                                setOpenOptionalItemModal(true)
                                            }
                                        >
                                            <InputAdornment
                                                position="start"
                                                sx={{ marginRight: '0' }}
                                            >
                                                <img
                                                    src={SearchIcon}
                                                    width="25"
                                                    height="25"
                                                    style={{
                                                        marginLeft: 'auto',
                                                        marginRight: 'auto',
                                                    }}
                                                />
                                            </InputAdornment>
                                        </div>
                                    ),
                                }}
                                name="optionalItems"
                                value={formik.values.optionalItems}
                                fullWidth
                                variant="outlined"
                                size="small"
                                margin="dense"
                                className={styles.editField}
                                placeholder="Search..."
                                onChange={formik.handleChange}
                            />
                            <div>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ padding: '5px' }}>
                                                <p
                                                    className={
                                                        styles.memberProfileFieldTitle
                                                    }
                                                >
                                                    Items
                                                </p>
                                            </TableCell>
                                            <TableCell sx={{ padding: '5px' }}>
                                                <p
                                                    className={
                                                        styles.memberProfileFieldTitle
                                                    }
                                                >
                                                    Price (RM)
                                                </p>
                                            </TableCell>
                                            <TableCell
                                                sx={{ padding: '5px' }}
                                            ></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {optionalItems.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <TableRow key={index}>
                                                        <TableCell>
                                                            <p
                                                                className={
                                                                    styles.tableValue
                                                                }
                                                            >
                                                                {item.item}
                                                            </p>
                                                        </TableCell>
                                                        <TableCell>
                                                            <p
                                                                className={
                                                                    styles.tableValue
                                                                }
                                                            >
                                                                {item.price}
                                                            </p>
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            <p
                                                                className={
                                                                    styles.cancelItem
                                                                }
                                                            >
                                                                Cancel Item
                                                            </p>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            }
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                            <p className={styles.memberProfileFieldTitle}>
                                Diet
                            </p>
                            <FormControl
                                size="small"
                                fullWidth
                                margin="dense"
                                className={styles.editField}
                            >
                                <Select
                                    className={styles.inputField}
                                    name="diet"
                                    value={formik.values.diet}
                                    onChange={formik.handleChange}
                                >
                                    {diet.map((item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.id}
                                                key={index}
                                                className={styles.inputField}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                            <p className={styles.memberProfileFieldTitle}>
                                Stool Sampling Status
                            </p>
                            <FormControl
                                size="small"
                                fullWidth
                                margin="dense"
                                className={styles.editField}
                            >
                                <Select
                                    className={styles.inputField}
                                    name="stoolStatus"
                                    value={formik.values.stoolStatus}
                                    onChange={formik.handleChange}
                                >
                                    {stoolStatus.map(
                                        (item: any, index: number) => {
                                            return (
                                                <MenuItem
                                                    value={item.id}
                                                    key={index}
                                                    className={
                                                        styles.inputField
                                                    }
                                                >
                                                    {item.label}
                                                </MenuItem>
                                            )
                                        }
                                    )}
                                </Select>
                            </FormControl>
                            <p className={styles.memberProfileFieldTitle}>
                                Printing Language
                            </p>
                            <FormControl
                                size="small"
                                fullWidth
                                margin="dense"
                                className={styles.editField}
                            >
                                <Select
                                    className={styles.inputField}
                                    name="printingLanguage"
                                    value={formik.values.printingLanguage}
                                    onChange={formik.handleChange}
                                >
                                    {printingLanguage.map(
                                        (item: any, index: number) => {
                                            return (
                                                <MenuItem
                                                    value={item.id}
                                                    key={index}
                                                    className={
                                                        styles.inputField
                                                    }
                                                >
                                                    {item.label}
                                                </MenuItem>
                                            )
                                        }
                                    )}
                                </Select>
                            </FormControl>
                            <div>
                                <FormControl variant="standard">
                                    <FormLabel>
                                        <p
                                            className={
                                                styles.memberProfileFieldTitle
                                            }
                                        >
                                            Special Conditions
                                        </p>
                                    </FormLabel>
                                    <FormGroup sx={{ marginTop: '10px' }}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    // onChange={handleChange}
                                                    name="wheechair_use"
                                                />
                                            }
                                            classes={{
                                                label: styles.checkBoxLabel,
                                            }}
                                            label="Wheelchair user"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    // onChange={handleChange}
                                                    name="request_early_meal"
                                                />
                                            }
                                            classes={{
                                                label: styles.checkBoxLabel,
                                            }}
                                            label="Request early meal"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    // onChange={handleChange}
                                                    name="with_companion"
                                                />
                                            }
                                            classes={{
                                                label: styles.checkBoxLabel,
                                            }}
                                            label="With companion"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </div>

                            <div>
                                <FormControl variant="standard">
                                    <FormLabel>
                                        <p
                                            className={
                                                styles.memberProfileFieldTitle
                                            }
                                        >
                                            Preferred Language
                                        </p>
                                    </FormLabel>
                                    <FormGroup sx={{ marginTop: '10px' }}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    // onChange={handleChange}
                                                    name="en_language"
                                                />
                                            }
                                            classes={{
                                                label: styles.checkBoxLabel,
                                            }}
                                            label="EN"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    // onChange={handleChange}
                                                    name="bm_language"
                                                />
                                            }
                                            classes={{
                                                label: styles.checkBoxLabel,
                                            }}
                                            label="BM"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    // onChange={handleChange}
                                                    name="cn_language"
                                                />
                                            }
                                            classes={{
                                                label: styles.checkBoxLabel,
                                            }}
                                            label="CN"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </div>
                            <p className={styles.memberProfileTitle}>
                                Consent Form
                            </p>
                            <Stack
                                spacing={2}
                                sx={{ marginTop: '1rem', width: '50%' }}
                            >
                                <Button
                                    variant="contained"
                                    className={styles.consentFormBttn}
                                    onClick={() => setOpenHIVModal(true)}
                                >
                                    HIV Consent Form
                                </Button>
                                <Button
                                    variant="contained"
                                    className={styles.consentFormBttn}
                                    onClick={() => setOpenPDPAModal(true)}
                                >
                                    PDPA Consent Form
                                </Button>
                                <Button
                                    variant="contained"
                                    className={styles.consentFormBttn}
                                >
                                    Letter of Authorization
                                </Button>
                                <Button
                                    variant="contained"
                                    className={styles.consentFormViewDocBttn}
                                    startIcon={<img src={PDFIcon} />}
                                >
                                    View Document
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        sx={{
                            paddingLeft: '3rem',
                            paddingRight: '3rem',
                        }}
                    >
                        <Grid item md={12} xs={12}>
                            <p className={styles.memberProfileTitle}>Remark</p>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField
                                InputProps={{
                                    classes: { input: styles.inputField },
                                    readOnly: isEdit ? false : true,
                                }}
                                variant="outlined"
                                size="small"
                                margin="dense"
                                fullWidth
                                multiline
                                rows={4}
                                value={formik.values.remark}
                                name="remark"
                                className={
                                    isEdit
                                        ? styles.editField
                                        : styles.readOnlyField
                                }
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}></Grid>
                        <Grid item md={6} xs={12}>
                            <Grid
                                container
                                spacing={3}
                                sx={{ marginTop: '5px' }}
                            >
                                <Grid item md={6} xs={12}>
                                    {isEdit ? (
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            className={
                                                styles.cancelAppointmentBttn
                                            }
                                            onClick={() => setIsEdit(false)}
                                        >
                                            Cancel
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            className={
                                                styles.cancelAppointmentBttn
                                            }
                                            onClick={() =>
                                                setOpenCancelAppointmentModal(
                                                    true
                                                )
                                            }
                                        >
                                            Cancel Appointment
                                        </Button>
                                    )}
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        className={styles.saveBttn}
                                        onClick={() =>
                                            setOpenSaveAppointmentModal(true)
                                        }
                                    >
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
                {openCancelAppointmentModal ? (
                    <CancelAppointmentModal
                        open={openCancelAppointmentModal}
                        setOpen={setOpenCancelAppointmentModal}
                        matches={matches}
                    />
                ) : null}
                {openSaveAppointmentModal ? (
                    <SaveAppointmentModal
                        open={openSaveAppointmentModal}
                        setOpen={setOpenSaveAppointmentModal}
                        matches={matches}
                    />
                ) : null}
                {openOptionalItemModal ? (
                    <OptionalItemModal
                        open={openOptionalItemModal}
                        setOpen={setOpenOptionalItemModal}
                        optionalItems={optionalItems}
                    />
                ) : null}
                {openHIVModal ? (
                    <HIVConsentFormModal
                        open={openHIVModal}
                        setOpen={setOpenHIVModal}
                        matches={matches}
                    />
                ) : null}

                {openPDPAModal ? (
                    <PDPAConsentFormModal
                        open={openPDPAModal}
                        setOpen={setOpenPDPAModal}
                        matches={matches}
                    />
                ) : null}
            </Box>
        </>
    )
}
export default MemberProfile
