import { Card, Grid } from '@mui/material'
import { Box } from '@mui/system'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import { RECEPTION_PAGE } from 'constant'
import TextField from '@mui/material/TextField'
import styles from './_member-profile.module.scss'
import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const MemberProfile = () => {
    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader to={RECEPTION_PAGE} title="MEMBER PROFILE" />
            <Box
                sx={{
                    paddingLeft: '5rem',
                    paddingRight: '5rem',
                    marginTop: '2rem',
                }}
            >
                <Card sx={{ paddingTop: '3rem' }}>
                    <Grid container spacing={2}>
                        <Grid
                            item
                            md={6}
                            sx={{
                                paddingLeft: '3rem !important',
                                paddingRight: '2rem !important',
                                borderRight: '1px solid',
                            }}
                        >
                            <Box>
                                <p>Member&apos;s Information</p>
                                <p>Member Fullname</p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    className={styles.textField}
                                />
                            </Box>
                            <Box>
                                <FormControl>
                                    <FormLabel>
                                        <p>Gender</p>
                                    </FormLabel>
                                    <RadioGroup row name="gender">
                                        <FormControlLabel
                                            defaultChecked
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
                            </Box>
                            <Box>
                                <Grid container>
                                    <Grid item md={6}>
                                        <FormControl>
                                            <FormLabel>
                                                <p>
                                                    Display Member&apos;s Name
                                                </p>
                                            </FormLabel>
                                            <RadioGroup row name="displayName">
                                                <FormControlLabel
                                                    value="hide"
                                                    control={<Radio />}
                                                    label="Hide"
                                                />
                                                <FormControlLabel
                                                    value="show"
                                                    control={<Radio />}
                                                    label="Show"
                                                />
                                                <FormControlLabel
                                                    value="replace"
                                                    control={<Radio />}
                                                    label="Replace"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6}>
                                        <p>Replaced Name</p>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            className={styles.textField}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <p>Identity No.</p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    className={styles.textField}
                                />
                            </Box>
                            <Box>
                                <Grid container spacing={1}>
                                    <Grid item md={6}>
                                        <p>Date of Birth</p>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            className={styles.textField}
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <p>Age</p>
                                        <TextField
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                            }}
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            className={styles.textField}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <p>Member ID</p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    className={styles.textField}
                                />
                            </Box>
                            <Box>
                                <p>Contact Information</p>
                                <p>Contact No.</p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    className={styles.textField}
                                />
                                <p>Secondary Contact No.</p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    className={styles.textField}
                                />
                                <p>Email Address</p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    className={styles.textField}
                                />
                                <p>Address</p>
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    className={styles.textField}
                                />
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    className={styles.textField}
                                />
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    className={styles.textField}
                                />
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    className={styles.textField}
                                />
                                <TextField
                                    InputProps={{
                                        classes: { input: styles.inputField },
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    className={styles.textField}
                                />
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textField}
                                >
                                    <Select
                                        className={styles.selectFieldCss}
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        // value={age}
                                        //onChange={handleValueChange}
                                    >
                                        <MenuItem
                                            value={1}
                                            className={styles.selectFieldCss}
                                        >
                                            Malaysia
                                        </MenuItem>
                                        {/* {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )} */}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item md={6} sx={{ padding: '2rem !important' }}>
                            <p>Package Information</p>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </>
    )
}
export default MemberProfile
