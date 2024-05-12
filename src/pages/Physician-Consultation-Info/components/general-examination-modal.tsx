import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import React from 'react'
import { Dispatch, SetStateAction } from 'react'
import styles from '../_physician-consultation-info.module.scss'
import DialogContent from '@mui/material/DialogContent'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

const options = [
    {
        id: 1,
        label: 'None',
    },
    {
        id: 2,
        label: 'Yes',
    },
    {
        id: 3,
        label: '[RND]',
    },
]

type Props = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const GeneralExaminationModal: React.FC<Props> = ({ open, setOpen }: Props) => {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                // keepMounted
                classes={{ paper: styles.miniModal }}
                maxWidth={'xs'}
                fullWidth={true}
                onClose={() => setOpen(false)}
            >
                <DialogContent className={styles.miniModalContent}>
                    <h1 className={styles.miniModalTitle}>
                        General Examination
                    </h1>

                    <Grid
                        container
                        direction="column"
                        sx={{
                            mt: '1.5rem',
                            mb: '2.5rem',
                        }}
                    >
                        {options.map((option, index: number) => {
                            return (
                                <Grid item key={index}>
                                    <FormControlLabel
                                        className={
                                            styles.miniModalCheckboxLabel
                                        }
                                        control={
                                            <Checkbox
                                                className={
                                                    styles.miniModalCheckbox
                                                }
                                            />
                                        }
                                        label={option.label}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>

                    <Button
                        variant="contained"
                        fullWidth
                        className={styles.miniModalConfirmBttn}
                        onClick={() => setOpen(false)}
                    >
                        Confirm
                    </Button>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default GeneralExaminationModal
