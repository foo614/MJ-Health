import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_member-profile.module.scss'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Divider, Grid, Stack } from '@mui/material'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'
import { TestPDPAPage } from './test-pdpa-page'
import pdf from '../../../types.pdf'
const testPDF = pdf('lorem-ipsum.pdf')
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
}

const ViewDocumentModal: React.FC<Props> = ({
    matches,
    setOpen,
    open,
}: Props) => {
    const pdpaRef = useRef(null)
    const handlePrint = useReactToPrint({
        content: () => pdpaRef.current,
        // pageStyle: pageStyle,
    })

    const handleOpenPDF = (pdfFile: any) => {
        const pdfURLPath = `${window.location.origin}/${pdfFile}`
        window.open(pdfURLPath)
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.viewDocumentModal }}
            >
                <DialogTitle className={styles.infoModalColor}>
                    <p className={styles.infoModalTitle}>View Document</p>
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
                    <Grid container rowSpacing={1}>
                        <Grid item md={9} xs={12} sx={{ margin: 'auto' }}>
                            <p className={styles.infoModalTopText}>
                                Letter of Authorization
                            </p>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ fontWeight: '600' }}
                                onClick={() => handleOpenPDF(testPDF)}
                            >
                                Print
                            </Button>
                        </Grid>
                        <Grid item md={9} xs={12} sx={{ margin: 'auto' }}>
                            <p className={styles.infoModalTopText}>
                                HIV Consent Form
                            </p>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ fontWeight: '600' }}
                            >
                                Print
                            </Button>
                        </Grid>
                        <Grid item md={9} xs={12} sx={{ margin: 'auto' }}>
                            <p className={styles.infoModalTopText}>
                                PDPA Consent Form
                            </p>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ fontWeight: '600' }}
                                onClick={handlePrint}
                            >
                                Print
                            </Button>
                        </Grid>
                        <Grid item md={9} xs={12} sx={{ margin: 'auto' }}>
                            <p className={styles.infoModalTopText}>
                                Pap&apos;s Consent Form
                            </p>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                className={styles.viewDocumentDisabledPrintBttn}
                            >
                                Print
                            </Button>
                        </Grid>
                        <Grid item md={9} xs={12} sx={{ margin: 'auto' }}>
                            <p className={styles.infoModalTopText}>
                                Pregnancy Waiver Form
                            </p>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                className={styles.viewDocumentDisabledPrintBttn}
                            >
                                Print
                            </Button>
                        </Grid>
                    </Grid>
                    <div style={{ display: 'none' }}>
                        <TestPDPAPage ref={pdpaRef} />
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default ViewDocumentModal
