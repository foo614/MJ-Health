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

const SleepQualityStress = () => {
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

    const sleep_quality = [
        {
            id: '53',
            title: 'What is your average sleeping hours at night?',
            fieldType: 1,
        },
        {
            id: '54',
            title: 'Have you had any of the following situations in the past month when falling',
            fieldType: 3,
        },
        {
            id: '55',
            title: 'Do you snore loudly',
            fieldType: 1,
        },
        {
            id: '56',
            title: 'Do you often feel tired, exhausted or even drowsy during the day?',
            fieldType: 1,
        },
        {
            id: '57',
            title: 'Have other people noticed that you briefly stop breathing during sleep?',
            fieldType: 1,
        },
        {
            id: '58',
            title: 'Have you been tired and unable to get anything done in the past two weeks?',
            fieldType: 1,
        },
        {
            id: '59',
            title: 'Have you been feeling low, depressed or sad in the past two weeks?',
            fieldType: 1,
        },
    ]

    return (
        <>
            <Box>
                <Grid container alignItems="center" spacing={1}>
                    {sleep_quality.map((item: any, index: number) => {
                        if (item.fieldType === 3) {
                            return (
                                <React.Fragment key={index}>
                                    <Grid item md={12} xs={12} sm={12}>
                                        <p className={styles.questionaire_item}>
                                            {item.id}. {item.title}
                                        </p>
                                    </Grid>
                                    <Grid item md={12} xs={12} sm={12}>
                                        <Stack
                                            direction={{
                                                xs: 'column',
                                                sm: 'column',
                                                md: 'row',
                                                lg: 'row',
                                                xl: 'row',
                                            }}
                                            sx={{
                                                display: 'block',
                                                paddingLeft: '25px',
                                            }}
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

export default SleepQualityStress
