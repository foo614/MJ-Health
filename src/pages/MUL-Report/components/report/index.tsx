import {
    Button,
    Divider,
    FormControl,
    InputAdornment,
    InputBase,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles'
import ResponsiveAppBar from 'components/AppBar'
import CustomModal from 'components/Modal'
import EditIcon from 'images/member-edit.png'
import { Dispatch, SetStateAction, useState } from 'react'
import UserHeader from '../../../../components/UserHeader'
import ButtonCard from '../../../Radiology-Reporting/components/details/buttonCard'
import Header from '../../../Radiology-Reporting/components/details/header'
import CustomizedTables from '../../../Radiology-Reporting/components/details/table'
import ViewCommentModal from './modal'

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: 'transparent',
    },
})
type StyledTabProps = {
    label: string
}
const AntTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    fontWeight: 500,
    // marginRight: theme.spacing(1),
    color: '#5A567B',
    backgroundColor: '#DDDDDD',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.08)',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    '&:hover': {
        color: '#40a9ff',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: '#211D4E',
        fontWeight: 600,
        background: '#FFF',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'red',
    },
}))

type TabPanelProps = {
    children?: React.ReactNode
    dir?: string
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

const CommentSuggestionList = () => {
    return (
        <>
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
                <CustomizedTables />
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
        </>
    )
}
function MULReportDetailTable() {
    //for tab
    const [currentIndex, setCurrentIndex] = useState(0)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [isEdit, setIsEdit] = useState(false)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentIndex(newValue)
        setSelectedType('report')
        setIsEdit(false)
    }

    const [selectedType, setSelectedType] = useState('report')

    const handleButtonChange = (type: string) => {
        setSelectedType(type)
    }

    //sidemenu
    const [openMedicalHistory, setOpenMedicalHistory] = useState<boolean>(false)
    const [openAllergyDrugHx, setOpenAllergyDrugHx] = useState<boolean>(false)
    const [openViewComment, setOpenViewComment] = useState<boolean>(false)

    //for mammography
    const [mammography, setMammography] = useState('')

    const handleMammography = (event: SelectChangeEvent) => {
        setMammography(event.target.value)
    }

    const RowButtonOptions = ({
        index,
        setIsEdit,
        isEdit,
    }: {
        index: number
        setIsEdit: Dispatch<SetStateAction<boolean>>
        isEdit: boolean
    }) => {
        return (
            <>
                <Grid container sx={{ flexGrow: 1, mb: 2 }} spacing={2}>
                    <Grid xs md={'auto'}>
                        <Button
                            variant="contained"
                            size={matches ? 'medium' : 'small'}
                            sx={{
                                background:
                                    selectedType === 'report'
                                        ? '#fff'
                                        : '#EDEDED',
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
                    </Grid>
                    <Grid xs>
                        {index === 0 && (
                            <Button
                                variant="contained"
                                size={matches ? 'medium' : 'small'}
                                sx={{
                                    background:
                                        selectedType === 'comment'
                                            ? '#fff'
                                            : '#EDEDED',
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
                        )}
                    </Grid>
                    <Grid xs md={3} mdOffset={2}>
                        {isEdit ? (
                            <Button
                                variant="contained"
                                size={matches ? 'medium' : 'small'}
                                onClick={() => setIsEdit(!isEdit)}
                                sx={{
                                    fontWeight: 600,
                                    marginLeft: '1em',
                                    float: 'right',
                                }}
                            >
                                Confirm Changes
                            </Button>
                        ) : (
                            <Button
                                variant="text"
                                size={matches ? 'medium' : 'small'}
                                sx={{ float: 'right' }}
                                endIcon={
                                    <img
                                        src={EditIcon}
                                        height={matches ? 25 : 15}
                                        width={matches ? 25 : 15}
                                    />
                                }
                                onClick={() => setIsEdit(!isEdit)}
                            >
                                Edit
                            </Button>
                        )}
                    </Grid>
                    <Divider light sx={{ my: 3 }} />
                </Grid>
            </>
        )
    }

    const arrayList = [
        {
            name: 'ENT Examination',
            items: [
                'Ear',
                'Nasal Pharynx',
                'Neck',
                'Nose',
                'Oral Pharynx',
                'Throat',
            ],
        },
    ]

    const arrayList2 = [
        {
            name: 'Lung Function Test',
            items: ['FVC', 'FEV1', 'MMF'],
        },
    ]

    const arrayList3 = [
        {
            name: 'Periphreal Vascular Screening',
            items: ['Right', 'Left'],
        },
    ]

    const ItemCard = ({
        label,
        isEdit,
    }: {
        label: string
        isEdit: boolean
    }) => {
        return (
            <Box
                sx={{
                    background: isEdit ? '#DDDDDD' : '#F9F9F9',
                    borderRadius: '8px',
                }}
            >
                <Grid container>
                    <Grid xs={12}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#211D4E',
                                fontSize: '16px',
                                fontWeight: 600,
                                textAlign: 'center',
                                mt: 2,
                            }}
                        >
                            {label}
                        </Typography>
                    </Grid>
                    {arrayList[0].items.map((x, key) => (
                        <Grid xs={12} key={key}>
                            <FormControl
                                sx={{
                                    px: 3,
                                    pb:
                                        key + 1 == arrayList[0].items.length
                                            ? 3
                                            : 1,
                                    pt: key == 0 ? 2 : 0,
                                }}
                                size="small"
                                fullWidth
                            >
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
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Normal'}>Normal</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        )
    }

    const ItemCard2 = ({
        label,
        isEdit,
    }: {
        label: string
        isEdit: boolean
    }) => {
        return (
            <Box
                sx={{
                    background: isEdit ? '#DDDDDD' : '#F9F9F9',
                    borderRadius: '8px',
                }}
            >
                <Grid container>
                    <Grid xs={12}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#211D4E',
                                fontSize: '16px',
                                fontWeight: 600,
                                textAlign: 'center',
                                mt: 2,
                            }}
                        >
                            {label}
                        </Typography>
                    </Grid>
                    {arrayList2[0].items.map((x, key) => (
                        <Grid xs={12} key={key}>
                            <>
                                <Grid container>
                                    <Grid xs={6}>
                                        <FormControl
                                            sx={{
                                                pl: 5,
                                                pr: 1,
                                                pb:
                                                    key + 1 ==
                                                    arrayList[0].items.length
                                                        ? 3
                                                        : 1,
                                                pt: key == 0 ? 2 : 0,
                                            }}
                                            size="small"
                                            fullWidth
                                        >
                                            <OutlinedInput
                                                id="outlined-adornment-weight"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        l
                                                    </InputAdornment>
                                                }
                                                aria-describedby="outlined-weight-helper-text"
                                                inputProps={{
                                                    'aria-label': 'weight',
                                                }}
                                                type="number"
                                                sx={{
                                                    background: '#fff',
                                                    boxShadow:
                                                        '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                                    borderRadius: '3px',
                                                }}
                                                size="small"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid xs={6}>
                                        <FormControl
                                            sx={{
                                                pr: 5,
                                                pl: 1,
                                                pb:
                                                    key + 1 ==
                                                    arrayList[0].items.length
                                                        ? 3
                                                        : 1,
                                                pt: key == 0 ? 2 : 0,
                                            }}
                                            size="small"
                                            fullWidth
                                        >
                                            <OutlinedInput
                                                id="outlined-adornment-weight"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        %
                                                    </InputAdornment>
                                                }
                                                aria-describedby="outlined-weight-helper-text"
                                                inputProps={{
                                                    'aria-label': 'weight',
                                                }}
                                                type="number"
                                                sx={{
                                                    background: '#fff',
                                                    boxShadow:
                                                        '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                                    borderRadius: '3px',
                                                }}
                                                size="small"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        )
    }

    const ItemCard3 = ({
        label,
        isEdit,
    }: {
        label: string
        isEdit: boolean
    }) => {
        return (
            <Box
                sx={{
                    background: isEdit ? '#DDDDDD' : '#F9F9F9',
                    borderRadius: '8px',
                }}
            >
                <Grid container>
                    <Grid xs={12}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#211D4E',
                                fontSize: '16px',
                                fontWeight: 600,
                                textAlign: 'center',
                                mt: 2,
                            }}
                        >
                            {label}
                        </Typography>
                    </Grid>
                    {arrayList3[0].items.map((x, key) => (
                        <Grid xs={12} key={key}>
                            <>
                                <Grid container>
                                    <Grid xs={12}>
                                        <FormControl
                                            sx={{
                                                px: 5,
                                                pb:
                                                    key + 1 ==
                                                    arrayList[0].items.length
                                                        ? 3
                                                        : 1,
                                                pt: key == 0 ? 2 : 0,
                                            }}
                                            size="small"
                                            fullWidth
                                        >
                                            <OutlinedInput
                                                id="outlined-adornment-weight"
                                                aria-describedby="outlined-weight-helper-text"
                                                inputProps={{
                                                    'aria-label': 'weight',
                                                }}
                                                type="number"
                                                sx={{
                                                    background: '#fff',
                                                    boxShadow:
                                                        '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                                    borderRadius: '3px',
                                                }}
                                                size="small"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </>
                        </Grid>
                    ))}
                    <Grid sx={{ mt: 2 }}>&nbsp;</Grid>
                    {arrayList3[0].items.map((x, key) => (
                        <Grid xs={12} key={key}>
                            <>
                                <Grid container>
                                    <Grid xs={12}>
                                        <FormControl
                                            sx={{
                                                px: 5,
                                                pb:
                                                    key + 1 ==
                                                    arrayList[0].items.length
                                                        ? 3
                                                        : 1,
                                                pt: key == 0 ? 2 : 0,
                                            }}
                                            size="small"
                                            fullWidth
                                        >
                                            <OutlinedInput
                                                id="outlined-adornment-weight"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        Centimeter (s)
                                                    </InputAdornment>
                                                }
                                                aria-describedby="outlined-weight-helper-text"
                                                inputProps={{
                                                    'aria-label': 'weight',
                                                }}
                                                type="number"
                                                sx={{
                                                    background: '#fff',
                                                    boxShadow:
                                                        '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                                    borderRadius: '3px',
                                                }}
                                                size="small"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </>
                        </Grid>
                    ))}
                    <Grid sx={{ mb: 1 }}>&nbsp;</Grid>
                </Grid>
            </Box>
        )
    }

    const RowItemCard = ({
        name,
        isEdit,
    }: {
        name: string
        isEdit: boolean
    }) => {
        if (name == 'ENT Examination' || name == 'X-Ray') {
            return (
                <Grid xs={12}>
                    <div>
                        <Grid container spacing={2}>
                            <Grid xs={12} md={3}>
                                <>
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
                                                Items
                                            </Typography>
                                        </Grid>
                                        <Grid xs={12}>
                                            <Box
                                                sx={{
                                                    my: 3,
                                                }}
                                            />
                                        </Grid>
                                        {arrayList[0].items.map((x, key) => (
                                            <Grid xs={12} key={key}>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: '#211D4E',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        mb: 1,
                                                    }}
                                                >
                                                    {x}
                                                </Typography>
                                                <Divider
                                                    sx={{
                                                        mb: 2,
                                                    }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </>
                            </Grid>
                            <Grid xs={12} md={3}>
                                <ItemCard label="Current" isEdit={isEdit} />
                            </Grid>
                            <Grid xs={12} md={3}>
                                <ItemCard label="22-09-2020" isEdit={false} />
                            </Grid>
                            <Grid xs={12} md={3}>
                                <ItemCard label="22-09-2018" isEdit={false} />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            )
        } else if (name == 'Lung Funtion Test') {
            return (
                <>
                    <Grid xs={12}>
                        <div>
                            <Grid container spacing={2}>
                                <Grid xs={12} md={3}>
                                    <>
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
                                                    Items
                                                </Typography>
                                            </Grid>
                                            <Grid xs={12}>
                                                <Box
                                                    sx={{
                                                        my: 3,
                                                    }}
                                                />
                                            </Grid>
                                            {arrayList2[0].items.map(
                                                (x, key) => (
                                                    <Grid xs={12} key={key}>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                color: '#211D4E',
                                                                fontSize:
                                                                    '16px',
                                                                fontWeight: 600,
                                                                mb: 1,
                                                            }}
                                                        >
                                                            {x}
                                                        </Typography>
                                                        <Divider
                                                            sx={{
                                                                mb: 2,
                                                            }}
                                                        />
                                                    </Grid>
                                                )
                                            )}
                                        </Grid>
                                    </>
                                </Grid>
                                <Grid xs={12} md={3}>
                                    <ItemCard2
                                        label="Current"
                                        isEdit={isEdit}
                                    />
                                </Grid>
                                <Grid xs={12} md={3}>
                                    <ItemCard2
                                        label="22-09-2020"
                                        isEdit={false}
                                    />
                                </Grid>
                                <Grid xs={12} md={3}>
                                    <ItemCard2
                                        label="22-09-2018"
                                        isEdit={false}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Divider />
                    <Grid xs={12}>
                        <Box
                            sx={{
                                my: 3,
                            }}
                        />
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Grid container>
                            <Grid xs={6} md={3} sx={{ margin: 'auto 0' }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#211D4E',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                    }}
                                >
                                    {'Height'}
                                </Typography>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <FormControl
                                    sx={{
                                        pb: 1,
                                    }}
                                    size="small"
                                    fullWidth
                                >
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                Meter (s)
                                            </InputAdornment>
                                        }
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                        type="number"
                                        sx={{
                                            background: '#fff',
                                            boxShadow:
                                                '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                            borderRadius: '3px',
                                        }}
                                        size="small"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Divider
                            sx={{
                                my: 1,
                            }}
                        />
                    </Grid>
                    <Grid xs={12} md={6}></Grid>
                    <Grid xs={12} md={6}>
                        <Grid container>
                            <Grid xs={6} md={3} sx={{ margin: 'auto 0' }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#211D4E',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                    }}
                                >
                                    {'Weight'}
                                </Typography>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <FormControl
                                    sx={{
                                        pb: 1,
                                    }}
                                    size="small"
                                    fullWidth
                                >
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                Kilogram (s)
                                            </InputAdornment>
                                        }
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                        type="number"
                                        sx={{
                                            background: '#fff',
                                            boxShadow:
                                                '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                            borderRadius: '3px',
                                        }}
                                        size="small"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            )
        } else {
            return (
                <>
                    <Grid xs={12} sx={{ mb: 4 }}>
                        <div>
                            <Grid container spacing={2}>
                                <Grid xs={12} md={3}>
                                    <>
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
                                                    ABI
                                                </Typography>
                                            </Grid>
                                            <Grid xs={12}>
                                                <Box
                                                    sx={{
                                                        my: 3,
                                                    }}
                                                />
                                            </Grid>
                                            {arrayList3[0].items.map(
                                                (x, key) => (
                                                    <Grid xs={12} key={key}>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                color: '#211D4E',
                                                                fontSize:
                                                                    '16px',
                                                                fontWeight: 600,
                                                                mb: 1,
                                                            }}
                                                        >
                                                            {x}
                                                        </Typography>
                                                        <Divider
                                                            sx={{
                                                                mb: 2,
                                                            }}
                                                        />
                                                    </Grid>
                                                )
                                            )}
                                            <Grid xs={12}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        color: '#219B8E',
                                                        fontSize: '20px',
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    BaPWV
                                                </Typography>
                                            </Grid>
                                            <Grid xs={12}>
                                                <Box
                                                    sx={{
                                                        my: 3,
                                                    }}
                                                />
                                            </Grid>
                                            {arrayList3[0].items.map(
                                                (x, key) => (
                                                    <Grid xs={12} key={key}>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                color: '#211D4E',
                                                                fontSize:
                                                                    '16px',
                                                                fontWeight: 600,
                                                                mb: 1,
                                                            }}
                                                        >
                                                            {x}
                                                        </Typography>
                                                        <Divider
                                                            sx={{
                                                                mb: 2,
                                                            }}
                                                        />
                                                    </Grid>
                                                )
                                            )}
                                        </Grid>
                                    </>
                                </Grid>
                                <Grid xs={12} md={3}>
                                    <ItemCard3
                                        label="Current"
                                        isEdit={isEdit}
                                    />
                                </Grid>
                                <Grid xs={12} md={3}>
                                    <ItemCard3
                                        label="22-09-2020"
                                        isEdit={false}
                                    />
                                </Grid>
                                <Grid xs={12} md={3}>
                                    <ItemCard3
                                        label="22-09-2018"
                                        isEdit={false}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Divider />
                    <Grid xs={12}>
                        <Box
                            sx={{
                                my: 3,
                            }}
                        />
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Grid container>
                            <Grid xs={6} md={3} sx={{ margin: 'auto 0' }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#211D4E',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                    }}
                                >
                                    {'Height'}
                                </Typography>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <FormControl
                                    sx={{
                                        pb: 1,
                                    }}
                                    size="small"
                                    fullWidth
                                >
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                Meter (s)
                                            </InputAdornment>
                                        }
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                        type="number"
                                        sx={{
                                            background: '#fff',
                                            boxShadow:
                                                '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                            borderRadius: '3px',
                                        }}
                                        size="small"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Divider
                            sx={{
                                my: 1,
                            }}
                        />
                    </Grid>
                    <Grid xs={12} md={6}></Grid>
                    <Grid xs={12} md={6}>
                        <Grid container>
                            <Grid xs={6} md={3} sx={{ margin: 'auto 0' }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#211D4E',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                    }}
                                >
                                    {'Weight'}
                                </Typography>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <FormControl
                                    sx={{
                                        pb: 1,
                                    }}
                                    size="small"
                                    fullWidth
                                >
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                Kilogram (s)
                                            </InputAdornment>
                                        }
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                        type="number"
                                        sx={{
                                            background: '#fff',
                                            boxShadow:
                                                '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                            borderRadius: '3px',
                                        }}
                                        size="small"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            )
        }
    }
    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />
            <Header />
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
                        <Box sx={{ py: matches ? 8 : 0 }}>
                            <ButtonCard
                                label="Final Comment & Suggestion"
                                onClick={() => setOpenViewComment(true)}
                            />
                        </Box>
                    </Stack>
                </Grid>
                <Grid md={10}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ bgcolor: 'transparent', mt: 5 }}>
                            <AntTabs
                                value={currentIndex}
                                onChange={handleChange}
                                aria-label="ant example"
                                variant="scrollable"
                            >
                                <AntTab label="ENT Examination" />
                                <AntTab label="Lung Funtion Test" />
                                <AntTab label="Peripheral Vascular Screening" />
                                <AntTab label="X-Ray" />
                            </AntTabs>
                            <Box sx={{ p: 3, bgcolor: '#fff' }}>
                                <TabPanel value={currentIndex} index={0}>
                                    <Grid container>
                                        <RowButtonOptions
                                            index={0}
                                            setIsEdit={setIsEdit}
                                            isEdit={isEdit}
                                        />
                                        {selectedType === 'report' && (
                                            <RowItemCard
                                                name="ENT Examination"
                                                isEdit={isEdit}
                                            />
                                        )}
                                        {/* {selectedType === 'report' && (
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
                                        )} */}
                                        {selectedType === 'comment' && (
                                            <CommentSuggestionList />
                                        )}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value={currentIndex} index={1}>
                                    <Grid container>
                                        <RowButtonOptions
                                            index={1}
                                            setIsEdit={setIsEdit}
                                            isEdit={isEdit}
                                        />
                                        {selectedType === 'report' && (
                                            <RowItemCard
                                                name="Lung Funtion Test"
                                                isEdit={isEdit}
                                            />
                                        )}

                                        {/* {selectedType === 'report' && (
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
                                        )} */}
                                        {selectedType === 'comment' && (
                                            <CommentSuggestionList />
                                        )}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value={currentIndex} index={2}>
                                    <RowButtonOptions
                                        index={2}
                                        setIsEdit={setIsEdit}
                                        isEdit={isEdit}
                                    />
                                    {selectedType === 'report' && (
                                        <RowItemCard
                                            name="Peripheral Vascular Screening"
                                            isEdit={isEdit}
                                        />
                                    )}

                                    {/* {selectedType === 'report' && (
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
                                    )} */}
                                    {selectedType === 'comment' && (
                                        <CommentSuggestionList />
                                    )}
                                </TabPanel>
                                <TabPanel value={currentIndex} index={3}>
                                    <RowButtonOptions
                                        index={3}
                                        setIsEdit={setIsEdit}
                                        isEdit={isEdit}
                                    />
                                    {selectedType === 'report' && (
                                        <RowItemCard
                                            name="X-Ray"
                                            isEdit={isEdit}
                                        />
                                    )}

                                    {selectedType === 'report' && (
                                        <>
                                            {/* <Grid xs={12} sx={{ mt: 5 }}>
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
                                            </Grid> */}
                                            {/* <Grid xs={12} md={2} mdOffset={10}>
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    fullWidth
                                                    sx={{ mt: 3 }}
                                                >
                                                    Save
                                                </Button>
                                            </Grid> */}
                                        </>
                                    )}
                                    {selectedType === 'comment' && (
                                        <CommentSuggestionList />
                                    )}
                                </TabPanel>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
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

            {openViewComment && (
                <ViewCommentModal
                    open={openViewComment}
                    handleClose={() => setOpenViewComment(false)}
                />
            )}
        </>
    )
}

export default MULReportDetailTable
