import CustomModal from 'components/Modal'
import CallOutDistributionHeader from './call-out-distribution-header'
import CallOutDistributionTable from './call-out-distribution-table'
import { useState } from 'react'
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const HmcCallOutDistribution = () => {
    const [openCreateModal, setOpenCreateModal] = useState<boolean>(false)

    return (
        <>
            <CallOutDistributionHeader
                allowCreate={true}
                setOpenCreateModal={setOpenCreateModal}
            />
            <CallOutDistributionTable />

            {/* <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault()
                            const formData = new FormData(event.currentTarget)
                            const formJson = Object.fromEntries(
                                (formData as any).entries()
                            )
                            const email = formJson.email
                            console.log(email)
                            handleClose()
                        },
                    }}
                >
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your
                            email address here. We will send updates
                            occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment> */}
        </>
    )
}

export default HmcCallOutDistribution
