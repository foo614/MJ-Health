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
const PhysicalSymptoms2 = () => {
    const select_option = [
        {
            id: 1,
            label: '0-1 Times',
        },
    ]
    return (
        <>
            <Grid container alignItems="center" spacing={1}>
                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        79. Have you experienced any gastrointestinal
                        abnormality over the past three months? (Select all that
                        apply)
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
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
                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        80. Have you experienced any abnormality of your bowel
                        movements over the past three months? (Select all that
                        apply)
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
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

                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        81. Have you experienced any abnormality of urination
                        over the past three months?(Select all that apply)
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
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
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        82. Do you experience oedema in your lower limbs?
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
                        83. Do you have to get up to urinate during middle of
                        the night?
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

                <Grid item md={12} xs={12} sx={{ marginTop: '10px' }}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        84. Is there any change in your external genitals?
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Asymmetrical Swelling"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Itchiness"
                        />
                        <FormControlLabel control={<Checkbox />} label="Pain" />
                    </Stack>
                </Grid>
            </Grid>

            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>
                    Obsterics And Gynecology
                </p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        85. Are you menopause (no menstruation within the past
                        year?)
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
                <Grid item md={12} xs={12} sm={12}>
                    <p className={styles.life_style_item_24}>
                        A. Yes, menopause at the age of
                    </p>
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="41" />
                        <FormControlLabel control={<Checkbox />} label="42" />
                        <FormControlLabel control={<Checkbox />} label="43" />
                        <FormControlLabel control={<Checkbox />} label="44" />
                        <FormControlLabel control={<Checkbox />} label="45" />
                        <FormControlLabel control={<Checkbox />} label="46" />
                        <FormControlLabel control={<Checkbox />} label="47" />
                        <FormControlLabel control={<Checkbox />} label="48" />
                        <FormControlLabel control={<Checkbox />} label="49" />
                        <FormControlLabel control={<Checkbox />} label="50" />
                        <FormControlLabel control={<Checkbox />} label="51" />
                        <FormControlLabel control={<Checkbox />} label="52" />
                        <FormControlLabel control={<Checkbox />} label="53" />
                        <FormControlLabel control={<Checkbox />} label="54" />
                        <FormControlLabel control={<Checkbox />} label="55" />
                        <FormControlLabel control={<Checkbox />} label="56" />
                        <FormControlLabel control={<Checkbox />} label="57" />
                        <FormControlLabel control={<Checkbox />} label="58" />
                        <FormControlLabel control={<Checkbox />} label="59" />
                        <FormControlLabel control={<Checkbox />} label="60" />
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
                    <p className={styles.life_style_item_24}>
                        B. No, are you pregnant?
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
                    <p
                        className={styles.life_style_item_24}
                        style={{ marginLeft: '20px' }}
                    >
                        The date of the last menstrual
                    </p>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <FormControl
                            className={styles.textFieldProps}
                            size="small"
                            margin="dense"
                            sx={{ width: '120px' }}
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
                        <p className={styles.questionnaire_modal_subtitle}>
                            Month
                        </p>
                        <FormControl
                            className={styles.textFieldProps}
                            size="small"
                            margin="dense"
                            sx={{ width: '120px' }}
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
                        <p className={styles.questionnaire_modal_subtitle}>
                            Day
                        </p>
                    </Stack>
                </Grid>

                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        86. The amount of your menstrual blood flow is
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
                        87. The number of days of your menstrual cycle is
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
                        88. Is your menstrual cycle regular?
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
                        89. When is your last menstrual period (LMP)?
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
                        90. Have you ever experienced pain during menstruation?
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
                        91. Number of pregnancies
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
                        92. Number of births
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
                        93. Have you ever breastfed?
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
                        94. Do you use any contraceptive for birth control?
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
                        95. Do you usually experience abnormal vaginal bleeding
                        or after sexual intercourse?
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
                        96. Do you have breast tenderness or lumps in your
                        breasts?
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
                        97. Do you experience nipple discharge or breast
                        deformity?
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

                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
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
                        <FormControlLabel control={<Checkbox />} label="Pink" />
                    </Stack>
                </Grid>

                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        98. Have you had euromuscular problems over the past
                        three months? (Select all that apply)
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Numbness in Limbs"
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
                            label="Weakness Of Limbs"
                        />
                    </Stack>
                </Grid>

                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        99. Have you had euromuscular problems over the past
                        three months? (Select all that apply)
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Numbness in Limbs"
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
                            label="Weakness Of Limbs"
                        />
                    </Stack>
                </Grid>

                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        100. Have you had joint pain problems over the past
                        three?
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
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
                            label="Shoulders"
                        />
                        <FormControlLabel control={<Checkbox />} label="Sole" />
                    </Stack>
                </Grid>

                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        101. How is your walking condition? (Select all that
                        apply)
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
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
        </>
    )
}
export default PhysicalSymptoms2
