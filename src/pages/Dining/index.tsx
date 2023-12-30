import SearchIcon from '@mui/icons-material/Search'
import { Button, Container, Grid } from '@mui/material'
import Box, { BoxProps } from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar.tsx'
import { useState } from 'react'
import styles from './_dining.module.scss'
import CheckOutListTable from './components/checkout-list-table'
import PrintModal from './components/print-modal'
import WaitingListTable from './components/waiting-list-table'

const Dining = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [openPrintModal, setOpenPrintModal] = useState<boolean>(false)
    function Item(props: BoxProps) {
        const { sx, ...other } = props
        return (
            <Box
                sx={{
                    p: 0.5,
                    ...sx,
                }}
                {...other}
            />
        )
    }

    const fakeWaitingListData = [
        {
            seqNo: '001',
            name: 'Jeffery Mohamad Bin Christofa',
            age: 54,
            gender: 'Male',
            package: 'K1',
            meal: 'Vegetarian',
            currentStation: '-',
            checkInAt: '13:05',
            mealCard: 'Print',
            options: 'Check In',
        },
        {
            seqNo: '002',
            name: 'Lok Wing Ching',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'Non-Vegetarian',
            currentStation: 'ENT Examination',
            checkInAt: '13:05',
            mealCard: 'Print',
            options: 'Check In',
        },
        {
            seqNo: '003',
            name: 'Liu Yan',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            currentStation: 'Visual & Ocular Tension Test',
            checkInAt: null,
            mealCard: 'Print',
            options: 'Check In',
        },
        {
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            currentStation: 'Peripheral Vascular Screening',
            checkInAt: null,
            mealCard: 'Print',
            options: 'Check In',
        },
        {
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            currentStation: 'Peripheral Vascular Screening',
            checkInAt: null,
            mealCard: 'Print',
            options: 'Check In',
        },
        {
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            currentStation: 'Peripheral Vascular Screening',
            checkInAt: null,
            mealCard: 'Print',
            options: 'Check In',
        },
        {
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            currentStation: 'Peripheral Vascular Screening',
            checkInAt: null,
            mealCard: 'Print',
            options: 'Check In',
        },
        {
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            currentStation: 'Peripheral Vascular Screening',
            checkInAt: null,
            mealCard: 'Print',
            options: 'Check In',
        },
    ]

    const fakeCheckOutListData = [
        {
            seqNo: '001',
            name: 'Jeffery Mohamad Bin Christofa',
            age: 54,
            gender: 'Male',
            package: 'K1',
            meal: 'Vegetarian',
            remainingStation: '2',
            checkInAt: '13:05',
            checkOutAt: '13:25',
        },
        {
            seqNo: '002',
            name: 'Lok Wing Ching',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'Non-Vegetarian',
            remainingStation: '3',
            checkInAt: '13:05',
            checkOutAt: '13:25',
        },
        {
            seqNo: '003',
            name: 'Liu Yan',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            remainingStation: '5',
            checkInAt: '13:05',
            checkOutAt: '13:25',
        },
        {
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            remainingStation: '5',
            checkInAt: '13:05',
            checkOutAt: '13:25',
        },
        {
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            remainingStation: '5',
            checkInAt: '13:05',
            checkOutAt: '13:25',
        },
        {
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            remainingStation: '5',
            checkInAt: '13:05',
            checkOutAt: '13:25',
        },
        {
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            remainingStation: '5',
            checkInAt: '13:05',
            checkOutAt: '13:25',
        },
        {
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            remainingStation: '5',
            checkInAt: '13:05',
            checkOutAt: '13:25',
        },
        {
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            meal: 'SimpleMeal',
            remainingStation: '5',
            checkInAt: '13:05',
            checkOutAt: '13:25',
        },
    ]
    return (
        <>
            <ResponsiveAppBar />
            <div className={styles.diningHeader}>
                <div
                    className={
                        matches
                            ? styles.diningSearchDiv
                            : styles.diningSearchDivMobile
                    }
                >
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon className={styles.searchIcon} />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        size="small"
                        margin="dense"
                        placeholder="Search..."
                        className={styles.diningSearchInput}
                    />
                </div>
                <div className={styles.diningHeaderTitle}>
                    <p>DINING</p>
                </div>
            </div>
            <Container maxWidth="xl" style={{ marginTop: '1rem' }}>
                <Grid container>
                    <Grid item md={9} xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: matches ? 'row' : 'column',
                                borderRadius: 1,
                            }}
                        >
                            <Item sx={matches ? { paddingLeft: '0px' } : {}}>
                                <Button
                                    variant="contained"
                                    className={styles.diningButton}
                                    size="small"
                                    fullWidth={matches ? false : true}
                                >
                                    <div>
                                        <span
                                            className={
                                                styles.diningButtonNumber
                                            }
                                        >
                                            18
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            className={styles.diningButtonText}
                                        >
                                            Vegetarian
                                        </span>
                                    </div>
                                </Button>
                            </Item>
                            <Item>
                                <Button
                                    variant="contained"
                                    className={styles.diningButton}
                                    size="small"
                                    fullWidth={matches ? false : true}
                                >
                                    <div>
                                        <span
                                            className={
                                                styles.diningButtonNumber
                                            }
                                        >
                                            10
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            className={styles.diningButtonText}
                                        >
                                            Non-Vegetarian
                                        </span>
                                    </div>
                                </Button>
                            </Item>
                            <Item>
                                <Button
                                    variant="contained"
                                    className={styles.diningEarlyMealButton}
                                    size="small"
                                    fullWidth={matches ? false : true}
                                >
                                    <div>
                                        <span
                                            className={
                                                styles.diningEarlyMealButtonNumber
                                            }
                                        >
                                            9
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            className={
                                                styles.diningEarlyMealButtonText
                                            }
                                        >
                                            Early Meal
                                        </span>
                                    </div>
                                </Button>
                            </Item>
                        </Box>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Box
                            sx={{
                                display: 'block',
                                flexDirection: 'row',
                                borderRadius: 1,
                                height: '100%',
                            }}
                        >
                            <Item style={{ height: '100%', textAlign: 'end' }}>
                                <Button
                                    variant="contained"
                                    className={styles.mealSetupButton}
                                    size="small"
                                    fullWidth={matches ? false : true}
                                >
                                    <span
                                        className={styles.mealSetupButtonText}
                                    >
                                        Meal Setup
                                    </span>
                                </Button>
                            </Item>
                        </Box>
                    </Grid>
                </Grid>
                <div style={{ marginTop: '1rem' }}>
                    <WaitingListTable
                        fakeData={fakeWaitingListData}
                        setOpen={setOpenPrintModal}
                    />
                </div>

                <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                    <CheckOutListTable fakeData={fakeCheckOutListData} />
                </div>
                {openPrintModal ? (
                    <PrintModal
                        open={openPrintModal}
                        setOpen={setOpenPrintModal}
                        matches={matches}
                    />
                ) : null}
            </Container>
        </>
    )
}

export default Dining
