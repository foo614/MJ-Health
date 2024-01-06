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
const SaveAppointmentModal: React.FC<Props> = ({
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
                classes={{ paper: styles.saveAppointmentModal }}
                onClose={() => setOpen(false)}
            >
                <DialogContent>
                    <p className={styles.saveAppointmentModalTitle}>
                        Jerry Mohamad Bin Christofa
                    </p>
                    <p className={styles.seqNoText}>Sequence No.</p>
                    <p className={styles.seqNo}>001</p>
                    <div
                        className={
                            matches
                                ? styles.cancelAppointmentDivider
                                : styles.cancelAppointmentDividerMobile
                        }
                    />
                    <p className={styles.checkInText}>
                        Check In:{' '}
                        <span className={styles.checkInValue}>
                            08:05AM - 12 JUL 2022
                        </span>
                    </p>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default SaveAppointmentModal
