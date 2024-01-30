import Box from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from '../_x-ray.module.scss'

type Props = {
    onClick: () => void
    label: string
}

const ButtonCard = ({ onClick, label }: Props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <Box
            className={styles.smallCard}
            sx={{
                m: 'auto',
                width: matches ? 140 : 100,
                height: matches ? 120 : 80,
                p: matches ? '1.5rem' : '1rem',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <p className={styles.smallCardTitle}>{label}</p>
        </Box>
    )
}

export default ButtonCard
