import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import styles from './_abnormal-dialog.module.scss'

const DimensionInput = () => {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <TextField className={styles.inputXs} defaultValue={'-'} />
            <span>*</span>
            <TextField className={styles.inputXs} defaultValue={'-'} />
            <span>*</span>
            <TextField className={styles.inputXs} defaultValue={'-'} />
            <span>CM</span>
        </Stack>
    )
}

type Props = {
    quantityLabel: string
}

const AbnormalDialogQuantityRow = ({ quantityLabel }: Props) => {
    return (
        <Stack direction="row" spacing={5} className={styles.quantityRow}>
            <Stack direction="row" spacing={1} alignItems="center">
                <TextField className={styles.inputSm} defaultValue={'-'} />
                <span className={styles.quantityLabel}>{quantityLabel}</span>
            </Stack>
            <DimensionInput />
            <DimensionInput />
            <DimensionInput />
        </Stack>
    )
}

export default AbnormalDialogQuantityRow
