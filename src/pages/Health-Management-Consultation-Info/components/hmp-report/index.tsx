import {
    Grid,
    Stack,
    TableContainer,
    TextField,
    Button,
    ButtonGroup,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import styles from '../../_health-management-consultation-info.module.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
const HMPReport = () => {
    const [currentRankingBttn, setCurrentRankingBttn] = useState<number>(0)
    const theme = useTheme()
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
    return (
        <>
            <div className={styles.hmp_report_build_indices_div}>
                <div className={styles.hmp_report_inner_div}>
                    <p
                        className={styles.hmp_report_title}
                        style={{ marginBottom: '10px' }}
                    >
                        Your Body Build Indices
                    </p>
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                            lg: 'row',
                            xl: 'row',
                        }}
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={1}
                    >
                        <p className={styles.hmp_report_sub_item}>Body Fat %</p>
                        <div>
                            <TextField
                                InputProps={{
                                    classes: {
                                        input: styles.inputField,
                                    },
                                }}
                                variant="outlined"
                                size="small"
                                margin="dense"
                                name="water_intake"
                                className={styles.textFieldProps}
                                fullWidth
                            />
                        </div>
                        <p className={styles.hmp_report_sub_item}>
                            Body Mass Index
                        </p>
                        <div>
                            <TextField
                                InputProps={{
                                    classes: {
                                        input: styles.inputField,
                                    },
                                }}
                                variant="outlined"
                                size="small"
                                margin="dense"
                                name="water_intake"
                                className={styles.textFieldProps}
                                fullWidth
                            />
                        </div>
                        <p className={styles.hmp_report_sub_item}>Result</p>
                        <div>
                            <TextField
                                InputProps={{
                                    classes: {
                                        input: styles.inputField,
                                    },
                                }}
                                variant="outlined"
                                size="small"
                                margin="dense"
                                name="water_intake"
                                className={styles.textFieldProps}
                                fullWidth
                            />
                        </div>
                    </Stack>
                </div>
            </div>
            <div className={styles.hmp_report_inner_div}>
                <p
                    className={styles.hmp_report_title}
                    style={{ marginBottom: '10px' }}
                >
                    Health Risk Groups
                </p>
                <p className={styles.hmp_report_sub_item}>
                    According to your health questionnaire and screening
                    results, you belong to the following risk groups:
                </p>
                <Grid container spacing={4}>
                    <Grid item md={12} xs={12} sm={12} lg={4} xl={4}>
                        <TextField
                            InputProps={{
                                classes: {
                                    input: styles.inputField,
                                },
                            }}
                            variant="outlined"
                            size="small"
                            margin="dense"
                            name="water_intake"
                            className={styles.textFieldProps}
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={12} xs={12} sm={12} lg={4} xl={4}>
                        <TextField
                            InputProps={{
                                classes: {
                                    input: styles.inputField,
                                },
                            }}
                            variant="outlined"
                            size="small"
                            margin="dense"
                            name="water_intake"
                            className={styles.textFieldProps}
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={12} xs={12} sm={12} lg={4} xl={4}>
                        <TextField
                            InputProps={{
                                classes: {
                                    input: styles.inputField,
                                },
                            }}
                            variant="outlined"
                            size="small"
                            margin="dense"
                            name="water_intake"
                            className={styles.textFieldProps}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </div>
            <div className={styles.hmp_report_build_indices_div}>
                <div className={styles.hmp_report_inner_div}>
                    <p
                        className={styles.hmp_report_title}
                        style={{ marginBottom: '10px' }}
                    >
                        Health Evaluation
                    </p>
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                            lg: 'row',
                            xl: 'row',
                        }}
                        spacing={1}
                        alignItems="center"
                    >
                        <p className={styles.hmp_report_sub_item}>
                            Your chronological age is
                        </p>
                        <div>
                            <TextField
                                InputProps={{
                                    classes: {
                                        input: styles.inputField,
                                    },
                                }}
                                variant="outlined"
                                size="small"
                                margin="dense"
                                name="water_intake"
                                className={styles.textFieldProps}
                                sx={{ width: '100px' }}
                            />
                        </div>
                        <p className={styles.hmp_report_sub_item}>
                            years; your health age is
                        </p>
                        <div>
                            <TextField
                                InputProps={{
                                    classes: {
                                        input: styles.inputField,
                                    },
                                }}
                                variant="outlined"
                                size="small"
                                margin="dense"
                                name="water_intake"
                                className={styles.textFieldProps}
                                sx={{ width: '100px' }}
                            />
                        </div>
                        <p className={styles.hmp_report_sub_item}>years.</p>
                    </Stack>
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                            lg: 'row',
                            xl: 'row',
                        }}
                        spacing={1}
                        alignItems="center"
                        sx={{ marginTop: '10px' }}
                    >
                        <p className={styles.hmp_report_sub_item}>
                            The five major factors affecting your health are:
                        </p>
                        <TextField
                            InputProps={{
                                classes: {
                                    input: styles.inputField,
                                },
                            }}
                            variant="standard"
                            size="small"
                            margin="dense"
                            name="water_intake"
                            // className={styles.textFieldProps}
                        />
                    </Stack>
                    <p
                        className={styles.hmp_report_sub_item}
                        style={{ marginTop: '10px' }}
                    >
                        According to MJ Health database analysis, when compared
                        to those without the aforementioned factors, the effects
                        on the independent risk of death are:
                    </p>
                    <div className={styles.hmp_report_inner_div}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            sx={{ background: '#5a567b' }}
                                        >
                                            <p
                                                className={
                                                    styles.hmp_table_head_text
                                                }
                                            >
                                                The five major factors affecting
                                                your health
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            sx={{ background: '#5a567b' }}
                                        >
                                            <p
                                                className={
                                                    styles.hmp_table_head_text
                                                }
                                            >
                                                Risk of death
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                    endAdornment: (
                                                        <>
                                                            <p>Times</p>
                                                        </>
                                                    ),
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                    endAdornment: (
                                                        <>
                                                            <p>Times</p>
                                                        </>
                                                    ),
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                sx={{ textAlign: 'center' }}
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                    endAdornment: (
                                                        <>
                                                            <p>Times</p>
                                                        </>
                                                    ),
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                    endAdornment: (
                                                        <>
                                                            <p>Times</p>
                                                        </>
                                                    ),
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                    endAdornment: (
                                                        <>
                                                            <p>Times</p>
                                                        </>
                                                    ),
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                            lg: 'row',
                            xl: 'row',
                        }}
                        spacing={1}
                        alignItems="center"
                        sx={{ marginTop: '10px' }}
                    >
                        <p className={styles.hmp_report_sub_item}>
                            By following the health management instructions,
                            your health age can be reduced to
                        </p>
                        <div>
                            <TextField
                                InputProps={{
                                    classes: {
                                        input: styles.inputField,
                                    },
                                }}
                                variant="outlined"
                                size="small"
                                margin="dense"
                                name="water_intake"
                                className={styles.textFieldProps}
                                sx={{ width: '100px' }}
                            />
                        </div>
                        <p className={styles.hmp_report_sub_item}>years.</p>
                    </Stack>
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                            lg: 'row',
                            xl: 'row',
                        }}
                        spacing={1}
                        alignItems="center"
                        sx={{ marginTop: '10px' }}
                    >
                        <p className={styles.hmp_report_sub_item}>
                            When compared to other MJ members in your age group
                            (from
                        </p>
                        <div>
                            <TextField
                                InputProps={{
                                    classes: {
                                        input: styles.inputField,
                                    },
                                }}
                                variant="outlined"
                                size="small"
                                margin="dense"
                                name="water_intake"
                                sx={{ width: '100px' }}
                                className={styles.textFieldProps}
                            />
                        </div>
                        <p className={styles.hmp_report_sub_item}>to</p>
                        <div>
                            <TextField
                                InputProps={{
                                    classes: {
                                        input: styles.inputField,
                                    },
                                }}
                                variant="outlined"
                                size="small"
                                margin="dense"
                                name="water_intake"
                                sx={{ width: '100px' }}
                                className={styles.textFieldProps}
                            />
                        </div>
                        <p className={styles.hmp_report_sub_item}>
                            ), your health ranking is:
                        </p>
                    </Stack>
                    <ButtonGroup
                        variant="contained"
                        fullWidth
                        sx={{ marginTop: '10px' }}
                        orientation={lgUp ? 'horizontal' : 'vertical'}
                    >
                        <Button
                            className={
                                currentRankingBttn === 1
                                    ? styles.selectedRankingBttn
                                    : styles.unSelectedRankingBttn
                            }
                            sx={{
                                borderRadius: '3px 0px 0px 3px !important',
                            }}
                            onClick={() => setCurrentRankingBttn(1)}
                        >
                            Poor (1-15)
                        </Button>
                        <Button
                            className={
                                currentRankingBttn === 2
                                    ? styles.selectedRankingBttn
                                    : styles.unSelectedRankingBttn
                            }
                            sx={{
                                borderRadius: '3px 0px 0px 3px !important',
                            }}
                            onClick={() => setCurrentRankingBttn(2)}
                        >
                            Below Average (16-35)
                        </Button>
                        <Button
                            className={
                                currentRankingBttn === 3
                                    ? styles.selectedRankingBttn
                                    : styles.unSelectedRankingBttn
                            }
                            sx={{
                                borderRadius: '3px 0px 0px 3px !important',
                            }}
                            onClick={() => setCurrentRankingBttn(3)}
                        >
                            Fair (36-56)
                        </Button>
                        <Button
                            className={
                                currentRankingBttn === 4
                                    ? styles.selectedRankingBttn
                                    : styles.unSelectedRankingBttn
                            }
                            sx={{
                                borderRadius: '3px 0px 0px 3px !important',
                            }}
                            onClick={() => setCurrentRankingBttn(4)}
                        >
                            Good (66-85)
                        </Button>
                        <Button
                            className={
                                currentRankingBttn === 5
                                    ? styles.selectedRankingBttn
                                    : styles.unSelectedRankingBttn
                            }
                            sx={{
                                borderRadius: '0px 3px 3px 0px !important',
                            }}
                            onClick={() => setCurrentRankingBttn(5)}
                        >
                            Excellent (86-100)
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className={styles.hmp_report_inner_div}>
                <p
                    className={styles.hmp_report_title}
                    style={{ marginBottom: '10px' }}
                >
                    Morbidity Prediction
                </p>
                <p
                    className={styles.hmp_report_sub_item}
                    style={{ marginBottom: '10px' }}
                >
                    According to the research results of MJ’s collaboration with
                    the academies, we offer you the Five-Year Morbidity
                    Prediction Model of Chronic Diseases (diabetes, obesity,
                    metabolic syndrome (MetS), dyslipidemia, hypertension,
                    Osteoporosis and lung cancer) to help you better in health
                    promotion. In future, MJ will continue to develop prediction
                    model for more chronic diseases to help you achieve
                    comprehensive health management.
                </p>
                <p
                    className={styles.hmp_report_sub_item}
                    style={{ marginBottom: '10px' }}
                >
                    Your five-year morbidity for the following chronic diseases
                    higher than the incidence of MJ Group is:
                </p>
                <div className={styles.hmp_report_inner_div}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ background: '#5a567b' }}>
                                        <p
                                            className={
                                                styles.hmp_table_head_text
                                            }
                                        >
                                            Chronic Diseases
                                        </p>
                                    </TableCell>
                                    <TableCell sx={{ background: '#5a567b' }}>
                                        <p
                                            className={
                                                styles.hmp_table_head_text
                                            }
                                        >
                                            Predictive Five-Year Morbidity
                                        </p>
                                    </TableCell>
                                    <TableCell sx={{ background: '#5a567b' }}>
                                        <p
                                            className={
                                                styles.hmp_table_head_text
                                            }
                                        >
                                            The Incident of MJ Group
                                        </p>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            sx={{ textAlign: 'center' }}
                                            fullWidth
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <div className={styles.hmp_report_build_indices_div}>
                <div className={styles.hmp_report_inner_div}>
                    <p
                        className={styles.hmp_report_title}
                        style={{ marginBottom: '10px' }}
                    >
                        Health Management Instruction
                    </p>
                    <p
                        className={styles.hmp_report_sub_item}
                        style={{ marginBottom: '10px' }}
                    >
                        To Improve your lifestyle and health, you should:
                    </p>
                    <div>
                        <TextField
                            InputProps={{
                                classes: {
                                    input: styles.inputField,
                                },
                            }}
                            variant="standard"
                            size="small"
                            margin="dense"
                            name="water_intake"
                            fullWidth
                            // className={styles.textFieldProps}
                        />
                    </div>
                    <div>
                        <TextField
                            InputProps={{
                                classes: {
                                    input: styles.inputField,
                                },
                            }}
                            variant="standard"
                            size="small"
                            margin="dense"
                            name="water_intake"
                            fullWidth
                            // className={styles.textFieldProps}
                        />
                    </div>
                    <p
                        className={styles.hmp_report_sub_item}
                        style={{ marginBottom: '10px', marginTop: '10px' }}
                    >
                        Dietary Recommedation:
                    </p>
                    <div className={styles.hmp_report_inner_div}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            sx={{ background: '#5a567b' }}
                                            colSpan={2}
                                        >
                                            <p
                                                className={
                                                    styles.hmp_table_head_text
                                                }
                                            >
                                                Recommendation
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                                width: '30%',
                                            }}
                                        >
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                sx={{ textAlign: 'center' }}
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input:
                                                            styles.inputField +
                                                            ' ' +
                                                            styles.textCenter,
                                                    },
                                                }}
                                                variant="outlined"
                                                size="small"
                                                margin="dense"
                                                name="water_intake"
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
            <div className={styles.hmp_report_inner_div}>
                <p
                    className={styles.hmp_report_title}
                    style={{ marginBottom: '10px' }}
                >
                    Health Information
                </p>
                <div className={styles.hmp_report_inner_div}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            background: '#5a567b',
                                            width: '50%',
                                        }}
                                    >
                                        <p
                                            className={
                                                styles.hmp_table_head_text
                                            }
                                            style={{ textAlign: 'start' }}
                                        >
                                            The five major causes of death for
                                            people in your age group (from
                                        </p>
                                        <Stack
                                            direction={{
                                                xs: 'column',
                                                sm: 'column',
                                                md: 'column',
                                                lg: 'row',
                                                xl: 'row',
                                            }}
                                            spacing={1}
                                            alignItems="center"
                                        >
                                            <div>
                                                <TextField
                                                    InputProps={{
                                                        classes: {
                                                            input: styles.inputField,
                                                        },
                                                    }}
                                                    variant="outlined"
                                                    size="small"
                                                    margin="dense"
                                                    name="water_intake"
                                                    className={
                                                        styles.textFieldProps
                                                    }
                                                    sx={{ width: '100px' }}
                                                />
                                            </div>
                                            <p
                                                className={
                                                    styles.hmp_table_head_text
                                                }
                                            >
                                                to
                                            </p>
                                            <div>
                                                <TextField
                                                    InputProps={{
                                                        classes: {
                                                            input: styles.inputField,
                                                        },
                                                    }}
                                                    variant="outlined"
                                                    size="small"
                                                    margin="dense"
                                                    name="water_intake"
                                                    className={
                                                        styles.textFieldProps
                                                    }
                                                    sx={{ width: '100px' }}
                                                />
                                            </div>
                                            <p
                                                className={
                                                    styles.hmp_table_head_text
                                                }
                                            >
                                                within ten years.
                                            </p>
                                        </Stack>
                                    </TableCell>
                                    <TableCell sx={{ background: '#5a567b' }}>
                                        <p
                                            className={
                                                styles.hmp_table_head_text
                                            }
                                        >
                                            Cause of Death/ All-cause Death
                                        </p>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            sx={{ textAlign: 'center' }}
                                            fullWidth
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                        }}
                                    >
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input:
                                                        styles.inputField +
                                                        ' ' +
                                                        styles.textCenter,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            name="water_intake"
                                            className={styles.textFieldProps}
                                            fullWidth
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div style={{ textAlign: 'end', marginTop: '15px' }}>
                        <Button
                            variant="contained"
                            className={styles.printBttn}
                        >
                            Print
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HMPReport
