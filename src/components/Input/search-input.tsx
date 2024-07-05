import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import styles from './_search-input.module.scss'

type Props = {
    placeholder?: string
}

const SearchInput = ({ placeholder }: Props) => {
    return (
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
            placeholder={placeholder ?? 'Search...'}
            fullWidth
            className={styles.searchInput}
        />
    )
}

export default SearchInput
