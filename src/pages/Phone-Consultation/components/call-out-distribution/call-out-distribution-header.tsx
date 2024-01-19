import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import styles from './_call-out-distribution.module.scss'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dispatch, SetStateAction } from 'react'

type Props = {
    allowCreate: boolean
    setOpenCreateModal?: Dispatch<SetStateAction<boolean>>
}

const CallOutDistributionHeader = (props: Props) => {
    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Grid container>
                            <Grid item xs={6}>
                                <DatePicker
                                    closeOnSelect
                                    format="DD-MM-YYYY"
                                    slotProps={{
                                        inputAdornment: {
                                            position: 'start',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DatePicker
                                    closeOnSelect
                                    format="DD-MM-YYYY"
                                    slotProps={{
                                        inputAdornment: {
                                            position: 'start',
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                    <FormControl>
                        <Stack
                            direction="row"
                            alignItems={'center'}
                            spacing={2}
                        >
                            <FormLabel id="radio-center">Center: </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="center"
                                name="center"
                                defaultValue={'selangor'}
                            >
                                <FormControlLabel
                                    value="selangor"
                                    control={<Radio />}
                                    label="Selangor Centre"
                                />
                                <FormControlLabel
                                    value="southern"
                                    control={<Radio />}
                                    label="Southern Centre"
                                />
                            </RadioGroup>
                        </Stack>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                className={styles.searchButton}
                            >
                                Search
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                className={styles.createButton}
                                disabled={!props.allowCreate}
                                onClick={() =>
                                    props.allowCreate &&
                                    props.setOpenCreateModal &&
                                    props.setOpenCreateModal(true)
                                }
                            >
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CallOutDistributionHeader
