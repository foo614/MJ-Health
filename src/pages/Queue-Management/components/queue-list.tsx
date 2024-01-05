import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Unstable_Grid2'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/system'
import { FunctionComponent } from 'react'
import styles from './_queue-list.module.scss'
import QueueListAppBar from './components'

const OverlapGroup = (): JSX.Element => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <>
            <Grid xs={12} sx={{ mb: 3 }}>
                <Card>
                    <CardHeader
                        sx={{ background: '#219b8e', px: matches ? 7 : 2 }}
                        action={
                            <div className={styles.dFlex}>
                                <img
                                    className={styles.img}
                                    alt="Group"
                                    src="https://c.animaapp.com/fPN6YKAq/img/group-628.png"
                                />
                                <div className={styles.group9}>
                                    <div className={styles.textWrapper12}>
                                        Doctor On Shift
                                    </div>
                                    <div className={styles.textWrapper11}>
                                        Dr. Lee Shen Long
                                    </div>
                                </div>
                            </div>
                        }
                        title={
                            <div className={styles.textWrapper4}>
                                ENT Examination
                            </div>
                        }
                    />
                    <CardContent>
                        <Grid
                            container
                            justifyContent={matches ? 'space-between' : ''}
                            sx={{ px: matches ? 6 : 0 }}
                        >
                            <Grid md={10} xs={6}>
                                <div className={styles.textWrapper9}>001</div>
                                <div className={styles.textWrapper10}>
                                    Current Number
                                </div>
                            </Grid>
                            <Grid xs textAlign={'left'} sx={{ ml: 5 }}>
                                <div className={styles.textWrapper8}>
                                    Waiting List
                                </div>
                                <Grid xs>
                                    <div className={styles.textWrapper5}>
                                        <b>002</b> 003 004
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

const QueueManagementList: FunctionComponent = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <>
            <QueueListAppBar />
            <Grid container sx={{ px: matches ? 10 : 2, py: matches ? 5 : 2 }}>
                <OverlapGroup />
                <OverlapGroup />
                <OverlapGroup />
                <OverlapGroup />
                <OverlapGroup />
                <OverlapGroup />
            </Grid>
        </>
    )
}

export default QueueManagementList
