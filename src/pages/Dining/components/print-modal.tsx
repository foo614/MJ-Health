import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_dining.module.scss'
import PrintIcon from './print-icon.png'
import { Grid } from '@mui/material'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'
import { TestPrintMealCard } from './test-print-meal-card'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type PrintModalProps = {
    matches: any
    setOpen: any
    open: any
}

const PrintModal: React.FC<PrintModalProps> = ({
    matches,
    setOpen,
    open,
}: PrintModalProps) => {
    const mealCardRef = useRef(null)
    const handleClose = () => {
        setOpen(false)
    }

//     const pageStyle = `
//     @page {
//       size: 200mm 200mm;
//     }
  
//     @media all {
//       .pagebreak {
//         display: none;
//       }
//     }
  
//     @media print {
//       .pagebreak {
//         page-break-after: always;
//       }
//     }
//   `

    const handlePrint = useReactToPrint({
        content: () => mealCardRef.current,
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
                            <p className={styles.printMealCardText}>
                                Print Meal Card
                            </p>
                        </div>
                        <div
                            style={{ marginTop: '20px', marginBottom: '15px' }}
                        >
                            <p className={styles.printMealCardSubText}>
                                By selecting this option, meal card will be
                                printed.
                            </p>
                        </div>
                        <div
                            className={
                                matches
                                    ? styles.printMealCardDivider
                                    : styles.printMealCardDividerMobile
                            }
                        />
                        <div className={styles.printMealBttnDiv}>
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        className={styles.printMealCardNoBttn}
                                        fullWidth
                                        onClick={handleClose}
                                    >
                                        No
                                    </Button>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        className={styles.printMealCardYesBttn}
                                        fullWidth
                                        // onClick={handleClose}
                                        onClick={handlePrint}
                                    >
                                        Yes
                                    </Button>
                                </Grid>
                            </Grid>
                            <div style={{ display: 'none' }}>
                                <TestPrintMealCard ref={mealCardRef} />
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default PrintModal
