import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_hmp-brochure.module.scss'
import NoRecord from '../../../../images/kiosk-norecord.png'
import { Grid } from '@mui/material'
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    open: any
    setOpen: any
    matches: boolean
    handleExitEdit: any
}

const FinishEditModal: React.FC<Props> = ({
    open,
    setOpen,
    matches,
    handleExitEdit,
}: Props) => {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.finish_edit_modal }}
            >
                <DialogContent>
                    <div style={{ marginTop: '4rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={NoRecord} alt="print icon" />
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p className={styles.finish_edit_modal_title}>
                                Unsaved Changes
                            </p>
                        </div>
                        <div
                            style={{ marginTop: '20px', marginBottom: '15px' }}
                        >
                            <p className={styles.finish_edit_modal_sub_title}>
                                You are about to leave this page without saving.
                                All changes will be lost. Continue edit the data
                                to confirm changes
                            </p>
                        </div>
                        <div
                            className={
                                matches
                                    ? styles.finish_edit_modal_div
                                    : styles.finish_edit_modal_div_mobile
                            }
                        />
                        <div className={styles.finish_edit_modal_bttn_div}>
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        className={
                                            styles.finish_edit_modal_yes_bttn
                                        }
                                        onClick={() => setOpen(false)}
                                    >
                                        Continue Edit.
                                    </Button>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        className={
                                            styles.finish_edit_modal_no_bttn
                                        }
                                        onClick={() => handleExitEdit(false)}
                                    >
                                        No I&apos;m Leaving.
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
export default FinishEditModal
