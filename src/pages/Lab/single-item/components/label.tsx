import { Grid } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import styles from '../../_lab.module.scss'
const MultiLabel = () => {
    return (
        <>
            <Grid container className={styles.singleItemLabelContainer}>
                <Grid item md={10} xs={8} className={styles.labelTextDiv}>
                    <p className={styles.labelText}>Total Anti-HAV</p>
                </Grid>
                <Grid item md={2} xs={4}>
                    <Avatar className={styles.singleItemAvatar}>11</Avatar>
                </Grid>
            </Grid>
        </>
    )
}

export default MultiLabel
