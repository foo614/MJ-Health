import styles from '../../_health-management-consultation-info.module.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Grid, Stack, Button } from '@mui/material'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const CurrentExamReport = () => {
    const [currentBttn, setCurrentBttn] = useState<number>(1)
    const theme = useTheme()
    const smUp = useMediaQuery(theme.breakpoints.up('sm'))
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
    const leftTableData = [
        {
            item: 'BMI',
            value: 25.0,
        },
        {
            item: 'Body Fat',
            value: 25.0,
        },
        {
            item: 'WBC',
            value: 25.0,
        },
        {
            item: 'MCV',
            value: 25.0,
        },
        {
            item: 'HDL-Cholesterol',
            value: 25.0,
        },
    ]

    const rightTableData = [
        {
            item: 'LDL-Cholesterol',
            value: 25.0,
        },
        {
            item: 'CHOL/ HDL - C',
            value: 25.0,
        },
        {
            item: 'RA Factor (RF)',
            value: 'Weakly P...',
        },
        {
            item: 'Ketone',
            value: 'Abnormal',
        },
        {
            item: 'ECG',
            value: 25.0,
        },
    ]

    const bottomTableData = [
        {
            code: '01',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '02',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '03',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '04',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '05',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '06',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '07',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '08',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '09',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '10',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
    ]
    return (
        <>
            <div className={styles.main_section_div}>
                <p className={styles.main_section_text}>Abnormal Items</p>
                <Grid container sx={{ marginTop: '10px' }} spacing={2}>
                    <Grid item md={6} xs={12}>
                        <TableContainer component={Paper}>
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableHeadCellText
                                                }
                                            >
                                                Exam.Items
                                            </p>
                                        </TableCell>
                                        <TableCell sx={{ textAlign: 'end' }}>
                                            <p
                                                className={
                                                    styles.tableHeadCellText
                                                }
                                            >
                                                Value
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {leftTableData.map(
                                        (item: any, index: number) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell
                                                        sx={{
                                                            borderBottom: '0',
                                                            backgroundColor:
                                                                '#F9F9F9',
                                                        }}
                                                    >
                                                        <p
                                                            className={
                                                                styles.currentTableExamItemCellValue
                                                            }
                                                        >
                                                            {item.item}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            textAlign: 'end',
                                                            borderBottom: '0',
                                                            backgroundColor:
                                                                '#F9F9F9',
                                                        }}
                                                    >
                                                        <p
                                                            className={
                                                                styles.tableHeadCellText
                                                            }
                                                        >
                                                            {item.value}
                                                        </p>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TableContainer component={Paper}>
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableHeadCellText
                                                }
                                            >
                                                Exam.Items
                                            </p>
                                        </TableCell>
                                        <TableCell sx={{ textAlign: 'end' }}>
                                            <p
                                                className={
                                                    styles.tableHeadCellText
                                                }
                                            >
                                                Value
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rightTableData.map(
                                        (item: any, index: number) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell
                                                        sx={{
                                                            borderBottom: '0',
                                                            backgroundColor:
                                                                '#F9F9F9',
                                                        }}
                                                    >
                                                        <p
                                                            className={
                                                                styles.currentTableExamItemCellValue
                                                            }
                                                        >
                                                            {item.item}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            textAlign: 'end',
                                                            borderBottom: '0',
                                                            backgroundColor:
                                                                '#F9F9F9',
                                                        }}
                                                    >
                                                        <p
                                                            className={
                                                                styles.tableHeadCellText
                                                            }
                                                        >
                                                            {item.value}
                                                        </p>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </div>
            <div
                className={styles.current_table_bottom_text_div}
                style={{ marginTop: '25px' }}
            >
                <Grid container spacing={2}>
                    <Grid item md={6} sm={4} xs={12}>
                        <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            sx={{ height: '100%' }}
                        >
                            <div>
                                <p className={styles.hmcModalTitle}>
                                    Physician Consultation:
                                </p>
                            </div>
                            <div>
                                <p className={styles.currentTableUserName}>
                                    {currentBttn === 1
                                        ? 'Tan Rui Kang'
                                        : 'Long Lee Shen'}
                                </p>
                            </div>
                        </Stack>
                    </Grid>
                    <Grid item md={6} sm={8} xs={12}>
                        <Stack
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'column',
                                lg: 'row',
                                xl: 'row',
                            }}
                            spacing={2}
                            alignItems="center"
                        >
                            <div
                                style={{ marginLeft: lgUp ? 'auto' : 'unset' }}
                            >
                                <Button
                                    variant="contained"
                                    className={
                                        currentBttn === 1
                                            ? styles.current_table_selected_bttn
                                            : styles.current_table_unselected_bttn
                                    }
                                    fullWidth
                                    onClick={() => setCurrentBttn(1)}
                                >
                                    Current
                                </Button>
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    className={
                                        currentBttn === 2
                                            ? styles.current_table_selected_bttn
                                            : styles.current_table_unselected_bttn
                                    }
                                    fullWidth
                                    onClick={() => setCurrentBttn(2)}
                                >
                                    22-09-2022
                                </Button>
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    className={
                                        currentBttn === 3
                                            ? styles.current_table_selected_bttn
                                            : styles.current_table_unselected_bttn
                                    }
                                    fullWidth
                                    onClick={() => setCurrentBttn(3)}
                                >
                                    22-09-2018
                                </Button>
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
            <div className={styles.current_table_bottom_table_div}>
                <TableContainer
                    component={Paper}
                    className={styles.current_table_bottom_table}
                >
                    <Table stickyHeader size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <p className={styles.tableHeadCellText}>
                                        Code
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.tableHeadCellText}>
                                        Content
                                    </p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bottomTableData.map((item: any, index: number) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell
                                            sx={{
                                                borderBottom: '0',
                                            }}
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                                style={{ textAlign: 'center' }}
                                            >
                                                {item.code}
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                borderBottom: '0',
                                            }}
                                        >
                                            <p
                                                className={
                                                    styles.tableHeadCellText
                                                }
                                            >
                                                {item.content}
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default CurrentExamReport
