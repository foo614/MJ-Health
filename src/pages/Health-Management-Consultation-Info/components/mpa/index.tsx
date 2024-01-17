import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Stack, TextField, Button } from '@mui/material'
import styles from '../../_health-management-consultation-info.module.scss'
import { useState } from 'react'
import ViewModal from './components/view-modal'
const MPA = () => {
    const [openViewModal, setOpenViewModal] = useState<boolean>(false)
    return (
        <>
            <div style={{ paddingBottom: '30px', paddingRight: '15px' }}>
                <TableContainer>
                    <Table size="small" className={styles.mpaTable}>
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        borderBottom: '0',
                                    }}
                                >
                                    <p className={styles.main_section_text}>
                                        Metabolic Assessment
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0',
                                        backgroundColor: '#F9F9F9',
                                        borderRadius: '8px 8px 0px 0px',
                                    }}
                                >
                                    <p
                                        className={
                                            styles.diatery_lifestyle_item
                                        }
                                        style={{
                                            textAlign: 'center',
                                            paddingTop: '10px',
                                        }}
                                    >
                                        Previous
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0',
                                        backgroundColor: '#F9F9F9',
                                        borderRadius: '8px 8px 0px 0px',
                                    }}
                                >
                                    <p
                                        className={
                                            styles.diatery_lifestyle_item
                                        }
                                        style={{
                                            textAlign: 'center',
                                            paddingTop: '10px',
                                        }}
                                    >
                                        Last
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0',
                                        backgroundColor: '#FCE2E2',
                                        borderRadius: '8px 8px 0px 0px',
                                    }}
                                >
                                    <p
                                        className={
                                            styles.diatery_lifestyle_item
                                        }
                                        style={{
                                            textAlign: 'center',
                                            paddingTop: '10px',
                                        }}
                                    >
                                        Current
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0',
                                        borderRadius: '8px 8px 0px 0px',
                                    }}
                                >
                                    <p
                                        className={
                                            styles.diatery_lifestyle_item
                                        }
                                        style={{
                                            textAlign: 'center',
                                            paddingTop: '10px',
                                        }}
                                    >
                                        Unit
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0',
                                        backgroundColor: '#EBF1DE',
                                        borderRadius: '8px 8px 0px 0px',
                                    }}
                                >
                                    <p
                                        className={
                                            styles.diatery_lifestyle_item
                                        }
                                        style={{
                                            textAlign: 'center',
                                            paddingTop: '20px',
                                        }}
                                    >
                                        Optimal Range
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0',
                                        backgroundColor: '#DDF0FD',
                                        borderRadius: '8px 8px 0px 0px',
                                    }}
                                >
                                    <p
                                        className={
                                            styles.diatery_lifestyle_item
                                        }
                                        style={{
                                            textAlign: 'center',
                                            paddingTop: '10px',
                                        }}
                                    >
                                        Reference Range
                                    </p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Fasting Blood Sugar
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        mmol/L
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        HbA1c
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        %
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        TG
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        µU/ml
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Insulin
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        mmol/L
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Cholesterol
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        mmol/L
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        HDL-C
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        mmol/L
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        LDL-C
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        mmol/L
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        TG/HDL-C
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        LGL/HDL-C
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        CHOL/HDL-C
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#FCE2E2',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#EBF1DE',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#DDF0FD',
                                    }}
                                ></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#FCE2E2',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#EBF1DE',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#DDF0FD',
                                    }}
                                ></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        borderBottom: '0',
                                    }}
                                >
                                    <p className={styles.main_section_text}>
                                        Inflammatory Assessment
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#FCE2E2',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#EBF1DE',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#DDF0FD',
                                    }}
                                ></TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Hs-CRP
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        mg/l
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Fibrinogen
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        mg/dl
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Ferritin
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        ug/L
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Uric Acid
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        mmol/L
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Homocysteine
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        µmol/L
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#FCE2E2',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#EBF1DE',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#DDF0FD',
                                    }}
                                ></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#FCE2E2',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#EBF1DE',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#DDF0FD',
                                    }}
                                ></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        borderBottom: '0',
                                    }}
                                >
                                    <p className={styles.main_section_text}>
                                        Hormonal Assessment
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#FCE2E2',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#EBF1DE',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#DDF0FD',
                                    }}
                                ></TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        FSH
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        mlU/ml
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Button
                                        className={styles.mpa_view}
                                        variant="contained"
                                        onClick={() => setOpenViewModal(true)}
                                    >
                                        View
                                    </Button>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Button
                                        className={styles.mpa_view}
                                        variant="contained"
                                        onClick={() => setOpenViewModal(true)}
                                    >
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        LH
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        mlU/ml
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Button
                                        className={styles.mpa_view}
                                        variant="contained"
                                        onClick={() => setOpenViewModal(true)}
                                    >
                                        View
                                    </Button>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Button
                                        className={styles.mpa_view}
                                        variant="contained"
                                        onClick={() => setOpenViewModal(true)}
                                    >
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Testosterone
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        ng/ml
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        SHBG
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        nmol/L
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Albumin
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        g/L
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Free Testosterone
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        pg/ml
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Bio Testosterone
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        %
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Estradiol
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        pmol/L
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Button
                                        className={styles.mpa_view}
                                        variant="contained"
                                        onClick={() => setOpenViewModal(true)}
                                    >
                                        View
                                    </Button>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Button
                                        className={styles.mpa_view}
                                        variant="contained"
                                        onClick={() => setOpenViewModal(true)}
                                    >
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        TSH
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        mlU/ml
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.currentTableExamItemCellValue
                                        }
                                    >
                                        Free T4
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#F9F9F9',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '70px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FCE2E2',
                                        borderBottom: '0px ',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        spacing={1}
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
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
                                            sx={{ width: '70px' }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        borderBottom: '0px',
                                    }}
                                >
                                    <p className={styles.nutrietsTextFieldText}>
                                        pmol/L
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#EBF1DE',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#DDF0FD',
                                        borderBottom: '0px ',
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
                                        sx={{ width: '120px' }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        borderBottom: '0',
                                        paddingBottom: '20px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                        borderRadius: '0px 0px 8px 8px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#F9F9F9',
                                        borderRadius: '0px 0px 8px 8px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#FCE2E2',
                                        borderRadius: '0px 0px 8px 8px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#EBF1DE',
                                        borderRadius: '0px 0px 8px 8px',
                                    }}
                                ></TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: '0px',
                                        backgroundColor: '#DDF0FD',
                                        borderRadius: '0px 0px 8px 8px',
                                    }}
                                ></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {openViewModal ? (
                <ViewModal open={openViewModal} setOpen={setOpenViewModal} />
            ) : null}
        </>
    )
}

export default MPA
