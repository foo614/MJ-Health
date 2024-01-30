import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CustomHeader from 'components/CustomHeader'

type Props = {
    title: string
    to: string
}

const ScreeningRoomInfoHeader = ({ title, to }: Props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <CustomHeader
            title={title}
            to={to}
            endAdornment={
                <Button
                    variant="contained"
                    sx={{
                        fontWeight: '600',
                        fontSize: matches
                            ? 'var(--font-size-lg)'
                            : 'var(--font-size-xs)',
                        width: matches ? '180px' : 'auto',
                        padding: matches ? 'auto' : '4px 8px',
                    }}
                >
                    Exit Station
                </Button>
            }
        />
    )
}

export default ScreeningRoomInfoHeader
