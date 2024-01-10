import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import styles from '../../_radiology-reporting.module.scss'

function ButtonCard() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 140,
                    height: 120,
                    p: 5,
                },
            }}
        >
            <Paper elevation={0} className={styles.card}>
                <span className={styles.cardText}>Medical History</span>
            </Paper>
        </Box>
    )
}

export default ButtonCard
