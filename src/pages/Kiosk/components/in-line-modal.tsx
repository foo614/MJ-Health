import { Box, useMediaQuery, useTheme } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { TransitionProps } from '@mui/material/transitions'
import Slide from '@mui/material/Slide'
import * as React from 'react'
import styles from '../_kiosk.module.scss'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
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
    waitingNumber: string
}

const InlineModal: React.FC<Props> = ({
    open,
    matches,
    setOpen,
    waitingNumber,
}: Props) => {
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
                <IconButton
                    onClick={() => setOpen(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 15,
                        color: (theme: any) => theme?.palette?.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent
                    className={
                        matches
                            ? styles.kioskInlineModalContent
                            : styles.kioskInlineModalContentMobile
                    }
                >
                    <Box sx={{ textAlign: 'center' }}>
                        {/* <img src={KioskInlineImage} width="100" height="100" /> */}
                        <h1
                            className={
                                matches
                                    ? styles.kioskWaitingNumber
                                    : styles.kioskWaitingNumberMobile
                            }
                        >
                            {waitingNumber}
                        </h1>

                        <p
                            className={
                                matches
                                    ? styles.kioskModalTitle
                                    : styles.kioskModalTitleMobile
                            }
                        >
                            We have you in line.
                        </p>
                        <p
                            className={
                                matches
                                    ? styles.kioskModalSubTitle
                                    : styles.kioskModalSubTitleMobile
                            }
                        >
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
                                marginTop: matches ? '1rem' : '0.5rem',
                                paddingBottom: matches ? '1rem' : '0.5rem',
                                paddingLeft: '12px',
                                paddingRight: '12px',
                            }}
                        >
                            <Grid item md={12} xs={12}>
                                <p
                                    className={
                                        matches
                                            ? styles.kioskModalTextFieldTitle
                                            : styles.kioskModalTextFieldTitleMobile
                                    }
                                >
                                    Name
                                </p>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <p
                                    className={
                                        matches
                                            ? styles.kioskModalTextFieldValue
                                            : styles.kioskModalTextFieldValueMobile
                                    }
                                >
                                    Mohamad Bin Afamosa
                                </p>
                            </Grid>
                            {/* <Grid item md={4} xs={4}>
                                <p className={styles.kioskModalTextFieldTitle}>
                                    Date:
                                </p>
                            </Grid>
                            <Grid item md={8} xs={8}>
                                <p className={styles.kioskModalTextFieldValue}>
                                    12 JUL 2022
                                </p>
                            </Grid> */}
                            <Grid item md={12} xs={12}>
                                <p
                                    className={
                                        matches
                                            ? styles.kioskModalTextFieldTitle
                                            : styles.kioskModalTextFieldTitleMobile
                                    }
                                >
                                    Slot Time
                                </p>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <p
                                    className={
                                        matches
                                            ? styles.kioskModalTextFieldValue
                                            : styles.kioskModalTextFieldValueMobile
                                    }
                                >
                                    08:15 AM - 08:30 AM
                                </p>
                            </Grid>
                            {/* <Grid item md={4} xs={4}>
                                <p className={styles.kioskModalTextFieldTitle}>
                                    Check In:
                                </p>
                            </Grid>
                            <Grid item md={8} xs={8}>
                                <p className={styles.kioskModalTextFieldValue}>
                                    08:05 AM - 12 JUL 2022
                                </p>
                            </Grid> */}
                        </Grid>
                        <p
                            className={
                                matches
                                    ? styles.kioskModalReturnText
                                    : styles.kioskModalReturnTextMobile
                            }
                            onClick={() => setCounter(0)}
                        >
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
