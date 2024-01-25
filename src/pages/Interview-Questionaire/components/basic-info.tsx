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
const BasicInfo = () => {
    const select_option = [
        {
            id: 1,
            label: 'Normal',
        },
        {
            id: 2,
            label: 'Type A',
        },
        {
            id: 3,
            label: 'Agree',
        },
        {
            id: 4,
            label: 'Disagree',
        },
        {
            id: 5,
            label: 'Chinese',
        },
        {
            id: 6,
            label: 'Married, Remarried, Co',
        },
        {
            id: 7,
            label: 'Junior/ Senior High',
        },
        {
            id: 8,
            label: 'Management personnel',
        },
    ]

    const medicines_item = [
        {
            id: '1',
            title: 'The standard meal for the day of health exam:',
        },
        {
            id: '2',
            title: 'Your blood type:',
        },
        {
            id: '3',
            title: 'Human Immunodeficiency Virus Screening:',
        },
        {
            id: '4',
            title: 'Pap Smear Screening Test:',
        },
    ]

    const basic_info_item = [
        {
            id: '1',
            title: 'Your father is:',
            fieldType: 1,
        },
        {
            id: '2',
            title: 'Your paternal grandfather is:',
            fieldType: 1,
        },
        {
            id: '3',
            title: 'Your paternal grandmother is:',
            fieldType: 1,
        },
        {
            id: '4',
            title: 'Your mother is:',
            fieldType: 1,
        },
        {
            id: '5',
            title: 'Your maternal grandfather is:',
            fieldType: 1,
        },
        {
            id: '6',
            title: 'Your maternal grandmother is:',
            fieldType: 1,
        },
        {
            id: '7',
            title: 'Marital status:',
            fieldType: 1,
        },
        {
            id: '8',
            title: 'Education:',
            fieldType: 1,
        },
        {
            id: '9',
            title: 'Present occupation:',
            fieldType: 1,
        },
        {
            id: '10',
            title: 'Your annual income is about:',
            fieldType: 2,
        },
        {
            id: '11',
            title: 'Your family annual income is about:',
            fieldType: 2,
        },
        {
            id: '12',
            title: 'Can any of the following be found at your:',
            fieldType: 3,
        },
    ]

    const selectOptionFieldType = () => {
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

    const textFieldType = () => {
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
                    />
                </div>
            </Grid>
        )
    }

    const checkBoxFieldType = () => {
        return (
            <Grid item md={7} xs={12} sm={6}>
                <Stack
                    direction={{
                        xs: 'column',
                        sm: 'column',
                        md: 'row',
                        lg: 'row',
                        xl: 'row',
                    }}
                    justifyContent="space-between"
                >
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Chemical Substances"
                    />
                    <FormControlLabel control={<Checkbox />} label="Dust" />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Physical Hazards"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="None Of The Above"
                    />
                </Stack>
            </Grid>
        )
    }
    const fieldDisplay = (fieldType: number) => {
        switch (fieldType) {
            case 1:
                return selectOptionFieldType()
            case 2:
                return textFieldType()
            case 3:
                return checkBoxFieldType()
            default:
                return null
        }
    }
    return (
        <>
            <Box>
                <p className={styles.questionaire_title}>
                    Medicines (Usually Take)
                </p>
                <Grid container alignItems="center" spacing={1}>
                    {medicines_item.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item md={5} xs={12} sm={6}>
                                    <p className={styles.questionaire_item}>
                                        {item.id}. {item.title}
                                    </p>
                                </Grid>
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
                                            >
                                                {select_option.map(
                                                    (
                                                        item: any,
                                                        index: number
                                                    ) => {
                                                        return (
                                                            <MenuItem
                                                                value={item.id}
                                                                key={index}
                                                                className={
                                                                    styles.inputField
                                                                }
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
                            </React.Fragment>
                        )
                    })}
                </Grid>
            </Box>
            <Box sx={{ marginTop: '1rem' }}>
                <p className={styles.questionaire_title}>Basic Information</p>
                <Grid container alignItems="center" spacing={1}>
                    {basic_info_item.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item md={5} xs={12} sm={6}>
                                    <p className={styles.questionaire_item}>
                                        {item.id}. {item.title}
                                    </p>
                                </Grid>
                                {fieldDisplay(item.fieldType)}
                            </React.Fragment>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )
}

export default BasicInfo
