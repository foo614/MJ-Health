import styles from '../_physician-consultation-info.module.scss'
import { TextField, Button } from '@mui/material'
const Recommendation = () => {
    return (
        <>
            <div style={{ paddingLeft: '35px', paddingRight: '35px' }}>
                <p className={styles.commentText}>Other Recommendation</p>
                <div>
                    <TextField
                        InputProps={{
                            classes: { input: styles.inputField },
                        }}
                        variant="outlined"
                        size="small"
                        margin="dense"
                        fullWidth
                        multiline
                        rows={8}
                        name="complaint"
                        className={styles.textFieldProps}
                        placeholder="Type in your message & recommendation."
                    />
                </div>
                <div style={{ textAlign: 'end', marginTop: '1rem' }}>
                    <Button variant="contained" className={styles.saveBttn}>
                        Save
                    </Button>
                </div>
            </div>
        </>
    )
}
export default Recommendation
