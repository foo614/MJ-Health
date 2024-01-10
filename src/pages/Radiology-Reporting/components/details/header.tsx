import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useNavigate } from 'react-router-dom'
import styles from '../../_radiology-reporting.module.scss'
function Header() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const navigate = useNavigate()

    return (
        <Grid container className={styles.header}>
            <Grid xs={4} md={3}>
                <Button
                    variant="text"
                    className={styles.backButton}
                    startIcon={<ChevronLeftIcon fontSize={'large'} />}
                    onClick={() => navigate(-1)}
                >
                    <span style={{ marginLeft: '-5px' }}>Back</span>
                </Button>
            </Grid>
            <Grid xs={4} md={6} className={styles.headerTitle}>
                RADIOLOGY REPORTING
            </Grid>
            <Grid xs={4} md={3} className={styles.confirmButton}>
                <Button variant="contained" size={matches ? 'medium' : 'small'}>
                    Confirm
                </Button>
            </Grid>
        </Grid>
    )
}

export default Header
