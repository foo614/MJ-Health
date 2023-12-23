import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import styles from '../_lab.module.scss'
import InputAdornment from '@mui/material/InputAdornment'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import LockIcon from '@mui/icons-material/Lock'
import { Grid } from '@mui/material'
type StaffEditModalProps = {
    open: boolean
    setOpen: any
    setEditMode: any
}
const StaffEditModal: React.FC<StaffEditModalProps> = ({
    open,
    setOpen,
    setEditMode,
}: StaffEditModalProps) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                classes={{ paper: styles.staffEditModalDialog }}
            >
                <DialogTitle style={{ paddingBottom: '0' }}>
                    <p className={styles.staffEditModalDialogTitle}>
                        Edit Test Result
                    </p>
                </DialogTitle>
                <DialogContent>
                    <div style={{ marginTop: '1rem' }}>
                        <TextField
                            margin="dense"
                            InputProps={{
                                sx: {
                                    '&.MuiInput-underline:after': {
                                        borderBottomColor: '#3ADEBB !important',
                                    },
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon
                                            style={{ color: '#3ADEBB' }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{
                                className: styles.staffEditModalLabelProps,
                                sx: {
                                    '&.Mui-focused': {
                                        color: '#3ADEBB !important',
                                    },
                                },
                            }}
                            variant="standard"
                            fullWidth
                            label="Staff ID:"
                            size="medium"
                            placeholder="Pleae enter Staff ID."
                        />
                    </div>

                    <div style={{ marginTop: '1rem' }}>
                        <TextField
                            margin="dense"
                            InputProps={{
                                sx: {
                                    '&.MuiInput-underline:after': {
                                        borderBottomColor: '#3ADEBB !important',
                                    },
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon
                                            style={{ color: '#3ADEBB' }}
                                        />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{
                                className: styles.staffEditModalLabelProps,
                                sx: {
                                    '&.Mui-focused': {
                                        color: '#3ADEBB !important',
                                    },
                                },
                            }}
                            type={showPassword ? 'text' : 'password'}
                            variant="standard"
                            fullWidth
                            label="Password:"
                            size="medium"
                            placeholder="Pleae enter your password."
                        />
                    </div>
                </DialogContent>
                <DialogActions
                    style={{ padding: '10px 24px', display: 'block' }}
                >
                    <Grid container spacing={4}>
                        <Grid item md={6} xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() => handleClose()}
                                className={styles.staffEditModalCancelBttn}
                            >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() => {
                                    setEditMode(true)
                                    setOpen(false)
                                }}
                                className={styles.staffEditModalConfirmBttn}
                            >
                                Confirm
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container style={{ marginTop: '1rem' }}>
                        <Grid item md={6} xs={12}>
                            <p className={styles.staffEditModalSmallText}>
                                last update: 11:11 22-09-2022
                            </p>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <p className={styles.staffEditModalSmallText}>
                                Staff ID:0000-0000-0000-0000
                            </p>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
export default StaffEditModal
