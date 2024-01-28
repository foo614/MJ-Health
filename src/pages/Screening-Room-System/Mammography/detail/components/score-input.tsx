import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import styles from '../_mammography-detail.module.scss'

type Props = {
    value?: string | number
}

const ScoreInput = ({ value }: Props) => {
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
                }}
            />
        </FormControl>
    )
}

export default ScoreInput
