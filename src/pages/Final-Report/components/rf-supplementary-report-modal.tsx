import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_final-report.module.scss'
import RFModalIcon from '../../../images/rf_modal_icon.png'
import { Grid } from '@mui/material'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'
import RFSupplementaryConfirmModal from './rf-supplementary-report-confirm-modal'
import { FINAL_REPORT_SUPPLEMENTARY_REPORT } from 'constant'
import { useNavigate } from 'react-router-dom'
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    matches: any
    setOpen: any
    open: any
    setOpenReportFollowedModal: any
    setOpenViewFinalReportModal: any
    setOpenRFConfirmationModal: any
}

const RFSupplementaryModal: React.FC<Props> = ({
    matches,
    setOpen,
    open,
    setOpenReportFollowedModal,
    setOpenViewFinalReportModal,
    setOpenRFConfirmationModal,
}: Props) => {
    const navigate = useNavigate()

    const handleClose = () => {
        setOpen(false)
        setOpenReportFollowedModal(true)
    }

    const handleNextStep = () => {
        setOpen(false)
        setOpenReportFollowedModal(false)
        setOpenViewFinalReportModal(false)
        setOpenRFConfirmationModal(true)
        navigate(FINAL_REPORT_SUPPLEMENTARY_REPORT)
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.rf_supplementary_modal }}
            >
                <DialogContent>
                    <div style={{ marginTop: '4rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={RFModalIcon} alt="print icon" />
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p className={styles.rf_supplementary_modal_title}>
                                Create RF Supplementary Report
                            </p>
                        </div>
                        <div
                            style={{ marginTop: '20px', marginBottom: '15px' }}
                        >
                            <p
                                className={
                                    styles.rf_supplementary_modal_sub_title
                                }
                            >
                                You will need to fill in final comment &
                                suggestion in order to complete the task.
                            </p>
                        </div>
                        <div
                            className={
                                matches
                                    ? styles.rf_modal_div
                                    : styles.rf_modal_div_mobile
                            }
                        />
                        <div className={styles.rfModalBttnDiv}>
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        className={styles.rf_modal_no_bttn}
                                        fullWidth
                                        onClick={handleClose}
                                    >
                                        No
                                    </Button>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        className={styles.rf_modal_yes_bttn}
                                        fullWidth
                                        onClick={handleNextStep}
                                    >
                                        Confirm
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
export default RFSupplementaryModal
