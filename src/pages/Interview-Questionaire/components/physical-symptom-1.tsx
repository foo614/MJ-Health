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

const PhysicalSymptoms1 = ({ readonly }: Props) => {
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
            <Box>
                <p className={styles.questionaire_title}>Basic Questions</p>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionaire_item}>
                            60. How do you feel about your current health?
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
                            61. Have you lost 3-4 kg ot more over the past three
                            months?
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
                            62. Do you have allergies? (select all that apply)
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
                            spacing={2}
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
                                label="Drug Allergy"
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
                                label="Eye Allergy"
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
                                label="Food Allergy"
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
                                label="Nose Allergy"
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
                                label="Skin Allergy"
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
                                label="Other Allergy"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <p
                    className={styles.questionaire_title}
                    style={{ marginTop: '15px', marginBottom: '20px' }}
                >
                    Eyes
                </p>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            63. Do your eyes have any of the following symptoms?
                            (select all that apply)
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
                                label="Dry"
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
                                label="Excessive Tearing"
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
                                label="Flashes"
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
                                label="Floating Objects (Floaters)"
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
                                label="Reduced Vision"
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
                                label="Visual Distortion"
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
                    Ears
                </p>

                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionaire_item}>
                            64. How is your hearing?
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
                            65. Does your ear canal have the following symptoms?
                            (select all that apply)
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
                            spacing={2}
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
                                label="Retention of Fluid (Discharge)"
                            />
                        </Stack>
                    </Grid>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionaire_item}>
                            66. Do you experience dizziness?
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
                            67. Do you experience ringing in your ears?
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
                </Grid>
            </Box>

            <Box>
                <p
                    className={styles.questionaire_title}
                    style={{ marginTop: '15px', marginBottom: '20px' }}
                >
                    Nose
                </p>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            68. Do you have any abnormalities of your
                            nose?(select all that apply)
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
                            spacing={2}
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
                                label="Allergy"
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
                                label="Nose Bleed"
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
                                label="Other"
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
                    Throat
                </p>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionaire_item}>
                            69. Do you experience swallowing problems?
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
                            70. Do you cough constantly?
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
                            71. Do you cough up sputum?
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
                            72. Is there blood in the sputum?
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
                            73. Do you have abnormal lumps in the neck?
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
                </Grid>
            </Box>

            <Box>
                <p
                    className={styles.questionaire_title}
                    style={{ marginTop: '15px', marginBottom: '20px' }}
                >
                    Oral Cavity
                </p>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            74. Do you feel you have abnormalities of the oral
                            mucosa?
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
                            spacing={2}
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
                                label="Abnormal Colour Patches"
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
                                label="Neoplasm (Neoformation)"
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
                                label="Ulceration Or White Spots"
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
                                label="Ulcers That Are Difficult To Heal"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <p
                    className={styles.questionaire_title}
                    style={{ marginTop: '15px', marginBottom: '20px' }}
                >
                    Dermatology
                </p>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            75. Does your skin have any abnormalities?
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
                            spacing={2}
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
                                label="Enlarged Mole"
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
                                label="Lumps"
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
                                label="Unhealed Wounds"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <p
                    className={styles.questionaire_title}
                    style={{ marginTop: '15px', marginBottom: '20px' }}
                >
                    Cardiology/Chest
                </p>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            76. Do you feel chest tighness or chest pain?
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
                            spacing={2}
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
                                label="Yes When Exercising"
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
                                label="Yes When At rest "
                            />
                        </Stack>
                    </Grid>
                    <Grid item md={6} xs={12} sm={6}>
                        <p className={styles.questionaire_item}>
                            77. Do you feel breathless
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
                            78. Have you experienced palpitation recently?
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
                </Grid>
            </Box>
        </>
    )
}

export default PhysicalSymptoms1
