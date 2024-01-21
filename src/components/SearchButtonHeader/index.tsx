import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from './_search-button-header.module.scss'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { Button } from '@mui/material'
type Props = {
    title: string
    isSearchInput: boolean
    setOpenModal: any
    buttonText: string
}
const SearchButtonHeader: React.FC<Props> = ({
    title,
    isSearchInput,
    setOpenModal,
    buttonText,
}: Props) => {
    const theme = useTheme()
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
    return (
        <>
            <div
                className={styles.header}
                style={
                    lgUp ? { paddingLeft: '3rem', paddingRight: '3rem' } : {}
                }
            >
                {lgUp ? (
                    <>
                        <div className={styles.rightContent}>
                            {isSearchInput ? (
                                <TextField
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon
                                                    className={
                                                        styles.searchIcon
                                                    }
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    placeholder="Search..."
                                    className={styles.searchInput}
                                />
                            ) : (
                                <Button
                                    variant="contained"
                                    size="small"
                                    className={styles.buttonClass}
                                    onClick={() => setOpenModal(true)}
                                >
                                    {buttonText}
                                </Button>
                            )}
                        </div>
                        <div>
                            <p className={styles.headerTitle}>{title}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <p className={styles.headerTitle}>{title}</p>
                            <div style={{ textAlign: 'center' }}>
                                {isSearchInput ? (
                                    <TextField
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon
                                                        className={
                                                            styles.searchIcon
                                                        }
                                                    />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined"
                                        size="small"
                                        margin="dense"
                                        placeholder="Search..."
                                        className={styles.searchInputMobile}
                                    />
                                ) : (
                                    <Button
                                        variant="contained"
                                        size="small"
                                        className={styles.buttonClass}
                                        onClick={() => setOpenModal(true)}
                                    >
                                        {buttonText}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default SearchButtonHeader
