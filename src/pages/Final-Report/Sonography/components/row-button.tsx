import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'

type Props = {
    currentIndex: number
    handleChange: (newValue: number) => void
}

const RowButton = ({ currentIndex, handleChange }: Props) => {
    const buttonsData = [
        { label: 'Abdomen', index: 0 },
        { label: 'Gynaecology', index: 5 },
        { label: 'Prostate', index: 6 },
        { label: 'Breast', index: 1 },
        { label: 'Thyroid', index: 8 },
        { label: 'Scrotum', index: 7 },
        { label: 'Carotid', index: 2 },
        // { label: 'DVT', index: 3 },
        // { label: 'Elasto', index: 4 },
        // { label: 'Others', index: 9 },
    ]

    return (
        <Grid container>
            <Grid xs={12}>
                <Box sx={{ background: '#f9f9f9' }}>
                    <Grid
                        container
                        spacing={2}
                        px={2}
                        justifyContent={'space-around'}
                    >
                        {buttonsData.map((button, index) => (
                            <Grid xs key={index}>
                                <Button
                                    variant={
                                        currentIndex === button.index
                                            ? 'contained'
                                            : 'outlined'
                                    }
                                    fullWidth
                                    sx={{
                                        borderRadius: '5px',
                                        border: '2px #EDEDED solid',
                                        color:
                                            currentIndex !== button.index
                                                ? '#5A567B'
                                                : '#FFF',
                                        fontWeight: '500',
                                    }}
                                    size="small"
                                    onClick={() => handleChange(button.index)}
                                >
                                    {button.label}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default RowButton
