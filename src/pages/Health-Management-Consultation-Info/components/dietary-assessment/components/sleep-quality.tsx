import {
    Grid,
    FormControl,
    Select,
    MenuItem,
    TextField,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material'

import { SelectChangeEvent } from '@mui/material/Select'
import styles from '../../../_health-management-consultation-info.module.scss'
import { useState } from 'react'

const SleepQuality = () => {
    const theme = useTheme()
    const smUp = useMediaQuery(theme.breakpoints.up('sm'))
    const select_option = [
        {
            id: 1,
            label: 'Frequent Repeated Sitting',
        },
        {
            id: 2,
            label: 'Yes',
        },
        {
            id: 3,
            label: 'No',
        },
        {
            id: 4,
            label: 'Rarely',
        },
    ]
    return (
        <>
            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        53. What is your average sleeping hours at night?
                    </p>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <div>
                        <FormControl
                            className={styles.textFieldProps}
                            size="small"
                            margin="dense"
                            fullWidth
                        >
                            <Select
                                className={styles.inputField}
                                name="meal_time_option"
                            >
                                {select_option.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.id}
                                                key={index}
                                                className={styles.inputField}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ paddingTop: '15px' }}>
                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        54. Have you had any of the following situations in the
                        pass month when falling
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'row',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                        }}
                        spacing={3}
                        sx={{ paddingLeft: '15px' }}
                    >
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Able To Sleep But Easily Awakened"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Deep Sleep"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Difficult To Sleep"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Dream-Distressed Sleep"
                        />
                    </Stack>
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'row',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                        }}
                        spacing={3}
                        sx={{
                            paddingLeft: '15px',
                            marginTop: smUp ? '5px' : '20px',
                        }}
                    >
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Require Sleeping Pills Or Sedatives"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Woke Up Tired"
                        />
                    </Stack>
                </Grid>
            </Grid>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        55. Do you snore loudly
                    </p>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <div>
                        <FormControl
                            className={styles.textFieldProps}
                            size="small"
                            margin="dense"
                            fullWidth
                        >
                            <Select
                                className={styles.inputField}
                                name="meal_time_option"
                            >
                                {select_option.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.id}
                                                key={index}
                                                className={styles.inputField}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        56. Do you often feel tired, exhausted or even drowsy
                        during the day?
                    </p>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <div>
                        <FormControl
                            className={styles.textFieldProps}
                            size="small"
                            margin="dense"
                            fullWidth
                        >
                            <Select
                                className={styles.inputField}
                                name="meal_time_option"
                            >
                                {select_option.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.id}
                                                key={index}
                                                className={styles.inputField}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        57. Have other people noticed that you briefly stop
                        breathing during sleep?
                    </p>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <div>
                        <FormControl
                            className={styles.textFieldProps}
                            size="small"
                            margin="dense"
                            fullWidth
                        >
                            <Select
                                className={styles.inputField}
                                name="meal_time_option"
                            >
                                {select_option.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.id}
                                                key={index}
                                                className={styles.inputField}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        58. Have you been tired and unable to get anything done
                        in the past two weeks?
                    </p>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <div>
                        <FormControl
                            className={styles.textFieldProps}
                            size="small"
                            margin="dense"
                            fullWidth
                        >
                            <Select
                                className={styles.inputField}
                                name="meal_time_option"
                            >
                                {select_option.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.id}
                                                key={index}
                                                className={styles.inputField}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        59. Have you been feeling low, depressed or sad in the
                        past two weeks?
                    </p>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <div>
                        <FormControl
                            className={styles.textFieldProps}
                            size="small"
                            margin="dense"
                            fullWidth
                        >
                            <Select
                                className={styles.inputField}
                                name="meal_time_option"
                            >
                                {select_option.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.id}
                                                key={index}
                                                className={styles.inputField}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default SleepQuality
