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
const LifeStyleHabit = () => {
    const [isSmoke, setIsSmoke] = useState<any>()
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

    const handleChange = (event: SelectChangeEvent) => {
        setIsSmoke(event.target.value)
    }
    return (
        console.log(isSmoke),
        (
            <>
                <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <p className={styles.questionnaire_modal_title}>
                        Smoking Habits
                    </p>
                </div>

                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionnaire_modal_subtitle}>
                            13. Do you smoke/vape:
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
                                    onChange={handleChange}
                                    value={isSmoke}
                                >
                                    {select_option.map(
                                        (item: any, index: number) => {
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
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionnaire_modal_subtitle}>
                            14. How many year have you been smoking?
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
                                        isSmoke === 1
                                            ? ''
                                            : '#EDEDED !important',
                                }}
                                fullWidth
                            />
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionnaire_modal_subtitle}>
                            15. For those who have quit smoking, how long have
                            you quit?
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
                                        isSmoke === 1
                                            ? ''
                                            : '#EDEDED !important',
                                }}
                                fullWidth
                            />
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionnaire_modal_subtitle}>
                            16. Average how many cigarettes do you smoke per
                            day:
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
                                        isSmoke === 1
                                            ? ''
                                            : '#EDEDED !important',
                                }}
                                fullWidth
                            />
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionnaire_modal_subtitle}>
                            17. How long after wake up in the morning do you
                            smoke your first cigarette?
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
                                        isSmoke === 1
                                            ? ''
                                            : '#EDEDED !important',
                                }}
                                fullWidth
                            />
                        </div>
                    </Grid>
                </Grid>
                <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <p className={styles.questionnaire_modal_title}>
                        Smoking Habits
                    </p>
                </div>

                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionnaire_modal_subtitle}>
                            18. Do you consume alcohol?
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
                                    onChange={handleChange}
                                    value={isSmoke}
                                >
                                    {select_option.map(
                                        (item: any, index: number) => {
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
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionnaire_modal_subtitle}>
                            19. What is the amount you consume each time?
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
                                    onChange={handleChange}
                                    value={isSmoke}
                                >
                                    {select_option.map(
                                        (item: any, index: number) => {
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
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionnaire_modal_subtitle}>
                            20. How many years have you been drinking?
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
                                    onChange={handleChange}
                                    value={isSmoke}
                                >
                                    {select_option.map(
                                        (item: any, index: number) => {
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
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionnaire_modal_subtitle}>
                            21. What type of alcohol do you consume?
                        </p>
                    </Grid>
                    <Grid item md={6} xs={12} sm={6}>
                        <Stack direction={{xs:"column", sm:"column", md:"row", lg:"row", xl:"row"}} spacing={2}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="<15%>"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="15-30%"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="30-45%"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label=">45%"
                            />
                        </Stack>
                    </Grid>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionnaire_modal_subtitle}>
                            22. Do you think consuming alcohol is bad or feel
                            guilty about it?
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
                                    onChange={handleChange}
                                    value={isSmoke}
                                >
                                    {select_option.map(
                                        (item: any, index: number) => {
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
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionnaire_modal_subtitle}>
                            23. Do you feel comfortable only after consuming one
                            glass of wine before breakfast?
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
                                    onChange={handleChange}
                                    value={isSmoke}
                                >
                                    {select_option.map(
                                        (item: any, index: number) => {
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
                </Grid>
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <p className={styles.questionnaire_modal_title}>
                        The Habit Of Chewing Betel Nut
                    </p>
                </div>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionnaire_modal_subtitle}>
                            24. Does your oral cavity have any of the following
                            situation?
                        </p>
                    </Grid>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.life_style_item_24}>
                            a. Bleeding when brushing your teeth
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
                                    onChange={handleChange}
                                    value={isSmoke}
                                >
                                    {select_option.map(
                                        (item: any, index: number) => {
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
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.life_style_item_24}>
                            b. Loose teeth
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
                                    onChange={handleChange}
                                    value={isSmoke}
                                >
                                    {select_option.map(
                                        (item: any, index: number) => {
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
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.life_style_item_24}>
                            c. Hyperemia of the gums
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
                                    onChange={handleChange}
                                    value={isSmoke}
                                >
                                    {select_option.map(
                                        (item: any, index: number) => {
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
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.life_style_item_24}>
                            d. Dark red instead of common pink gums
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
                                    onChange={handleChange}
                                    value={isSmoke}
                                >
                                    {select_option.map(
                                        (item: any, index: number) => {
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
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.life_style_item_24}>
                            e. Bad breath occasionally
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
                                    onChange={handleChange}
                                    value={isSmoke}
                                >
                                    {select_option.map(
                                        (item: any, index: number) => {
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
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.life_style_item_24}>
                            f. I use an interdental brush or dental floss after
                            brushing my teeth.
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
                                    onChange={handleChange}
                                    value={isSmoke}
                                >
                                    {select_option.map(
                                        (item: any, index: number) => {
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
                </Grid>
            </>
        )
    )
}

export default LifeStyleHabit
