import Button from '@mui/material/Button'
import CustomHeader from 'components/CustomHeader'

type Props = {
    title: string
    to: string
}

const ScreeningRoomInfoHeader = ({ title, to }: Props) => {
    return (
        <CustomHeader
            title={title}
            to={to}
            endAdornment={
                <Button
                    variant="contained"
                    sx={{
                        fontWeight: '600',
                        fontSize: 'var(--font-size-lg)',
                        width: '180px',
                    }}
                >
                    Exit Station
                </Button>
            }
        />
    )
}

export default ScreeningRoomInfoHeader
