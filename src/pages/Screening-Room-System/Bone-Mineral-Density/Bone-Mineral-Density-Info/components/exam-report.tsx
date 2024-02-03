import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
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
import ScoreInput from './score-input'
import styles from '../_bone-mineral-density-info.module.scss'
import TableRowSeparator from 'components/ScreeningRoom/TableSeparator/table-row-separator'
import TableCellSeparator from 'components/ScreeningRoom/TableSeparator/table-cell-separator'

type Props = {
    readonly?: boolean
    saveButton?: boolean
}

const BoneMineralDensityExamReport = ({ readonly, saveButton }: Props) => {
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

                    {/* T-score */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            T-score
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
                                        readOnly={readonly}
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
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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

                    <TableRowSeparator readonly={readonly} />

                    {/* Z-score */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Z-score
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
                                        readOnly={readonly}
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
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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
                            className={`${styles.tableCell} ${
                                styles.backDate
                            } ${readonly ? styles.readonly : ''}`}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <ScoreInput readonly={readonly} />
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

                    <TableRowSeparator readonly={readonly} />

                    {/* Android */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            Android
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
                                        readOnly: readonly,
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
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
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
                                        readOnly: readonly,
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
                                    InputProps={{ readOnly: readonly }}
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
                                    InputProps={{ readOnly: readonly }}
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
                                    InputProps={{ readOnly: readonly }}
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
                            className={`${styles.tableCell} ${styles.current} ${
                                readonly ? styles.readonly : ''
                            }`}
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
                                        readOnly: readonly,
                                    }}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>

                    <TableRowSeparator readonly={readonly} lastRow />
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

export default BoneMineralDensityExamReport
