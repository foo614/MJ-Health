import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_member-profile.module.scss'
import { Grid } from '@mui/material'
import Icon from '../../../images/cancel-appointment.png'
import { useNavigate } from 'react-router-dom'
import { RECEPTION_PAGE } from 'constant'
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    open: boolean
    setOpen: any
    matches: boolean
}
const CancelAppointmentModal: React.FC<Props> = ({
    open,
    setOpen,
    matches,
}: Props) => {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.cancelAppointmentModal }}
            >
                <DialogContent>
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <img src={Icon} alt="icon" />
                    </div>
                    <div>
                        <p className={styles.cancelAppointmentTitle}>
                            Cancel the Appointment
                        </p>
                        <p className={styles.cancelAppointmentSubtitle}>
                            Do you want to cancel the patient’s appointment?
                        </p>
                        <div
                            className={
                                matches
                                    ? styles.cancelAppointmentDivider
                                    : styles.cancelAppointmentDividerMobile
                            }
                        />
                        <div className={styles.cancelAppointmentModalBttnDiv}>
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        className={
                                            styles.cancelAppointmentNoBttn
                                        }
                                        fullWidth
                                        onClick={() => setOpen(false)}
                                    >
                                        NO, KEEP IT.
                                    </Button>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        className={
                                            styles.cancelAppointmentYesBttn
                                        }
                                        fullWidth
                                        onClick={() => navigate(RECEPTION_PAGE)}
                                    >
                                        YES, REMOVE.
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default CancelAppointmentModal
