import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
// import styles from '../_health-management-consultation-info.module.scss'
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
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogActions from '@mui/material/DialogActions'
import Stack from '@mui/material/Stack'
import ConfirmIcon from 'images/reject.png'

import {
    FormControl,
    Select,
    MenuItem,
    TextField,
    Box,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import ConfirmationModal from 'components/ConfirmationModal'
import styles from './_call-history-modal.module.scss'
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
    listData: any
    listOption: any
    statusOption: any
}

const CallHistoryModal: React.FC<Props> = ({
    setOpen,
    open,
    listData,
    listOption,
    statusOption,
}: Props) => {
    const theme = useTheme()
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))

    const [rowSpanId, setRowSpanId] = useState<number>()
    const [openConfirmationModal, setOpenConfirmationModal] =
        useState<boolean>(false)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.callHistoryModal }}
            >
                <DialogTitle className={styles.infoModalColor}>
                    <p className={styles.infoModalTitle}>Call History</p>
                </DialogTitle>
                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 15,
                        color: (theme: any) => theme?.palette?.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent className={styles.callHistoryModalDialogContent}>
                    <TableContainer
                        component={Paper}
                        sx={{
                            width: lgUp ? '100%' : '1200px',
                        }}
                        className={styles.callHistoryTable}
                    >
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ width: '15%' }}>
                                        <p
                                            className={
                                                styles.callHistoryTableCell
                                            }
                                            style={{ textAlign: 'center' }}
                                        >
                                            Allocated Date
                                        </p>
                                    </TableCell>
                                    <TableCell sx={{ width: '15%' }}>
                                        <p
                                            className={
                                                styles.callHistoryTableCell
                                            }
                                        >
                                            Relatives
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.callHistoryTableCell
                                            }
                                        >
                                            Remarks
                                        </p>
                                    </TableCell>
                                    <TableCell sx={{ width: '15%' }}>
                                        <p
                                            className={
                                                styles.callHistoryTableCell
                                            }
                                        >
                                            PIC
                                        </p>
                                    </TableCell>
                                    <TableCell sx={{ width: '15%' }}>
                                        <p
                                            className={
                                                styles.callHistoryTableCell
                                            }
                                        >
                                            Status
                                        </p>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listData.map((item: any, index: number) => {
                                    return (
                                        <>
                                            {rowSpanId == item.id && (
                                                <TableRow
                                                    key={'rowspan' + index}
                                                >
                                                    <TableCell
                                                        rowSpan={
                                                            rowSpanId == item.id
                                                                ? 2
                                                                : 1
                                                        }
                                                    >
                                                        <div>
                                                            <p
                                                                className={
                                                                    styles.callHistoryTableValueDate
                                                                }
                                                                style={{
                                                                    textAlign:
                                                                        'center',
                                                                }}
                                                            >
                                                                {item.date}
                                                            </p>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            borderLeft:
                                                                '2px solid #ededed',
                                                        }}
                                                    >
                                                        <div>
                                                            <FormControl
                                                                fullWidth
                                                                size="small"
                                                                className={
                                                                    styles.callHistorySelect
                                                                }
                                                            >
                                                                <Select
                                                                    className={
                                                                        styles.inputField
                                                                    }
                                                                    name="relativeList"
                                                                    // value={''}
                                                                    displayEmpty
                                                                    // value={currentSelectedOption}
                                                                    // onChange={handleChange}
                                                                >
                                                                    <MenuItem value="">
                                                                        -
                                                                    </MenuItem>
                                                                    {listOption.map(
                                                                        (
                                                                            item: any,
                                                                            index: number
                                                                        ) => {
                                                                            return (
                                                                                <MenuItem
                                                                                    value={
                                                                                        item.id
                                                                                    }
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    className={
                                                                                        styles.inputField
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        item.label
                                                                                    }
                                                                                </MenuItem>
                                                                            )
                                                                        }
                                                                    )}
                                                                </Select>
                                                            </FormControl>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            borderLeft:
                                                                '2px solid #ededed',
                                                        }}
                                                    >
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            size="small"
                                                            fullWidth
                                                            InputProps={{
                                                                className:
                                                                    styles.callHistorySelect,
                                                                classes: {
                                                                    input: styles.inputField,
                                                                },
                                                            }}
                                                            rows={5}
                                                            multiline
                                                        />
                                                        <p
                                                            style={{
                                                                margin: 'auto',
                                                            }}
                                                        >
                                                            <span
                                                                className={
                                                                    styles.callHistoryModalBottomText
                                                                }
                                                            >
                                                                last update:
                                                            </span>
                                                            <span
                                                                className={
                                                                    styles.callHistoryModalBottomValue
                                                                }
                                                            >
                                                                -
                                                            </span>
                                                        </p>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            borderLeft:
                                                                '2px solid #ededed',
                                                        }}
                                                    >
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            size="small"
                                                            fullWidth
                                                            InputProps={{
                                                                className:
                                                                    styles.callHistorySelect,
                                                                classes: {
                                                                    input: styles.inputField,
                                                                },
                                                            }}
                                                        />
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            borderLeft:
                                                                '2px solid #ededed',
                                                        }}
                                                    >
                                                        <FormControl
                                                            fullWidth
                                                            size="small"
                                                            className={
                                                                styles.callHistorySelect
                                                            }
                                                        >
                                                            <Select
                                                                className={
                                                                    styles.inputField
                                                                }
                                                                name="statusList"
                                                                // value={currentSelectedOption}
                                                                // onChange={handleChange}
                                                            >
                                                                {statusOption.map(
                                                                    (
                                                                        item: any,
                                                                        index: number
                                                                    ) => {
                                                                        return (
                                                                            <MenuItem
                                                                                value={
                                                                                    item.id
                                                                                }
                                                                                key={
                                                                                    index
                                                                                }
                                                                                className={
                                                                                    styles.inputField
                                                                                }
                                                                            >
                                                                                {
                                                                                    item.label
                                                                                }
                                                                            </MenuItem>
                                                                        )
                                                                    }
                                                                )}
                                                            </Select>
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                            <TableRow key={index}>
                                                {rowSpanId != item.id && (
                                                    <TableCell
                                                        rowSpan={
                                                            rowSpanId == item.id
                                                                ? 2
                                                                : 1
                                                        }
                                                    >
                                                        <div>
                                                            <p
                                                                className={
                                                                    styles.callHistoryTableValueDate
                                                                }
                                                                style={{
                                                                    textAlign:
                                                                        'center',
                                                                }}
                                                            >
                                                                {item.date}
                                                            </p>
                                                        </div>
                                                    </TableCell>
                                                )}

                                                <TableCell
                                                    sx={{
                                                        borderLeft:
                                                            '2px solid #ededed',
                                                    }}
                                                >
                                                    <div>
                                                        <FormControl
                                                            fullWidth
                                                            size="small"
                                                            className={
                                                                styles.callHistorySelect
                                                            }
                                                            disabled
                                                        >
                                                            <Select
                                                                className={
                                                                    styles.inputField
                                                                }
                                                                name="relativeList"
                                                                value={
                                                                    item.relative
                                                                }
                                                                // value={currentSelectedOption}
                                                                // onChange={handleChange}
                                                            >
                                                                {listOption.map(
                                                                    (
                                                                        item: any,
                                                                        index: number
                                                                    ) => {
                                                                        return (
                                                                            <MenuItem
                                                                                value={
                                                                                    item.id
                                                                                }
                                                                                key={
                                                                                    index
                                                                                }
                                                                                className={
                                                                                    styles.inputField
                                                                                }
                                                                            >
                                                                                {
                                                                                    item.label
                                                                                }
                                                                            </MenuItem>
                                                                        )
                                                                    }
                                                                )}
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </TableCell>
                                                <TableCell
                                                    sx={{
                                                        borderLeft:
                                                            '2px solid #ededed',
                                                    }}
                                                >
                                                    <TextField
                                                        variant="outlined"
                                                        margin="dense"
                                                        size="small"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.callHistorySelect,
                                                            classes: {
                                                                input: styles.inputField,
                                                            },
                                                        }}
                                                        rows={5}
                                                        multiline
                                                        value={item.remark}
                                                        disabled
                                                    />
                                                    <p
                                                        style={{
                                                            margin: 'auto',
                                                        }}
                                                    >
                                                        <span
                                                            className={
                                                                styles.callHistoryModalBottomText
                                                            }
                                                        >
                                                            last update:
                                                        </span>
                                                        <span
                                                            className={
                                                                styles.callHistoryModalBottomValue
                                                            }
                                                        >
                                                            11:11 22-09-2022
                                                        </span>
                                                    </p>
                                                </TableCell>
                                                <TableCell
                                                    sx={{
                                                        borderLeft:
                                                            '2px solid #ededed',
                                                    }}
                                                >
                                                    <TextField
                                                        variant="outlined"
                                                        margin="dense"
                                                        size="small"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.callHistorySelect,
                                                            classes: {
                                                                input: styles.inputField,
                                                            },
                                                        }}
                                                        value={item.pic}
                                                        disabled
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    sx={{
                                                        borderLeft:
                                                            '2px solid #ededed',
                                                        position: 'relative',
                                                        verticalAlign: 'top',
                                                    }}
                                                >
                                                    <FormControl
                                                        fullWidth
                                                        size="small"
                                                        className={
                                                            styles.callHistorySelect
                                                        }
                                                        disabled
                                                    >
                                                        <Select
                                                            className={
                                                                styles.inputField
                                                            }
                                                            name="statusList"
                                                            value={item.status}
                                                            // value={currentSelectedOption}
                                                            // onChange={handleChange}
                                                        >
                                                            {statusOption.map(
                                                                (
                                                                    item: any,
                                                                    index: number
                                                                ) => {
                                                                    return (
                                                                        <MenuItem
                                                                            value={
                                                                                item.id
                                                                            }
                                                                            key={
                                                                                index
                                                                            }
                                                                            className={
                                                                                styles.inputField
                                                                            }
                                                                        >
                                                                            {
                                                                                item.label
                                                                            }
                                                                        </MenuItem>
                                                                    )
                                                                }
                                                            )}
                                                        </Select>
                                                    </FormControl>

                                                    {/* <Box
                                                        sx={{
                                                            position:
                                                                'absolute',
                                                            bottom: '0',
                                                            width: 'calc(100% - 2rem)',
                                                        }}
                                                        mb={1}
                                                    >
                                                        <Stack
                                                            justifyContent="space-between"
                                                            alignItems="center"
                                                            spacing={1}
                                                        >
                                                            {item.status ==
                                                                1 && (
                                                                <>
                                                                    {rowSpanId !=
                                                                    item.id ? (
                                                                        <Button
                                                                            fullWidth
                                                                            variant="contained"
                                                                            onClick={() =>
                                                                                setRowSpanId(
                                                                                    item.id
                                                                                )
                                                                            }
                                                                        >
                                                                            Create
                                                                        </Button>
                                                                    ) : (
                                                                        <>
                                                                            <Button
                                                                                fullWidth
                                                                                variant="contained"
                                                                                onClick={() =>
                                                                                    setOpenConfirmationModal(
                                                                                        true
                                                                                    )
                                                                                }
                                                                            >
                                                                                Confirm
                                                                            </Button>
                                                                            <Button
                                                                                fullWidth
                                                                                variant="contained"
                                                                                onClick={() =>
                                                                                    setRowSpanId(
                                                                                        undefined
                                                                                    )
                                                                                }
                                                                            >
                                                                                Cancel
                                                                            </Button>
                                                                        </>
                                                                    )}
                                                                </>
                                                            )}
                                                        </Stack>
                                                    </Box> */}
                                                </TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions
                    className={styles.callHistoryDialogAction}
                    sx={{ padding: mdUp ? '20px 40px' : '10px 20px' }}
                >
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                        }}
                        spacing={{ xs: 1, sm: 2, md: 2, lg: 6, xl: 6 }}
                    >
                        <div>
                            <p className={styles.callHistoryDialogActionText}>
                                Name
                            </p>
                            <p className={styles.callHistoryDialogActionValue}>
                                Jeffery Mohammad Bin Christofa
                            </p>
                        </div>
                        <div>
                            <p className={styles.callHistoryDialogActionText}>
                                Gender
                            </p>
                            <p className={styles.callHistoryDialogActionValue}>
                                Male
                            </p>
                        </div>
                        <div>
                            <p className={styles.callHistoryDialogActionText}>
                                Member ID
                            </p>
                            <p className={styles.callHistoryDialogActionValue}>
                                12345678123456
                            </p>
                        </div>
                        <div>
                            <p className={styles.callHistoryDialogActionText}>
                                IC No.
                            </p>
                            <p className={styles.callHistoryDialogActionValue}>
                                830505011212
                            </p>
                        </div>
                        <div style={{ marginLeft: mdUp ? 'auto' : '0' }}>
                            <p
                                className={styles.callHistoryDialogActionText}
                                style={{ textAlign: mdUp ? 'end' : 'start' }}
                            >
                                Contact No.
                            </p>
                            <p className={styles.callHistoryDialogActionValue}>
                                +60-100600660
                            </p>
                        </div>
                    </Stack>
                </DialogActions>
            </Dialog>

            <ConfirmationModal
                title={'Confirm Data'}
                context={
                    <Typography>
                        You are about to save this phone consultation call
                        remarks. Saved data{' '}
                        <strong style={{ color: 'var(--color-red)' }}>
                            cannot be edited
                        </strong>{' '}
                        and will be{' '}
                        <strong style={{ color: 'var(--color-red)' }}>
                            permanently saved
                        </strong>
                        .
                    </Typography>
                }
                image={ConfirmIcon}
                decline={() => setOpenConfirmationModal(false)}
                accept={() => setOpenConfirmationModal(false)}
                setOpen={setOpenConfirmationModal}
                open={openConfirmationModal}
                width="md"
                acceptText="YES, CONFIRM."
                declineText="CHECK AGAIN."
            />
        </React.Fragment>
    )
}
export default CallHistoryModal
