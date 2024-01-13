import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Grid, Stack } from '@mui/material'
import styles from './_check-out-modal.module.scss'
import CloseIcon from '@mui/icons-material/Close'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { DASHBOARD_PAGE } from 'constant'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import IconButton from '@mui/material/IconButton'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'

type CheckoutModalProps = {
    open: boolean
    setOpen: any
}
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

const CheckOutModal: React.FC<CheckoutModalProps> = ({
    open,
    setOpen,
}: CheckoutModalProps) => {
    const handleClose = () => setOpen(false)
    const navigate = useNavigate()

    const handleRedirectToHome = () => {
        navigate(DASHBOARD_PAGE)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 850,
        boxShadow: 24,
        borderRadius: '5px',
    }

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.checkOutModal }}
            >
                <Stack direction="row" className={styles.gradientBackground}>
                    <div className={styles.modalFlex}>
                        <div>
                            <Avatar sx={{ width: 60, height: 60 }}>H</Avatar>
                        </div>
                        <div className={styles.doctorInfoDiv}>
                            <p className={styles.doctorOnShiftText}>
                                Doctor On Shift
                            </p>
                            <p className={styles.doctorName}>Dr.Tan Rui Kang</p>
                        </div>
                    </div>
                    <Stack direction="row" sx={{ marginLeft: 'auto' }}>
                        <div style={{ marginLeft: 'auto' }}>
                            <p className={styles.time}>01:00 PM</p>
                            <p className={styles.date}>22 Sept 2022</p>
                        </div>
                        <div className={styles.marginLeft15PX}>
                            <CloseIcon
                                className={styles.closeIcon}
                                onClick={handleClose}
                            />
                        </div>
                    </Stack>
                </Stack>
                <DialogContent>
                    <Stack direction="row">
                        <div>
                            <p className={styles.checkInTimeTitle}>
                                Check In Time:
                            </p>
                            <p className={styles.checkInTime}>
                                22 SEPT 2022 : 01:00 PM
                            </p>
                        </div>
                        <Button
                            variant="contained"
                            className={styles.checkoutButton}
                            onClick={handleRedirectToHome}
                        >
                            Check Out
                        </Button>
                    </Stack>
                </DialogContent>
            </Dialog>
        </>
        // <div>
        //     <Modal open={open}>
        //         <Box sx={style}>
        //             <Grid
        //                 container
        //                 className={
        //                     styles.modalPadding +
        //                     ' ' +
        //                     styles.gradientBackground
        //                 }
        //             >
        //                 <Grid item md={9}>
        //                     <div className={styles.modalFlex}>
        //                         <div>
        //                             <Avatar sx={{ width: 60, height: 60 }}>
        //                                 H
        //                             </Avatar>
        //                         </div>
        //                         <div className={styles.doctorInfoDiv}>
        //                             <p className={styles.doctorOnShiftText}>
        //                                 Doctor On Shift
        //                             </p>
        //                             <p className={styles.doctorName}>
        //                                 Dr.Tan Rui Kang
        //                             </p>
        //                         </div>
        //                     </div>
        //                 </Grid>
        //                 <Grid item md={3}>
        //                     <Stack direction="row">
        //                         <div style={{ marginLeft: 'auto' }}>
        //                             <p className={styles.time}>01:00 PM</p>
        //                             <p className={styles.date}>22 Sept 2022</p>
        //                         </div>
        //                         <div className={styles.marginLeft15PX}>
        //                             <CloseIcon
        //                                 className={styles.closeIcon}
        //                                 onClick={handleClose}
        //                             />
        //                         </div>
        //                     </Stack>
        //                 </Grid>
        //             </Grid>
        //             <Grid
        //                 container
        //                 className={
        //                     styles.padding25PX + ' ' + styles.whiteBackground
        //                 }
        //             >
        //                 <Grid item md={9}>
        //                     <p className={styles.checkInTimeTitle}>
        //                         Check In Time:
        //                     </p>
        //                     <p className={styles.checkInTime}>
        //                         22 SEPT 2022 : 01:00 PM
        //                     </p>
        //                 </Grid>
        //                 <Grid item md={3}>
        //                     <Button
        //                         variant="contained"
        //                         className={styles.checkoutButton}
        //                         onClick={handleRedirectToHome}
        //                     >
        //                         Check Out
        //                     </Button>
        //                 </Grid>
        //             </Grid>
        //         </Box>
        //     </Modal>
        // </div>
    )
}

export default CheckOutModal
