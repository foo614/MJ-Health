import { Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import TableCellSeparator from 'components/ScreeningRoom/TableSeparator/table-cell-separator'
import TableRowSeparator from 'components/ScreeningRoom/TableSeparator/table-row-separator'
import styles from '../_visual-and-ocular-tension-test.module.scss'

const PeripheralVascularScreeningExamReport = () => {
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
                            className={`${styles.examReportTableHeaderLabel} ${styles.tableCell}`}
                        >
                            Items
                        </TableCell>
                        <TableCell
                            width="26%"
                            className={`${styles.tableCellDateLabel} ${styles.tableCell} ${styles.currentTop}`}
                        >
                            Current
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <FormControl fullWidth>
                                    <Typography
                                        sx={{
                                            textAlign: 'center',
                                            color: '#211D4E',
                                            fontWeight: 600,
                                        }}
                                    >
                                        Right
                                    </Typography>
                                </FormControl>
                                <FormControl fullWidth>
                                    <Typography
                                        sx={{
                                            textAlign: 'center',
                                            color: '#211D4E',
                                            fontWeight: 600,
                                        }}
                                    >
                                        Left
                                    </Typography>
                                </FormControl>
                            </Stack>
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

                    {/* Without Glasses  */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Without Glasses
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
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
                                    <TextField size="small" />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField size="small" />
                                </FormControl>
                            </Stack>
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
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {options.map((item) => (
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
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {options.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* With Glasses  */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            With Glasses
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
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
                                    <TextField size="small" />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField size="small" />
                                </FormControl>
                            </Stack>
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
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {options.map((item) => (
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
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {options.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Ocular Tension  */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Ocular Tension
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
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
                                        }}
                                    />
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
                                        }}
                                    />
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
                                        }}
                                    />
                                </FormControl>
                            </Stack>
                        </TableCell>
                    </TableRow>

                    {/* Pin Hole  */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Pin Hole
                        </TableCell>
                        <TableCell
                            className={`${styles.tableCell} ${styles.current}`}
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
                                    <TextField size="small" />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField size="small" />
                                </FormControl>
                            </Stack>
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
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {options.map((item) => (
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
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {options.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Color Blind/ Deficiency  */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Color Blind/ Deficiency
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
                                    {options.map((item) => (
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
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {options.map((item) => (
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
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {options.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Astigmatism */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Astigmatism
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
                                    {options.map((item) => (
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
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {options.map((item) => (
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
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {options.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    {/* Strabismus */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Strabismus
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
                                    {options.map((item) => (
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
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {options.map((item) => (
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
                                    value={1}
                                    inputProps={{
                                        style: { minWidth: '150px' },
                                    }}
                                >
                                    <MenuItem value={0}>-</MenuItem>
                                    {options.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    <TableRowSeparator lastRow />
                    <TableRowSeparator noBackground />
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

export default PeripheralVascularScreeningExamReport
