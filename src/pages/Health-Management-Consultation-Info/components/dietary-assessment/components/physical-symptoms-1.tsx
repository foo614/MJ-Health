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
const PhysicalSymptoms1 = () => {
    const select_option = [
        {
            id: 1,
            label: 'Not Bad',
        },
        {
            id: 2,
            label: 'No',
        },
        {
            id: 3,
            label: 'Both Ear Are',
        },
        {
            id: 4,
            label: 'Yes',
        },
    ]
    return (
        <>
            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>
                    Basic Questions
                </p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        60. How do you feel about your current health?
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
                        61. Have you lost 3-4 kg or more over the past three
                        months?
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
                        62. Do you have allergiues (select all that apply)
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'row',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                        }}
                        spacing={3}
                        sx={{ paddingLeft: '15px' }}
                    >
                        <FormControlLabel control={<Checkbox />} label="No" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Drug Allergy"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Eye Allergy"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Food Allergy"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Nose Allergy"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Skin Allergy"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Other Allergy"
                        />
                    </Stack>
                </Grid>
            </Grid>

            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>Eyes</p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={12} xs={12} sx={{ marginTop: '10px' }}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        63. Do you eyes have any of the following symptoms?
                        (select all that apply)
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
                        <FormControlLabel control={<Checkbox />} label="Dry" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Excessive Tearing"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Flashes"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Floating Objects (Floaters)"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Itchiness"
                        />
                        <FormControlLabel control={<Checkbox />} label="Pain" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Reduced Vision"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Visual Distortion"
                        />
                    </Stack>
                </Grid>
            </Grid>

            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>Ears</p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        64. How is your hearing?
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
                        65. Does your ear canal have the following symptoms?
                        (select all that apply)
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Itchiness"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Retention of Fluid (Discharge)"
                        />
                    </Stack>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        66. Do you experience dizziness?
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
                        67. Do you experience ringing in your ears?
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
                <p className={styles.questionnaire_modal_title}>Nose</p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={12} xs={12} sx={{ marginTop: '10px' }}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        68. Do you have any abnormalities of your nose? (select
                        all that apply)
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Allergy"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Nose Bleed"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Other"
                        />
                    </Stack>
                </Grid>
            </Grid>

            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>Throat</p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        69. Do you experience swallowing problems?
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
                        70. Do you cough constantly?
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
                        71. Do you cough up sputum?
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
                        72. Is there blood in the sputum?
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
                        73. Do you have abnormal lumps in the neck?
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
                <p className={styles.questionnaire_modal_title}>Oral Cavity</p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={12} xs={12} sx={{ marginTop: '10px' }}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        74. Do you feel you have abnormalities of the oral
                        mucosa?
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Abnormal Colour Patches"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Neoplasm (Neoformation)"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Ulceration Or White Spots"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Ulcers That Are Difficult To Heal"
                        />
                    </Stack>
                </Grid>
            </Grid>

            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>Dermatology</p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={12} xs={12} sx={{ marginTop: '10px' }}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        75. Does your skin have any abnormalities?
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Enlarged Mole"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Lumps"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Unhealed Wounds"
                        />
                    </Stack>
                </Grid>
            </Grid>

            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p className={styles.questionnaire_modal_title}>
                    Cardiology/Chest
                </p>
            </div>

            <Grid container alignItems="center" spacing={1}>
                <Grid item md={12} xs={12} sx={{ marginTop: '10px' }}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        76. Do you feel chest tighness or chest pain?
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel control={<Checkbox />} label="No" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Yes When Exercising"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Yes When At Rest"
                        />
                    </Stack>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        77. Do you feel breathless
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
                        78. Have you experienced palpitation recently?
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
export default PhysicalSymptoms1
