import {
    Button,
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './_consultation-check-in.module.scss'
import {
    HEALTH_MANAGEMENT_CONSULTATION_PAGE,
    PHYSICIAN_CONSULTATION_PAGE,
} from 'constant'
type Props = {
    onClose: () => void
}

const ConsultationCheckIn = (props: Props) => {
    const navigate = useNavigate()
    const [room, setRoom] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setRoom(event.target.value as string)
    }

    const handleCancel = () => {
        props.onClose()
    }

    const handleConfirm = () => {
        if (room == '1') {
            navigate(HEALTH_MANAGEMENT_CONSULTATION_PAGE)
        } else {
            navigate(PHYSICIAN_CONSULTATION_PAGE)
        }
        props.onClose()
    }

    return (
        <>
            <Grid container alignItems={'center'} justifyContent={'center'}>
                <Grid>
                    <Paper className={styles.consultationCheckIn} sx={{ p: 3 }}>
                        <Grid xs sx={{ my: 2 }}>
                            <b>Check In Room</b>
                        </Grid>
                        <Grid xs>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={room}
                                    label=""
                                    onChange={handleChange}
                                >
                                    {/* <MenuItem value={1}>
                                        Health Management Consultation
                                    </MenuItem> */}
                                    <MenuItem value={2}>
                                        Physician Consultation
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid xs sx={{ mt: 2, mb: 4 }}>
                            <b className={styles.sept2022}>
                                22 SEPT 2022 : 01:00 PM
                            </b>
                        </Grid>
                        <Grid xs>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    fullWidth
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={handleConfirm}
                                >
                                    Confirm
                                </Button>
                            </Stack>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default ConsultationCheckIn
