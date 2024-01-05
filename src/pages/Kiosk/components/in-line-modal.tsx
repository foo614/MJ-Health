import { Box } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { TransitionProps } from '@mui/material/transitions'
import Slide from '@mui/material/Slide'
import * as React from 'react'
import styles from '../_kiosk.module.scss'
import Grid from '@mui/material/Grid'
import KioskInlineImage from '../../../images/kiosk-inline.png'
import { useState, useEffect } from 'react'
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
    matches: boolean
    setOpen: any
}

const InlineModal: React.FC<Props> = ({ open, matches, setOpen }: Props) => {
    const [counter, setCounter] = useState(10)

    useEffect(() => {
        const timer =
            counter > 0 ? setInterval(() => setCounter(counter - 1), 1000) : 0

        if (timer === 0) {
            setOpen(false)
        }
        return () => clearInterval(timer)
    }, [counter])

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.kioskInlineModal }}
            >
                <DialogContent
                    sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}
                >
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={KioskInlineImage} width="100" height="100" />
                        <p className={styles.kioskModalTitle}>
                            We have you in line.
                        </p>
                        <p className={styles.kioskModalSubTitle}>
                            Please be patient while waiting for our staff to
                            call you out.
                        </p>
                        <div
                            className={
                                matches
                                    ? styles.kioskModalDivider
                                    : styles.kioskModalDividerMobile
                            }
                        />
                    </Box>
                    <Box>
                        <Grid
                            container
                            columnSpacing={1}
                            rowSpacing={1}
                            sx={{
                                marginTop: '.5rem',
                                paddingBottom: '1rem',
                                paddingLeft: '12px',
                                paddingRight: '12px',
                            }}
                        >
                            <Grid item md={4} xs={4}>
                                <p className={styles.kioskModalTextFieldTitle}>
                                    Name:
                                </p>
                            </Grid>
                            <Grid item md={8} xs={8}>
                                <p className={styles.kioskModalTextFieldValue}>
                                    Mohamad Bin Afamosa
                                </p>
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <p className={styles.kioskModalTextFieldTitle}>
                                    Date:
                                </p>
                            </Grid>
                            <Grid item md={8} xs={8}>
                                <p className={styles.kioskModalTextFieldValue}>
                                    12 JUL 2022
                                </p>
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <p className={styles.kioskModalTextFieldTitle}>
                                    Slot Time:
                                </p>
                            </Grid>
                            <Grid item md={8} xs={8}>
                                <p className={styles.kioskModalTextFieldValue}>
                                    08:15 AM - 08:30 AM
                                </p>
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <p className={styles.kioskModalTextFieldTitle}>
                                    Check In:
                                </p>
                            </Grid>
                            <Grid item md={8} xs={8}>
                                <p className={styles.kioskModalTextFieldValue}>
                                    08:05 AM - 12 JUL 2022
                                </p>
                            </Grid>
                        </Grid>
                        <p className={styles.kioskModalReturnText}>
                            Return to front page in{' '}
                            <span className={styles.kioskModalSecondText}>
                                {counter}
                            </span>{' '}
                            secs.
                        </p>
                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default InlineModal
