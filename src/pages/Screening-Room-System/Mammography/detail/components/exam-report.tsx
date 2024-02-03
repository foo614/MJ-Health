import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import styles from '../_mammography-detail.module.scss'
import TableCellSeparator from 'components/ScreeningRoom/TableSeparator/table-cell-separator'
import TableRowSeparator from 'components/ScreeningRoom/TableSeparator/table-row-separator'

type Props = {
    readonly?: boolean
    saveButton?: boolean
}

const MammographyExamReport = ({ readonly, saveButton }: Props) => {
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

                    {/* Mammography */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Mammography
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

export default MammographyExamReport
