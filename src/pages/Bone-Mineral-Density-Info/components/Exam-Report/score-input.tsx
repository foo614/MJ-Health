import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import styles from '../../_bone-mineral-density-info.module.scss'

type Props = {
    value?: string | number
}

const ScoreInput = ({ value }: Props) => {
    return (
        <FormControl
            className={styles.examReportTableInput}
            sx={{ width: '80px' }}
        >
            <TextField
                size="small"
                value={value}
                inputProps={{
                    style: {
                        paddingLeft: '8px',
                        paddingRight: '8px',
                    },
                }}
            />
        </FormControl>
    )
}

export default ScoreInput
