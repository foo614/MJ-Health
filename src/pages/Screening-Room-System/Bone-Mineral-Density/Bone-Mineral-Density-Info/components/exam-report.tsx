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
import styles from '../_bone-mineral-density-info.module.scss'

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

                    {/* T-score */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            T-score
                        </TableCell>
                        <TableCell
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

                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            T-score
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

                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            T-score
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

                    <TableRowSeparator />

                    {/* Z-score */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Z-score
                        </TableCell>
                        <TableCell
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

                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Z-score
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

                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Z-score
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

                    <TableRowSeparator />

                    {/* Android */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Android
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
                        >
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
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
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
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
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
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
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
                        <TableCell className={styles.examReportTableLabel}>
                            Gynoid
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
                        >
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
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
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
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
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
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
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
                        <TableCell className={styles.examReportTableLabel}>
                            A/G Ratio
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

                    {/* Total Body */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Total Body
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
                        >
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
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
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
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
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
                            className={`${styles.tableCell} ${styles.backDate}`}
                        >
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
                                                <small>%Fat</small>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    <TableRowSeparator lastRow />
                    <TableRowSeparator noBackground />

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
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>
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

export default BoneMineralDensityExamReport
