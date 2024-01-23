import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CustomModal from 'components/Modal'
import { Dispatch, SetStateAction, useState } from 'react'
import styles from './_personal-complaint-modal.module.scss'

type Props = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    lastUpdate?: string
    staffId?: string
}

const PersonalComplaintModal = ({
    open,
    setOpen,
    lastUpdate,
    staffId,
}: Props) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    return (
        <>
            <CustomModal
                setOpen={setOpen}
                open={open}
                title={'Personal Complaints'}
                width={'lg'}
            >
                <FormControl fullWidth style={{ marginBottom: '1rem' }}>
                    <TextField
                        InputProps={{
                            // classes: { input: styles.inputField },
                            readOnly: !editMode,
                        }}
                        variant="outlined"
                        size="small"
                        margin="dense"
                        multiline
                        rows={8}
                        name="complaint"
                        // className={styles.textFieldProps}
                        placeholder="Type in your message & recommendation."
                    />
                </FormControl>

                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Stack spacing={2} direction="row">
                            <Typography variant="caption">
                                last update: {lastUpdate ?? '11:11 22-09-2022'}
                            </Typography>
                            <Typography variant="caption">
                                Staff ID: {staffId ?? '0000-0000-0000-0000'}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack spacing={2} direction="row">
                            <Button
                                variant="contained"
                                className={
                                    editMode
                                        ? styles.cancelButton
                                        : styles.editButton
                                }
                                onClick={() => setEditMode(!editMode)}
                            >
                                {editMode ? 'Cancel' : 'Edit'}
                            </Button>
                            <Button
                                variant="contained"
                                className={styles.saveButton}
                                disabled={!editMode}
                            >
                                Save
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </CustomModal>
        </>
    )
}

export default PersonalComplaintModal
