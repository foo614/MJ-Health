import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from '../_radiology-reporting.module.scss'
function Header() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <Grid container className={styles.header}>
            <Grid xs={12} md={6} mdOffset={3} className={styles.headerTitle}>
                RADIOLOGY REPORTING
            </Grid>
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
                    placeholder="Search Member Seq No..."
                    className={styles.searchInput}
                />
            </Grid>
        </Grid>
    )
}

export default Header
