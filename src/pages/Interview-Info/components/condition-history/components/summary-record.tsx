import { Grid, Button, Stack } from '@mui/material'
import styles from '../../../_interview-info.module.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'
import { INTERVIEW_QUESTIONAIRE_PAGE, INTERVIEW_INFO_PAGE } from 'constant'

type Props = {
    questionnaireAction: () => void
    readonly?: boolean
}

const SummaryRecord = ({ questionnaireAction, readonly }: Props) => {
    const navigate = useNavigate()
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
            <div
                style={{
                    background: '#FDFDFD',
                    padding: '30px',
                    marginTop: '1rem',
                    borderTop: '2px solid #EDEDED',
                    borderBottom: '2px solid #EDEDED',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <p className={styles.medical_content_title}>
                            Summary Of Previous Medical Records
                        </p>
                        <TableContainer
                            component={Paper}
                            className={styles.health_condition_table}
                        >
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableHeadCellText
                                                }
                                            >
                                                No.
                                            </p>
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <p
                                                className={
                                                    styles.tableHeadCellText
                                                }
                                            >
                                                Content
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {bottomTableData.map(
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
                                                                styles.tableCellValue
                                                            }
                                                            style={{
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            {item.code}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            borderBottom: '0',

                                                            backgroundColor:
                                                                '#F9F9F9',
                                                        }}
                                                    >
                                                        <Stack
                                                            direction="row"
                                                            alignItems="center"
                                                        >
                                                            <div>
                                                                <p
                                                                    className={
                                                                        styles.tableCellValue
                                                                    }
                                                                >
                                                                    {
                                                                        item.content
                                                                    }
                                                                </p>
                                                            </div>
                                                        </Stack>
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
                        <p className={styles.medical_content_title}>
                            Summary Of Previous Health Screening Resultant
                        </p>
                        <TableContainer
                            component={Paper}
                            className={styles.health_condition_table}
                        >
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableHeadCellText
                                                }
                                            >
                                                No.
                                            </p>
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <p
                                                className={
                                                    styles.tableHeadCellText
                                                }
                                            >
                                                Content
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {bottomTableData.map(
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
                                                                styles.tableCellValue
                                                            }
                                                            style={{
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            {item.code}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            borderBottom: '0',

                                                            backgroundColor:
                                                                '#F9F9F9',
                                                        }}
                                                    >
                                                        <Stack
                                                            direction="row"
                                                            alignItems="center"
                                                        >
                                                            <div>
                                                                <p
                                                                    className={
                                                                        styles.tableCellValue
                                                                    }
                                                                >
                                                                    {
                                                                        item.content
                                                                    }
                                                                </p>
                                                            </div>
                                                        </Stack>
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
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="end"
                sx={{
                    marginTop: '1rem',
                    paddingLeft: '30px',
                    paddingRight: '30px',
                }}
            >
                <Button
                    variant="contained"
                    className={styles.questionnaireBttn}
                    sx={{ width: '220px', height: '64px' }}
                    onClick={questionnaireAction}
                >
                    Questionnaire
                </Button>

                {!readonly && (
                    <Button
                        variant="contained"
                        className={styles.interview_info_save_bttn}
                        sx={{ width: '220px', height: '64px' }}
                    >
                        Save
                    </Button>
                )}
            </Stack>
        </>
    )
}

export default SummaryRecord
