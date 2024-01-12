import ErrorIcon from '@mui/icons-material/Error'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from '../_radiology-reporting.module.scss'

function UserHeader() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <Grid
            container
            className={styles.userHeader}
            justifyContent={'space-between'}
        >
            <Grid>
                001 &nbsp; Jeffery Mohamad Bin Christofa &nbsp; 10-05-1990
                &nbsp; 32/M &nbsp; 900510015213
            </Grid>
            <Grid>
                0401101006000001 &nbsp;&nbsp; K2 &nbsp;&nbsp; BM | EN | CN
                <ErrorIcon
                    fontSize="medium"
                    sx={{ color: '#F9C234', marginLeft: '5px' }}
                />
            </Grid>
        </Grid>
    )
}

export default UserHeader
