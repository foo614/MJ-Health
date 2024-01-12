import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_it-room-printing.module.scss'
import PrintIcon from '../../../images/print-icon.png'
import { Grid } from '@mui/material'
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

const PrintListModal: React.FC<Props> = ({ matches, setOpen, open }: Props) => {
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
                classes={{ paper: styles.printModal }}
            >
                <DialogContent>
                    <div style={{ marginTop: '4rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={PrintIcon} alt="print icon" />
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p className={styles.printText}>Print List</p>
                        </div>
                        <div
                            style={{ marginTop: '20px', marginBottom: '15px' }}
                        >
                            <p className={styles.printSubText}>
                                By choosing this option, selected list will be
                                printed.
                            </p>
                        </div>
                        <div
                            className={
                                matches
                                    ? styles.printModalDivider
                                    : styles.printModalDividerMobile
                            }
                        />
                        <div className={styles.printModalBttnDiv}>
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        className={styles.printModalNoBttn}
                                        fullWidth
                                        onClick={handleClose}
                                    >
                                        No
                                    </Button>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        className={styles.printModalYesBttn}
                                        fullWidth
                                        onClick={handleClose}
                                        // onClick={handlePrint}
                                    >
                                        Yes
                                    </Button>
                                </Grid>
                            </Grid>
                            {/* <div style={{ display: 'none' }}>
                                <PrintingSticker ref={stickerRef} />
                            </div> */}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default PrintListModal
