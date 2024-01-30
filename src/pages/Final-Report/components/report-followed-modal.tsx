import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_final-report.module.scss'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import DialogTitle from '@mui/material/DialogTitle'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import CircleIcon from '@mui/icons-material/Circle'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
    FormControl,
    Select,
    MenuItem,
    DialogActions,
    Stack,
    Box,
    Checkbox,
    TextField,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import RFSupplementaryModal from './rf-supplementary-report-modal'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    setOpen: any
    open: any
    setOpenViewFinalReportModal: any
    setOpenRFModal: any
}

const ReportFollowedModal: React.FC<Props> = ({
    setOpen,
    open,
    setOpenViewFinalReportModal,
    setOpenRFModal,
}: Props) => {
    const theme = useTheme()
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    const [isShowTextField, setIsShowTextField] = React.useState<boolean>(false)
    const [defaultReport, setDefaultReport] = React.useState<string>(
        'Supplementary Report 03-03-2023'
    )
    const remaining_section = [
        {
            id: 1,
            section: 'Mammography',
            status: 1,
        },
        {
            id: 2,
            section: 'Pap’s Smear',
            status: 1,
        },
        {
            id: 3,
            section: 'Sonography',
            status: 0,
        },
        {
            id: 4,
            section: 'X-Ray',
            status: 1,
        },
        {
            id: 5,
            section: 'Vision and Ocular Tension Test',
            status: 0,
        },
        {
            id: 6,
            section: 'Test',
            status: 1,
        },
    ]

    const handleClose = () => {
        setOpen(!open)
        setOpenViewFinalReportModal(true)
    }

    const handleNextModal = () => {
        setOpen(false)
        setOpenRFModal(true)
    }

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.report_followed_modal }}
            >
                <DialogTitle className={styles.infoModalColor}>
                    <p className={styles.infoModalTitle}>
                        Report to be Followed
                    </p>
                </DialogTitle>
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 15,
                        color: (theme: any) => theme?.palette?.grey[500],
                    }}
                >
                    <ArrowBackIosNewIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent sx={{ p: 0 }}>
                    <div
                        style={{
                            backgroundColor: '#FDFDFD',
                            paddingLeft: '25px',
                            paddingTop: '10px',
                        }}
                    >
                        <p className={styles.report_followed_modal_print_text}>
                            Print
                        </p>
                    </div>
                    <TableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableCell
                                    sx={{
                                        paddingLeft: '25px',
                                        backgroundColor: '#FDFDFD',
                                        paddingBottom: '0',
                                        paddingTop: '0',
                                    }}
                                    width="50%"
                                >
                                    <p
                                        className={
                                            styles.report_followed_modal_table_head
                                        }
                                    >
                                        Report
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FDFDFD',
                                        paddingBottom: '0',
                                        paddingTop: '0',
                                    }}
                                    width="25%"
                                >
                                    <p
                                        className={
                                            styles.report_followed_modal_table_head
                                        }
                                    >
                                        Date
                                    </p>
                                </TableCell>
                                <TableCell width="20%"></TableCell>
                            </TableHead>
                        </Table>
                        <Box
                            sx={{ height: '200px', overflow: 'auto' }}
                            className={'tableContainer'}
                        >
                            <Table size="small">
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            width="50%"
                                            sx={{
                                                borderBottom: '0',
                                                paddingLeft: '25px',
                                            }}
                                        >
                                            {isShowTextField ? (
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    variant="outlined"
                                                    size="small"
                                                    InputProps={{
                                                        classes: {
                                                            input: styles.inputField,
                                                        },
                                                    }}
                                                    fullWidth
                                                    className={
                                                        styles.textFieldProps
                                                    }
                                                    onClick={() =>
                                                        setIsShowTextField(
                                                            false
                                                        )
                                                    }
                                                    value={defaultReport}
                                                />
                                            ) : (
                                                <p
                                                    className={
                                                        styles.report_followed_modal_table_body
                                                    }
                                                    onClick={() =>
                                                        setIsShowTextField(true)
                                                    }
                                                >
                                                    {defaultReport}
                                                </p>
                                            )}
                                        </TableCell>
                                        <TableCell
                                            width="25%"
                                            sx={{ borderBottom: '0' }}
                                        >
                                            <p
                                                className={
                                                    styles.report_followed_modal_table_body_date
                                                }
                                                onClick={() =>
                                                    setIsShowTextField(true)
                                                }
                                            >
                                                03-03-2023
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            width="20%"
                                            sx={{ borderBottom: '0' }}
                                        >
                                            <Button
                                                variant="contained"
                                                className={
                                                    styles.final_report_table_view_bttn
                                                }
                                                fullWidth
                                            >
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </TableContainer>
                    <div
                        style={{
                            backgroundColor: '#FDFDFD',
                            paddingLeft: '25px',
                            paddingTop: '10px',
                            borderTop: '1px solid rgba(224, 224, 224, 1)',
                        }}
                    >
                        <p className={styles.report_followed_modal_print_text}>
                            Remaining
                        </p>
                    </div>
                    <TableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableCell
                                    sx={{
                                        paddingLeft: '25px',
                                        backgroundColor: '#FDFDFD',
                                        paddingBottom: '0',
                                        paddingTop: '0',
                                    }}
                                    width="50%"
                                >
                                    <p
                                        className={
                                            styles.report_followed_modal_table_head
                                        }
                                    >
                                        Screening/ Station
                                    </p>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        backgroundColor: '#FDFDFD',
                                        paddingBottom: '0',
                                        paddingTop: '0',
                                    }}
                                    width="25%"
                                >
                                    <p
                                        className={
                                            styles.report_followed_modal_table_head
                                        }
                                    >
                                        Status
                                    </p>
                                </TableCell>
                                <TableCell width="20%"></TableCell>
                            </TableHead>
                        </Table>
                        <Box
                            sx={{ height: '200px', overflow: 'auto' }}
                            className={'tableContainer'}
                        >
                            <Table size="small">
                                <TableBody>
                                    {remaining_section.map(
                                        (item: any, index: number) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell
                                                        width="50%"
                                                        sx={{
                                                            borderBottom: '0',
                                                            paddingLeft: '25px',
                                                        }}
                                                    >
                                                        <p
                                                            className={
                                                                styles.report_followed_modal_table_body
                                                            }
                                                        >
                                                            {item.section}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell
                                                        width="25%"
                                                        sx={{
                                                            borderBottom: '0',
                                                        }}
                                                    >
                                                        <Stack
                                                            direction="row"
                                                            justifyContent="space-between"
                                                        >
                                                            <Button
                                                                variant="text"
                                                                startIcon={
                                                                    <CircleIcon
                                                                        sx={{
                                                                            color:
                                                                                item.status ===
                                                                                0
                                                                                    ? '#F9C234'
                                                                                    : '#3adebb',
                                                                            fontSize:
                                                                                '14px !important',
                                                                        }}
                                                                    />
                                                                }
                                                                className={
                                                                    styles.report_followed_modal_remaining_table_status
                                                                }
                                                            >
                                                                {item.status ===
                                                                0
                                                                    ? 'Pending'
                                                                    : 'Completed'}
                                                            </Button>
                                                            <div>
                                                                <Checkbox />
                                                            </div>
                                                        </Stack>
                                                    </TableCell>
                                                    <TableCell
                                                        width="20%"
                                                        sx={{
                                                            borderBottom: '0',
                                                        }}
                                                    >
                                                        <Button
                                                            variant="contained"
                                                            className={
                                                                styles.final_report_table_view_bttn
                                                            }
                                                            fullWidth
                                                        >
                                                            View
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </Box>
                    </TableContainer>
                </DialogContent>
                <DialogActions
                    className={styles.view_final_report_dialog_action}
                >
                    <Button
                        variant="contained"
                        className={
                            styles.report_followed_modal_generate_report_bttn
                        }
                        onClick={handleNextModal}
                    >
                        Generate Report
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ReportFollowedModal
