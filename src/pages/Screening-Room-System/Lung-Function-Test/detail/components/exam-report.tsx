import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import TableCellSeparator from 'components/ScreeningRoom/TableSeparator/table-cell-separator'
import TableRowSeparator from 'components/ScreeningRoom/TableSeparator/table-row-separator'
import styles from '../_lung-function-test.module.scss'
import Grid from '@mui/material/Grid'

type Props = {
    readonly?: boolean
    saveButton?: boolean
}

const LungFunctionTestExamReport = ({ readonly, saveButton }: Props) => {
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

                    {/* FVC  */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            FVC
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
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>l</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
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
                                                    <small>%</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
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
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>l</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
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
                                                    <small>%</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
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
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>l</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
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
                                                    <small>%</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                            </Stack>
                        </TableCell>
                    </TableRow>

                    {/* FEV1  */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            FEV1
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
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>l</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
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
                                                    <small>%</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
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
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>l</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
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
                                                    <small>%</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
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
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>l</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
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
                                                    <small>%</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                            </Stack>
                        </TableCell>
                    </TableRow>

                    {/* MMF */}
                    <TableRow>
                        <TableCell className={styles.examReportTableLabel}>
                            MMF
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
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>l</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
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
                                                    <small>%</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
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
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>l</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
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
                                                    <small>%</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
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
                                <FormControl
                                    fullWidth
                                    className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                >
                                    <TextField
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <small>l</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
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
                                                    <small>%</small>
                                                </InputAdornment>
                                            ),
                                            readOnly: readonly,
                                        }}
                                    />
                                </FormControl>
                            </Stack>
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

export default LungFunctionTestExamReport
