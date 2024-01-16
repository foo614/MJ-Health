import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_health-management-consultation-info.module.scss'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import DialogTitle from '@mui/material/DialogTitle'
import { TextField, Stack } from '@mui/material'
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    matches: any
    setOpen: any
    open: any
}

const PersonalComplaintModal: React.FC<Props> = ({
    matches,
    setOpen,
    open,
}: Props) => {
    const [editMode, setEditMode] = React.useState<boolean>(false)
    const [editDone, setIsEditDone] = React.useState<boolean>(false)
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.personalComplaintModal }}
            >
                <DialogTitle className={styles.infoModalColor}>
                    <p className={styles.infoModalTitle}>Personal Complaints</p>
                </DialogTitle>
                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 15,
                        color: (theme: any) => theme?.palette?.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent sx={{ padding: '20px' }}>
                    <div
                        onClick={
                            !editDone ? () => setEditMode(true) : undefined
                        }
                        style={{ cursor: 'pointer' }}
                    >
                        <TextField
                            InputProps={{
                                classes: { input: styles.inputField },
                                readOnly: editMode ? false : true,
                            }}
                            variant="outlined"
                            size="small"
                            margin="dense"
                            fullWidth
                            multiline
                            rows={8}
                            name="complaint"
                            className={styles.textFieldProps}
                            placeholder="Type in your message & recommendation."
                        />
                    </div>
                    <div
                        style={{
                            display: matches ? 'flex' : 'block',
                            columnGap: '15px',
                        }}
                    >
                        <Stack
                            direction="row"
                            columnGap={4}
                            sx={{ paddingTop: '10px', paddingBottom: '10px' }}
                        >
                            <p style={{ margin: 'auto' }}>
                                <span
                                    className={
                                        styles.personalComplaintModalBottomText
                                    }
                                >
                                    last update:
                                </span>
                                <span
                                    className={
                                        styles.personalComplaintModalBottomValue
                                    }
                                >
                                    11:11 22-09-2022
                                </span>
                            </p>
                            <p style={{ margin: 'auto' }}>
                                <span
                                    className={
                                        styles.personalComplaintModalBottomText
                                    }
                                >
                                    Staff ID:
                                </span>
                                <span
                                    className={
                                        styles.personalComplaintModalBottomValue
                                    }
                                >
                                    0000-0000-0000-0000
                                </span>
                            </p>
                        </Stack>
                        <Stack
                            direction="row"
                            sx={{
                                marginLeft: 'auto',
                                paddingTop: '10px',
                                paddingBottom: '10px',
                            }}
                            columnGap={2}
                        >
                            {editDone && !editMode ? (
                                <Button
                                    variant="contained"
                                    className={
                                        styles.personalComplaintModalEditBttn
                                    }
                                    fullWidth
                                    onClick={() => setEditMode(true)}
                                >
                                    Edit
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    className={
                                        editMode
                                            ? styles.personalComplaintModalCancelBttn
                                            : styles.personalComplaintModalDisabledBttn
                                    }
                                    fullWidth
                                    disabled={editMode ? false : true}
                                    onClick={() => setEditMode(false)}
                                >
                                    Cancel
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                className={
                                    editMode
                                        ? styles.saveBttn
                                        : styles.personalComplaintModalDisabledBttn
                                }
                                fullWidth
                                disabled={editMode ? false : true}
                                onClick={
                                    editMode
                                        ? () => {
                                              setIsEditDone(true),
                                                  setEditMode(false)
                                          }
                                        : () => setEditMode(false)
                                }
                            >
                                Save
                            </Button>
                        </Stack>
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default PersonalComplaintModal
