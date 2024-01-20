import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_room-management.module.scss'
import { Grid } from '@mui/material'
import Icon from '../../../images/delete_room_icon.png'
import { useNavigate } from 'react-router-dom'
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
    setOpen: any
    matches: boolean
    title: string
    subtitle: string
    resetAllState: any
}
const RemoveModal: React.FC<Props> = ({
    open,
    setOpen,
    matches,
    title,
    subtitle,
    resetAllState,
}: Props) => {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.remove_room_modal }}
            >
                <DialogContent>
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <img src={Icon} alt="icon" />
                    </div>
                    <div>
                        <p className={styles.delete_room_title}>{title}</p>
                        <p className={styles.delete_room_sub_title}>
                            {subtitle}
                        </p>
                        <div
                            className={
                                matches
                                    ? styles.modal_divider
                                    : styles.remove_room_modal_divider_mobile
                            }
                        />
                        <div className={styles.remove_room_modal_bttn_div}>
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        className={
                                            styles.remove_room_modal_delete_bttn
                                        }
                                        fullWidth
                                        onClick={() => {
                                            setOpen(false), resetAllState()
                                        }}
                                    >
                                        NO, KEEP IT.
                                    </Button>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        variant="contained"
                                        className={
                                            styles.remove_room_modal_yes_bttn
                                        }
                                        fullWidth
                                        onClick={() => {
                                            setOpen(false), resetAllState()
                                        }}
                                    >
                                        YES, REMOVE.
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

export default RemoveModal
