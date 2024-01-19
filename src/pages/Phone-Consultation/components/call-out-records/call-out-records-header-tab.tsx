import { Grid, useMediaQuery, useTheme } from '@mui/material'
import styles from './_call-out-records.module.scss'

type Props = {
    count: number
    label: string
}

const CallOutRecordsHeaderTab = (props: Props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <>
            <Grid container alignItems="center">
                <Grid
                    item
                    xs={5}
                    className={styles.headerTabCount}
                    style={{
                        padding: matches ? '1rem 3rem' : '1rem',
                        fontSize: matches ? '70px' : '56px',
                    }}
                >
                    {props.count}
                </Grid>
                <Grid
                    item
                    xs={7}
                    className={styles.headerTabLabel}
                    style={{
                        padding: matches ? '1rem 3rem' : '1rem',
                        fontSize: matches ? '24px' : '16px',
                    }}
                >
                    {props.label}
                </Grid>
            </Grid>
        </>
    )
}

export default CallOutRecordsHeaderTab
