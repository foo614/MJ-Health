import {
    Box,
    Button,
    Divider,
    FormControl,
    InputBase,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import ResponsiveAppBar from 'components/AppBar'
import ScreeningRoomInfoHeader from 'components/ScreeningRoom/ScreeningRoomInfoHeader'
import UserHeader from 'components/UserHeader'
import { SONOGRAPHY_PAGE } from 'constant'
import ButtonCard from 'pages/Radiology-Reporting/components/details/buttonCard'
import CustomizedTables from 'pages/Radiology-Reporting/components/details/table'
import { useState } from 'react'

const CommentSuggestionList = () => {
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
        </Box>
    )
}

const SonographyDetail = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [openMedicalHistory, setOpenMedicalHistory] = useState<boolean>(false)
    const [openAllergyDrugHx, setOpenAllergyDrugHx] = useState<boolean>(false)
    const [openViewComment, setOpenViewComment] = useState<boolean>(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedType, setSelectedType] = useState('report')
    const [mammography, setMammography] = useState('')

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
                        onClick={() => handleButtonChange('report')}
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
    }: {
        label: string
        isEdit: boolean
        arrayField: string[]
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
                    {arrayField.map((x, key) => (
                        <Grid xs={12} key={key}>
                            <FormControl
                                sx={{
                                    px: 3,
                                    pb: key + 1 == arrayField.length ? 3 : 1,
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

    const RowItemCard = ({
        name,
        arrayField,
    }: {
        name: string
        arrayField: string[]
    }) => {
        return (
            <Grid xs={12}>
                <Box sx={{ p: 3 }}>
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
                                            {name}
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Box
                                            sx={{
                                                my: 3,
                                            }}
                                        />
                                    </Grid>
                                    {arrayField.map((x, key) => (
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
                            <ItemCard
                                label="Current"
                                isEdit={true}
                                arrayField={arrayField}
                            />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <ItemCard
                                label="22-09-2020"
                                isEdit={false}
                                arrayField={arrayField}
                            />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <ItemCard
                                label="22-09-2018"
                                isEdit={false}
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
        'Liver',
        'Intrahepatic Bile Duct',
        'Common Bile Duct',
        'Gall Bladdar',
        'Right Kidney',
        'Left Kidney',
        'Hapatic Portal Vein',
        'Pancreas',
        'Spleen and Others',
    ]

    const sampleData = ['Sample', 'Sample', 'Sample', 'Sample']

    const handleDisplay = (index: number) => {
        if (index == 0) {
            return <RowItemCard name="Abdomen" arrayField={abdomenData} />
        } else if (index == 1) {
            return <CommentTable />
        } else if (index == 2) {
            return <RowItemCard name="Carotid" arrayField={abdomenData} />
        } else if (index == 3 || index == 4) {
            return <RowItemCard name="Sample" arrayField={sampleData} />
        } else {
            return <RowItemCard name="B" arrayField={abdomenData} />
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
                    <CustomizedTables />
                </Grid>
            </Box>
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
            <ScreeningRoomInfoHeader
                title="BONE MINERAL DENSITY"
                to={SONOGRAPHY_PAGE}
            />
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
                        <>
                            <ButtonCard
                                label="Medical History"
                                onClick={() => setOpenMedicalHistory(true)}
                            />
                            <ButtonCard
                                label="Allergy/ Drug Hx"
                                onClick={() => setOpenAllergyDrugHx(true)}
                            />
                        </>
                        <Box sx={{ py: matches ? 8 : 0 }}>
                            <ButtonCard
                                label="View Comment"
                                onClick={() => setOpenViewComment(true)}
                            />
                        </Box>
                    </Stack>
                </Grid>
                <Grid md={10}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ bgcolor: 'transparent', mt: 5 }}>
                            <Box sx={{ bgcolor: '#fff' }}>
                                <Grid container>
                                    <RowButtonOptions />

                                    <RowButton />
                                    {selectedType === 'report' &&
                                        handleDisplay(currentIndex)}
                                    {selectedType === 'report' && (
                                        <Grid xs={12} sx={{ p: 3 }}>
                                            <Grid xs={12} sx={{ mt: 5 }}>
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
                                    {selectedType === 'comment' && (
                                        <CommentSuggestionList />
                                    )}
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default SonographyDetail
