import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import CustomTable from 'components/CustomTable'
function CommentAndSuggestion() {
    return (
        <Box sx={{ px: 3, mb: 1 }}>
            <Divider component="div" />
            <Grid xs={12} sx={{ py: 2 }}>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#219B8E',
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
                <CustomTable footer />
            </Grid>
            <Grid xs={12} md={2} mdOffset={10}>
                <Button
                    size="small"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3 }}
                >
                    Save
                </Button>
            </Grid>
        </Box>
    )
}

export default CommentAndSuggestion
