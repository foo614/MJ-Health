import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import File1 from 'images/file-1@2x.png'
import HandTouch from 'images/handtouchingtabletscreen-1@2x.png'
import HeadPhones from 'images/headphones-1@2x.png'
import HealthCare from 'images/healthcare.png'
import HotFood from 'images/hotfood-1-2@2x.png'
import CustomBoxButton from '../CustomBoxButton'
import styles from './_services.module.scss'

const Services = () => {
    return (
        <Grid container sx={{ mb: 4 }}>
            <Grid xs={12} display="flex" sx={{ mb: 3 }}>
                <img
                    className={styles.headphonesIcon}
                    alt=""
                    src={HeadPhones}
                />
                <div className={styles.services}>Services</div>
            </Grid>
            <Grid>
                <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                    <CustomBoxButton image={HandTouch} label="Self-Kiosk UI" />
                    <CustomBoxButton
                        image={HealthCare}
                        label="Reception Counter"
                    />
                    <CustomBoxButton image={File1} label="Print Sticker" />
                    <CustomBoxButton image={HotFood} label="Dining" />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Services
