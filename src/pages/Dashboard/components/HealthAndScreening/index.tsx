import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Cardiogram from 'images/cardiogram-1@2x.png'
import Chat1 from 'images/chat-1-1@2x.png'
import Group2 from 'images/group@2x.png'
import LineIcon from 'images/line-1@2x.png'
import PhoneIcon from 'images/phone-1-1@2x.png'
import Frame2 from 'images/screening-1@2x.png'
import Swab from 'images/swab-1@2x.png'
import CustomBoxButton from '../CustomBoxButton'
import styles from './_healthAndScreening.module.scss'
const HealthAndScreening = () => {
    return (
        <Grid container sx={{ mb: 4 }}>
            <Grid xs={12} display="flex" sx={{ mb: 3 }}>
                <img
                    className={styles.headphonesIcon}
                    alt=""
                    src={Cardiogram}
                />
                <div className={styles.services}>Health & Screening</div>
            </Grid>
            <Grid>
                <Stack direction="row" spacing={2}>
                    <CustomBoxButton
                        image={Frame2}
                        label="Screening Room System"
                    />
                    {/* prompt */}
                    <CustomBoxButton image={Swab} label="Lab Test" />
                    {/* prompt */}
                    <CustomBoxButton image={Chat1} label="Consultation" />
                    <CustomBoxButton image={LineIcon} label="Monitor System" />
                    <CustomBoxButton
                        image={LineIcon}
                        label="Queue Management"
                    />
                    <CustomBoxButton
                        image={Group2}
                        label="Rediology Reporting"
                    />
                    <CustomBoxButton
                        image={PhoneIcon}
                        label="Phone Consultation"
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default HealthAndScreening
