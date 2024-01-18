import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from '../../_radiology-reporting.module.scss'

type Props = {
    label: string
    onClick: () => void
}

function ButtonCard({ label, onClick }: Props) {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 'auto',
                    width: matches ? 140 : 100,
                    height: matches ? 120 : 80,
                    p: matches ? '1.5rem' : '1rem',
                    cursor: 'pointer',
                    alignItems: 'center',
                    display: 'flex',
                },
            }}
            onClick={onClick}
        >
            <Paper
                elevation={0}
                className={styles.card}
                sx={{ textAlign: 'center' }}
            >
                <span className={styles.cardText}>{label}</span>
            </Paper>
        </Box>
    )
}

export default ButtonCard
