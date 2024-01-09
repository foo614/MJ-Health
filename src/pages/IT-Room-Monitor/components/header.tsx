import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from '../_it-room-monitor.module.scss'

function Header() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <div
            className={styles.monitorSystemHeader}
            style={matches ? { paddingLeft: '3rem', paddingRight: '3rem' } : {}}
        >
            {matches ? (
                <>
                    <div className={styles.monitorSearchDiv}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon
                                            className={styles.searchIcon}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                            size="small"
                            margin="dense"
                            placeholder="Search Member Seq No..."
                            className={styles.monitorSystemSearchInput}
                        />
                    </div>
                    <div>
                        <p className={styles.monitorSystemHeaderTitle}>
                            IT ROOM MONITOR
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <p className={styles.monitorSystemHeaderTitle}>
                            IT ROOM MONITOR
                        </p>
                        <div style={{ textAlign: 'center' }}>
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon
                                                className={styles.searchIcon}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                size="small"
                                margin="dense"
                                placeholder="Search..."
                                className={
                                    styles.monitorSystemSearchInputMobile
                                }
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Header
