import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import TextField from '@mui/material/TextField'
import styles from '../_general-measurement-detail.module.scss'
import TableCellSeparator from 'components/ScreeningRoom/TableSeparator/table-cell-separator'
import TableRowSeparator from 'components/ScreeningRoom/TableSeparator/table-row-separator'

type Props = {
    readonly?: boolean
    saveButton?: boolean
}

const GeneralMeasurementExamReport = ({ readonly, saveButton }: Props) => {
    return (
        <>
            <TableContainer style={{ overflow: 'auto' }}>
                <Table size="small" className={styles.examReportTable}>
                    <TableRow>
                        <TableCell
                            className={`${styles.examReportTableHeaderLabel} ${
                                styles.tableCell
                            } ${readonly ? styles.readonly : ''}`}
                            sx={{ minWidth: '250px !important' }}
                        >
                            Items
                        </TableCell>
                        <TableCell
                            width="25%"
                            className={`${styles.tableCellDateLabel} ${
                                styles.tableCell
                            } ${styles.currentTop} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            Current
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            width="25%"
                            className={`${styles.tableCellDateLabel} ${
                                styles.tableCell
                            } ${styles.backDateTop} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            22-09-2020
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            width="25%"
                            className={`${styles.tableCellDateLabel} ${
                                styles.tableCell
                            } ${styles.backDateTop} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            22-09-2018
                        </TableCell>
                    </TableRow>

                    <TableRowSeparator readonly={readonly} />

                    {/* Height */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Height
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>Meter (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>Meter (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>Meter (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Weight */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Weight
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>Kilogram (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>Kilogram (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>Kilogram (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Ideal Body */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Ideal Body
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>Kilogram (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>Kilogram (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>Kilogram (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Body Fat */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Body Fat
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* BP (Right Hand) Systolic/Diastolic */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            BP (Right Hand) <small>Systolic/Diastolic</small>
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>mmHg</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>mmHg</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                            </Stack>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>mmHg</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>mmHg</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                            </Stack>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>mmHg</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>mmHg</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                            </Stack>
                        </TableCell>
                    </TableRow>

                    {/* BP (Left Hand) Systolic/Diastolic */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            BP (Left Hand) <small>Systolic/Diastolic</small>
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>mmHg</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>mmHg</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                            </Stack>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>mmHg</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>mmHg</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                            </Stack>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>mmHg</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>mmHg</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                            </Stack>
                        </TableCell>
                    </TableRow>

                    {/* Muscle Mass */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Muscle Mass
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <Select
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    readOnly={readonly}
                                >
                                    <MenuItem value={0}>-</MenuItem>

                                    <MenuItem value={1}>Under</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <Select
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    readOnly={readonly}
                                >
                                    <MenuItem value={0}>-</MenuItem>

                                    <MenuItem value={1}>Under</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <Select
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    readOnly={readonly}
                                >
                                    <MenuItem value={0}>-</MenuItem>

                                    <MenuItem value={1}>Under</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Pulse Rate */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Pulse Rate
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>/Minute</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>/Minute</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>/Minute</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Respiratory Rate */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Respiratory Rate
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>/Minute</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>/Minute</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>/Minute</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* SPo2 */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            SPo2
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    size="small"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    <TableRowSeparator readonly={readonly} lastRow />
                </Table>
            </TableContainer>

            {saveButton && (
                <Box
                    sx={{
                        marginTop: '1.5rem',
                    }}
                >
                    <Grid container justifyContent="flex-end">
                        <Button
                            variant="contained"
                            className={styles.saveButton}
                        >
                            Save
                        </Button>
                    </Grid>
                </Box>
            )}
        </>
    )
}

export default GeneralMeasurementExamReport
