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

const PhysicalSymptoms2 = () => {
    const select_option = [
        {
            id: 1,
            label: '0-1 Times',
        },
        {
            id: 2,
            label: '- Days',
        },
    ]

    const map_item = [
        {
            id: '86',
            title: 'The amount of your menstrual blood flow is',
        },
        {
            id: '87',
            title: 'The number of days of your menstrual cycle is',
        },
        {
            id: '88',
            title: 'Is your menstrual cycle regular?',
        },
        {
            id: '89',
            title: 'When is your last menstrual period (LMP)?',
        },
        {
            id: '90',
            title: 'Have you ever experienced pain during menstruation?',
        },
        {
            id: '91',
            title: 'Number of pregnancies',
        },
        {
            id: '92',
            title: 'Number of births',
        },
        {
            id: '93',
            title: 'Have you ever breastfed?',
        },
        {
            id: '94',
            title: 'Do you use any contraceptive for birth control?',
        },
        {
            id: '95',
            title: 'Do you usually experience abnormal vaginal bleeding or after sexual intercourse?',
        },
        {
            id: '96',
            title: 'Do you have breast tenderness or lumps in your breasts?',
        },
        {
            id: '97',
            title: 'Do you experience nipple discharge or breast deformity?',
        },
    ]

    return (
        <>
            <Box>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            79. Have you experienced any gastrointestinal
                            abnormality over the past three months? (Select all
                            that apply)
                        </p>
                    </Grid>
                    <Grid item md={10} xs={12} sm={12}>
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
                                label="No"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Flatulence / Gastric Discomfort"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Gastric Pain When In Hunger"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Gastric Pain After Meals"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Loss Of Appetite"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Frequent Nausea"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            80. Have you experienced any abnormality of your
                            bowel movements over the past three months? (Select
                            all that apply)
                        </p>
                    </Grid>
                    <Grid item md={10} xs={12} sm={12}>
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
                                label="No"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Black Stool"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Change In Bowel Habits"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Constipation"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Diarrhoea"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Flatulence"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Stool With Blood"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Stool Colour Becomes Lighter"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            81. Have you experienced any abnormality of
                            urination over the past three months? (Select all
                            that apply)
                        </p>
                    </Grid>
                    <Grid item md={9} xs={12} sm={12}>
                        <Stack
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                            }}
                            spacing={1}
                            sx={{
                                paddingLeft: '15px',
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox />}
                                label="No"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Frequent Urination"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Leakage When Exerting Force"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Urinary Urgency"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionaire_item}>
                            82. Do you experience oedema in your lower limbs?
                        </p>
                    </Grid>
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
                        <p className={styles.questionaire_item}>
                            83. Do you have to get up to urinate during middle
                            of the night?
                        </p>
                    </Grid>
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
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            84. Is there any change in your external genitals?
                        </p>
                    </Grid>
                    <Grid item md={9} xs={12} sm={12}>
                        <Stack
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                            }}
                            spacing={1}
                            sx={{
                                paddingLeft: '15px',
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox />}
                                label="No"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Asymmetrical Swelling"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Itchiness"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Pain"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <p
                    className={styles.questionaire_title}
                    style={{ marginTop: '15px' }}
                >
                    Obstetrics And Gynecology
                </p>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionaire_item}>
                            85. Are you menopause ( no menstruation within the
                            past year?)
                        </p>
                    </Grid>
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
                    <Grid item md={12} xs={12} sm={12}>
                        <p
                            className={styles.questionaire_sub_item}
                            style={{ paddingLeft: '28px' }}
                        >
                            A. Yes, menopause at the age of
                        </p>
                    </Grid>
                    <Grid item md={12} xs={12} sm={12}>
                        <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="41"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="42"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="43"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="44"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="45"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="46"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="47"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="48"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="49"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="50"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="51"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="52"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="53"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="54"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="55"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="56"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="57"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="58"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="59"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="60"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Others"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Unfilled"
                            />
                        </Stack>
                    </Grid>
                    <Grid item md={6} xs={12} sm={6}>
                        <p
                            className={styles.questionaire_sub_item}
                            style={{ paddingLeft: '28px' }}
                        >
                            B. No, are you pregnant?
                        </p>
                    </Grid>
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
                        <p
                            className={styles.questionaire_sub_item}
                            style={{ paddingLeft: '3rem' }}
                        >
                            The date of the last menstrual
                        </p>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Stack direction="row" alignItems="center" spacing={1}>
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
                            <div>
                                <p>-</p>
                            </div>
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
                            <div>
                                <p>-</p>
                            </div>
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
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Grid container alignItems="center" spacing={1}>
                    {map_item.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item md={6} xs={12} sm={6}>
                                    <p className={styles.questionaire_item}>
                                        {item.id}. {item.title}
                                    </p>
                                </Grid>
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
                    <Grid item md={12} xs={12} sm={12}>
                        <Stack
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                            }}
                            spacing={1}
                            sx={{
                                paddingLeft: '15px',
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox />}
                                label="No"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Thick and Cheesy"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Bloody or Brown"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Yellow or Green"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Gray or Yellow with Fishy Odor"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Pink"
                            />
                        </Stack>
                    </Grid>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            98. Have you had euromuscular problems over the past
                            three months? (Select all that apply)
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
                            spacing={1}
                            sx={{
                                paddingLeft: '15px',
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox />}
                                label="No"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Numbness In Limbs"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Lower Back Pain"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Upper Back Pain"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Weakness  Of Limbs"
                            />
                        </Stack>
                    </Grid>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            99. Have you had euromuscular problems over the past
                            three months? (Select all that apply)
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
                            spacing={1}
                            sx={{
                                paddingLeft: '15px',
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox />}
                                label="No"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Numbness In Limbs"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Lower Back Pain"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Upper Back Pain"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Weakness  Of Limbs"
                            />
                        </Stack>
                    </Grid>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            100. Have you had joint pain problems over the past
                            three?
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
                            spacing={1}
                            sx={{
                                paddingLeft: '15px',
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox />}
                                label="No"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Elbows"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Femur"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Knees"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Weakness Shoulders"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Sole"
                            />
                        </Stack>
                    </Grid>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            101. How is your walking condition? (Select all that
                            apply)
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
                            spacing={1}
                            sx={{
                                paddingLeft: '15px',
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox />}
                                label="No Symptoms"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Unbalanced"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Frequent Fails"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default PhysicalSymptoms2
