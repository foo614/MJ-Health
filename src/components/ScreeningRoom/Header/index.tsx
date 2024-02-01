import {
    Button,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import styles from './_screening-room-header.module.scss'
import CheckoutIcon from 'images/checkout.png'
import CustomHeaderSearchInput from 'components/CustomHeader/EndAdornment/SearchInput'

type Props = {
    title: string
}

const ScreeningRoomHeader = ({ title }: Props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const navigate = useNavigate()

    return (
        <>
            <Grid container className={styles.header} sx={{ px: 3, py: 1 }}>
                <Grid item xs={4} md={3}>
                    <Button
                        variant="contained"
                        className={styles.checkoutButton}
                        startIcon={<img src={CheckoutIcon} alt="Checkout" />}
                    >
                        <Typography className={styles.checkoutButtonText}>
                            Check Out
                        </Typography>
                    </Button>
                </Grid>

                <Grid item xs={4} md={6} className={styles.headerTitle}>
                    {title}
                </Grid>

                <Grid item xs={4} md={3} textAlign={'right'}>
                    <CustomHeaderSearchInput
                        fullWidth
                        placeholder="Search Member Seq No..."
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ScreeningRoomHeader
