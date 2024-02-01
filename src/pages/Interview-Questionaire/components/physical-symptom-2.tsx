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

type Props = {
    readonly?: boolean
}

const PhysicalSymptoms2 = ({ readonly }: Props) => {
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
                                label="No"
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
                                label="Flatulence / Gastric Discomfort"
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
                                label="Gastric Pain When In Hunger"
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
                                label="Gastric Pain After Meals"
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
                                label="Loss Of Appetite"
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
                                label="No"
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
                                label="Black Stool"
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
                                label="Change In Bowel Habits"
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
                                label="Constipation"
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
                                label="Diarrhoea"
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
                                label="Flatulence"
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
                                label="Stool With Blood"
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
                                label="No"
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
                                label="Frequent Urination"
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
                                label="Leakage When Exerting Force"
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
                                    inputProps={{
                                        readOnly: readonly,
                                    }}
                                    value={
                                        readonly
                                            ? select_option[0].id.toString()
                                            : undefined
                                    }
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
                                    inputProps={{
                                        readOnly: readonly,
                                    }}
                                    value={
                                        readonly
                                            ? select_option[0].id.toString()
                                            : undefined
                                    }
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
                                label="No"
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
                                label="Asymmetrical Swelling"
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
                                label="Itchiness"
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
                                    inputProps={{
                                        readOnly: readonly,
                                    }}
                                    value={
                                        readonly
                                            ? select_option[0].id.toString()
                                            : undefined
                                    }
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
                                label="41"
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
                                label="42"
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
                                label="43"
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
                                label="44"
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
                                label="45"
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
                                label="46"
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
                                label="47"
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
                                label="48"
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
                                label="49"
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
                                label="50"
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
                                label="51"
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
                                label="52"
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
                                label="53"
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
                                label="54"
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
                                label="55"
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
                                label="56"
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
                                label="57"
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
                                label="58"
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
                                label="59"
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
                                label="60"
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
                                label="Others"
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
                                    inputProps={{
                                        readOnly: readonly,
                                    }}
                                    value={
                                        readonly
                                            ? select_option[0].id.toString()
                                            : undefined
                                    }
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
                                                inputProps={{
                                                    readOnly: readonly,
                                                }}
                                                value={
                                                    readonly
                                                        ? select_option[0].id.toString()
                                                        : undefined
                                                }
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
                                label="No"
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
                                label="Thick and Cheesy"
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
                                label="Bloody or Brown"
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
                                label="Yellow or Green"
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
                                label="Gray or Yellow with Fishy Odor"
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
                                label="No"
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
                                label="Numbness In Limbs"
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
                                label="Lower Back Pain"
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
                                label="Upper Back Pain"
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
                                label="No"
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
                                label="Numbness In Limbs"
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
                                label="Lower Back Pain"
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
                                label="Upper Back Pain"
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
                                label="No"
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
                                label="Elbows"
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
                                label="Femur"
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
                                label="Knees"
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
                                label="Weakness Shoulders"
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
                                label="No Symptoms"
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
                                label="Unbalanced"
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
