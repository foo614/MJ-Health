import CloseIcon from '@mui/icons-material/Close'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { Breakpoint } from '@mui/material/styles'
import * as React from 'react'
import styles from './_modal.module.scss'

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<any>>
    open: boolean
    children: React.ReactNode
    title: string
    width: false | Breakpoint | undefined //false = full width
}

const CustomModal = ({ title, setOpen, open, children, width }: Props) => {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                keepMounted
                classes={{ paper: styles.infoModal }}
                maxWidth={width}
                fullWidth={!!width}
            >
                {title && (
                    <DialogTitle className={styles.infoModalColor}>
                        <p className={styles.infoModalTitle}>{title}</p>
                    </DialogTitle>
                )}
                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 15,
                        color: (theme) => theme?.palette?.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent className={styles.modalDialogContent} dividers>
                    {children}
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default CustomModal
