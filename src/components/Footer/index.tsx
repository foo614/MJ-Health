import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import styles from './_footer.module.scss'

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
            }}
        >
            <Container maxWidth="xl">
                <span className={styles.bottomTextMJ}>MJ HEALTH {'  '}</span>
                <span className={styles.bottomTextSouthern}>
                    SOUTHERN, GELANG PATAH
                </span>
            </Container>
        </Box>
    )
}

export default Footer
