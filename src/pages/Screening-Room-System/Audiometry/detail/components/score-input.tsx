import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import styles from '../_audiometry-detail.module.scss'

type Props = {
    value?: string | number
    readonly?: boolean
}

const ScoreInput = ({ value, readonly }: Props) => {
    return (
        <FormControl
            className={styles.examReportTableInput}
            // sx={{ width: '80px !important', minWidth: '60px' }}
        >
            <TextField
                size="small"
                value={value}
                inputProps={{
                    style: {
                        paddingLeft: '8px',
                        paddingRight: '8px',
                        width: '80px',
                    },
                    readOnly: readonly,
                }}
            />
        </FormControl>
    )
}

export default ScoreInput
