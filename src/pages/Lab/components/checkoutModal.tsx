import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Grid } from '@mui/material'
import styles from '../_lab.module.scss'
import CloseIcon from '@mui/icons-material/Close'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

type CheckoutModalProps = {
    open: boolean
    setOpen: any
}
const CheckOutModal: React.FC<CheckoutModalProps> = ({
    open,
    setOpen,
}: CheckoutModalProps) => {
    const handleClose = () => setOpen(false)
    const navigate = useNavigate();
    
    const handleRedirectToHome = () => {
        navigate('/3')
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
        <div>
            <Modal open={open}>
                <Box sx={style}>
                    <Grid
                        container
                        className={
                            styles.padding25PX + ' ' + styles.gradientBackground
                        }
                    >
                        <Grid item md={9}>
                            <div className={styles.modalFlex}>
                                <div>
                                    <Avatar sx={{ width: 60, height: 60 }}>
                                        H
                                    </Avatar>
                                </div>
                                <div className={styles.doctorInfoDiv}>
                                    <p className={styles.doctorOnShiftText}>
                                        Doctor On Shift
                                    </p>
                                    <p className={styles.doctorName}>
                                        Dr.Tan Rui Kang
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className={styles.modalFlex}>
                                <div>
                                    <p className={styles.time}>01:00 PM</p>
                                    <p className={styles.date}>22 Sept 2022</p>
                                </div>
                                <div className={styles.marginLeft15PX}>
                                    <CloseIcon
                                        className={styles.closeIcon}
                                        onClick={handleClose}
                                    />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        className={
                            styles.padding25PX + ' ' + styles.whiteBackground
                        }
                    >
                        <Grid item md={9}>
                            <p className={styles.checkInTimeTitle}>
                                Check In Time:
                            </p>
                            <p className={styles.checkInTime}>
                                22 SEPT 2022 : 01:00 PM
                            </p>
                        </Grid>
                        <Grid item md={3}>
                            <Button
                                variant="contained"
                                className={styles.checkoutButton}
                                onClick={handleRedirectToHome}
                            >
                                Check Out
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}

export default CheckOutModal
