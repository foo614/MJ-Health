import { Box } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { TransitionProps } from '@mui/material/transitions'
import Slide from '@mui/material/Slide'
import * as React from 'react'
import styles from '../_kiosk.module.scss'
import Grid from '@mui/material/Grid'
import KioskNoRecordImage from '../../../images/kiosk-norecord.png'
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

const NoRecordModal: React.FC<Props> = ({ open, matches, setOpen }: Props) => {
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
                        <img
                            src={KioskNoRecordImage}
                            width="100"
                            height="100"
                        />
                        <p className={styles.kioskModalTitle}>
                            No Record Found
                        </p>
                        <p className={styles.kioskModalSubTitle}>
                            Sorry, there isn’t any appoinment match with your
                            given info.
                        </p>
                        <div
                            className={
                                matches
                                    ? styles.kioskModalDivider
                                    : styles.kioskModalDividerMobile
                            }
                        />
                    </Box>
                    <Box sx={{ padding: '15px' }}>
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

export default NoRecordModal
