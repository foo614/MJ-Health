import {
    Grid,
    FormControl,
    Select,
    MenuItem,
    Box,
    TextField,
    Stack,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import styles from '../_interview-questionaire.module.scss'
import React from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'

type Props = {
    readonly?: boolean
}

const ExerciseHabit = ({ readonly }: Props) => {
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

    const exercise_habit = [
        {
            id: '48',
            title: 'What is the activity intensity of your daily work?',
            fieldType: 1,
        },
        {
            id: '49',
            title: 'What kind of sports do you usually do? (select all that)',
            fieldType: 3,
        },
        {
            id: '50',
            title: 'How often do you do the sports mentioned above?',
            fieldType: 1,
        },
        {
            id: '51',
            title: 'On average, the duration you spent on the sports mentioned above over the past two weeks?',
            fieldType: 1,
        },
        {
            id: '52',
            title: 'Do you sweat and feel shortness of breath while exercising?',
            fieldType: 1,
        },
    ]

    const selectOptionFieldType = () => {
        return (
            <Grid item md={3} sm={6} xs={12}>
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
                            inputProps={{
                                readOnly: readonly,
                            }}
                            value={
                                readonly
                                    ? select_option[0].id.toString()
                                    : undefined
                            }
                        >
                            {select_option.map((item: any, index: number) => {
                                return (
                                    <MenuItem
                                        value={item.id}
                                        key={index}
                                        className={styles.inputField}
                                    >
                                        {item.label}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </div>
            </Grid>
        )
    }

    const displayFieldType = (fieldType: number) => {
        switch (fieldType) {
            case 1:
                return selectOptionFieldType()
            default:
                return null
        }
    }

    return (
        <>
            <Box>
                <Grid container alignItems="center" spacing={1}>
                    {exercise_habit.map((item: any, index: number) => {
                        if (item.fieldType === 3) {
                            return (
                                <React.Fragment key={index}>
                                    <Grid item md={12} xs={12} sm={12}>
                                        <p className={styles.questionaire_item}>
                                            {item.id}. {item.title}
                                        </p>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <div style={{ paddingLeft: '28px' }}>
                                            <div>
                                                <FormControlLabel
                                                    disabled={readonly}
                                                    control={
                                                        <Checkbox
                                                            sx={{
                                                                '&.Mui-checked.Mui-disabled':
                                                                    {
                                                                        color: 'var(--mj-light-green) !important',
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Do not exercise"
                                                />
                                            </div>
                                            <div>
                                                <FormControlLabel
                                                    disabled={readonly}
                                                    control={
                                                        <Checkbox
                                                            sx={{
                                                                '&.Mui-checked.Mui-disabled':
                                                                    {
                                                                        color: 'var(--mj-light-green) !important',
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Anaerobic Exercise"
                                                />
                                            </div>
                                            <div>
                                                <FormControlLabel
                                                    disabled={readonly}
                                                    control={
                                                        <Checkbox
                                                            sx={{
                                                                '&.Mui-checked.Mui-disabled':
                                                                    {
                                                                        color: 'var(--mj-light-green) !important',
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Heavy-Aerobic (Cardiopulmonary) Exercise"
                                                />
                                            </div>
                                            <div>
                                                <FormControlLabel
                                                    disabled={readonly}
                                                    control={
                                                        <Checkbox
                                                            sx={{
                                                                '&.Mui-checked.Mui-disabled':
                                                                    {
                                                                        color: 'var(--mj-light-green) !important',
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Intensive-Aerobic (Cardiopulmonary) Exercise"
                                                />
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <div style={{ paddingLeft: '28px' }}>
                                            <div>
                                                <FormControlLabel
                                                    disabled={readonly}
                                                    checked={readonly}
                                                    control={
                                                        <Checkbox
                                                            sx={{
                                                                '&.Mui-checked.Mui-disabled':
                                                                    {
                                                                        color: 'var(--mj-light-green) !important',
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Mild-Aerobic (Cardiopulmonary) Exercise"
                                                />
                                            </div>
                                            <div>
                                                <FormControlLabel
                                                    disabled={readonly}
                                                    control={
                                                        <Checkbox
                                                            sx={{
                                                                '&.Mui-checked.Mui-disabled':
                                                                    {
                                                                        color: 'var(--mj-light-green) !important',
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Moderate-Aerobic (Cardiopulmonary) Exercise"
                                                />
                                            </div>
                                            <div>
                                                <FormControlLabel
                                                    disabled={readonly}
                                                    checked={readonly}
                                                    control={
                                                        <Checkbox
                                                            sx={{
                                                                '&.Mui-checked.Mui-disabled':
                                                                    {
                                                                        color: 'var(--mj-light-green) !important',
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Stretching Exercise"
                                                />
                                            </div>
                                        </div>
                                    </Grid>
                                </React.Fragment>
                            )
                        } else {
                            return (
                                <React.Fragment key={index}>
                                    <Grid item md={6} xs={12} sm={6}>
                                        <p className={styles.questionaire_item}>
                                            {item.id}. {item.title}
                                        </p>
                                    </Grid>
                                    {displayFieldType(item.fieldType)}
                                </React.Fragment>
                            )
                        }
                    })}
                </Grid>
            </Box>
        </>
    )
}

export default ExerciseHabit
