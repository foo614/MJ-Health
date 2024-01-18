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
const EatingHabit = () => {
    const [isVegetarian, setIsVegetarian] = useState<any>()
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
    ]
    return (
        <>
            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        25. What time is your last meal of the day?
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

            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>
                    Fat Consumption
                </p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        26. How often do you ear fried, deep fried, grilled or
                        smoked food?
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
                        27. Do you eat the fat or skin of meats?
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
                        28. Based on your eating habits, what is the most common
                        course that you will choose?
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
                        29. Do you often eat baked or cheese-like food?
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

            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>
                    The Amount Of Fibre in Vegetables And Fruits, Intake Amount
                    of Antioxidants
                </p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        30. How many servings of vegetables do you eat per say?
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
                        31. How often do you eat at least two portions of fruits
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
                        32. How often do you choose germ rice, brown rice, whole
                        grain rice or whole wheat pasta?
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
                        33. How often do you eat multi-colour vegetables and
                        fruits
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
                        34. How often do you eat garlic, onions, leeks, green
                        cauliflowers and other similar foods?
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

            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>Salt Intake</p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        35. Do you usually add sauce or chili sauce to your
                        meals?
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
                        36. Do you usually eat fermented and picked food?
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
                        37. Do you usually add soya sauce and spices to enhance
                        the flavour of the food you cook?
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

            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>Water Intake</p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        38. How much water do you consume per day?
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
                        39. How often do you replace water with coffee, tea or
                        drinks?
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
                        40. How much caffeinated drinks do you consume per day?
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

            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>
                    Fine Sugar And Milk Intake
                </p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        41. How often do you drink bottled juice or sugarly
                        drinks?
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
                        42. How often do you eat sweet foods?
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
                        43. How much milk/diary products do you consume?
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

            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>
                    Eating Habits
                </p>
            </div>

            <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        44. How many meals do you eat every day?
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                        }}
                        spacing={3}
                        sx={{ paddingLeft: '15px' }}
                    >
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Breakfast"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Morning Snack"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Lunch"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Afternoon Snack"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Dinner"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Late Night Snack"
                        />
                    </Stack>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        45. Which meals do you usually dine out?
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                        }}
                        spacing={3}
                        sx={{ paddingLeft: '15px' }}
                    >
                        <FormControlLabel control={<Checkbox />} label="None" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Breakfast"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Morning Snack"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Lunch"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Afternoon Snack"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Dinner"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Late Night Snack"
                        />
                    </Stack>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        46. What types of nutrints or health foods do you
                        usually eat?
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
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
                        <FormControlLabel control={<Checkbox />} label="None" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Algae"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Calcium"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Chitosan"
                        />
                        <FormControlLabel control={<Checkbox />} label="Iron" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Lactobacillus/Probriotics"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Lecithin"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Multi-Vitamin"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Phytochemicals o (turmeric extract, grapeseed extract etc)"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Pollen"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Propolis"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Vegetable Fibre"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Vitamin B"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Vitamin C"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Vitamin D"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Vitamin E"
                        />
                        <FormControlLabel control={<Checkbox />} label="Zinc" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Fish Oil/Cod Liver oil/Flax Seed oil/Sacha Inchi Oil/Krill Oil"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Other Traditional Chinese Hers"
                        />
                    </Stack>
                </Grid>
            </Grid>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        47. Are you a full-day vegetarian?
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
                                value={isVegetarian}
                                onChange={(e) =>
                                    setIsVegetarian(e.target.value)
                                }
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
                    <p className={styles.life_style_item_24}>
                        a. How long have you been a vegetarian?
                    </p>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <div>
                        <TextField
                            InputProps={{
                                classes: {
                                    input: styles.inputField,
                                },
                            }}
                            variant="outlined"
                            size="small"
                            margin="dense"
                            name="water_intake"
                            className={styles.textFieldProps}
                            sx={{
                                backgroundColor:
                                    isVegetarian === 12
                                        ? '#EDEDED !important'
                                        : '',
                            }}
                            fullWidth
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default EatingHabit
