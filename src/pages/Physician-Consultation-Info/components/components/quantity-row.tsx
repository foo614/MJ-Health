import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import styles from './_quantity-row.module.scss'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'

type Props = {
    quantityLabel: string
    labelSize: 1 | 2
}

const QuantityRow: React.FC<Props> = ({ quantityLabel, labelSize }: Props) => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
                <span
                    className={
                        labelSize == 1
                            ? styles.quantityLabelXs
                            : styles.quantityLabelSm
                    }
                >
                    {quantityLabel}
                </span>
                <TextField className={styles.inputSm} defaultValue={'-'} />
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
                <span>Name</span>
                <TextField className={styles.inputXs} defaultValue={'-'} />
                <span>x</span>
                <TextField className={styles.inputXs} defaultValue={'-'} />
                <span>cm</span>
                <TextField className={styles.inputXs} defaultValue={'-'} />
                <span>x</span>
                <TextField className={styles.inputXs} defaultValue={'-'} />
                <span>cm</span>
                <TextField className={styles.inputXs} defaultValue={'-'} />
                <span>x</span>
                <TextField className={styles.inputXs} defaultValue={'-'} />
                <span>cm</span>
            </Stack>
        </Stack>
    )
}

export default QuantityRow
