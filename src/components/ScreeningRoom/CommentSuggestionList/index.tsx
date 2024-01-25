import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'
import CustomizedTables from './components/table'
import styles from './_comment-suggestion-list.module.scss'

const CommentSuggestionList = () => {
    return (
        <Grid container>
            <Grid xs={12}>
                <Typography
                    variant="h6"
                    sx={{
                        color: 'var(--mj-deep-green)',
                        fontSize: '20px',
                        fontWeight: 600,
                    }}
                >
                    Overview
                </Typography>
            </Grid>
            <Grid xs={12}>
                <InputBase
                    id="outlined-search"
                    placeholder="Search..."
                    type="search"
                    sx={{
                        background: '#F9F9F9',
                        boxShadow: '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset',
                        borderRadius: '5px',
                        minWidth: '100%',
                        padding: '10px 15px',
                    }}
                />
                <CustomizedTables />
            </Grid>
            <Grid xs={12} md={2} mdOffset={10}>
                <Button
                    size="small"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3 }}
                    className={styles.saveButton}
                >
                    Save
                </Button>
            </Grid>
        </Grid>
    )
}

export default CommentSuggestionList
