import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useNavigate } from 'react-router-dom'
import styles from './_custom-header.module.scss'
type Props = {
    to?: string
    title: string
    startAdornment?: React.ReactNode
    endAdornment?: React.ReactNode
}

const CustomHeader: React.FC<Props> = ({
    to,
    title,
    endAdornment,
    startAdornment,
}: Props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const navigate = useNavigate()

    return (
        <>
            <Grid container className={styles.header} sx={{ px: 3, py: 1 }}>
                <Grid item xs={4} md={3}>
                    {to && (
                        <Button
                            variant="text"
                            className={styles.backButton}
                            startIcon={
                                <ChevronLeftIcon
                                    fontSize={matches ? 'large' : 'small'}
                                />
                            }
                            onClick={() => navigate(to || '')}
                        >
                            <Typography className={styles.backButtonText}>
                                Back
                            </Typography>
                        </Button>
                    )}
                    {startAdornment && startAdornment}
                </Grid>

                <Grid
                    item
                    // xs={to ? 8 : 4}
                    xs={4}
                    md={6}
                    className={styles.headerTitle}
                >
                    {title}
                </Grid>

                <Grid item xs={4} md={3} textAlign={'right'}>
                    {endAdornment && endAdornment}
                </Grid>
            </Grid>
        </>
    )
}

export default CustomHeader
