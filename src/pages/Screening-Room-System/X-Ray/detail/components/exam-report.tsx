import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableCellSeparator from 'components/ScreeningRoom/TableSeparator/table-cell-separator'
import TableRowSeparator from 'components/ScreeningRoom/TableSeparator/table-row-separator'
import styles from '../_x-ray.module.scss'

type Props = {
    readonly?: boolean
    saveButton?: boolean
}

const XRayExamReport = ({ readonly, saveButton }: Props) => {
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

                    {/* CXR (PA View) */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            CXR (PA View)
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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

                    {/* CXR (Lateral View) */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            CXR (Lateral View)
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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

                    {/* CXR (Apical View) */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            CXR (Apical View)
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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

                    {/* CXR (Lordotic View) */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            CXR (Lordotic View)
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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

                    {/* KUB x-ray */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            KUB x-ray
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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

                    {/* Skull x-ray */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Skull x-ray
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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

                    {/* Neck x-ray */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Neck x-ray
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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

                    {/* Abdominal x-ray */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Abdominal x-ray
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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

                    {/* Spine x-ray */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Spine x-ray
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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

                    {/* X-ray of extremities */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            X-ray of extremities
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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
                                    readOnly={readonly}
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

export default XRayExamReport
