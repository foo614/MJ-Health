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
import styles from './_check-in-screening-room1.module.scss'

type Props = {
    onClose: () => void
}

const CheckInScreeningRoom1 = (props: Props) => {
    const navigate = useNavigate()
    const [room, setRoom] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setRoom(event.target.value as string)
    }

    const handleCancel = () => {
        props.onClose()
    }

    const handleConfirm = () => {
        props.onClose()
    }

    return (
        <>
            <Grid container alignItems={'center'} justifyContent={'center'}>
                <Grid>
                    <Paper
                        className={styles.checkInScreeningRoom1}
                        sx={{ p: 3 }}
                    >
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
                                    <MenuItem value={1}>Interview</MenuItem>
                                    <MenuItem value={2}>Audiometry</MenuItem>
                                    <MenuItem value={3}>
                                        Bone Mineral Density
                                    </MenuItem>
                                    <MenuItem value={4}>CT scan</MenuItem>
                                    <MenuItem value={5}>
                                        Electrocardiogram
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

export default CheckInScreeningRoom1
