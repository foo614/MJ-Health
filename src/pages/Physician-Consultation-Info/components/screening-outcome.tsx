import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import styles from '../_physician-consultation-info.module.scss'
import { TextField, InputAdornment } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
const ScreeningOutcome = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('lg'))
    const data = [
        {
            item: 'Fasting Glucose',
            value1: '5.51',
            value2: '5.51',
            trend: '0.54',
            status: 1,
        },
        {
            item: 'Cholesterol',
            value1: '5.51',
            value2: '5.51',
            trend: '0.54',
            status: 1,
        },
        {
            item: 'HDL-Cholesterol',
            value1: '5.51',
            value2: '5.51',
            trend: '0.54',
            status: 1,
        },
        {
            item: 'LDL-Cholesterol',
            value1: '5.51',
            value2: '5.51',
            trend: '0.54',
            status: 1,
        },
        {
            item: 'Blood Pressure',
            value1: '5.51',
            value2: '5.51',
            trend: '0.54',
            status: 1,
        },
        {
            item: 's-GOT(AST)',
            value1: '5.51',
            value2: '5.51',
            trend: '0.54',
            status: 2,
        },
        {
            item: 's-GPT(ALT)',
            value1: '5.51',
            value2: '5.51',
            trend: '0.54',
            status: 2,
        },
        {
            item: 's-GT(GGT)',
            value1: '5.51',
            value2: '5.51',
            trend: '0.54',
            status: 2,
        },
        {
            item: 'BMI',
            value1: '5.51',
            value2: '5.51',
            trend: '0.54',
            status: 2,
        },
        {
            item: 'Body Fat',
            value1: '5.51',
            value2: '5.51',
            trend: '0.54',
            status: 2,
        },
        {
            item: 'Uric Acid',
            value1: '5.51',
            value2: '5.51',
            trend: '0.54',
            status: 2,
        },
        {
            item: 'BMD',
            value1: '5.51',
            value2: '5.51',
            trend: '0.54',
            status: 2,
        },
    ]
    return (
        <TableContainer
            component={Paper}
            // className={styles.physicianConsultationInfoTable}
            sx={{ marginTop: '1rem' }}
        >
            <Table stickyHeader sx={{ width: matches ? '100%' : '1200px' }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: '5%' }}></TableCell>
                        <TableCell sx={{ width: '25%' }}>
                            <p className={styles.screeningOutcomeTableHeadCell}>
                                Items
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={
                                    styles.screeningOutcomeTableHeadCell +
                                    ' ' +
                                    styles.textCenter
                                }
                            >
                                22-09-2022
                            </p>
                        </TableCell>
                        <TableCell sx={{ width: '5%' }}></TableCell>
                        <TableCell>
                            <p
                                className={
                                    styles.screeningOutcomeTableHeadCell +
                                    ' ' +
                                    styles.textCenter
                                }
                            >
                                22-09-2018
                            </p>
                        </TableCell>
                        <TableCell sx={{ width: '5%' }}></TableCell>
                        <TableCell>
                            <p
                                className={
                                    styles.screeningOutcomeTableHeadCell +
                                    ' ' +
                                    styles.textCenter
                                }
                            >
                                Trend
                            </p>
                        </TableCell>
                        <TableCell sx={{ width: '5%' }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item: any, index: number) => {
                        return (
                            <TableRow key={index}>
                                <TableCell sx={{ padding: '0' }}></TableCell>
                                <TableCell sx={{ padding: '0' }}>
                                    <p
                                        className={
                                            styles.screeningOutcomeTableBodyCell
                                        }
                                    >
                                        {item.item}
                                    </p>
                                </TableCell>
                                <TableCell sx={{ padding: '0' }}>
                                    <TextField
                                        InputProps={{
                                            classes: {
                                                input:
                                                    styles.inputField +
                                                    ' ' +
                                                    styles.textCenter,
                                            },
                                        }}
                                        variant="outlined"
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                        name="data1"
                                        className={styles.textFieldProps}
                                        value={item.value1}
                                    />
                                </TableCell>
                                <TableCell sx={{ padding: '0' }}></TableCell>
                                <TableCell sx={{ padding: '0' }}>
                                    <TextField
                                        InputProps={{
                                            classes: {
                                                input:
                                                    styles.inputField +
                                                    ' ' +
                                                    styles.textCenter,
                                            },
                                        }}
                                        variant="outlined"
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                        name="data1"
                                        className={styles.textFieldProps}
                                        value={item.value2}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{ padding: '0', borderBottom: '0' }}
                                ></TableCell>
                                <TableCell
                                    sx={{ padding: '0', borderBottom: '0' }}
                                >
                                    <TextField
                                        InputProps={{
                                            classes: {
                                                input: styles.inputFieldForTrend,
                                                adornedStart:
                                                    styles.adornedStartCss,
                                            },
                                            startAdornment: (
                                                <div
                                                    className={
                                                        item.status === 1
                                                            ? styles.positiveDiv
                                                            : styles.negativeDiv
                                                    }
                                                />
                                            ),
                                        }}
                                        fullWidth
                                        variant="outlined"
                                        size="small"
                                        margin="dense"
                                        className={styles.textFieldProps}
                                        sx={{ paddingLeft: '0px' }}
                                        value={item.trend}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{ padding: '0', borderBottom: '0' }}
                                ></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default ScreeningOutcome
