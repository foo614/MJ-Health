import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from './_search-button-header.module.scss'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Button } from '@mui/material'
import SearchInput from 'components/Input/search-input'

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
                                <Box
                                    sx={{
                                        width: '300px',
                                        mt: '0px !important',
                                        mr: '3rem !important',
                                    }}
                                >
                                    <SearchInput />
                                </Box>
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
                                    <SearchInput />
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
