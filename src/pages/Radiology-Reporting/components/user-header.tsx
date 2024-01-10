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
            justifyContent={'space-evenly'}
        >
            <Grid>001</Grid>
            <Grid>Jeffery Mohamad Bin Christofa</Grid>
            <Grid>10-05-1990</Grid>
            <Grid>32/M</Grid>
            <Grid>900510015213</Grid>
            <Grid>0401101006000001</Grid>
            <Grid>K2</Grid>
            <Grid>BM | EN | CN</Grid>
        </Grid>
    )
}

export default UserHeader
