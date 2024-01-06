import { FormControl } from '@mui/base/FormControl'
import {
    Button,
    Divider,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import { DASHBOARD_PAGE } from 'constant'
import { useState } from 'react'
import styles from './_setting.module.scss'

function Setting() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [value, setValue] = useState('male')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value)
    }

    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader to={DASHBOARD_PAGE} title="ACCOUNT SETTING" />
            <Grid container>
                <Grid xs={12} mdOffset={3} md={3} sx={{ mx: 2, my: 3 }}>
                    <Typography variant="h6" className={styles.title}>
                        Staff Information
                    </Typography>
                    <br />
                    <Typography className={styles.fieldLabel}>
                        Staff ID
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className={styles.textField}
                        value={'MYJB-0001'}
                        fullWidth
                    />
                    <Typography className={styles.fieldLabel} sx={{ mt: 2 }}>
                        Name
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className={styles.textField}
                        value={'Lee Shen Long'}
                        fullWidth
                    />
                    <Typography className={styles.fieldLabel} sx={{ mt: 2 }}>
                        IC Card No.
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className={styles.textField}
                        value={'000000000000'}
                        fullWidth
                    />
                    <Typography className={styles.fieldLabel} sx={{ mt: 2 }}>
                        Birthday
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className={styles.textField} />
                    </LocalizationProvider>

                    <Typography className={styles.fieldLabel} sx={{ mt: 2 }}>
                        Gender
                    </Typography>
                    <FormControl>
                        <RadioGroup
                            row
                            value={value}
                            onChange={handleChange}
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                            />
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                            />
                        </RadioGroup>
                    </FormControl>
                    <div>
                        <Grid container>
                            <Grid xs={12} md={6}>
                                <Typography
                                    className={styles.fieldLabel}
                                    sx={{ mt: 2 }}
                                >
                                    Living Address:
                                </Typography>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <p className={styles.addressText}>
                                    116, Jalan Persona 12, Taman Pelangi Indah,
                                    81100, Johor Bahru, Malaysia.
                                </p>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                {matches && (
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ mx: 10, my: 2 }}
                    />
                )}
                <Grid xs md={3} mdOffset={0} sx={{ mx: 2, my: 3 }}>
                    <Typography variant="h6" className={styles.title}>
                        Contact Information
                    </Typography>
                    <br />
                    <Typography className={styles.fieldLabel}>
                        Contact No.
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className={styles.textField}
                        value={'+60-000000000'}
                        fullWidth
                    />

                    <Typography className={styles.fieldLabel} sx={{ mt: 2 }}>
                        Email
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className={styles.textField}
                        value={'email@gmail.com'}
                        fullWidth
                    />
                    <br />
                    <Button
                        variant="contained"
                        className={styles.submitButton}
                        aria-label="Increment value"
                        sx={{ mt: 2 }}
                    >
                        Save
                    </Button>

                    <Typography
                        variant="h6"
                        className={styles.title}
                        sx={{ mt: 3, mb: 1 }}
                    >
                        Security & Password
                    </Typography>

                    <Typography className={styles.fieldLabel}>
                        Old Password:
                    </Typography>
                    <TextField
                        id="outlined-password-input"
                        label=""
                        type="password"
                        autoComplete="current-password"
                        className={styles.textField}
                        value={11111111111111}
                        fullWidth
                    />

                    <Typography className={styles.fieldLabel} sx={{ mt: 2 }}>
                        New Password:
                    </Typography>
                    <TextField
                        id="outlined-password-input"
                        label=""
                        type="password"
                        autoComplete="current-password"
                        className={styles.textField}
                        value={11111111111111}
                        fullWidth
                    />

                    <Typography className={styles.fieldLabel} sx={{ mt: 2 }}>
                        Confirm Password:
                    </Typography>
                    <TextField
                        id="outlined-password-input"
                        label=""
                        type="password"
                        autoComplete="current-password"
                        className={styles.textField}
                        value={11111111111111}
                        fullWidth
                    />
                    <br />
                    <Button
                        variant="contained"
                        className={styles.submitButton}
                        aria-label="Increment value"
                        sx={{ mt: 2 }}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Setting
