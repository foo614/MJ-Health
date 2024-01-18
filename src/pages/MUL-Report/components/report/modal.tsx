import CloseIcon from '@mui/icons-material/Close'
import { DialogContent, DialogTitle, IconButton } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import React from 'react'
import ReadTable from '../../../Radiology-Reporting/components/details/readTable'

type CustomModalWithTabsProps = {
    open: boolean
    handleClose: () => void
}

const ViewCommentModal: React.FC<CustomModalWithTabsProps> = ({
    open,
    handleClose,
}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={'md'}
            PaperProps={{
                sx: { borderRadius: '10px' },
            }}
        >
            <DialogTitle
                id="scroll-dialog-title"
                sx={{
                    background:
                        'linear-gradient(90deg, #3ADEBB 0%, #00AEE9 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)',
                    color: 'white',
                    fontSize: '28px',
                    fontWeight: 600,
                }}
            >
                Final Comment & Suggestion
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 15,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <ReadTable />
            </DialogContent>
        </Dialog>
    )
}

export default ViewCommentModal
