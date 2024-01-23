import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from './_signature-modal.module.scss'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Divider, Grid, Stack } from '@mui/material'
import SignaturePad from 'react-signature-canvas'
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
    title: string
}

const SignatureModal: React.FC<Props> = ({
    setOpen,
    open,
    title,
}: Props) => {
    const signatureRef = React.useRef() as React.MutableRefObject<any>
    const handleClose = () => {
        setOpen(false)
    }

    const handleClear = () => {
        if (signatureRef?.current) {
            signatureRef.current.clear()
        }
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.signatureModal }}
            >
                <DialogTitle className={styles.infoModalColor}>
                    <p className={styles.infoModalTitle}>{title}</p>
                </DialogTitle>
                <IconButton
                    onClick={() => setOpen(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent className={styles.modalDialogContent}>
                    <div className={styles.signatureModalDiv}>
                        <SignaturePad
                            ref={signatureRef}
                            canvasProps={{ className: styles.signaturePad }}
                        />
                        <div className={styles.watermarkDiv}>
                            <p className={styles.watermarkText}>SIGN AREA</p>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions className={styles.signatureModalDialogActions}>
                    <Grid container>
                        <Grid item md={8} xs={12} sm={6}>
                            <p
                                className={
                                    styles.signatureModalDialogActionsText
                                }
                            >
                                <span style={{ fontWeight: '600' }}>
                                    last update:{' '}
                                </span>
                                <span style={{ fontWeight: '500' }}>
                                    11:11 22-09-2022
                                </span>
                            </p>
                            <p
                                className={
                                    styles.signatureModalDialogActionsText
                                }
                                style={{ marginTop: '5px' }}
                            >
                                <span style={{ fontWeight: '600' }}>
                                    Staff ID:{' '}
                                </span>
                                <span style={{ fontWeight: '500' }}>
                                    0000-0000-0000-0000
                                </span>
                            </p>
                        </Grid>
                        <Grid item md={4} xs={12} sm={6}>
                            <Stack direction="row" columnGap={2}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    className={styles.signatureModalRetryBttn}
                                    onClick={() => handleClear()}
                                >
                                    Retry
                                </Button>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    className={styles.signatureModalSaveBttn}
                                    onClick={() => setOpen(false)}
                                >
                                    Save
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
export default SignatureModal
