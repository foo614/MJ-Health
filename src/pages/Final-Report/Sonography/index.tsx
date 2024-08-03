import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import Stack from '@mui/material/Stack'
import ResponsiveAppBar from 'components/AppBar'
import FinalReportHeader from 'components/FinalReport/Header'
import UserHeader from 'components/UserHeader'
import { FINAL_REPORT } from 'constant'
import { useState } from 'react'
import EditIcon from 'images/member-edit.png'
import styles from './_sonography.module.scss'
import Divider from '@mui/material/Divider'
import { SelectChangeEvent } from '@mui/material/Select'
import CardContent from '@mui/material/CardContent'
import CommentSuggestionList from 'components/ScreeningRoom/CommentSuggestionList'
import RowButton from './components/row-button'
import RowItemCard from './components/row-item-card'
import SonographyExamReport from 'pages/Screening-Room-System/Sonography/detail/components/exam-report'

const FinalReportSonography = () => {
    const [readonly, setReadonly] = useState<boolean>(true)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedType, setSelectedType] = useState('report')
    const [sonography, setSonography] = useState('')
    const [openBreastComment, setOpenBreastComment] = useState<boolean>(false)
    const [openBreastAxillary, setOpenBreastAxillary] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(false)

    const handleSonography = (event: SelectChangeEvent) => {
        setSonography(event.target.value)
    }

    const handleChange = (newValue: number) => {
        setCurrentIndex(newValue)
        setSelectedType('report')
    }

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
            return (
                <RowItemCard
                    arrayField={abdomenData}
                    readonly={readonly}
                    sonography={sonography}
                    handleSonography={handleSonography}
                />
            )
        } else if (index == 1) {
            // return <CommentTable />
            return <></>
        } else if (index == 2) {
            return (
                <RowItemCard
                    arrayField={carotidData}
                    readonly={readonly}
                    sonography={sonography}
                    handleSonography={handleSonography}
                />
            )
        } else if (index == 3 || index == 4) {
            return (
                <RowItemCard
                    arrayField={sampleData}
                    readonly={readonly}
                    sonography={sonography}
                    handleSonography={handleSonography}
                />
            )
        } else if (index == 5) {
            return (
                <RowItemCard
                    arrayField={gynaecologyData}
                    readonly={readonly}
                    sonography={sonography}
                    handleSonography={handleSonography}
                />
            )
        } else if (index == 6) {
            return (
                <RowItemCard
                    arrayField={prostateData}
                    readonly={readonly}
                    sonography={sonography}
                    handleSonography={handleSonography}
                />
            )
        } else if (index == 7) {
            return (
                <RowItemCard
                    arrayField={scrotumData}
                    readonly={readonly}
                    sonography={sonography}
                    handleSonography={handleSonography}
                />
            )
        } else if (index == 8) {
            return (
                <RowItemCard
                    arrayField={thyroidData}
                    readonly={readonly}
                    sonography={sonography}
                    handleSonography={handleSonography}
                />
            )
        } else {
            return <></>
        }
    }

    return (
        <>
            <ResponsiveAppBar />

            <UserHeader />

            <FinalReportHeader
                title="HEALTH SCREENING REPORT - FINAL REPORT"
                to={FINAL_REPORT}
            />

            <Container maxWidth="xl" sx={{ marginTop: '30px' }}>
                <Card>
                    <CardHeader
                        title={
                            <Grid
                                container
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid>
                                    <p className={styles.cardTitle}>
                                        Sonography
                                    </p>
                                </Grid>
                                <Grid>
                                    <Box>
                                        {readonly ? (
                                            <Button
                                                variant="text"
                                                onClick={() =>
                                                    setReadonly(false)
                                                }
                                            >
                                                <Stack
                                                    direction="row"
                                                    spacing={1}
                                                    alignItems="center"
                                                >
                                                    <span>Edit</span>
                                                    <img
                                                        src={EditIcon}
                                                        alt=""
                                                    />
                                                </Stack>
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                onClick={() =>
                                                    setReadonly(true)
                                                }
                                            >
                                                Confirm Changes
                                            </Button>
                                        )}
                                    </Box>
                                </Grid>
                            </Grid>
                        }
                        titleTypographyProps={{ className: styles.cardTitle }}
                        sx={{ padding: '1rem 1.5rem' }}
                    />

                    <Divider
                        sx={{
                            margin: '1rem 0',
                        }}
                    />

                    {/* {selectedType === 'report' && (
                        <RowButton
                            currentIndex={currentIndex}
                            handleChange={handleChange}
                        />
                    )}

                    <Divider
                        sx={{
                            margin: '1rem 0',
                        }}
                    />

                    <CardContent sx={{ padding: '0 1.5rem' }}>
                        {selectedType === 'report' &&
                            handleDisplay(currentIndex)}
                    </CardContent> */}

                    {selectedType === 'report' && <SonographyExamReport />}

                    <CardContent
                        sx={{ padding: '0 1.5rem', marginTop: '2rem' }}
                    >
                        <CommentSuggestionList readonly={readonly} />
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default FinalReportSonography
