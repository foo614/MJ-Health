import { Grid, Checkbox, Stack, TextField, Button } from '@mui/material'
import * as React from 'react'
import styles from '../../_health-management-consultation-info.module.scss'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle'
const Nutrients = () => {
    // field 1 : Morning Meal
    // field 2: Anytime with capsule
    // field 3: anytime with sachet
    // field 4: use Directions
    // field 5: before & after
    // field 6: anytime with tablet
    const theme = useTheme()
    const smUp = useMediaQuery(theme.breakpoints.up('sm'))
    const [printInLanguage, setPrintInLanguage] = useState<string>('CN')
    const [currentBttn, setCurrentBttn] = useState<number>(1)
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
                <p className={styles.nutrietsTextFieldText}>
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
                                <p className={styles.nutrietsTextFieldText}>
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
                <p className={styles.nutrietsTextFieldText}>Anytime</p>
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
                                <p className={styles.nutrietsTextFieldText}>
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
                <p className={styles.nutrietsTextFieldText}>x</p>
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
                                <p className={styles.nutrietsTextFieldText}>
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
                <p className={styles.nutrietsTextFieldText}>Use Directions:</p>
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
                    <p className={styles.nutrietsTextFieldText}>Meal</p>
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
                                    <p className={styles.nutrietsTextFieldText}>
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
                                    <p className={styles.nutrietsTextFieldText}>
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
            <div className={styles.nutrients_section_div}>
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
                                    <p className={styles.nutrientsItem}>
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
                <div style={{ marginTop: '1rem' }}>
                    <Grid container>
                        <Grid item md={6} xs={12}></Grid>
                        <Grid item md={6} xs={12}>
                            <Stack
                                direction={{
                                    xs: 'column',
                                    sm: 'row',
                                    md: 'row',
                                    lg: 'row',
                                    xl: 'row',
                                }}
                                spacing={2}
                                alignItems="center"
                            >
                                <div
                                    style={{
                                        marginLeft: smUp ? 'auto' : 'unset',
                                    }}
                                >
                                    <p className={styles.printInText}>
                                        Print In
                                    </p>
                                </div>

                                {printInLanguage === 'CN' ? (
                                    <>
                                        <Button
                                            variant="text"
                                            startIcon={
                                                <CircleIcon
                                                    className={
                                                        styles.printInSelectedIcon
                                                    }
                                                />
                                            }
                                            sx={{
                                                color: '#211d4e',
                                                fontWeight: '700',
                                            }}
                                        >
                                            {printInLanguage}
                                        </Button>
                                        <Button
                                            variant="text"
                                            startIcon={
                                                <CircleIcon
                                                    className={
                                                        styles.printInUnselectedIcon
                                                    }
                                                />
                                            }
                                            sx={{
                                                color: '#dddddd',
                                            }}
                                            onClick={() =>
                                                setPrintInLanguage('ENG')
                                            }
                                        >
                                            ENG
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            variant="text"
                                            startIcon={
                                                <CircleIcon
                                                    className={
                                                        styles.printInUnselectedIcon
                                                    }
                                                />
                                            }
                                            onClick={() =>
                                                setPrintInLanguage('CN')
                                            }
                                            sx={{
                                                color: '#dddddd',
                                            }}
                                        >
                                            CN
                                        </Button>
                                        <Button
                                            variant="text"
                                            startIcon={
                                                <CircleIcon
                                                    className={
                                                        styles.printInSelectedIcon
                                                    }
                                                />
                                            }
                                            sx={{
                                                color: '#211d4e',
                                                fontWeight: '700',
                                            }}
                                        >
                                            {printInLanguage}
                                        </Button>
                                    </>
                                )}
                                <Button
                                    variant="contained"
                                    className={styles.saveBttn}
                                    sx={{ width: '150px' }}
                                >
                                    Save
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}
export default Nutrients
