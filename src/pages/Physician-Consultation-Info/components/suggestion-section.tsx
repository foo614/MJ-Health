import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import DialogTitle from '@mui/material/DialogTitle'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {
    FormControl,
    Select,
    MenuItem,
    TextField,
    Grid,
    Button,
    Stack,
} from '@mui/material'
import styles from '../_physician-consultation-info.module.scss'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
type Props = {
    setOpen: any
}

const SuggestionSection: React.FC<Props> = ({ setOpen }: Props) => {
    const theme = useTheme()
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    const handleClose = () => {
        setOpen(false)
    }

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
                                                            styles.callHistoryTableCell
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
                                                            styles.callHistoryTableCell
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
                            <TableHead>
                                <TableRow>
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
                                                            styles.callHistoryTableCell
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
                                                            styles.callHistoryTableCell
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
                                onClick={handleClose}
                            >
                                Confirm
                            </Button>
                            <Button
                                variant="contained"
                                className={
                                    styles.currentTableEditModalCancelBttn
                                }
                                fullWidth
                                onClick={handleClose}
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
export default SuggestionSection
