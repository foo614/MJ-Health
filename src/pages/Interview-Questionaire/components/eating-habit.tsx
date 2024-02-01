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

const EatingHabit = ({ readonly }: Props) => {
    const [vegetarianValue, setVegetarianValue] = useState<string>('')

    const select_option = [
        { id: 1, label: 'After 21:00' },
        { id: 2, label: '4-5 Times Per Week' },
        { id: 3, label: 'Usually' },
        { id: 4, label: 'Poultry-Chicken,Du' },
        { id: 5, label: 'Occasionally' },
        { id: 6, label: 'More Than 2 Bowls' },
        { id: 7, label: 'Never' },
        { id: 8, label: '2000cc And More' },
        { id: 9, label: '4-6 Cups Per Week' },
        { id: 10, label: '2-3 Times Per Week' },
        { id: 11, label: 'Once Per Day' },
        { id: 12, label: 'No' },
        { id: 13, label: 'Yes' },
    ]

    const fat_consumption = [
        {
            id: '26',
            title: 'How often do you eat fried,deep fried, grilled or smoked food?',
            fieldType: 1,
        },
        {
            id: '27',
            title: 'Do you eat the fat or skin of meats?',
            fieldType: 1,
        },
        {
            id: '28',
            title: 'Based on your eating habits, whatis the most common course that you will choose?',
            fieldType: 1,
        },
        {
            id: '29',
            title: 'Do you often eat baked or cheese-like food?',
            fieldType: 1,
        },
    ]

    const amount_of_fibre = [
        {
            id: '30',
            title: 'How many servings of vegetables do you eat per say?',
            fieldType: 1,
        },
        {
            id: '31',
            title: 'How often do you eat at least two portions of fruits',
            fieldType: 1,
        },
        {
            id: '32',
            title: 'How oftendo you choose germ rice, brown rice, whole grain rice or whole wheat pasta?',
            fieldType: 1,
        },
        {
            id: '33',
            title: 'How often do you eat multi-colour vegetables and fruits',
            fieldType: 1,
        },
        {
            id: '34',
            title: 'How often do you eat garlic, onions, leeks, green cauliflowers and other similar foods?',
            fieldType: 1,
        },
    ]

    const salt_intake = [
        {
            id: '35',
            title: 'Do you usually add sauce or chili sauce to your meals?',
            fieldType: 1,
        },
        {
            id: '36',
            title: 'Do you usually eat fermented and picked food?',
            fieldType: 1,
        },
        {
            id: '37',
            title: 'Do you usually add soya sauce and spices to enhance the flavour of the food you cook?',
            fieldType: 1,
        },
    ]

    const water_intake = [
        {
            id: '38',
            title: 'How much water do you consume per day?',
            fieldType: 1,
        },
        {
            id: '39',
            title: 'How often do you replace water with coffee, tea or drinks?',
            fieldType: 1,
        },
        {
            id: '40',
            title: 'How much caffeinated drinks do you consume per day?',
            fieldType: 1,
        },
    ]

    const fine_sugar_intake = [
        {
            id: '41',
            title: 'How often do you drink botteld juice or sugarly drinks?',
            fieldType: 1,
        },
        {
            id: '42',
            title: 'How often do you eat sweet foods?',
            fieldType: 1,
        },
        {
            id: '43',
            title: 'How much milk/diary products do you consume?',
            fieldType: 1,
        },
    ]

    const handleChange = (event: SelectChangeEvent) => {
        setVegetarianValue(event.target.value)
    }

    const selectOptionFieldType = (isVegetarian: boolean) => {
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
                            onChange={isVegetarian ? handleChange : undefined}
                            //value={isHabit1 ? smokeValue : ''}
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

    const textFieldType = (isVegetarian: boolean) => {
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
                            readOnly: readonly,
                        }}
                        fullWidth
                        className={styles.textFieldProps}
                        sx={{
                            backgroundColor: isVegetarian
                                ? vegetarianValue == '13'
                                    ? ''
                                    : '#EDEDED !important'
                                : '',
                        }}
                        disabled={
                            isVegetarian
                                ? vegetarianValue == '13'
                                    ? false
                                    : true
                                : false
                        }
                        value={readonly ? '10' : undefined}
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
                    <FormControlLabel
                        disabled={readonly}
                        control={
                            <Checkbox
                                sx={{
                                    '&.Mui-checked.Mui-disabled': {
                                        color: 'var(--mj-light-green) !important',
                                    },
                                }}
                            />
                        }
                        label="<15%"
                    />
                    <FormControlLabel
                        disabled={readonly}
                        control={
                            <Checkbox
                                sx={{
                                    '&.Mui-checked.Mui-disabled': {
                                        color: 'var(--mj-light-green) !important',
                                    },
                                }}
                            />
                        }
                        label="15-30%"
                    />
                    <FormControlLabel
                        disabled={readonly}
                        control={
                            <Checkbox
                                sx={{
                                    '&.Mui-checked.Mui-disabled': {
                                        color: 'var(--mj-light-green) !important',
                                    },
                                }}
                            />
                        }
                        label="30-45%"
                    />
                    <FormControlLabel
                        disabled={readonly}
                        control={
                            <Checkbox
                                sx={{
                                    '&.Mui-checked.Mui-disabled': {
                                        color: 'var(--mj-light-green) !important',
                                    },
                                }}
                            />
                        }
                        label=">45%"
                    />
                </Stack>
            </Grid>
        )
    }

    const displayFieldType = (fieldType: number, isVegetarian: boolean) => {
        switch (fieldType) {
            case 1:
                return selectOptionFieldType(isVegetarian)
            case 2:
                return textFieldType(isVegetarian)
            case 3:
                return checkBoxFieldType()
            default:
                return null
        }
    }

    return (
        <>
            <Box>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionaire_item}>
                            25. What time is your last meal of the day?
                        </p>
                    </Grid>
                    {displayFieldType(1, false)}
                </Grid>
            </Box>
            <Box sx={{ marginTop: '1rem' }}>
                <p className={styles.questionaire_title}>Fat Consumption</p>
                <Grid container alignItems="center" spacing={1}>
                    {fat_consumption.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item md={6} sm={6} xs={12}>
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
                    The Amount Of Fibre In Vegetables And Fruits, Intake Amount
                    Of Antioxidants
                </p>
                <Grid container alignItems="center" spacing={1}>
                    {amount_of_fibre.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item md={6} sm={6} xs={12}>
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
                <p className={styles.questionaire_title}>Salt Intake</p>
                <Grid container alignItems="center" spacing={1}>
                    {salt_intake.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item md={6} sm={6} xs={12}>
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
                <p className={styles.questionaire_title}>Water Intake</p>
                <Grid container alignItems="center" spacing={1}>
                    {water_intake.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item md={6} sm={6} xs={12}>
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
                    Fine Sugar And Milk Intake
                </p>
                <Grid container alignItems="center" spacing={1}>
                    {fine_sugar_intake.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item md={6} sm={6} xs={12}>
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
                <p className={styles.questionaire_title}>Eating Habits</p>

                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} sm={12} xs={12}>
                        <p
                            className={styles.questionaire_item}
                            style={{ marginTop: '10px' }}
                        >
                            44. How many meals do you eat every day?
                        </p>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <Stack
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                            }}
                            spacing={3}
                            sx={{ paddingLeft: '20px' }}
                        >
                            <FormControlLabel
                                disabled={readonly}
                                checked={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Breakfast"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Morning Snack"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Lunch"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Afternoon Snack"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Dinner"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Late Night Snack"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ marginTop: '1rem' }}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} sm={12} xs={12}>
                        <p
                            className={styles.questionaire_item}
                            style={{ marginTop: '10px' }}
                        >
                            45. How many meals do you eat every day?
                        </p>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <Stack
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                            }}
                            spacing={2}
                            sx={{ paddingLeft: '20px' }}
                        >
                            <FormControlLabel
                                disabled={readonly}
                                checked={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="None"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Breakfast"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Morning Snack"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Lunch"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Afternoon Snack"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Dinner"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Late Night Snack"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ marginTop: '1rem' }}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} sm={12} xs={12}>
                        <p
                            className={styles.questionaire_item}
                            style={{ marginTop: '10px' }}
                        >
                            46. How many meals do you eat every day?
                        </p>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <Stack
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                            }}
                            sx={{ display: 'block', paddingLeft: '25px' }}
                        >
                            <FormControlLabel
                                disabled={readonly}
                                checked={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="None"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Algae"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Calcium"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Chitosan"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Iron"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                checked={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Lactobacillus/Probriotics"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Lecithin"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                checked={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Multi-Vitamin"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Phytochemicals o (turmeric extract, grapeseed extract etc)"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Pollen"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Propolis"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Vegetable Fibre"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Vitamin B"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Vitamin C"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Vitamin D"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Vitamin E"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Zinc"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Fish Oil/Cod Liver oil/Flax Seed oil/Sacha Inchi Oil/Krill Oil"
                            />
                            <FormControlLabel
                                disabled={readonly}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked.Mui-disabled': {
                                                color: 'var(--mj-light-green) !important',
                                            },
                                        }}
                                    />
                                }
                                label="Other Traditional Chinese Hers"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ marginTop: '1rem' }}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionaire_item}>
                            47. Are you a full-day vegetarian?
                        </p>
                    </Grid>
                    {displayFieldType(1, true)}
                    <Grid
                        item
                        md={6}
                        sm={6}
                        xs={12}
                        sx={{ paddingLeft: '35px !important' }}
                    >
                        <p className={styles.questionaire_sub_item}>
                            a. How long have you been a vegetarian?
                        </p>
                    </Grid>
                    {displayFieldType(2, true)}
                </Grid>
            </Box>
        </>
    )
}

export default EatingHabit
