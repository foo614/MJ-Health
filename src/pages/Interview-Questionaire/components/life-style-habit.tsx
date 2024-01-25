import {
    Box,
    Grid,
    FormControl,
    Select,
    MenuItem,
    TextField,
    Stack,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import styles from '../_interview-questionaire.module.scss'
import React, { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'

const LifeStyleHabit = () => {
    const [smokeValue, setSmokeValue] = useState<string>('')

    const select_option = [
        {
            id: 1,
            label: 'Yes',
        },
        {
            id: 2,
            label: 'No',
        },
        {
            id: 3,
            label: '1-2 Times Per Week',
        },
        {
            id: 4,
            label: 'Two To Three Glasses',
        },
        {
            id: 5,
            label: '3-5 Years',
        },
    ]

    const smoking_habit_1 = [
        {
            id: '13',
            title: 'Do you smoke/ vape?',
            fieldType: 1,
        },
        {
            id: '14',
            title: 'How many year have you been smoking?',
            fieldType: 2,
        },
        {
            id: '15',
            title: 'For those who have quit smoking, how long have you quit?',
            fieldType: 2,
        },
        {
            id: '16',
            title: 'Average how many cigarettes do you smoke per day:',
            fieldType: 2,
        },
        {
            id: '17',
            title: 'How long after wake up in the morning do you smoke your first cigarette?',
            fieldType: 2,
        },
    ]

    const smoking_habit_2 = [
        {
            id: '18',
            title: 'Do you consume alcohol?',
            fieldType: 1,
        },
        {
            id: '19',
            title: 'What is the amount you consume each time?',
            fieldType: 1,
        },
        {
            id: '20',
            title: 'How many years have you been drinking?',
            fieldType: 1,
        },
        {
            id: '21',
            title: 'What type of alcohol do you consume?',
            fieldType: 3,
        },
        {
            id: '22',
            title: 'Do you think consuming alcohol is bad or feel guilty about it?',
            fieldType: 1,
        },

        {
            id: '23',
            title: 'Do you feel comfortable only after consuming one glass of wine before breakfast?',
            fieldType: 1,
        },
    ]

    const habit_hygiene = [
        {
            id: 'a',
            title: 'Bleeding whe brushing your teeth',
            fieldType: 1,
        },
        {
            id: 'b',
            title: 'Loose teeth',
            fieldType: 1,
        },
        {
            id: 'c',
            title: 'Hyperemia of the gums',
            fieldType: 1,
        },
        {
            id: 'd',
            title: 'Dark red instead of common pink gums',
            fieldType: 1,
        },
        {
            id: 'e',
            title: 'Bad breath occasionally',
            fieldType: 1,
        },
        {
            id: 'f',
            title: 'I use an interdental brush or dental floss after brushing my teeth.',
            fieldType: 1,
        },
    ]
    const handleChange = (event: SelectChangeEvent) => {
        setSmokeValue(event.target.value)
    }

    const selectOptionFieldType = (isHabit1: boolean) => {
        return (
            <Grid item md={3} xs={12} sm={6}>
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
                            onChange={isHabit1 ? handleChange : undefined}
                            //value={isHabit1 ? smokeValue : ''}
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

    const textFieldType = (isHabit1: boolean) => {
        return (
            <Grid item md={3} xs={12} sm={6}>
                <div>
                    <TextField
                        margin="dense"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            classes: {
                                input: styles.inputField,
                            },
                        }}
                        fullWidth
                        className={styles.textFieldProps}
                        sx={{
                            backgroundColor: isHabit1
                                ? smokeValue == '1'
                                    ? ''
                                    : '#EDEDED !important'
                                : '',
                        }}
                        disabled={
                            isHabit1
                                ? smokeValue == '1'
                                    ? false
                                    : true
                                : false
                        }
                    />
                </div>
            </Grid>
        )
    }

    const checkBoxFieldType = () => {
        return (
            <Grid item md={5} xs={12} sm={6}>
                <Stack
                    direction={{
                        xs: 'column',
                        sm: 'column',
                        md: 'row',
                        lg: 'row',
                        xl: 'row',
                    }}
                    spacing={2}
                >
                    <FormControlLabel control={<Checkbox />} label="<15%" />
                    <FormControlLabel control={<Checkbox />} label="15-30%" />
                    <FormControlLabel control={<Checkbox />} label="30-45%" />
                    <FormControlLabel control={<Checkbox />} label=">45%" />
                </Stack>
            </Grid>
        )
    }

    const displayFieldType = (fieldType: number, isHabit1: boolean) => {
        switch (fieldType) {
            case 1:
                return selectOptionFieldType(isHabit1)
            case 2:
                return textFieldType(isHabit1)
            case 3:
                return checkBoxFieldType()
            default:
                return null
        }
    }
    return (
        <>
            <Box>
                <p className={styles.questionaire_title}>Smoking Habits</p>
                <Grid container alignItems="center" spacing={1}>
                    {smoking_habit_1.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item md={7} sm={6} xs={12}>
                                    <p className={styles.questionaire_item}>
                                        {item.id}. {item.title}
                                    </p>
                                </Grid>
                                {displayFieldType(item.fieldType, true)}
                            </React.Fragment>
                        )
                    })}
                </Grid>
            </Box>
            <Box sx={{ marginTop: '1rem' }}>
                <p className={styles.questionaire_title}>Smoking Habits</p>
                <Grid container alignItems="center" spacing={1}>
                    {smoking_habit_2.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item md={7} sm={6} xs={12}>
                                    <p className={styles.questionaire_item}>
                                        {item.id}. {item.title}
                                    </p>
                                </Grid>
                                {displayFieldType(item.fieldType, false)}
                            </React.Fragment>
                        )
                    })}
                </Grid>
            </Box>
            <Box sx={{ marginTop: '1rem' }}>
                <p className={styles.questionaire_title}>
                    Habits of Oral Hygiene
                </p>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} xs={12}>
                        <p
                            className={styles.questionaire_item}
                            style={{ marginTop: '10px' }}
                        >
                            24. Does your oral cavity have any of the following
                            situation?
                        </p>
                    </Grid>
                    {habit_hygiene.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item md={7} sm={6} xs={12} sx={{paddingLeft:"35px !important"}}>
                                    <p className={styles.questionaire_sub_item}>
                                        {item.id}. {item.title}
                                    </p>
                                </Grid>
                                {displayFieldType(item.fieldType, false)}
                            </React.Fragment>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )
}

export default LifeStyleHabit
