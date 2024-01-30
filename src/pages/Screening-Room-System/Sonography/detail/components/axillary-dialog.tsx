import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import * as React from 'react'
import { useState } from 'react'
import styles from '../_sonography-detail.module.scss'

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<any>>
    open: boolean
}

function createData(number: string, content: string) {
    return { number, content }
}

const AxillaryDialog = ({ setOpen, open }: Props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [selectedType, setSelectedType] = useState('normal')

    const handleButtonChange = (type: string) => {
        setSelectedType(type)
    }

    const RowButtonOptions = () => {
        return (
            <>
                <Grid xs={12} sx={{ p: 2 }}>
                    <Button
                        variant="contained"
                        size={matches ? 'medium' : 'small'}
                        sx={{
                            background:
                                selectedType === 'normal' ? '#fff' : '#EDEDED',
                            boxShadow:
                                '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                            borderRadius: '5px',
                            color:
                                selectedType === 'normal'
                                    ? '#211D4E'
                                    : '#5A567B',
                            fontWeight: 600,
                            marginRight: '1em',
                            '&:hover': {
                                color: '#fff', // Change font color to white on hover
                            },
                        }}
                        onClick={() => handleButtonChange('normal')}
                    >
                        Normal
                    </Button>
                    <Button
                        variant="contained"
                        size={matches ? 'medium' : 'small'}
                        sx={{
                            background:
                                selectedType === 'adnormal'
                                    ? '#fff'
                                    : '#EDEDED',
                            boxShadow:
                                '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                            borderRadius: '5px',
                            color:
                                selectedType === 'adnormal'
                                    ? '#211D4E'
                                    : '#5A567B',
                            fontWeight: 600,
                            marginRight: '1em',
                            '&:hover': {
                                color: '#fff', // Change font color to white on hover
                            },
                        }}
                        onClick={() => handleButtonChange('adnormal')}
                    >
                        Abnormal
                    </Button>
                </Grid>
            </>
        )
    }

    return (
        <React.Fragment>
            <Dialog open={open} keepMounted maxWidth={'lg'}>
                <DialogContent className={styles.modalDialogContent} dividers>
                    <Grid
                        container
                        sx={{
                            background: '#FDFDFD',
                            borderaRadius: '5px',
                        }}
                    >
                        <Grid
                            xs
                            sx={{
                                border: '2px #EDEDED solid',
                            }}
                        >
                            <>
                                <Grid container>
                                    <Grid
                                        xs={12}
                                        sx={{
                                            borderBottom: '2px #EDEDED solid',
                                            background: '#F9F9F9',
                                            p: 2,
                                            fontWeight: 600,
                                        }}
                                    >
                                        Axillary
                                    </Grid>
                                    <Grid xs={12} sx={{ p: 2 }}>
                                        <FormControl>
                                            <RadioGroup
                                                name="radio-buttons-group"
                                                row
                                            >
                                                <Grid xs={12} md={6}>
                                                    <FormControlLabel
                                                        value="1"
                                                        control={<Radio />}
                                                        label="Left axillary lymphadenopathy"
                                                        sx={{
                                                            fontSize:
                                                                '16px !important',
                                                            color: '#333333',
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid xs={12} md={6}>
                                                    <FormControlLabel
                                                        value="2"
                                                        control={<Radio />}
                                                        label="Right axillary lymphadenopathy"
                                                    />
                                                </Grid>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid
                                        xs={12}
                                        sx={{
                                            borderTop: '2px #EDEDED solid',
                                            borderBottom: '2px #EDEDED solid',
                                            background: '#F9F9F9',
                                            p: 2,
                                            fontWeight: 600,
                                        }}
                                    >
                                        Size
                                    </Grid>
                                    <Grid xs={12}>
                                        <Stack
                                            direction={'row'}
                                            alignItems={'center'}
                                            height={200}
                                            sx={{ mx: 2 }}
                                        >
                                            {/* two input in same row */}
                                            <TextField
                                                sx={{
                                                    background: '#F9F9F9',
                                                }}
                                                value={'-'}
                                            />
                                            <Typography
                                                sx={{
                                                    color: '#5A567B',
                                                    fontSize: '16px',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {'cm'}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    background: '#F9F9F9',
                                                    mx: 1,
                                                }}
                                            >
                                                {'x'}
                                            </Typography>
                                            <TextField
                                                sx={{
                                                    background: '#F9F9F9',
                                                }}
                                                value={'-'}
                                            />
                                            <Typography
                                                sx={{
                                                    color: '#5A567B',
                                                    fontSize: '16px',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {'cm'}
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid
                                        xs={12}
                                        sx={{
                                            borderTop: '2px #EDEDED solid',
                                            borderBottom: '2px #EDEDED solid',
                                            background: '#F9F9F9',
                                            p: 2,
                                            fontWeight: 600,
                                            fontSize: 14,
                                        }}
                                    >
                                        Birads
                                    </Grid>
                                    <Grid xs={12}>
                                        <>
                                            <RowButtonOptions />
                                            <Grid
                                                container
                                                rowSpacing={1}
                                                columnSpacing={{
                                                    xs: 1,
                                                    sm: 2,
                                                    md: 3,
                                                }}
                                                sx={{ px: 2, pb: 2 }}
                                            >
                                                <FormControl>
                                                    <RadioGroup
                                                        name="radio-buttons-group"
                                                        row
                                                    >
                                                        <Grid xs={4} md={3}>
                                                            <FormControlLabel
                                                                value="1"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="1"
                                                                disabled={
                                                                    selectedType ===
                                                                    'normal'
                                                                }
                                                            />
                                                        </Grid>
                                                        <Grid xs={4} md={3}>
                                                            <FormControlLabel
                                                                value="2"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="2"
                                                                disabled={
                                                                    selectedType ===
                                                                    'normal'
                                                                }
                                                            />
                                                        </Grid>
                                                        <Grid xs={4} md={3}>
                                                            <FormControlLabel
                                                                value="3"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="3"
                                                                disabled={
                                                                    selectedType ===
                                                                    'normal'
                                                                }
                                                            />
                                                        </Grid>
                                                        <Grid xs={4} md={3}>
                                                            <FormControlLabel
                                                                value="4a"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="4a"
                                                                disabled={
                                                                    selectedType ===
                                                                    'normal'
                                                                }
                                                            />
                                                        </Grid>
                                                        <Grid xs={4} md={3}>
                                                            <FormControlLabel
                                                                value="4b"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="4b"
                                                                disabled={
                                                                    selectedType ===
                                                                    'normal'
                                                                }
                                                            />
                                                        </Grid>
                                                        <Grid xs={4} md={3}>
                                                            <FormControlLabel
                                                                value="4c"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="4c"
                                                                disabled={
                                                                    selectedType ===
                                                                    'normal'
                                                                }
                                                            />
                                                        </Grid>
                                                        <Grid xs={4} md={3}>
                                                            <FormControlLabel
                                                                value="5"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="5"
                                                                disabled={
                                                                    selectedType ===
                                                                    'normal'
                                                                }
                                                            />
                                                        </Grid>
                                                        <Grid xs={4} md={3}>
                                                            <FormControlLabel
                                                                value="6"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="6"
                                                                disabled={
                                                                    selectedType ===
                                                                    'normal'
                                                                }
                                                            />
                                                        </Grid>
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                        </>
                                    </Grid>
                                </Grid>
                            </>
                        </Grid>
                        <Grid
                            xs
                            sx={{
                                borderRight: '2px #EDEDED solid',
                                borderBottom: '2px #EDEDED solid',
                                borderTop: '2px #EDEDED solid',
                            }}
                        >
                            <>
                                <Grid container p={2} spacing={2}>
                                    <Grid
                                        xs={12}
                                        sx={{
                                            fontWeight: 600,
                                        }}
                                    >
                                        Overview
                                    </Grid>
                                    <Grid xs={12}>
                                        <TextField
                                            multiline
                                            fullWidth
                                            sx={{ height: '500px' }}
                                            defaultValue={
                                                'Left axillary lymphadenopathy; size of 0.1 cm x 0.2 cm; Abnormal, Birads: 4b.'
                                            }
                                        />
                                    </Grid>
                                    <Grid xs={6}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            onClick={() => setOpen(false)}
                                        >
                                            Confirm
                                        </Button>
                                    </Grid>
                                    <Grid xs={6}>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            onClick={() => setOpen(false)}
                                        >
                                            Cancel
                                        </Button>
                                    </Grid>
                                </Grid>
                            </>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default AxillaryDialog
