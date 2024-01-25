import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import TableCellSeparator from './table-cell-separator'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import ScoreInput from './score-input'
import TableRowSeparator from './table-row-separator'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import styles from '../_audiometry-detail.module.scss'

const AudiometryExamReport = () => {
    const options = [
        {
            id: 1,
            label: 'Hearing Aid',
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

                    {/* Right Ear */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Right Ear
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput value="[CNT]" />
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
                                        {options.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Stack>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput />
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
                                        {options.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Stack>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput />
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
                                        {options.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Stack>
                        </TableCell>
                    </TableRow>

                    {/* Left Ear */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Left Ear
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput />
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
                                        {options.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Stack>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput />
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
                                        {options.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Stack>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput />
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
                                        {options.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Stack>
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

export default AudiometryExamReport
