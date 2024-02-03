import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import styles from '../_peripheral-vascular-screening-detail.module.scss'
import TableRowSeparator from 'components/ScreeningRoom/TableSeparator/table-row-separator'
import TableCellSeparator from 'components/ScreeningRoom/TableSeparator/table-cell-separator'
import Grid from '@mui/material/Grid'

type Props = {
    readonly?: boolean
    saveButton?: boolean
}

const PeripheralVascularScreeningExamReport = ({
    readonly,
    saveButton,
}: Props) => {
    const options = [
        {
            id: 1,
            label: 'Normal',
        },
        {
            id: 2,
            label: 'Abnormal',
        },
        {
            id: 3,
            label: 'Normal But Detected',
        },
        {
            id: 4,
            label: 'Others',
        },
    ]

    return (
        <>
            <TableContainer style={{ overflow: 'auto' }}>
                <Table size="small" className={styles.examReportTable}>
                    <TableRow>
                        <TableCell
                            className={`${styles.examReportTableHeaderLabel} ${
                                styles.tableCell
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            ABI
                        </TableCell>
                        <TableCell
                            width="26%"
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
                            width="26%"
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
                            width="26%"
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

                    {/* Right Leg  */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Right Leg
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
                                    value="1.04"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
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
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Left Leg  */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Left Leg
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
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    <TableRowSeparator
                        readonly={readonly}
                        headerLabel="BaPWV"
                    />

                    {/* Right  */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Right
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
                                    value="1826"
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>(cm/s)</small>
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
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Left  */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Left
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
                                                <small>(cm/s)</small>
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
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    <TableRowSeparator readonly={readonly} lastRow />
                    <TableRowSeparator readonly={readonly} noBackground />

                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Height
                        </TableCell>
                        <TableCell>
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    size="small"
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

                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Weight
                        </TableCell>
                        <TableCell>
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <TextField
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                    size="small"
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

export default PeripheralVascularScreeningExamReport
