import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_sticker-printing.module.scss'
import PrintIcon from './print-icon.png'
import { Grid } from '@mui/material'
import { PrintingSticker } from './printing-test'
import { useReactToPrint } from 'react-to-print'
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
    matches: any
    setOpen: any
    open: any
}

const PrintStickerModal: React.FC<Props> = ({
    matches,
    setOpen,
    open,
}: Props) => {
    const stickerRef = useRef(null)
    const handleClose = () => {
        setOpen(false)
    }

    //     const pageStyle = `
    //     @page {
    //       size: 1000mm 1000mm;
    //     }
    //   `

    const handlePrint = useReactToPrint({
        content: () => stickerRef.current,
        // pageStyle: pageStyle,
    })

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.printStickerModal }}
            >
                <DialogContent>
                    <div style={{ marginTop: '4rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={PrintIcon} alt="print icon" />
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p className={styles.printStickerText}>
                                Print Selected Sticker
                            </p>
                        </div>
                        <div
                            style={{ marginTop: '20px', marginBottom: '15px' }}
                        >
                            <p className={styles.printStickerSubText}>
                                By selecting this option, selected member&apos;s
                                sticker will be printed.
                            </p>
                        </div>
                        <div
                            className={
                                matches
                                    ? styles.printStickerDivider
                                    : styles.printStickerDividerMobile
                            }
                        />
                        <div className={styles.printStickerBttnDiv}>
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        className={styles.printStickerNoBttn}
                                        fullWidth
                                        onClick={handleClose}
                                    >
                                        No
                                    </Button>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        className={styles.printStickerYesBttn}
                                        fullWidth
                                        onClick={handlePrint}
                                    >
                                        Yes
                                    </Button>
                                </Grid>
                            </Grid>
                            <div style={{ display: 'none' }}>
                                <PrintingSticker ref={stickerRef} />
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default PrintStickerModal
