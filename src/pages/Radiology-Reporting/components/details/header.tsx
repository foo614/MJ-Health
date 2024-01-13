import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ConfirmationModal from 'components/ConfirmationModal'
import AcceptIcon from 'images/accept.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../../_radiology-reporting.module.scss'
function Header() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [open, setOpen] = useState<boolean>(false)
    const navigate = useNavigate()

    return (
        <Grid container className={styles.header}>
            <Grid xs={4} md={3}>
                <Button
                    variant="text"
                    className={styles.backButton}
                    startIcon={<ChevronLeftIcon fontSize={'large'} />}
                    onClick={() => navigate(-1)}
                >
                    <span style={{ marginLeft: '-5px' }}>Back</span>
                </Button>
            </Grid>
            <Grid xs={4} md={6} className={styles.headerTitle}>
                RADIOLOGY REPORTING
            </Grid>
            <Grid xs={4} md={3} className={styles.confirmButton}>
                <Button
                    variant="contained"
                    sx={{ height: '40px', marginTop: '5px' }}
                    size={matches ? 'medium' : 'small'}
                    onClick={() => setOpen(true)}
                >
                    Confirm
                </Button>
            </Grid>
            {open && (
                <ConfirmationModal
                    title={'Confirm Data'}
                    context={
                        'By selecting confirm, report status will be showed as ready to print.'
                    }
                    image={AcceptIcon}
                    decline={() => setOpen(false)}
                    accept={() => setOpen(false)}
                    setOpen={setOpen}
                    open={open}
                    width="md"
                />
            )}
        </Grid>
    )
}

export default Header
