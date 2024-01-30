import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_final-report.module.scss'
import { Grid, TextField, DialogActions } from '@mui/material'
import { useRef } from 'react'
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
    setOpenReportFollowedModal: any
}

const RFSupplementaryConfirmModal: React.FC<Props> = ({
    setOpen,
    open,
    setOpenReportFollowedModal,
}: Props) => {
    const stickerRef = useRef(null)
    const handleClose = () => {
        setOpen(false)
        setOpenReportFollowedModal(true)
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.rf_supplementary_confirm_modal }}
            >
                <DialogContent>
                    <div>
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
                            className={styles.textFieldProps}
                        />
                    </div>
                </DialogContent>
                <DialogActions
                    className={styles.view_final_report_dialog_action}
                >
                    <Button
                        variant="contained"
                        className={styles.rf_modal_no_bttn}
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        className={styles.rf_modal_yes_bttn}
                        onClick={() => setOpen(false)}
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
export default RFSupplementaryConfirmModal
