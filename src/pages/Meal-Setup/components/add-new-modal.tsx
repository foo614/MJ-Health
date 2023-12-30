import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_meal-setup.module.scss'
import { Grid, TextField } from '@mui/material'
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
}
const AddNewModal: React.FC<Props> = ({ open, setOpen }: Props) => {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.addNewModal }}
            >
                <DialogContent>
                    <div style={{ marginTop: '1.5rem' }}>
                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    label="Dishes"
                                    InputLabelProps={{
                                        shrink: true,
                                        className: styles.addNewModalTitle,
                                    }}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <TextField
                                    label="Weight (gram)"
                                    InputLabelProps={{
                                        shrink: true,
                                        className: styles.addNewModalTitle,
                                    }}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <TextField
                                    label="Energy/ Calories"
                                    InputLabelProps={{
                                        shrink: true,
                                        className: styles.addNewModalTitle,
                                    }}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <div style={{ marginTop: '2rem' }}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12}></Grid>
                                <Grid item md={3} xs={12}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        className={styles.addNewModalCancelBttn}
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        className={styles.addNewModalAddBttn}
                                        onClick={() => setOpen(false)}
                                    >
                                        Add
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

export default AddNewModal
