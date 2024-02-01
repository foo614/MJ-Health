import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../_mpa.module.scss'
import { TextField, Stack, Button } from '@mui/material'

const Hormonal = () => {
    const hormonal_data = [
        {
            id: 1,
            title: 'FSH',
            unit: 'mlU/ml',
            isBttn: true,
        },
        {
            id: 2,
            title: 'LH',
            unit: 'mlU/ml',
            isBttn: true,
        },
        {
            id: 3,
            title: 'Testosterone',
            unit: 'ng/ml',
            isBttn: false,
        },
        {
            id: 4,
            title: 'SHBG',
            unit: 'nmol/L',
            isBttn: false,
        },
        {
            id: 5,
            title: 'Albumin',
            unit: 'g/L',
            isBttn: false,
        },
        {
            id: 6,
            title: 'Free Testosterone',
            unit: 'pg/ml',
            isBttn: false,
        },
        {
            id: 7,
            title: 'Bio Testosterone',
            unit: '%',
            isBttn: false,
        },
        {
            id: 8,
            title: 'Estradiol',
            unit: 'pmol/L',
            isBttn: true,
        },
        {
            id: 9,
            title: 'TSH',
            unit: 'mlU/ml',
            isBttn: false,
        },
        {
            id: 10,
            title: 'Free T4',
            unit: 'pmol/L',
            isBttn: false,
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
                                        Hormonal Assessment
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
                            {hormonal_data.map((item: any, index: number) => {
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
                                            {item.isBttn ? (
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    className={
                                                        styles.mpa_table_view_bttn
                                                    }
                                                >
                                                    View
                                                </Button>
                                            ) : (
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
                                            )}
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.mpa_table_cell_middle
                                            }
                                        >
                                            {item.isBttn ? (
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    className={
                                                        styles.mpa_table_view_bttn
                                                    }
                                                >
                                                    View
                                                </Button>
                                            ) : (
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
                                            )}
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

export default Hormonal
