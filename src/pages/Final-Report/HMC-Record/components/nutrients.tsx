import { Grid, Stack, Checkbox, TextField, Button } from '@mui/material'
import * as React from 'react'
import styles from '../_hmc-record.module.scss'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CircleIcon from '@mui/icons-material/Circle'
import { useState } from 'react'
const Nutrients = () => {
    const theme = useTheme()
    const smUp = useMediaQuery(theme.breakpoints.up('sm'))
    const [currentBttn, setCurrentBttn] = useState(1)
    const [printInLanguage, setPrintInLanguage] = useState<string>('CN')
    const data = [
        {
            title: 'TriBiotix P+',
            type: {
                field: 1,
            },
        },
        {
            title: 'NTC Omega 3 Fish Oil',
            type: {
                field: 2,
            },
        },
        {
            title: 'Yeast B Complex with Minerals',
            type: {
                field: 2,
            },
        },
        {
            title: 'Protide',
            type: {
                field: 1,
            },
        },
        {
            title: 'Life Vital Fiber Powder',
            type: {
                field: 3,
            },
        },
        {
            title: 'Life Lemon Algae Powder',
            type: {
                field: 3,
            },
        },
        {
            title: 'Life Vision/ Flexible Jelly',
            type: {
                field: 3,
            },
        },
        {
            title: 'Super Phoschol+',
            type: {
                field: 2,
            },
        },
        {
            title: 'Life Berries',
            type: {
                field: 3,
            },
        },
        {
            title: 'Vitamin D3',
            type: {
                field: 6,
            },
        },
        {
            title: 'NuTriShake (Chocolate/Vanilla)',
            type: {
                field: 4,
            },
        },
        {
            title: 'Moringa Pep',
            type: {
                field: 3,
            },
        },
        {
            title: 'Reinsure',
            type: {
                field: 5,
            },
        },
    ]

    const displayField = (item: any) => {
        switch (item.type.field) {
            case 1:
                return morningMealTextField()
            case 2:
                return anytimeTextField(item.type.field)
            case 3:
                return anytimeTextField(item.type.field)
            case 4:
                return directionTextField()
            case 5:
                return beforeAfterTextField()
            case 6:
                return anytimeTextField(item.type.field)
        }
    }

    const morningMealTextField = () => {
        return (
            <Stack direction="row" alignItems="center" spacing={2}>
                <p className={styles.dietary_lifestyle_item}>
                    Morning Before Meal
                </p>
                <TextField
                    InputProps={{
                        classes: {
                            input: styles.inputField,
                        },
                        startAdornment: (
                            <>
                                <p>-</p>
                            </>
                        ),
                        endAdornment: (
                            <>
                                <p className={styles.dietary_lifestyle_item}>
                                    sachet
                                </p>
                            </>
                        ),
                    }}
                    variant="outlined"
                    size="small"
                    margin="dense"
                    name="water_intake"
                    className={styles.textFieldProps}
                />
            </Stack>
        )
    }
    const anytimeTextField = (field: number) => {
        return (
            <Stack direction="row" alignItems="center" spacing={2}>
                <p className={styles.dietary_lifestyle_item}>Anytime</p>
                <TextField
                    InputProps={{
                        classes: {
                            input: styles.inputField,
                        },
                        startAdornment: (
                            <>
                                <p>-</p>
                            </>
                        ),
                        endAdornment: (
                            <>
                                <p className={styles.dietary_lifestyle_item}>
                                    {field === 2
                                        ? 'capsule'
                                        : field === 3
                                          ? 'sachet'
                                          : 'tablet'}
                                </p>
                            </>
                        ),
                    }}
                    variant="outlined"
                    size="small"
                    margin="dense"
                    name="water_intake"
                    className={styles.textFieldProps}
                />
                <p className={styles.dietary_lifestyle_item}>x</p>
                <TextField
                    InputProps={{
                        classes: {
                            input: styles.inputField,
                        },
                        startAdornment: (
                            <>
                                <p>-</p>
                            </>
                        ),
                        endAdornment: (
                            <>
                                <p className={styles.dietary_lifestyle_item}>
                                    times
                                </p>
                            </>
                        ),
                    }}
                    variant="outlined"
                    size="small"
                    margin="dense"
                    name="water_intake"
                    className={styles.textFieldProps}
                />
            </Stack>
        )
    }

    const directionTextField = () => {
        return (
            <Stack direction="row" alignItems="center" spacing={2}>
                <p className={styles.dietary_lifestyle_item}>Use Directions:</p>
                <TextField
                    InputProps={{
                        classes: {
                            input: styles.inputField,
                        },
                        startAdornment: (
                            <>
                                <p>-</p>
                            </>
                        ),
                    }}
                    variant="outlined"
                    size="small"
                    margin="dense"
                    name="water_intake"
                    className={styles.textFieldProps}
                />
            </Stack>
        )
    }

    const beforeAfterTextField = () => {
        return (
            <>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Button
                        variant="contained"
                        size="small"
                        className={
                            currentBttn === 1
                                ? styles.selectedMealBttn
                                : styles.unSelectedMealBttn
                        }
                        onClick={() => setCurrentBttn(1)}
                    >
                        Before
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        className={
                            currentBttn === 2
                                ? styles.selectedMealBttn
                                : styles.unSelectedMealBttn
                        }
                        onClick={() => setCurrentBttn(2)}
                    >
                        After
                    </Button>
                    <p className={styles.dietary_lifestyle_item}>Meal</p>
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ marginTop: '10px' }}
                >
                    <TextField
                        InputProps={{
                            classes: {
                                input: styles.inputField,
                            },
                            startAdornment: (
                                <>
                                    <p>-</p>
                                </>
                            ),
                            endAdornment: (
                                <>
                                    <p
                                        className={
                                            styles.dietary_lifestyle_item
                                        }
                                    >
                                        sachet
                                    </p>
                                </>
                            ),
                        }}
                        variant="outlined"
                        size="small"
                        margin="dense"
                        name="water_intake"
                        className={styles.textFieldProps}
                    />
                    <p>x</p>
                    <TextField
                        InputProps={{
                            classes: {
                                input: styles.inputField,
                            },
                            startAdornment: (
                                <>
                                    <p>-</p>
                                </>
                            ),
                            endAdornment: (
                                <>
                                    <p
                                        className={
                                            styles.dietary_lifestyle_item
                                        }
                                    >
                                        times
                                    </p>
                                </>
                            ),
                        }}
                        variant="outlined"
                        size="small"
                        margin="dense"
                        name="water_intake"
                        className={styles.textFieldProps}
                    />
                </Stack>
            </>
        )
    }

    return (
        <>
            <div style={{ paddingLeft: '30px' }}>
                <Grid container rowSpacing={2}>
                    {data.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid
                                    item
                                    md={4}
                                    sm={3}
                                    xs={12}
                                    sx={{
                                        margin:
                                            item.type.field === 5
                                                ? 'unset'
                                                : 'auto',
                                    }}
                                >
                                    <p
                                        className={
                                            styles.dietary_lifestyle_item
                                        }
                                    >
                                        {item.title}
                                    </p>
                                </Grid>
                                <Grid item md={6} sm={8} xs={12}>
                                    {displayField(item)}
                                </Grid>
                                <Grid
                                    item
                                    md={2}
                                    sm={1}
                                    xs={12}
                                    sx={{ textAlign: smUp ? 'end' : 'start' }}
                                >
                                    <Checkbox
                                        name="nutrients_checkbox"
                                        sx={{ margin: 'auto' }}
                                    />
                                </Grid>
                            </React.Fragment>
                        )
                    })}
                </Grid>
                <Grid container>
                    <Grid item md={12} sm={12} xs={12}>
                        <p className={styles.remark}>Remark</p>
                    </Grid>
                    <Grid item md={4}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <div>
                                <p className={styles.dietary_lifestyle_item}>
                                    Print In
                                </p>
                            </div>

                            <Button
                                variant="text"
                                startIcon={
                                    <CircleIcon
                                        className={
                                            printInLanguage === 'CN'
                                                ? styles.printInSelectedIcon
                                                : styles.printInUnselectedIcon
                                        }
                                    />
                                }
                                sx={
                                    printInLanguage === 'CN'
                                        ? {
                                              color: '#211d4e',
                                              fontWeight: '700',
                                          }
                                        : {
                                              color: '#dddddd',
                                          }
                                }
                                onClick={() => setPrintInLanguage('CN')}
                            >
                                CN
                            </Button>

                            <Button
                                variant="text"
                                startIcon={
                                    <CircleIcon
                                        className={
                                            printInLanguage === 'ENG'
                                                ? styles.printInSelectedIcon
                                                : styles.printInUnselectedIcon
                                        }
                                    />
                                }
                                sx={
                                    printInLanguage === 'ENG'
                                        ? {
                                              color: '#211d4e',
                                              fontWeight: '700',
                                          }
                                        : {
                                              color: '#dddddd',
                                          }
                                }
                                onClick={() => setPrintInLanguage('ENG')}
                            >
                                ENG
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item md={8}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <p className={styles.dietary_lifestyle_item}>
                                Print Main Ingredients of Products
                            </p>
                            <Checkbox />
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Nutrients
