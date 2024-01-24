import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
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
import styles from '../../_bone-mineral-density-info.module.scss'
import ScoreInput from './score-input'
import TableRowSeparator from './table-row-separator'
import InputAdornment from '@mui/material/InputAdornment'

const BoneMineralDensityExamReport = () => {
    const options = [
        {
            id: 1,
            label: 'Lumbar Spine',
        },
        {
            id: 2,
            label: 'Left Femur Neck',
        },
        {
            id: 3,
            label: 'Right Femur Neck',
        },
        {
            id: 4,
            label: 'Left Forearm',
        },
        {
            id: 5,
            label: 'Right Forearm',
        },
    ]

    return (
        <>
            <TableContainer>
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

                    {/* T-score */}
                    <TableRow>
                        <TableCell
                            align="left"
                            className={styles.examReportTableLabel}
                        >
                            T-score
                        </TableCell>
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.current}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput value="-0.90" />
                                <FormControl
                                    fullWidth
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small" value={1}>
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
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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

                    <TableRow>
                        <TableCell
                            align="left"
                            className={styles.examReportTableLabel}
                        >
                            T-score
                        </TableCell>
                        <TableCell
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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

                    <TableRow>
                        <TableCell
                            align="left"
                            className={styles.examReportTableLabel}
                        >
                            T-score
                        </TableCell>
                        <TableCell
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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

                    <TableRowSeparator />

                    {/* Z-score */}
                    <TableRow>
                        <TableCell
                            align="left"
                            className={styles.examReportTableLabel}
                        >
                            Z-score
                        </TableCell>
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.current}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput value="-0.90" />
                                <FormControl
                                    fullWidth
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small" value={1}>
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
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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

                    <TableRow>
                        <TableCell
                            align="left"
                            className={styles.examReportTableLabel}
                        >
                            Z-score
                        </TableCell>
                        <TableCell
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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

                    <TableRow>
                        <TableCell
                            align="left"
                            className={styles.examReportTableLabel}
                        >
                            Z-score
                        </TableCell>
                        <TableCell
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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
                            align="center"
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
                                    className={styles.examReportTableInput}
                                >
                                    <Select size="small">
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

                    <TableRowSeparator />

                    {/* Android */}
                    <TableRow>
                        <TableCell
                            align="left"
                            className={styles.examReportTableLabel}
                        >
                            Android
                        </TableCell>
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.current}`}
                        >
                            <FormControl
                                fullWidth
                                className={styles.examReportTableInput}
                            >
                                <TextField
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
                            <FormControl
                                fullWidth
                                className={styles.examReportTableInput}
                            >
                                <TextField
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
                            <FormControl
                                fullWidth
                                className={styles.examReportTableInput}
                            >
                                <TextField
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Gynoid */}
                    <TableRow>
                        <TableCell
                            align="left"
                            className={styles.examReportTableLabel}
                        >
                            Gynoid
                        </TableCell>
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.current}`}
                        >
                            <FormControl
                                fullWidth
                                className={styles.examReportTableInput}
                            >
                                <TextField
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
                            <FormControl
                                fullWidth
                                className={styles.examReportTableInput}
                            >
                                <TextField
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
                            <FormControl
                                fullWidth
                                className={styles.examReportTableInput}
                            >
                                <TextField
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* A/G Ratio */}
                    <TableRow>
                        <TableCell
                            align="left"
                            className={styles.examReportTableLabel}
                        >
                            A/G Ratio
                        </TableCell>
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.current}`}
                        >
                            <FormControl
                                fullWidth
                                className={styles.examReportTableInput}
                            >
                                <TextField size="small" />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
                            <FormControl
                                fullWidth
                                className={styles.examReportTableInput}
                            >
                                <TextField size="small" />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
                            <FormControl
                                fullWidth
                                className={styles.examReportTableInput}
                            >
                                <TextField size="small" />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Total Body */}
                    <TableRow>
                        <TableCell
                            align="left"
                            className={styles.examReportTableLabel}
                        >
                            Total Body
                        </TableCell>
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.current}`}
                        >
                            <FormControl
                                fullWidth
                                className={styles.examReportTableInput}
                            >
                                <TextField
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
                            <FormControl
                                fullWidth
                                className={styles.examReportTableInput}
                            >
                                <TextField
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                        <TableCellSeparator />
                        <TableCell
                            align="center"
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
                            <FormControl
                                fullWidth
                                className={styles.examReportTableInput}
                            >
                                <TextField
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    <TableRowSeparator lastRow />
                </Table>
            </TableContainer>
        </>
    )
}

export default BoneMineralDensityExamReport
