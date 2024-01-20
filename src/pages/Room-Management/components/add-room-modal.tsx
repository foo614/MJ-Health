import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_room-management.module.scss'
import { Grid, TextField, Button } from '@mui/material'
import { DialogActions } from '@mui/material'
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    setOpen: any
    open: any
}

const AddRoomModal: React.FC<Props> = ({ setOpen, open }: Props) => {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.add_room_modal }}
            >
                <DialogContent>
                    <Grid
                        container
                        spacing={2}
                        justifyContent="space-around"
                        sx={{ marginTop: '10px' }}
                    >
                        <Grid item md={4}>
                            <TextField
                                label="Room No:"
                                InputLabelProps={{
                                    shrink: true,
                                    className:
                                        styles.add_room_modal_textfield_title,
                                }}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                label="Room Name:"
                                InputLabelProps={{
                                    shrink: true,
                                    className:
                                        styles.add_room_modal_textfield_title,
                                }}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions
                    className={styles.add_new_room_modal_dialog_action}
                >
                    <Button
                        variant="contained"
                        className={styles.add_new_room_modal_cancel_bttn}
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        className={styles.add_new_room_modal_add_bttn}
                        onClick={() => setOpen(false)}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
export default AddRoomModal
