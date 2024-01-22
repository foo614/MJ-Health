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
import {
    AUDIOMETRY_PAGE,
    BONE_MINERAL_DENSITY_PAGE,
    CT_SCAN_PAGE,
    ELECTROCARDIOGRAM_PAGE,
    ENT_EXAMINATION_PAGE,
    GENERAL_MEASUREMENT_PAGE,
    INTERVIEW_PAGE,
    LUNG_FUNCTION_TEST_PAGE,
    MAMMOGRAPHY_PAGE,
    PAPS_SMEAR_PAGE,
    PERIPHERAL_VASCULAR_SCREENING_PAGE,
    RETINOGRAPHY_PAGE,
    SONOGRAPHY_PAGE,
    VIEW_COMMENT_PAGE,
    VISION_AND_OCULAR_TENSION_TEST_PAGE,
    X_RAY_PAGE,
} from 'constant'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './_check-in-screening-room1.module.scss'

type Props = {
    onClose: () => void
}

const CheckInScreeningRoom1 = ({ onClose }: Props) => {
    const navigate = useNavigate()
    const [room, setRoom] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setRoom(event.target.value.toString())
    }

    const handleCancel = () => {
        onClose()
    }

    const handleConfirm = () => {
        switch (room) {
            case '1':
                navigate(INTERVIEW_PAGE)
                break
            case '2':
                navigate(AUDIOMETRY_PAGE)
                break
            case '3':
                navigate(BONE_MINERAL_DENSITY_PAGE)
                break
            case '4':
                navigate(CT_SCAN_PAGE)
                break
            case '5':
                navigate(ELECTROCARDIOGRAM_PAGE)
                break
            case '6':
                navigate(ENT_EXAMINATION_PAGE)
                break
            case '7':
                navigate(GENERAL_MEASUREMENT_PAGE)
                break
            case '8':
                navigate(LUNG_FUNCTION_TEST_PAGE)
                break
            case '9':
                navigate(MAMMOGRAPHY_PAGE)
                break
            case '10':
                navigate(PAPS_SMEAR_PAGE)
                break
            case '11':
                navigate(PERIPHERAL_VASCULAR_SCREENING_PAGE)
                break
            case '12':
                navigate(SONOGRAPHY_PAGE)
                break
            case '13':
                navigate(RETINOGRAPHY_PAGE)
                break
            case '14':
                navigate(VISION_AND_OCULAR_TENSION_TEST_PAGE)
                break
            case '15':
                navigate(X_RAY_PAGE)
                break
            case '16':
                navigate(VIEW_COMMENT_PAGE)
                break
            default:
                onClose()
        }
    }

    const roomOptions = [
        { value: '1', label: 'Interview' },
        { value: '2', label: 'Audiometry' },
        { value: '3', label: 'Bone Mineral Density' },
        { value: '4', label: 'CT scan' },
        { value: '5', label: 'Electrocardiogram' },
        { value: '6', label: 'ENT Examination' },
        { value: '7', label: 'General Measurement' },
        { value: '8', label: 'Lung Function Test' },
        { value: '9', label: 'Mammography' },
        { value: '10', label: "Pap's Smear" },
        { value: '11', label: 'Peripheral Vascular Screening' },
        { value: '12', label: 'Sonargraphy' },
        { value: '13', label: 'Retinography' },
        { value: '14', label: 'Vision & Coular Tension Test' },
        { value: '15', label: 'X-Ray' },
        { value: '16', label: 'View Comment' },
    ]

    return (
        <Grid container alignItems={'center'} justifyContent={'center'}>
            <Grid>
                <Paper className={styles.checkInScreeningRoom1} sx={{ p: 3 }}>
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
                                {roomOptions.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
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
    )
}

export default CheckInScreeningRoom1
