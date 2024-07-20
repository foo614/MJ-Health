import TextField from '@mui/material/TextField'
import styles from './_abnormal-dialog.module.scss'

const AbnormalDialogProstateSizeInput = () => {
    return (
        <table border={0} className={styles.prostateInput}>
            <tr>
                <th colSpan={2}>T</th>
                <th colSpan={2}>P</th>
                <th colSpan={2}>L</th>
            </tr>
            <tr>
                <td>
                    <TextField className={styles.inputSm} defaultValue={'-'} />
                </td>
                <td>*</td>
                <td>
                    <TextField className={styles.inputSm} defaultValue={'-'} />
                </td>
                <td>*</td>
                <td>
                    <TextField className={styles.inputSm} defaultValue={'-'} />
                </td>
                <td>CM</td>
            </tr>
        </table>
    )
}

export default AbnormalDialogProstateSizeInput
