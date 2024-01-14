import ErrorIcon from '@mui/icons-material/Error'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
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
            // justifyContent={'space-between'}
            // wrap="nowrap"
        >
            <Grid item xs={12} md={8}>
                <Typography
                    noWrap
                    sx={{
                        color: '#eeeeee',
                        fontSize: matches ? '20px' : '13px',
                        fontWeight: 700,
                    }}
                >
                    001 &nbsp; Jeffery Mohamad Bin Christofa &nbsp; 10-05-1990
                    &nbsp; 32/M &nbsp; 900510015213
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography
                    noWrap
                    sx={{
                        color: '#eeeeee',
                        fontSize: matches ? '20px' : '13px',
                        fontWeight: 700,
                    }}
                >
                    0401101006000001 &nbsp;&nbsp; K2 &nbsp;&nbsp; BM | EN | CN
                    <ErrorIcon
                        fontSize={matches ? 'medium' : 'small'}
                        sx={{
                            color: '#F9C234',
                            marginLeft: '5px',
                            verticalAlign: 'sub',
                        }}
                    />
                </Typography>
            </Grid>
        </Grid>
    )
}

export default UserHeader
