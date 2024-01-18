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
} from '@mui/material'

import { SelectChangeEvent } from '@mui/material/Select'
import styles from '../../../_health-management-consultation-info.module.scss'
import { useState } from 'react'
const ExerciseHabit = () => {
    const select_option = [
        {
            id: 1,
            label: 'Frequent Repeated Sitting',
        },
        {
            id: 2,
            label: '2-3 Times A Week',
        },
        {
            id: 3,
            label: '2 Hours And More',
        },
        {
            id: 4,
            label: 'Slightly Increasured Breath',
        },
    ]
    return (
        <>
            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        48. What is the activity intensity of your daily work?
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
                        49. What kind of sports do you usually do? (select all
                        that)
                    </p>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div style={{ paddingLeft: '28px' }}>
                        <div>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Do not exercise"
                            />
                        </div>
                        <div>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Anaerobic Exercise"
                            />
                        </div>
                        <div>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Heavy-Aerobic (Cardiopulmonary) Exercise"
                            />
                        </div>
                        <div>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Intensive-Aerobic (Cardiopulmonary) Exercise"
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div style={{ paddingLeft: '28px' }}>
                        <div>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Mild-Aerobic (Cardiopulmonary) Exercise"
                            />
                        </div>
                        <div>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Moderate-Aerobic (Cardiopulmonary) Exercise"
                            />
                        </div>
                        <div>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Stretching Exercise"
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        50. How often do you do the sports mentioned above?
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
                        51. On average, the duration you spent on the sports
                        mentioned above over the past two weeks?
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
                        52. Do you sweat and feel shortness of breath while
                        exercising?
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

export default ExerciseHabit
