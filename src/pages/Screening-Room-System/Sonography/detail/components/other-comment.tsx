import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const SonographyOtherComment = () => {
    return (
        <Grid2 xs={12} sx={{ p: 3 }}>
            <Grid2 xs={12}>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#219B8E',
                        fontSize: '20px',
                        fontWeight: 600,
                    }}
                >
                    Other Comment
                </Typography>
            </Grid2>
            <Grid2 xs={12}>
                <TextField
                    sx={{
                        borderRadius: '8px',
                        background: '#F9F9F9',
                        boxShadow: '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset',
                    }}
                    fullWidth
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    defaultValue="Type in your message & recommendation."
                />
            </Grid2>
        </Grid2>
    )
}

export default SonographyOtherComment
