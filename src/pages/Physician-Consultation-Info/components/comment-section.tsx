import { Button, Grid, InputBase, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import styles from '../_physician-consultation-info.module.scss'

type Props = {
    setOpen?: any
}

const CommentSection: React.FC<Props> = ({ setOpen }: Props) => {
    const theme = useTheme()
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))

    const [selectedSection, setSelectedSection] = useState<string>('comment')

    // const handleClose = () => {
    //     setOpen(false)
    // }

    const topTableData = [
        {
            code: 'ABC123456',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            code: 'ABC123456',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            code: 'ABC123456',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            code: 'ABC123456',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            code: 'ABC123456',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            code: 'ABC123456',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            code: 'ABC123456',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            code: 'ABC123456',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
    ]
    const bottomTableData = [
        {
            code: 'BNC12345',
            content: 'minim veniam',
        },
        {
            code: 'BNC12345',
            content: 'minim veniam minim veniam',
        },
        {
            code: 'BNC12345',
            content: 'minim veniam minim veniam',
        },
        {
            code: 'BNC12345',
            content: 'minim veniam minim veniam',
        },
        {
            code: 'BNC12345',
            content: 'minim veniam minim veniam',
        },
        {
            code: 'BNC12345',
            content: 'minim veniam minim veniam',
        },
        {
            code: 'BNC12345',
            content: 'minim veniam minim veniam',
        },
        {
            code: 'BNC12345',
            content: 'minim veniam minim veniam',
        },
    ]
    return (
        <>
            <Typography className={styles.commentText} my={2}>
                Comment and Suggestion
            </Typography>

            <InputBase
                id="outlined-search"
                placeholder="Search..."
                type="search"
                sx={{
                    background: '#F9F9F9',
                    boxShadow: '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset',
                    borderRadius: '5px',
                    minWidth: '100%',
                    padding: '10px 15px',
                    mb: 2,
                }}
            />

            <Stack
                direction={{
                    xs: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row',
                    xl: 'row',
                }}
                spacing={2}
                mb={2}
            >
                <Button
                    variant="contained"
                    className={
                        selectedSection === 'comment'
                            ? styles.selectedBttn
                            : styles.unSelectedBttn
                    }
                    onClick={() => setSelectedSection('comment')}
                >
                    Comment
                </Button>
                <Button
                    variant="contained"
                    className={
                        selectedSection === 'suggestion'
                            ? styles.selectedBttn
                            : styles.unSelectedBttn
                    }
                    onClick={() => setSelectedSection('suggestion')}
                >
                    Suggestion
                </Button>
                <Button
                    variant="contained"
                    className={
                        selectedSection === 'midAbnormal'
                            ? styles.selectedBttn
                            : styles.unSelectedBttn
                    }
                    onClick={() => setSelectedSection('midAbnormal')}
                >
                    Mid Abnormal
                </Button>
                <Button
                    variant="contained"
                    className={
                        selectedSection === 'repeatTest'
                            ? styles.selectedBttn
                            : styles.unSelectedBttn
                    }
                    onClick={() => setSelectedSection('repeatTest')}
                >
                    Repeat Test
                </Button>
                <Button
                    variant="contained"
                    className={
                        selectedSection === 'followUp'
                            ? styles.selectedBttn
                            : styles.unSelectedBttn
                    }
                    onClick={() => setSelectedSection('followUp')}
                >
                    Follow-up
                </Button>
                <Button
                    variant="contained"
                    className={
                        selectedSection === 'furtherExam'
                            ? styles.selectedBttn
                            : styles.unSelectedBttn
                    }
                    onClick={() => setSelectedSection('furtherExam')}
                >
                    Further Exam
                </Button>
            </Stack>

            <Grid container sx={{ border: '2px solid #ededed' }}>
                <Grid item md={7} xs={12}>
                    <TableContainer
                        component={Paper}
                        className={styles.currentTableEditTable}
                    >
                        <Table stickyHeader size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        className={
                                            styles.currentTableEditTableCell
                                        }
                                        width="25%"
                                    >
                                        <p
                                            className={
                                                styles.callHistoryTableCell
                                            }
                                        >
                                            Code
                                        </p>
                                    </TableCell>
                                    <TableCell
                                        className={
                                            styles.currentTableEditTableCell
                                        }
                                    >
                                        <p
                                            className={
                                                styles.callHistoryTableCell
                                            }
                                        >
                                            Content
                                        </p>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {topTableData.map(
                                    (item: any, index: number) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell
                                                    sx={{
                                                        borderBottom: '0',
                                                    }}
                                                >
                                                    <p
                                                        className={
                                                            styles.callHistoryTableBodyCell
                                                        }
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
                                                            styles.callHistoryTableBodyCell
                                                        }
                                                    >
                                                        {item.content}
                                                    </p>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* BottomTable */}
                    <TableContainer
                        component={Paper}
                        className={styles.currentTableEditTable}
                    >
                        <Table stickyHeader size="small">
                            <TableHead sx={{ fontWeight: '600' }}>
                                <TableRow>
                                    <TableCell
                                        className={
                                            styles.currentTableEditTableCell
                                        }
                                        width="25%"
                                    >
                                        <p
                                            className={
                                                styles.callHistoryTableCell
                                            }
                                        >
                                            Code
                                        </p>
                                    </TableCell>
                                    <TableCell
                                        className={
                                            styles.currentTableEditTableCell
                                        }
                                        colSpan={2}
                                    >
                                        <p
                                            className={
                                                styles.callHistoryTableCell
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
                                                    }}
                                                >
                                                    <p
                                                        className={
                                                            styles.callHistoryTableBodyCell
                                                        }
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
                                                            styles.callHistoryTableBodyCell
                                                        }
                                                    >
                                                        {item.content}
                                                    </p>
                                                </TableCell>
                                                <TableCell
                                                    sx={{
                                                        borderBottom: '0',
                                                    }}
                                                >
                                                    <Button
                                                        variant="text"
                                                        sx={{
                                                            color: '#de4e3a',
                                                        }}
                                                    >
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item md={5} xs={12}>
                    <div className={styles.overviewDiv}>
                        <p className={styles.callHistoryTableCell}>Overview</p>
                        <div
                            className={styles.overviewInnerDiv}
                            style={{ height: mdUp ? '380px' : 'auto' }}
                        >
                            <p className={styles.callHistoryTableCell}>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                            </p>
                        </div>
                        <Stack
                            direction="row"
                            spacing={2}
                            className={
                                mdUp
                                    ? styles.overviewDivBttnStackAbsolute
                                    : styles.overviewDivBttnStackRelative
                            }
                        >
                            <Button
                                variant="contained"
                                className={
                                    styles.currentTableEditModalConfirmBttn
                                }
                                fullWidth
                                // onClick={handleClose}
                            >
                                Confirm
                            </Button>
                            <Button
                                variant="contained"
                                className={
                                    styles.currentTableEditModalCancelBttn
                                }
                                fullWidth
                                // onClick={handleClose}
                            >
                                Cancel
                            </Button>
                        </Stack>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default CommentSection
