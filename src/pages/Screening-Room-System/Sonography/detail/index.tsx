import AddCircle from '@mui/icons-material/AddCircle'
import {
    Box,
    Button,
    Divider,
    FormControl,
    Grid as Grid2,
    InputAdornment,
    InputBase,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    TextField,
    Typography,
    styled,
    tableCellClasses,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import ResponsiveAppBar from 'components/AppBar'
import CustomModal from 'components/Modal'
import ScreeningRoomInfoHeader from 'components/ScreeningRoom/InfoHeader'
import ViewCommentModal from 'components/ScreeningRoom/ViewCommentModal'
import UserHeader from 'components/UserHeader'
import { SONOGRAPHY_PAGE } from 'constant'
import Search from 'images/preview.png'
import ButtonCard from 'pages/Radiology-Reporting/components/details/buttonCard'
import CustomizedTables from 'pages/Radiology-Reporting/components/details/table'
import { useState } from 'react'
import styles from './_sonography-detail.module.scss'
import AxillaryDialog from './components/axillary-dialog'
import CommentDialog from './components/comment-dialog'

const CommentSuggestionList = () => {
    return (
        <Box sx={{ px: 3, mb: 1 }}>
            <Divider component="div" />
            <Grid xs={12} sx={{ py: 2 }}>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#219B8E',
                        fontSize: '20px',
                        fontWeight: 600,
                    }}
                >
                    Overview
                </Typography>
            </Grid>
            <Grid xs={12}>
                <InputBase
                    id="outlined-search"
                    placeholder="Search..."
                    type="search"
                    sx={{
                        background: '#F9F9F9',
                        boxShadow: '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset',
                        borderRadius: '5px',
                        minWidth: '100%',
                        padding: '10px 15px',
                    }}
                />
                <CustomizedTables footer />
            </Grid>
            <Grid xs={12} md={2} mdOffset={10}>
                <Button
                    size="small"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3 }}
                >
                    Save
                </Button>
            </Grid>
        </Box>
    )
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: '#fff',
        // color: '#5A567B',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        color: '#211D4E',
        fontWeight: 600,
        background: '#fff',
        borderBottom: 'none',
    },
    [`&.${tableCellClasses.footer}`]: {
        fontSize: 14,
        color: '#211D4E',
        fontWeight: 700,
        background: '#fff',
        borderBottom: 'none',
    },
}))
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))
function createData(item: string, price: number) {
    return { item, price }
}

const rows = [
    createData('Gynecological Sonography', 120),
    createData('Body Composition Test', 150),
    createData('CA15-3', 60),
    createData('CA125', 60),
    createData('Homocysteine', 78),
    createData('Gynecological Sonography', 120),
    createData('Body Composition Test', 150),
    createData('CA15-3', 60),
    createData('CA125', 60),
    createData('Homocysteine', 78),
    createData('Gynecological Sonography', 120),
    createData('Body Composition Test', 150),
    createData('CA15-3', 60),
    createData('CA125', 60),
    createData('Homocysteine', 78),
]

const AddOnList = () => {
    return (
        <Box sx={{ px: 3, mb: 1 }}>
            <Divider component="div" />
            <Grid xs={12} sx={{ py: 2 }}>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#219B8E',
                        fontSize: '20px',
                        fontWeight: 600,
                    }}
                >
                    Add On Service
                </Typography>
            </Grid>
            <Grid xs={12}>
                <div>
                    <Grid
                        container
                        sx={{
                            border: '2px #EDEDED solid',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                    >
                        <Grid
                            xs={12}
                            sx={{
                                background: '#FBFBFB',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#5A567B',
                                    fontSize: 16,
                                    px: '25px',
                                    py: '13px',
                                }}
                            >
                                Optional Items
                            </Typography>
                        </Grid>
                        <Grid xs={12} sx={{ p: 3 }}>
                            <InputBase
                                id="outlined-search"
                                placeholder="Search..."
                                type="search"
                                sx={{
                                    background: '#F9F9F9',
                                    boxShadow:
                                        '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset',
                                    borderRadius: '5px',
                                    minWidth: '100%',
                                    paddingLeft: 2,
                                    // padding: '10px 15px',
                                }}
                                endAdornment={
                                    <Button
                                        variant="contained"
                                        aria-label="toggle password visibility"
                                        component="label"
                                        sx={{ px: 5 }}
                                    >
                                        <img src={Search} width={'25px'} />
                                    </Button>
                                }
                            />
                        </Grid>
                        <Grid xs={12} sx={{ px: 3, mb: 3 }}>
                            <TableContainer
                                component={Paper}
                                sx={{ boxShadow: 'none' }}
                            >
                                <Table
                                    size="small"
                                    stickyHeader
                                    sx={{
                                        position: 'sticky',
                                        top: 0,
                                        background: '#FDFDFD',
                                    }}
                                >
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>
                                                Items
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                Price (RM)
                                            </StyledTableCell>
                                            <StyledTableCell></StyledTableCell>
                                            <StyledTableCell></StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                                <Box
                                    className={styles.tableContainer}
                                    sx={{
                                        height: '200px',
                                        overflow: 'auto',
                                    }}
                                >
                                    <Table size="small">
                                        <TableBody>
                                            {rows.map((row) => (
                                                <StyledTableRow key={row.item}>
                                                    <StyledTableCell>
                                                        {row.item}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">
                                                        {row.price}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">
                                                        <Button
                                                            size="small"
                                                            variant="text"
                                                        >
                                                            Delete
                                                        </Button>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Box>
                                <Table
                                    size="small"
                                    stickyHeader
                                    sx={{
                                        position: 'sticky',
                                        top: 0,
                                        borderTop: '2px solid #EDEDED',
                                    }}
                                >
                                    <TableFooter>
                                        <TableRow
                                            className={styles.stickyHeader}
                                        >
                                            <StyledTableCell>
                                                Total Item Selected: 12
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                Total Amount: 660
                                            </StyledTableCell>
                                            <StyledTableCell></StyledTableCell>
                                            <StyledTableCell></StyledTableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Divider sx={{ color: '#EDEDED' }} />
            <Grid xs={12} md={2} mdOffset={10}>
                <Button
                    size="small"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3 }}
                >
                    Save
                </Button>
            </Grid>
        </Box>
    )
}

const SonographyDetail = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [openMedicalHistory, setOpenMedicalHistory] = useState<boolean>(false)
    const [openAllergyDrugHx, setOpenAllergyDrugHx] = useState<boolean>(false)
    const [openViewComment, setOpenViewComment] = useState<boolean>(false)

    const [openPersonalComplaint, setOpenPersonalComplaint] =
        useState<boolean>(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedType, setSelectedType] = useState('report')
    const [mammography, setMammography] = useState('')
    const [openBreastComment, setOpenBreastComment] = useState<boolean>(false)
    const [openBreastAxillary, setOpenBreastAxillary] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(false)

    const handleMammography = (event: SelectChangeEvent) => {
        setMammography(event.target.value)
    }

    const handleButtonChange = (type: string) => {
        setSelectedType(type)
    }

    const handleChange = (newValue: number) => {
        setCurrentIndex(newValue)
        setSelectedType('report')
    }

    const RowButtonOptions = () => {
        return (
            <>
                <Grid xs={12} sx={{ p: 3 }}>
                    <Button
                        variant="contained"
                        size={matches ? 'medium' : 'small'}
                        sx={{
                            background:
                                selectedType === 'report' ? '#fff' : '#EDEDED',
                            boxShadow:
                                '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                            borderRadius: '5px',
                            color:
                                selectedType === 'report'
                                    ? '#211D4E'
                                    : '#5A567B',
                            fontWeight: 600,
                            marginRight: '1em',
                            '&:hover': {
                                color: '#fff', // Change font color to white on hover
                            },
                        }}
                        onClick={() => handleButtonChange('report')}
                    >
                        Exam. Report
                    </Button>
                    <Button
                        variant="contained"
                        size={matches ? 'medium' : 'small'}
                        sx={{
                            background:
                                selectedType === 'addon' ? '#fff' : '#EDEDED',
                            boxShadow:
                                '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                            borderRadius: '5px',
                            color:
                                selectedType === 'addon'
                                    ? '#211D4E'
                                    : '#5A567B',
                            fontWeight: 600,
                            marginRight: '1em',
                            '&:hover': {
                                color: '#fff', // Change font color to white on hover
                            },
                        }}
                        onClick={() => handleButtonChange('addon')}
                    >
                        Add On Service
                    </Button>
                    <Button
                        variant="contained"
                        size={matches ? 'medium' : 'small'}
                        sx={{
                            background:
                                selectedType === 'comment' ? '#fff' : '#EDEDED',
                            boxShadow:
                                '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                            borderRadius: '5px',
                            color:
                                selectedType === 'comment'
                                    ? '#211D4E'
                                    : '#5A567B',
                            fontWeight: 600,
                            '&:hover': {
                                color: '#fff', // Change font color to white on hover
                            },
                        }}
                        onClick={() => handleButtonChange('comment')}
                    >
                        Comment & Suggestion
                    </Button>
                </Grid>
            </>
        )
    }

    const ItemCard = ({
        label,
        isEdit,
        arrayField,
        hasLeftRightLabel,
    }: {
        label: string
        isEdit: boolean
        arrayField: any
        hasLeftRightLabel: boolean
    }) => {
        return (
            <Box
                sx={{
                    background: isEdit ? '#DDDDDD' : '#F9F9F9',
                    borderRadius: '8px',
                }}
            >
                <Grid container spacing={1}>
                    <Grid xs={12}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#211D4E',
                                fontSize: '16px',
                                fontWeight: 600,
                                textAlign: 'center',
                                mt: 1,
                                mb: hasLeftRightLabel ? 0 : 2,
                            }}
                        >
                            {label}
                        </Typography>
                    </Grid>
                    {hasLeftRightLabel && (
                        <>
                            <Grid
                                xs={6}
                                sx={{
                                    pl: 2,
                                    color: '#211D4E',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                }}
                            >
                                Right
                            </Grid>
                            <Grid
                                xs={6}
                                sx={{
                                    pr: 2,
                                    color: '#211D4E',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                }}
                            >
                                Left
                            </Grid>
                        </>
                    )}

                    {arrayField.map(
                        (x: any, key: any) =>
                            x.list?.map((y: any, key2: any, array: any) => (
                                <>
                                    <Grid xs={y.hasLength ? 8 : 12} key={key2}>
                                        <FormControl
                                            sx={{
                                                pl: 1,
                                                pr: y.hasLength ? 0 : 1,
                                                pb:
                                                    key2 + 1 === array.length
                                                        ? 11
                                                        : 0.2,
                                            }}
                                            size="small"
                                            fullWidth
                                        >
                                            {y.hasDimension ? (
                                                <Grid container>
                                                    <Grid xs={5} key={key2}>
                                                        <FormControl
                                                            sx={{
                                                                pr: y.hasLength
                                                                    ? 1
                                                                    : 0,
                                                            }}
                                                            fullWidth
                                                        >
                                                            <TextField
                                                                size="small"
                                                                fullWidth
                                                                InputProps={{
                                                                    endAdornment:
                                                                        (
                                                                            <InputAdornment position="end">
                                                                                cm
                                                                            </InputAdornment>
                                                                        ),
                                                                }}
                                                                defaultValue={
                                                                    '-'
                                                                }
                                                                sx={{
                                                                    background:
                                                                        '#fff',
                                                                    boxShadow:
                                                                        '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                                                    borderRadius:
                                                                        '3px',
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid
                                                        xs={1}
                                                        sx={{
                                                            alignSelf: 'center',
                                                        }}
                                                    >
                                                        x
                                                    </Grid>
                                                    <Grid xs={5} key={key2}>
                                                        <FormControl
                                                            sx={{
                                                                pr: y.hasLength
                                                                    ? 1
                                                                    : 0,
                                                            }}
                                                            fullWidth
                                                        >
                                                            <TextField
                                                                size="small"
                                                                fullWidth
                                                                InputProps={{
                                                                    endAdornment:
                                                                        (
                                                                            <InputAdornment position="end">
                                                                                cm
                                                                            </InputAdornment>
                                                                        ),
                                                                }}
                                                                defaultValue={
                                                                    '-'
                                                                }
                                                                sx={{
                                                                    background:
                                                                        '#fff',
                                                                    boxShadow:
                                                                        '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                                                    borderRadius:
                                                                        '3px',
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid
                                                        xs={1}
                                                        sx={{
                                                            alignSelf: 'center',
                                                        }}
                                                    >
                                                        x
                                                    </Grid>
                                                </Grid>
                                            ) : y.hasInput ? (
                                                x.name ===
                                                'Gray Scale Imaging' ? (
                                                    <Grid container spacing={2}>
                                                        <Grid xs={6}>
                                                            <TextField
                                                                fullWidth
                                                                defaultValue="-"
                                                                size="small"
                                                                sx={{
                                                                    background:
                                                                        '#fff',
                                                                    borderRadius:
                                                                        '5px',
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid xs={6}>
                                                            <TextField
                                                                fullWidth
                                                                defaultValue="-"
                                                                size="small"
                                                                sx={{
                                                                    background:
                                                                        '#fff',
                                                                    borderRadius:
                                                                        '5px',
                                                                }}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                ) : (
                                                    <TextField
                                                        fullWidth
                                                        defaultValue="-"
                                                        size="small"
                                                        sx={{
                                                            background: '#fff',
                                                            borderRadius: '5px',
                                                        }}
                                                    />
                                                )
                                            ) : (
                                                <Select
                                                    labelId="demo-select-small-label"
                                                    id="demo-select-small"
                                                    value={mammography}
                                                    onChange={handleMammography}
                                                    sx={{
                                                        background: '#fff',
                                                    }}
                                                    placeholder="Normal"
                                                    disabled={!isEdit}
                                                >
                                                    {y.option.map(
                                                        (z: any, key3: any) => (
                                                            <MenuItem
                                                                value={z}
                                                                key={key3}
                                                            >
                                                                {z}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </Select>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    {y.hasLength && (
                                        <Grid xs={4} key={key2}>
                                            <FormControl
                                                sx={{
                                                    pr: y.hasLength ? 1 : 0,
                                                    py: 0,
                                                }}
                                                fullWidth
                                                size="small"
                                            >
                                                <TextField
                                                    fullWidth
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                cm
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    size="small"
                                                    defaultValue={'-'}
                                                    sx={{
                                                        background: '#fff',
                                                        boxShadow:
                                                            '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                                        borderRadius: '5px',
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid>
                                    )}
                                </>
                            ))
                    )}
                </Grid>
            </Box>
        )
    }

    const RowItemCard = ({ arrayField }: { arrayField: any }) => {
        return (
            <Grid xs={12}>
                <Box sx={{ p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={3}>
                            <>
                                <Grid container>
                                    {arrayField.map((x: any, key: any) => (
                                        <>
                                            <Grid xs={12}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        color: '#219B8E',
                                                        fontSize: '20px',
                                                        fontWeight: 600,
                                                        mt: key == 0 ? 0 : 3,
                                                        mb:
                                                            arrayField[0]
                                                                .name ===
                                                            'Gray Scale Imaging'
                                                                ? 5
                                                                : 4.5,
                                                    }}
                                                >
                                                    {x.name}
                                                </Typography>
                                            </Grid>
                                            {x.list.map((y: any, key2: any) => (
                                                <Grid xs={12} key={key2}>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            color: '#211D4E',
                                                            fontSize: '16px',
                                                            fontWeight: 600,
                                                            mb: 1,
                                                        }}
                                                    >
                                                        {y.name}
                                                    </Typography>
                                                    <Divider
                                                        sx={{
                                                            mb: 2,
                                                        }}
                                                    />
                                                </Grid>
                                            ))}
                                        </>
                                    ))}
                                </Grid>
                            </>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <ItemCard
                                label="Current"
                                isEdit={true}
                                hasLeftRightLabel={
                                    arrayField[0].name === 'Gray Scale Imaging'
                                }
                                arrayField={arrayField}
                            />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <ItemCard
                                label="22-09-2020"
                                isEdit={false}
                                hasLeftRightLabel={
                                    arrayField[0].name === 'Gray Scale Imaging'
                                }
                                arrayField={arrayField}
                            />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <ItemCard
                                label="22-09-2018"
                                isEdit={false}
                                hasLeftRightLabel={
                                    arrayField[0].name === 'Gray Scale Imaging'
                                }
                                arrayField={arrayField}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        )
    }

    const buttonsData = [
        { label: 'Abdomen', index: 0 },
        { label: 'Breast', index: 1 },
        { label: 'Carotid', index: 2 },
        { label: 'DVT', index: 3 },
        { label: 'Elasto', index: 4 },
        { label: 'Gynaecology', index: 5 },
        { label: 'Prostate', index: 6 },
        { label: 'Scrotum', index: 7 },
        { label: 'Thyroid', index: 8 },
        { label: 'Others', index: 9 },
    ]

    const abdomenData = [
        {
            name: 'Abdomen',
            list: [
                {
                    name: 'Liver',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Intrahepatic Bile Duct',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Common Bile Duct',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Gall Bladdar',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Right Kidney',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Left Kidney',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Hapatic Portal Vein',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Pancreas',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Spleen and Others',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
            ],
        },
    ]

    const carotidData = [
        {
            name: 'Gray Scale Imaging',
            list: [
                {
                    name: 'Mean Intima-media',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: true,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Plaque/ Others',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: true,
                    hasLength: false,
                    hasDimension: false,
                },
            ],
        },
        {
            name: 'Doppler Measurement',
            list: [
                {
                    name: 'CCA-PSV (CM/S)',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: true,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'ICA-PSV (CM/S)',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: true,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'CIA-EDV (CM/S)',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: true,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'ICA/CCA PSV ratio',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: true,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'VA PSV (CM/S)',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: true,
                    hasLength: false,
                    hasDimension: false,
                },
            ],
        },
    ]

    const sampleData = [
        {
            name: 'Sample',
            list: [
                {
                    name: 'Sample',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Sample',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Sample',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Sample',
                    option: [
                        'Normal',
                        'Adnormal',
                        'Normal But Detected',
                        'Others',
                    ],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
            ],
        },
    ]

    const prostateData = [
        {
            name: 'Prostate',
            list: [
                {
                    name: 'Shape/Size',
                    option: [],
                    hasInput: true,
                    hasLength: true,
                    hasDimension: true,
                },
                {
                    name: 'Volume',
                    option: ['Normal', 'Enlarged'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Cyst',
                    option: ['Single', 'Multiple'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Mass',
                    option: ['Single', 'Multiple'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Calcification',
                    option: ['Central', 'Rt', 'Lt'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
            ],
        },
    ]

    const gynaecologyData = [
        {
            name: 'Uterus',
            list: [
                {
                    name: 'Shape/Size',
                    option: ['Enlarged', 'Normal', 'Anteverted', 'Atrophy'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: true,
                },
                {
                    name: 'IUCD',
                    option: ['Nil', 'Present', 'Absent'],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Uterine cyst',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Nabothian cyst',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Fibroid',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Endometrium',
                    option: ['Normal', 'Thicked'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
            ],
        },
        {
            name: 'Ovary',
            list: [
                {
                    name: 'Right Ovary Size',
                    option: ['Normal', 'Enlarged', 'Atrophy'],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Right Ovarian cyst',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Left Ovary Size',
                    option: ['Normal', 'Enlarged', 'Atrophy'],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Left Ovarian cyst',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
            ],
        },
        {
            name: 'Cul-de-sac',
            list: [
                {
                    name: 'Fluid accumulation',
                    option: ['Absent', 'Present'],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
            ],
        },
    ]

    const scrotumData = [
        {
            name: 'RT Testis',
            list: [
                {
                    name: 'Size',
                    option: ['Normal', 'Enlarged', 'Atrophy'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Echopattern',
                    option: ['Homogenous', 'Heterogenous'],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Epididymis',
                    option: ['Normal', 'Enlarged'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Hydrocele',
                    option: [],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Varicocele',
                    option: ['Absent', 'Present'],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Calcifications',
                    option: ['Absent', 'Single', 'Multiple microlithiasis'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Solid Nodule',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Cyst',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Undescended/Ectopic Testic',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Scrotal Sac Stone',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Diffuse/Focal Enlargement',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
            ],
        },
        {
            name: 'LT Testis',
            list: [
                {
                    name: 'Size',
                    option: ['Normal', 'Enlarged', 'Atrophy'],
                    hasInput: true,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Echopattern',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: true,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Epididymis',
                    option: ['Normal', 'Enlarged', 'Atrophy'],
                    hasInput: true,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Hydrocele',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: true,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Varicocele',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: true,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Calcifications',
                    option: ['Normal', 'Enlarged', 'Atrophy'],
                    hasInput: true,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Solid Nodule',
                    option: ['Normal', 'Enlarged', 'Atrophy'],
                    hasInput: true,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Cyst',
                    option: ['Normal', 'Enlarged', 'Atrophy'],
                    hasInput: true,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Undescended/Ectopic Testic',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: true,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Scrotal Sac Stone',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: true,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Diffuse/Focal Enlargement',
                    option: ['Absent', 'Single', 'Multiple'],
                    hasInput: true,
                    hasLength: false,
                    hasDimension: false,
                },
            ],
        },
    ]

    const thyroidData = [
        {
            name: 'Thyroid',
            list: [
                {
                    name: 'Size',
                    option: ['Normal', 'Enlarged'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Echotexture',
                    option: ['Homogenous', 'Heterogenous'],
                    hasInput: false,
                    hasLength: false,
                    hasDimension: false,
                },
                {
                    name: 'Vascularity',
                    option: ['Normal', 'Hypervascular'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Nodule',
                    option: ['Single', 'Multiple'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Cyst',
                    option: ['Single', 'Multiple'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Calcifications',
                    option: [],
                    hasInput: true,
                    hasLength: true,
                    hasDimension: false,
                },
                {
                    name: 'Cervical Lymph Node',
                    option: ['RT', 'LT'],
                    hasInput: false,
                    hasLength: true,
                    hasDimension: false,
                },
            ],
        },
    ]

    const handleDisplay = (index: number) => {
        if (index == 0) {
            return <RowItemCard arrayField={abdomenData} />
        } else if (index == 1) {
            return <CommentTable />
        } else if (index == 2) {
            return <RowItemCard arrayField={carotidData} />
        } else if (index == 3 || index == 4) {
            return <RowItemCard arrayField={sampleData} />
        } else if (index == 5) {
            return <RowItemCard arrayField={gynaecologyData} />
        } else if (index == 6) {
            return <RowItemCard arrayField={prostateData} />
        } else if (index == 7) {
            return <RowItemCard arrayField={scrotumData} />
        } else if (index == 8) {
            return <RowItemCard arrayField={thyroidData} />
        } else {
            return <></>
        }
    }

    const CommentTable = () => {
        return (
            <Box sx={{ p: 3 }}>
                <Grid xs={12}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#219B8E',
                            fontSize: '20px',
                            fontWeight: 600,
                        }}
                    >
                        Overview
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <CustomizedTables footer={<TableFooter />} />
                </Grid>
            </Box>
        )
    }
    const TableFooter = () => {
        return (
            <Grid2
                container
                spacing={3}
                sx={{
                    px: 2,
                    pb: 2,
                    backgroundColor: '#F1F1F1',
                    zIndex: 9999999,
                }}
            >
                <Grid2 item xs>
                    <Button
                        variant="outlined"
                        startIcon={<AddCircle />}
                        sx={{
                            borderRadius: '5px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
                            background: '#fff',
                        }}
                        fullWidth
                    >
                        <Typography
                            color={'#5A567B'}
                            onClick={() => setOpenBreastComment(true)}
                            sx={{ fontWeight: 600 }}
                        >
                            Add New Comment
                        </Typography>
                    </Button>
                </Grid2>
                <Grid2 item xs>
                    <Button
                        variant="outlined"
                        startIcon={<AddCircle />}
                        sx={{
                            borderRadius: '5px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
                            background: '#fff',
                        }}
                        onClick={() => setOpenBreastAxillary(true)}
                        fullWidth
                    >
                        <Typography color={'#5A567B'} sx={{ fontWeight: 600 }}>
                            Add New Axillary
                        </Typography>
                    </Button>
                </Grid2>
            </Grid2>
        )
    }
    const RowButton = () => {
        return (
            <Grid xs={12}>
                <Box sx={{ background: '#f9f9f9' }}>
                    <Divider light sx={{ my: 2 }} />
                    <Grid
                        container
                        spacing={2}
                        px={2}
                        justifyContent={'space-around'}
                    >
                        {buttonsData.map((button, index) => (
                            <Grid xs key={index}>
                                <Button
                                    variant={
                                        currentIndex === button.index
                                            ? 'contained'
                                            : 'outlined'
                                    }
                                    fullWidth
                                    sx={{
                                        borderRadius: '5px',
                                        border: '2px #EDEDED solid',
                                        color:
                                            currentIndex !== button.index
                                                ? '#5A567B'
                                                : '#FFF',
                                        fontWeight: '500',
                                    }}
                                    size="small"
                                    onClick={() => handleChange(button.index)}
                                >
                                    {button.label}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                    <Divider light sx={{ my: 2 }} />
                </Box>
            </Grid>
        )
    }
    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />
            <ScreeningRoomInfoHeader title="SONOGRAPHY" to={SONOGRAPHY_PAGE} />
            <Grid container sx={{ background: '#EDEDED' }}>
                <Grid xs={12} md={2} sx={{ mt: matches ? 4 : 2 }}>
                    <Stack
                        direction={{ xs: 'row', sm: 'column' }}
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        p={{
                            xs: 1,
                        }}
                    >
                        <ButtonCard
                            label="Medical History"
                            onClick={() => setOpenMedicalHistory(true)}
                        />
                        <ButtonCard
                            label="Allergy/ Drug Hx"
                            onClick={() => setOpenAllergyDrugHx(true)}
                        />
                        <ButtonCard
                            label="Personal Complaint"
                            onClick={() => setOpenPersonalComplaint(true)}
                        />
                        <ButtonCard
                            label="View Comment"
                            onClick={() => setOpenViewComment(true)}
                        />
                    </Stack>
                </Grid>
                <Grid xs={12} md={10}>
                    <Box sx={{ bgcolor: '#fff', mt: 5 }}>
                        <Grid container>
                            <RowButtonOptions />

                            {selectedType === 'report' && <RowButton />}
                            {selectedType === 'report' &&
                                handleDisplay(currentIndex)}
                            {selectedType === 'report' && (
                                <Grid xs={12} sx={{ p: 3 }}>
                                    <Grid xs={12}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: '#219B8E',
                                                fontSize: '20px',
                                                fontWeight: 600,
                                            }}
                                        >
                                            Other Comment
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12}>
                                        <TextField
                                            sx={{
                                                borderRadius: '8px',
                                                background: '#F9F9F9',
                                                boxShadow:
                                                    '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset',
                                            }}
                                            fullWidth
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={4}
                                            defaultValue="Type in your message & recommendation."
                                        />
                                    </Grid>
                                    <Grid
                                        container
                                        spacing={2}
                                        justifyContent={'flex-end'}
                                    >
                                        <Grid xs={12} md={3}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                fullWidth
                                                sx={{ mt: 3 }}
                                            >
                                                Save
                                            </Button>
                                        </Grid>
                                        <Grid xs={12} md={3}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                fullWidth
                                                sx={{ mt: 3 }}
                                            >
                                                Confirm
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )}
                            {selectedType === 'addon' && <AddOnList />}
                            {selectedType === 'comment' && (
                                <CommentSuggestionList />
                            )}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            {openBreastComment && (
                <CommentDialog
                    open={openBreastComment}
                    setOpen={setOpenBreastComment}
                />
            )}
            {openMedicalHistory && (
                <CustomModal
                    open={openMedicalHistory}
                    setOpen={setOpenMedicalHistory}
                    title="Medical History"
                    width="md"
                >
                    <Grid container>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Medical History
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>Diabetes</li>
                                <li>Uraemia</li>
                            </ul>
                        </Grid>
                        <Grid xs={12}>
                            <Divider sx={{ my: 2 }} />
                        </Grid>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Previous Surgery
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>Kidney Surgery</li>
                            </ul>
                        </Grid>
                        <Grid xs={12}>
                            <Divider sx={{ my: 2 }} />
                        </Grid>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Family Medical History
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>High Blood Pressure</li>
                                <li>Type 2 Diabetes</li>
                                <li>Cardiovascular Disease</li>
                                <li>Obesity</li>
                                <li>Myocarditis</li>
                                <li>High Blood Pressure</li>
                                <li>Type 2 Diabetes</li>
                                <li>Cardiovascular Disease</li>
                                <li>Obesity</li>
                                <li>Myocarditis</li>
                                <li>High Blood Pressure</li>
                                <li>Type 2 Diabetes</li>
                                <li>Cardiovascular Disease</li>
                                <li>Obesity</li>
                                <li>Myocarditis</li>
                            </ul>
                        </Grid>
                    </Grid>
                </CustomModal>
            )}

            {openAllergyDrugHx && (
                <CustomModal
                    open={openAllergyDrugHx}
                    setOpen={setOpenAllergyDrugHx}
                    title="Allergy/Drug Hx"
                    width="md"
                >
                    <Grid container>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Medication
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>Calories Control</li>
                                <li>Blood Pressure Control</li>
                                <li>Glycemia Manager</li>
                            </ul>
                        </Grid>
                        <Grid xs={12}>
                            <Divider sx={{ my: 2 }} />
                        </Grid>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Allergy History
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>Milk sensitization reaction</li>
                                <li>Logan pulp sensitization reaction</li>
                                <li>
                                    Severe snow fungus sensitization reaction
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </CustomModal>
            )}

            {openPersonalComplaint && (
                <CustomModal
                    open={openPersonalComplaint}
                    setOpen={setOpenPersonalComplaint}
                    title="Personal Complaints"
                    width="md"
                >
                    <Grid container>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Personal Complaints
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <TextField
                                variant="outlined"
                                size="small"
                                margin="dense"
                                multiline
                                rows={8}
                                name="complaint"
                                fullWidth
                                InputProps={{
                                    readOnly: !editMode,
                                }}
                                value="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et"
                            />
                        </Grid>
                        <Grid2
                            container
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid2 item>
                                <Stack spacing={2} direction={'row'}>
                                    <Typography variant="caption">
                                        <b>last update:</b> {'11:11 22-09-2022'}
                                    </Typography>
                                    <Typography variant="caption">
                                        <b>Staff ID:</b> {'0000-0000-0000-0000'}
                                    </Typography>
                                </Stack>
                            </Grid2>
                            <Grid2 item>
                                <Stack spacing={2} direction={'row'}>
                                    <Button
                                        variant="contained"
                                        className={
                                            editMode
                                                ? styles.cancelButton
                                                : styles.editButton
                                        }
                                        onClick={() => setEditMode(!editMode)}
                                    >
                                        {editMode ? 'Cancel' : 'Edit'}
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className={styles.saveButton}
                                        disabled={!editMode}
                                        onClick={() =>
                                            setOpenPersonalComplaint(false)
                                        }
                                    >
                                        Save
                                    </Button>
                                </Stack>
                            </Grid2>
                        </Grid2>
                    </Grid>
                </CustomModal>
            )}

            {openViewComment && (
                <ViewCommentModal
                    open={openViewComment}
                    handleClose={() => setOpenViewComment(false)}
                />
            )}

            {openBreastAxillary && (
                <AxillaryDialog
                    open={openBreastAxillary}
                    setOpen={setOpenBreastAxillary}
                />
            )}
        </>
    )
}

export default SonographyDetail
