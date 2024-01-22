import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from '../_custom-header.module.scss'

function CustomHeaderSearchInput({
    placeholder,
    fullWidth,
}: {
    placeholder: string
    fullWidth?: boolean
}) {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon
                            className={styles.searchIcon}
                            fontSize={matches ? 'large' : 'small'}
                        />
                    </InputAdornment>
                ),
            }}
            variant="outlined"
            size="small"
            margin="dense"
            placeholder={placeholder}
            className={styles.searchInput}
            fullWidth={!!fullWidth}
        />
    )
}

export default CustomHeaderSearchInput
