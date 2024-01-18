import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useNavigate } from 'react-router-dom'
import styles from '../_mul-report.module.scss'

type Props = {
    to?: string
    title: string
    hasSearch: boolean
}
const Header = (props: Props) => {
    const theme = useTheme()
    const navigate = useNavigate()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <Grid container className={styles.header}>
            {props.to && (
                <Grid xs={3} md={2} textAlign={matches ? 'center' : 'start'}>
                    <Button
                        variant="text"
                        className={styles.backButton}
                        startIcon={<ChevronLeftIcon fontSize={'large'} />}
                        onClick={() => navigate(props.to || '')}
                    >
                        Back
                    </Button>
                </Grid>
            )}
            <Grid xs={12} md={6} mdOffset={3} className={styles.headerTitle}>
                {props.title}
            </Grid>
            {props.hasSearch && (
                <Grid xs={12} md={3} textAlign={matches ? 'center' : 'end'}>
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon className={styles.searchIcon} />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        size="small"
                        margin="dense"
                        placeholder="Search..."
                        className={styles.searchInput}
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default Header
