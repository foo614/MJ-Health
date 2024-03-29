import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import styles from '../_electrocardiogram-detail.module.scss'
import TableCellSeparator from 'components/ScreeningRoom/TableSeparator/table-cell-separator'
import TableRowSeparator from 'components/ScreeningRoom/TableSeparator/table-row-separator'

type Props = {
    readonly?: boolean
    saveButton?: boolean
}

const ElectrocardiogramExamReport = ({ readonly, saveButton }: Props) => {
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
                            Items
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

                    {/* Chest Circumference */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Chest Circumference
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
                                                <small>Centimeter (s)</small>
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
                                                <small>Centimeter (s)</small>
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
                                                <small>Centimeter (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Chest Circumference (Inspiration) */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Chest Circumference (Inspiration)
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
                                                <small>Centimeter (s)</small>
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
                                                <small>Centimeter (s)</small>
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
                                                <small>Centimeter (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Waist Circumference */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Waist Circumference
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
                                                <small>Centimeter (s)</small>
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
                                                <small>Centimeter (s)</small>
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
                                                <small>Centimeter (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Hip Circumference */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Hip Circumference
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
                                                <small>Centimeter (s)</small>
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
                                                <small>Centimeter (s)</small>
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
                                                <small>Centimeter (s)</small>
                                            </InputAdornment>
                                        ),
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Waist/Hip Ratio */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Waist/Hip Ratio
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

                    {/* Respiration Rate */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Respiration Rate
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

export default ElectrocardiogramExamReport
