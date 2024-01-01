import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_dining.module.scss'
import PrintIcon from './print-icon.png'
import { Grid } from '@mui/material'
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
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.printModal }}
            >
                <DialogContent>
                    {/* <div className={styles.mealCardDivider}>
                        <div
                            style={{
                                height: '33mm',
                                border: '1px solid black',
                                padding: '5px',
                            }}
                        >
                            <Grid container>
                                <Grid item md={12} xs={12}>
                                    <p>
                                        <span className={styles.mealCardText}>
                                            Name:
                                        </span>{' '}
                                        <span className={styles.mealCardValue}>
                                            Tan Rui Kang
                                        </span>
                                    </p>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={12} xs={12}>
                                    <p>
                                        <span className={styles.mealCardText}>
                                            Exam. Date(Seq No.):
                                        </span>{' '}
                                        <span className={styles.mealCardValue}>
                                            2021/05/15(12)
                                        </span>
                                    </p>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={6}>
                                    <p>
                                        <span className={styles.mealCardText}>
                                            Age:
                                        </span>{' '}
                                        <span className={styles.mealCardValue}>
                                            21
                                        </span>
                                    </p>
                                </Grid>
                                <Grid item md={6}>
                                    <p>
                                        <span className={styles.mealCardText}>
                                            Gender:
                                        </span>{' '}
                                        <span className={styles.mealCardValue}>
                                            Female
                                        </span>
                                    </p>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={6}>
                                    <p>
                                        <span className={styles.mealCardText}>
                                            Height:
                                        </span>{' '}
                                        <span className={styles.mealCardValue}>
                                            1.76m
                                        </span>
                                    </p>
                                </Grid>
                                <Grid item md={6}>
                                    <p>
                                        <span className={styles.mealCardText}>
                                            Weight:
                                        </span>{' '}
                                        <span className={styles.mealCardValue}>
                                            64.7kg
                                        </span>
                                    </p>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={12}>
                                    <p>
                                        <span className={styles.mealCardText}>
                                            Ideal Body Weight:
                                        </span>{' '}
                                        <span className={styles.mealCardValue}>
                                            68.1kg
                                        </span>
                                    </p>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={12}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            columnGap: '7px',
                                        }}
                                    >
                                        <p
                                            className={styles.mealCardText}
                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                            Suggestion:
                                        </p>
                                        <p className={styles.mealCardValue}>
                                            2400
                                        </p>
                                        <p className={styles.mealCardSmallText}>
                                            kcal/daily
                                        </p>
                                        <p className={styles.mealCardValue}>
                                            800
                                        </p>
                                        <p className={styles.mealCardSmallText}>
                                            kcal/meal
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{ border: '1px solid black' }}>
                            <div>
                                <p>Dishes</p>
                            </div>
                            <div>
                                <p>Dishes</p>
                            </div>
                            <div>
                                <p>Dishes</p>
                            </div>
                        </div>
                    </div> */}
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
                                        onClick={handleClose}
                                    >
                                        Yes
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
export default PrintModal
