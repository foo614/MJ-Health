import AddCircle from '@mui/icons-material/AddCircle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Unstable_Grid2'
import CustomTable from 'components/CustomTable'
import { useState } from 'react'
import AxillaryDialog from './axillary-dialog'
import CommentDialog from './comment-dialog'

const abdomenData = [
    {
        name: 'Abdomen',
        list: [
            {
                name: 'Liver',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: false,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'Intrahepatic Bile Duct',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: false,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'Common Bile Duct',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: false,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'Gall Bladdar',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: false,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'Right Kidney',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: false,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'Left Kidney',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: false,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'Hapatic Portal Vein',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: false,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'Pancreas',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: false,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'Spleen and Others',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
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
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: true,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'Plaque/ Others',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
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
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: true,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'ICA-PSV (CM/S)',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: true,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'CIA-EDV (CM/S)',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: true,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'ICA/CCA PSV ratio',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: true,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'VA PSV (CM/S)',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
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
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: false,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'Sample',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: false,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'Sample',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
                hasInput: false,
                hasLength: false,
                hasDimension: false,
            },
            {
                name: 'Sample',
                option: ['Normal', 'Adnormal', 'Normal But Detected', 'Others'],
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

const SonographyExamReport = () => {
    const [mammography, setMammography] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [openBreastComment, setOpenBreastComment] = useState<boolean>(false)
    const [openBreastAxillary, setOpenBreastAxillary] = useState<boolean>(false)

    const handleMammography = (event: SelectChangeEvent) => {
        setMammography(event.target.value)
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
                <Grid2 container spacing={1}>
                    <Grid2 xs={12}>
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
                    </Grid2>
                    {hasLeftRightLabel && (
                        <>
                            <Grid2
                                xs={6}
                                sx={{
                                    pl: 2,
                                    color: '#211D4E',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                }}
                            >
                                Right
                            </Grid2>
                            <Grid2
                                xs={6}
                                sx={{
                                    pr: 2,
                                    color: '#211D4E',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                }}
                            >
                                Left
                            </Grid2>
                        </>
                    )}

                    {arrayField.map((x: any, key: any) =>
                        x.list?.map((y: any, key2: any, array: any) => (
                            <>
                                <Grid2 xs={y.hasLength ? 8 : 12} key={key2}>
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
                                            <Grid2 container>
                                                <Grid2 xs={5} key={key2}>
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
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        cm
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                            defaultValue={'-'}
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
                                                </Grid2>
                                                <Grid2
                                                    xs={1}
                                                    sx={{
                                                        alignSelf: 'center',
                                                    }}
                                                >
                                                    x
                                                </Grid2>
                                                <Grid2 xs={5} key={key2}>
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
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        cm
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                            defaultValue={'-'}
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
                                                </Grid2>
                                                <Grid2
                                                    xs={1}
                                                    sx={{
                                                        alignSelf: 'center',
                                                    }}
                                                >
                                                    x
                                                </Grid2>
                                            </Grid2>
                                        ) : y.hasInput ? (
                                            x.name === 'Gray Scale Imaging' ? (
                                                <Grid2 container spacing={2}>
                                                    <Grid2 xs={6}>
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
                                                    </Grid2>
                                                    <Grid2 xs={6}>
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
                                                    </Grid2>
                                                </Grid2>
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
                                </Grid2>
                                {y.hasLength && (
                                    <Grid2 xs={4} key={key2}>
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
                                    </Grid2>
                                )}
                            </>
                        ))
                    )}
                </Grid2>
            </Box>
        )
    }

    const RowItemCard = ({ arrayField }: { arrayField: any }) => {
        return (
            <Grid2 xs={12}>
                <Box sx={{ p: 3 }}>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={12} md={3}>
                            <>
                                <Grid2 container>
                                    {arrayField.map((x: any, key: any) => (
                                        <>
                                            <Grid2 xs={12}>
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
                                            </Grid2>
                                            {x.list.map((y: any, key2: any) => (
                                                <Grid2 xs={12} key={key2}>
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
                                                </Grid2>
                                            ))}
                                        </>
                                    ))}
                                </Grid2>
                            </>
                        </Grid2>
                        <Grid2 xs={12} md={3}>
                            <ItemCard
                                label="Current"
                                isEdit={true}
                                hasLeftRightLabel={
                                    arrayField[0].name === 'Gray Scale Imaging'
                                }
                                arrayField={arrayField}
                            />
                        </Grid2>
                        <Grid2 xs={12} md={3}>
                            <ItemCard
                                label="22-09-2020"
                                isEdit={false}
                                hasLeftRightLabel={
                                    arrayField[0].name === 'Gray Scale Imaging'
                                }
                                arrayField={arrayField}
                            />
                        </Grid2>
                        <Grid2 xs={12} md={3}>
                            <ItemCard
                                label="22-09-2018"
                                isEdit={false}
                                hasLeftRightLabel={
                                    arrayField[0].name === 'Gray Scale Imaging'
                                }
                                arrayField={arrayField}
                            />
                        </Grid2>
                    </Grid2>
                </Box>
            </Grid2>
        )
    }

    const TableFooter = () => {
        return (
            <Grid
                container
                spacing={3}
                sx={{
                    px: 2,
                    pb: 2,
                    backgroundColor: '#F1F1F1',
                    zIndex: 9999999,
                }}
            >
                <Grid item xs>
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
                </Grid>
                <Grid item xs>
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
                </Grid>
            </Grid>
        )
    }

    const CommentTable = () => {
        return (
            <Box sx={{ p: 3 }}>
                <Grid2 xs={12}>
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
                </Grid2>
                <Grid2 xs={12}>
                    <CustomTable footer={<TableFooter />} />
                </Grid2>
            </Box>
        )
    }

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

    const handleChange = (newValue: number) => {
        setCurrentIndex(newValue)
    }

    const RowButton = () => {
        return (
            <Grid2 xs={12}>
                <Box sx={{ background: '#f9f9f9' }}>
                    <Divider light sx={{ my: 2 }} />
                    <Grid2
                        container
                        spacing={2}
                        px={2}
                        justifyContent={'space-around'}
                        overflow="auto"
                    >
                        {buttonsData.map((button, index) => (
                            <Grid2 xs key={index}>
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
                            </Grid2>
                        ))}
                    </Grid2>
                    <Divider light sx={{ my: 2 }} />
                </Box>
            </Grid2>
        )
    }

    return (
        <>
            <RowButton />
            {handleDisplay(currentIndex)}

            {openBreastComment && (
                <CommentDialog
                    open={openBreastComment}
                    setOpen={setOpenBreastComment}
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

export default SonographyExamReport
