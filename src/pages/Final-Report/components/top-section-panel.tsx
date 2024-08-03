import { Grid, TextField, InputAdornment, Stack, Button } from '@mui/material'
import styles from '../_final-report.module.scss'
import SearchIcon from '@mui/icons-material/Search'
import CircleIcon from '@mui/icons-material/Circle'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import GroupsIcon from '@mui/icons-material/Groups'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import DateInput from 'components/Input/date-input'

const TopSectionPanel = () => {
    const [gender, setGender] = useState<string>('')
    const theme = useTheme()
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    const defaultMaleGenderBttn = () => {
        return (
            <>
                <Button
                    variant="text"
                    startIcon={
                        <CircleIcon
                            sx={{
                                color: '#999',
                                fontSize: '14px !important',
                            }}
                        />
                    }
                    className={styles.top_section_default_gender}
                    onClick={() => setGender('Male')}
                >
                    Male
                </Button>
            </>
        )
    }

    const defaultFemaleGenderBttn = () => {
        return (
            <>
                <Button
                    variant="text"
                    startIcon={
                        <CircleIcon
                            sx={{
                                color: '#999',
                                fontSize: '14px !important',
                            }}
                        />
                    }
                    className={styles.top_section_default_gender}
                    onClick={() => setGender('Female')}
                >
                    Female
                </Button>
            </>
        )
    }

    const selectedGenderBttn = () => {
        return (
            <>
                <Button
                    variant="text"
                    startIcon={
                        <CircleIcon
                            sx={{
                                color: '#219b8e',
                                fontSize: '14px !important',
                            }}
                        />
                    }
                    className={styles.top_section_title}
                >
                    {gender}
                </Button>
            </>
        )
    }

    const genderBttnDisplay = () => {
        return (
            <>
                {gender ? (
                    gender === 'Male' ? (
                        <>
                            {selectedGenderBttn()}
                            {defaultFemaleGenderBttn()}
                        </>
                    ) : (
                        <>
                            {defaultMaleGenderBttn()}
                            {selectedGenderBttn()}
                        </>
                    )
                ) : (
                    <>
                        {defaultMaleGenderBttn()}
                        {defaultFemaleGenderBttn()}
                    </>
                )}
            </>
        )
    }
    return (
        <>
            <Grid
                container
                sx={{ marginTop: '10px' }}
                spacing={4}
                alignItems="center"
            >
                <Grid item md={6} sm={12} xs={12}>
                    <p className={styles.top_section_title}>
                        Member Name, Member ID or IC no.{' '}
                    </p>
                    <TextField
                        margin="dense"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            classes: {
                                input: styles.inputField,
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon
                                        className={styles.searchIcon}
                                        fontSize={'large'}
                                    />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                        className={styles.textFieldProps}
                        placeholder="Search..."
                    />
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Grid container>
                        <Grid item md={6} sm={6} xs={12}>
                            <p className={styles.top_section_title}>From</p>
                            <DateInput iconPosition="start" />
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                            <p className={styles.top_section_title}>To</p>
                            <DateInput iconPosition="start" />
                        </Grid>
                    </Grid>
                </Grid>
                {mdUp ? (
                    <Grid item md={2} sm={12} xs={12}>
                        <div>
                            <Button
                                variant="contained"
                                fullWidth
                                className={styles.top_section_search_bttn}
                            >
                                Search
                            </Button>
                        </div>
                    </Grid>
                ) : null}

                <Grid item md={6} sm={12} xs={12}>
                    <Grid container spacing={3}>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            sm={12}
                            sx={{ paddingTop: '0px !important' }}
                        >
                            <p className={styles.top_section_title}>Seq no:</p>
                            <div>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                    InputProps={{
                                        classes: {
                                            input: styles.inputField,
                                        },
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <GroupsIcon
                                                    className={
                                                        styles.searchIcon
                                                    }
                                                    fontSize={'large'}
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                    fullWidth
                                    className={styles.textFieldProps}
                                    placeholder="001..."
                                />
                            </div>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            sm={12}
                            xs={12}
                            sx={{ paddingTop: '0px !important' }}
                        >
                            <p className={styles.top_section_title}>Package:</p>
                            <div>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                    InputProps={{
                                        classes: {
                                            input: styles.inputField,
                                        },
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FolderOpenIcon
                                                    className={
                                                        styles.searchIcon
                                                    }
                                                    fontSize={'large'}
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                    fullWidth
                                    className={styles.textFieldProps}
                                    placeholder="K1..."
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <p className={styles.top_section_title}>Gender:</p>
                        {genderBttnDisplay()}
                    </Stack>
                </Grid>

                {mdUp ? null : (
                    <Grid
                        item
                        sm={12}
                        xs={12}
                        sx={{ paddingTop: '0px !important' }}
                    >
                        <div>
                            <Button
                                variant="contained"
                                fullWidth
                                className={styles.top_section_search_bttn}
                            >
                                Search
                            </Button>
                        </div>
                    </Grid>
                )}
            </Grid>
        </>
    )
}
export default TopSectionPanel
