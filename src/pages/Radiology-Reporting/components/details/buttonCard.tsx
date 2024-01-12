import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import styles from '../../_radiology-reporting.module.scss'

type Props = {
    label: string
    onClick: () => void
}

function ButtonCard({ label, onClick }: Props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 'auto',
                    width: 140,
                    height: 120,
                    p: '2rem',
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
