import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../_mpa.module.scss'
import { TextField, Stack } from '@mui/material'

type Props = {
    editMode: boolean
}

const Inflammation: React.FC<Props> = ({ editMode }: Props) => {
    const inflammation_data = [
        {
            id: 1,
            title: 'Hs-CRP',
            unit: 'mg/l',
        },
        {
            id: 2,
            title: 'Fibrinogen',
            unit: 'mg/dl',
        },
        {
            id: 3,
            title: 'Ferritin',
            unit: 'ug/L',
        },
        {
            id: 4,
            title: 'Uric Acid',
            unit: 'mmol/L',
        },
        {
            id: 5,
            title: 'Homocysteine',
            unit: 'µmol/L',
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
                                        Inflammation Assessment
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
                                    sx={{
                                        background: editMode ? '#DDDDDD' : '',
                                    }}
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
                            {inflammation_data.map(
                                (item: any, index: number) => {
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
                                                sx={{
                                                    background: editMode
                                                        ? '#DDDDDD'
                                                        : '',
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
                                }
                            )}
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
                                    sx={{
                                        background: editMode ? '#DDDDDD' : '',
                                    }}
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

export default Inflammation
