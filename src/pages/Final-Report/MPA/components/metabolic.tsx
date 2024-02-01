import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../_mpa.module.scss'
import { TextField, Stack } from '@mui/material'
const Metabolic = () => {
    const metabolic_data = [
        {
            id: 1,
            title: 'Fasting Blood Sugar',
            unit: 'mmol/L',
        },
        {
            id: 2,
            title: 'HbA1c',
            unit: '%',
        },
        {
            id: 3,
            title: 'TG',
            unit: 'µU/ml',
        },
        {
            id: 4,
            title: 'Insulin',
            unit: 'mmol/L',
        },
        {
            id: 5,
            title: 'Cholesterol',
            unit: 'mmol/L',
        },
        {
            id: 6,
            title: 'HDL-C',
            unit: 'mmol/L',
        },
        {
            id: 7,
            title: 'LDL-C',
            unit: 'mmol/L',
        },
        {
            id: 8,
            title: 'TG/HDL-C',
            unit: '',
        },
        {
            id: 9,
            title: 'LGL/HDL-C',
            unit: '',
        },
        {
            id: 10,
            title: 'CHOL/HDL-C',
            unit: '',
        },
    ]
    return (
        <>
            <div>
                <TableContainer sx={{ paddingBottom: '25px' }}>
                    <Table size="small" className={styles.mpaTable}>
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        borderBottom: '0',
                                    }}
                                >
                                    <p className={styles.table_title}>
                                        Metabolic Assessment
                                    </p>
                                </TableCell>
                                <TableCell
                                    className={styles.mpa_table_cell_first}
                                >
                                    <p
                                        className={styles.table_head}
                                        style={{
                                            textAlign: 'center',
                                            paddingTop: '10px',
                                        }}
                                    >
                                        Previous
                                    </p>
                                </TableCell>
                                <TableCell
                                    className={styles.mpa_table_cell_first}
                                >
                                    <p
                                        className={styles.table_head}
                                        style={{
                                            textAlign: 'center',
                                            paddingTop: '10px',
                                        }}
                                    >
                                        Last
                                    </p>
                                </TableCell>
                                <TableCell
                                    className={styles.mpa_table_cell_first}
                                >
                                    <p
                                        className={styles.table_head}
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
                                        className={styles.table_head}
                                        style={{
                                            textAlign: 'center',
                                            paddingTop: '10px',
                                        }}
                                    >
                                        Unit
                                    </p>
                                </TableCell>
                                <TableCell
                                    className={styles.mpa_table_cell_first}
                                >
                                    <p
                                        className={styles.table_head}
                                        style={{
                                            textAlign: 'center',
                                            paddingTop: '20px',
                                        }}
                                    >
                                        Optimal Range
                                    </p>
                                </TableCell>
                                <TableCell
                                    className={styles.mpa_table_cell_first}
                                >
                                    <p
                                        className={styles.table_head}
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
                            {metabolic_data.map((item: any, index: number) => {
                                return (
                                    <TableRow
                                        key={index}
                                        className={styles.testRow}
                                    >
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.mpa_table_cell
                                                }
                                            >
                                                {item.title}
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.mpa_table_cell_middle
                                            }
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                sx={{ width: '70px' }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.mpa_table_cell_middle
                                            }
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                sx={{ width: '70px' }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.mpa_table_cell_middle
                                            }
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
                                                    className={
                                                        styles.textFieldProps
                                                    }
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
                                                    className={
                                                        styles.textFieldProps
                                                    }
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
                                                    className={
                                                        styles.textFieldProps
                                                    }
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
                                                    className={
                                                        styles.textFieldProps
                                                    }
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
                                                    className={
                                                        styles.textFieldProps
                                                    }
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
                                            <p
                                                className={
                                                    styles.mpa_table_unit
                                                }
                                            >
                                                {item.unit}
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.mpa_table_cell_middle
                                            }
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                sx={{ width: '120px' }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.mpa_table_cell_middle
                                            }
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                sx={{ width: '120px' }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                            <TableRow>
                                <TableCell
                                    sx={{ borderBottom: '0' }}
                                ></TableCell>
                                <TableCell
                                    className={styles.mpa_table_cell_last}
                                ></TableCell>
                                <TableCell
                                    className={styles.mpa_table_cell_last}
                                ></TableCell>
                                <TableCell
                                    className={styles.mpa_table_cell_last}
                                ></TableCell>
                                <TableCell
                                    sx={{ borderBottom: '0' }}
                                ></TableCell>
                                <TableCell
                                    className={styles.mpa_table_cell_last}
                                ></TableCell>
                                <TableCell
                                    className={styles.mpa_table_cell_last}
                                ></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default Metabolic
