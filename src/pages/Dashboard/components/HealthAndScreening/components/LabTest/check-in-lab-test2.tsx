import { Button, Stack } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import styles from './_check-in-lab-test2.module.scss'

type Props = {
    onClose: () => void
}

const CheckInLabTest2 = (props: Props) => {
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
                    <Paper className={styles.checkInLabTest2} sx={{ p: 3 }}>
                        <Grid xs>
                            <b className={styles.checkInRoom}>Check In Room</b>
                        </Grid>
                        <Grid xs sx={{ mt: 2 }}>
                            <div className={styles.labTest}>Lab Test</div>
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

export default CheckInLabTest2
