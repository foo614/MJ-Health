import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Button, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './_custom-header.module.scss'

type Props = {
    to: string
    title: string
}
const CustomHeader: React.FC<Props> = ({ to, title }: Props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location
    return (
        <div className={styles.header}>
            <Grid xs container justifyContent={'space-between'} spacing={1}>
                <Grid item>
                    {to && (
                        <Button
                            variant="text"
                            className={styles.backButton}
                            startIcon={<ChevronLeftIcon />}
                            onClick={() => navigate(to)}
                        >
                            BACK
                        </Button>
                    )}
                </Grid>
                <Grid item className={styles.headerTitle}>
                    {title}
                </Grid>
                <Grid item>
                    {pathname.includes('setting') && (
                        <Button variant="contained">
                            {!matches ? 'Branch' : 'Switch Branch'}
                        </Button>
                    )}
                </Grid>
            </Grid>
        </div>
    )
}

export default CustomHeader
