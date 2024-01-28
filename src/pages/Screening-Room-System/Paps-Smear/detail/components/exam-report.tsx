import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import styles from '../_paps-smear.module.scss'
import TableCellSeparator from 'components/ScreeningRoom/TableSeparator/table-cell-separator'
import TableRowSeparator from 'components/ScreeningRoom/TableSeparator/table-row-separator'

const PapsSmearExamReport = () => {
    const samplingOptions = [
        {
            id: 1,
            label: 'Done',
        },
        {
            id: 2,
            label: 'Not Done',
        },
        {
            id: 3,
            label: 'Not suitable for sampling',
        },
    ]

    const periodOptions = [
        {
            id: 1,
            label: '1st Time',
        },
        {
            id: 2,
            label: '< 1 Year',
        },
        {
            id: 3,
            label: '1-2 Years',
        },
        {
            id: 4,
            label: '2-3 Years',
        },
        {
            id: 5,
            label: '≥ 3 Years',
        },
    ]

    return (
        <>
            <TableContainer style={{ overflow: 'auto' }}>
                <Table size="small" className={styles.examReportTable}>
                    <TableRow>
                        <TableCell
                            className={`${styles.examReportTableHeaderLabel} ${styles.tableCell}`}
                        >
                            Items
                        </TableCell>
                        <TableCell
                            width="26%"
                            className={`${styles.tableCellDateLabel} ${styles.tableCell} ${styles.currentTop}`}
                        >
                            Current
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            width="26%"
                            className={`${styles.tableCellDateLabel} ${styles.tableCell} ${styles.backDateTop}`}
                        >
                            22-09-2020
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            width="26%"
                            className={`${styles.tableCellDateLabel} ${styles.tableCell} ${styles.backDateTop}`}
                        >
                            22-09-2018
                        </TableCell>
                    </TableRow>

                    <TableRowSeparator />

                    {/* Sampling */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Sampling
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <Select
                                    size="small"
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {samplingOptions.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
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
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {samplingOptions.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
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
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {samplingOptions.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Sampling Abnormal */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Sampling Abnormal
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <Select
                                    size="small"
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={1}>Yes</MenuItem>
                                    <MenuItem value={2}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
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
                                >
                                    <MenuItem value={1}>Yes</MenuItem>
                                    <MenuItem value={2}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
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
                                >
                                    <MenuItem value={1}>Yes</MenuItem>
                                    <MenuItem value={2}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* HPV Test */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            HPV Test
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
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
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
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
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
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
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* High Vaginal Swab */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            High Vaginal Swab
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
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
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
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
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
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
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Date Of Last Sampling */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Date Of Last Sampling
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <Select
                                    size="small"
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {periodOptions.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
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
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {periodOptions.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
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
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {periodOptions.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Pelvic Examination */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Pelvic Examination
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
                        >
                            <FormControl
                                fullWidth
                                className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                            >
                                <Select
                                    size="small"
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {samplingOptions.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
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
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {samplingOptions.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
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
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {samplingOptions.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    <TableRowSeparator lastRow />
                </Table>
            </TableContainer>

            <Box
                sx={{
                    float: 'right',
                    marginTop: '1.5rem',
                }}
            >
                <Button variant="contained" className={styles.saveButton}>
                    Save
                </Button>
            </Box>
        </>
    )
}

export default PapsSmearExamReport
