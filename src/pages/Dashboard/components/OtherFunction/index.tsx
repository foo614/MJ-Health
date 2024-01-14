import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import {
    IT_MONITOR_ROOM_PAGE,
    IT_ROOM_PRINTING_PAGE,
    STAFF_MANAGEMENT_PAGE,
} from 'constant'
import Group1 from 'images/group-1@2x.png'
import GroupIcon from 'images/group-3091@2x.png'
import Monitor from 'images/monitor-1@2x.png'
import MulIcon from 'images/mul-1@2x.png'
import Other2 from 'images/other-2@2x.png'
import Printer from 'images/printer-1-1@2x.png'
import RoomIcon from 'images/room-1-1@2x.png'
import { useNavigate } from 'react-router-dom'
import CustomBoxButton from '../CustomBoxButton'
import styles from './_services.module.scss'

const OtherFunction = () => {
    const navigate = useNavigate()
    return (
        <Grid container sx={{ mb: 4 }}>
            <Grid xs={12} display="flex" sx={{ mb: 3 }}>
                <img className={styles.headphonesIcon} alt="" src={Other2} />
                <div className={styles.services}>Other Function</div>
            </Grid>
            <Grid>
                <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                    <CustomBoxButton
                        image={Monitor}
                        label="IT Room Monitor"
                        onClick={() => navigate(IT_MONITOR_ROOM_PAGE)}
                    />
                    <CustomBoxButton image={Printer} label="IT Printing Room" />
                    <CustomBoxButton
                        image={Group1}
                        label="Staff Management"
                        onClick={() => navigate(STAFF_MANAGEMENT_PAGE)}
                    />
                    <CustomBoxButton
                        image={Printer}
                        label="IT Printing Room"
                        onClick={() => navigate(IT_ROOM_PRINTING_PAGE)}
                    />
                    <CustomBoxButton image={Group1} label="Staff Management" />
                    <CustomBoxButton image={MulIcon} label="Word Bank" />
                    <CustomBoxButton image={RoomIcon} label="Room Management" />
                    <CustomBoxButton image={GroupIcon} label="Final Report" />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default OtherFunction
