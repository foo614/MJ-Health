import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import styles from './_customBoxButton.module.scss'

type Props = {
    image: string
    label: string
    // onClick: () => void
}

const CustomBoxButton = (props: Props) => {
    return (
        <Paper className={styles.customBox}>
            <Stack justifyContent="center" alignItems="center" spacing={0}>
                <img className={styles.boxImage} alt="" src={props.image} />
                <div className={styles.boxLabel}>{props.label}</div>
            </Stack>
        </Paper>
    )
}

export default CustomBoxButton
