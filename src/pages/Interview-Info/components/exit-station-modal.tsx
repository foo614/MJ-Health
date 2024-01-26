import CloseIcon from '@mui/icons-material/Close'
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { DASHBOARD_PAGE, INTERVIEW_PAGE } from 'constant'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../_interview-info.module.scss'

type Props = {
    open: boolean
    setOpen: any
}
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

const ExitStationModal: React.FC<Props> = ({ open, setOpen }: Props) => {
    const theme = useTheme()
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    const navigate = useNavigate()
    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.exitStationModal }}
            >
                <div className={styles.gradientBackground}>
                    <div style={{ paddingTop: '40px' }}>
                        <p className={styles.exit_station_modal_next_station}>
                            Next Station
                        </p>
                        <p
                            className={
                                styles.exit_station_modal_next_station_value
                            }
                        >
                            Sonography
                        </p>
                    </div>

                    {mdUp ? (
                        <Avatar className={styles.exit_station_avatar_mdUp} />
                    ) : null}
                </div>
                <DialogContent>
                    {mdUp ? (
                        <>
                            <Stack
                                direction="row"
                                spacing={3}
                                alignItems="center"
                            >
                                <p
                                    className={
                                        styles.exit_station_modal_current_waiting
                                    }
                                >
                                    Current Waiting List
                                </p>
                                <p
                                    className={
                                        styles.exit_station_modal_current_waiting_value
                                    }
                                >
                                    2
                                </p>
                            </Stack>
                            <Stack
                                direction={{
                                    xs: 'column',
                                    sm: 'column',
                                    md: 'row',
                                    xl: 'row',
                                    lg: 'row',
                                }}
                                sx={{ marginTop: '15px' }}
                                spacing={2}
                            >
                                <Button
                                    variant="contained"
                                    className={
                                        styles.exit_station_modal_cancel_bttn
                                    }
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    className={
                                        styles.exit_station_modal_exit_bttn
                                    }
                                    onClick={() => navigate(INTERVIEW_PAGE)}
                                >
                                    Exit Station
                                </Button>
                                <div style={{ marginLeft: 'auto' }}>
                                    <p
                                        className={
                                            styles.exit_station_modal_current_shift
                                        }
                                        style={{ textAlign: 'end' }}
                                    >
                                        Current Shift
                                    </p>
                                    <p
                                        className={
                                            styles.exit_station_modal_current_shift_value
                                        }
                                        style={{ textAlign: 'end' }}
                                    >
                                        Dr. Lee Shen Long
                                    </p>
                                </div>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <div style={{ position: 'relative' }}>
                                <Avatar
                                    className={
                                        styles.exit_station_avatar_smDown
                                    }
                                />
                            </div>
                            <div style={{ marginTop: '15px' }}>
                                <p
                                    className={
                                        styles.exit_station_modal_current_shift
                                    }
                                >
                                    Current Shift
                                </p>
                                <p
                                    className={
                                        styles.exit_station_modal_current_shift_value
                                    }
                                >
                                    Dr. Lee Shen Long
                                </p>
                            </div>
                            <Stack
                                direction={{
                                    xs: 'column',
                                    sm: 'column',
                                    md: 'row',
                                    xl: 'row',
                                    lg: 'row',
                                }}
                                sx={{ marginTop: '15px' }}
                                spacing={2}
                            >
                                <Button
                                    variant="contained"
                                    className={
                                        styles.exit_station_modal_cancel_bttn
                                    }
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    className={
                                        styles.exit_station_modal_exit_bttn
                                    }
                                    onClick={() => navigate(INTERVIEW_PAGE)}
                                >
                                    Exit Station
                                </Button>
                            </Stack>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ExitStationModal
