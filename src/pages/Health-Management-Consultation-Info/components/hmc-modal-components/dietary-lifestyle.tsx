import { Grid, TextField, Stack, Badge, styled, Button } from '@mui/material'
import styles from '../../_health-management-consultation-info.module.scss'
import React from 'react'
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox'
import { BadgeProps } from '@mui/base/Badge'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle'

const DietaryLifestyle = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [printInLanguage, setPrintInLanguage] = useState<string>('CN')

    const data = [
        {
            item: 'Balance, Moderate & Variety Diet ',
        },
        {
            item: 'Exercises regularly: Weight training/ Aerobic exercise  (≥ 3 times/ week, ≥ 30 minutes/ session)',
        },
        {
            item: 'Regular meal time',
        },
        {
            item: 'Small and frequent meal',
        },
        {
            item: 'Choose wholegrain instead of refined grains',
        },
        {
            item: 'High fiber intake: Vegetable, fruits, wholegrain, legumes  (3 Serving vegetables, 2 serving fruits/ day)',
        },
        {
            item: 'Healthier cooking method: steaming, stir-frying, blanching, boiling',
        },
        {
            item: 'Less oil & fat: Fried food, meats, full cream dairy, internal organs, red meats',
        },
        {
            item: 'Avoid vegetable and meat gravy intake',
        },
        {
            item: 'Avoid processed and preserved food',
        },
        {
            item: 'Avoid transfat: margarine, shortening',
        },
        {
            item: 'Adequate intake of good oil, such as omega 3 fish oil, flaxseed oil, avocado, nuts, fish',
        },
        {
            item: 'Sufficient water intake: ',
            withTextField: true,
            formula: '(Formula: 35ml x kg/BW)',
        },
        {
            item: 'Reduce stress, avoid stay up late (sleep before 11pm), adequate sleep',
        },
        {
            item: 'Avoid alcohol (Male: ≤ 2 cans Female: ≤ 1 can)',
        },
        {
            item: 'Quit smoking',
        },
        {
            item: 'Low purine diet (For high uric acid)',
        },
        {
            item: 'Reduce caffeine intake: Coffee, tea, cocoa, soft drinks',
        },
        {
            item: 'Increase dietary calcium intake: Diary, legumes, dark green vegetable',
        },
        {
            item: 'Sun exposure (Vitamin D) 15 minutes/day',
        },
        {
            item: 'Increase dietary iron intake: Meat and internal organ (moderation), dark green vegetable, black sesame, algae',
        },
        {
            item: 'Increase dietary vitamin C intake: kiwi, guava, capsicum, tomato',
        },
        {
            item: 'Fatty liver > Liver inflammation/ cirrhosis > Liver cancer (Avoid high fat/high simple carbs/processed food; avoid alcohol; exercise regularly)',
        },
        {
            item: 'Reduce consumption of high GI foods',
        },
        {
            item: 'Self-monitoring blood pressure and blood sugar; glucose meter (fasting blood glucose, 2-hours post-prandial blood glucose), Hba1c',
        },
        {
            item: 'Reduce consumtion of high iodine foods such as seaweed, seafood, kelp and so on',
        },
        {
            item: 'Increase oestrogen rich foods such as soy and soy products, pumpkin, Huaishan, nuts and seeds and so on',
        },
    ]
    return (
        <>
            <div className={styles.dietary_lifestyle_section_div}>
                <Grid container rowSpacing={1}>
                    {data.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid
                                    item
                                    md={10}
                                    xs={9}
                                    sm={9}
                                    sx={{ margin: 'auto' }}
                                >
                                    {item.withTextField ? (
                                        <>
                                            <Stack
                                                direction={{
                                                    xs: 'column',
                                                    sm: 'column',
                                                    md: 'row',
                                                    lg: 'row',
                                                    xl: 'row',
                                                }}
                                                spacing={1}
                                                alignItems="center"
                                            >
                                                <p
                                                    className={
                                                        styles.diatery_lifestyle_item
                                                    }
                                                >
                                                    {item.item}
                                                </p>
                                                <TextField
                                                    InputProps={{
                                                        classes: {
                                                            input: styles.inputField,
                                                        },
                                                        startAdornment: (
                                                            <>
                                                                <p>-</p>
                                                            </>
                                                        ),
                                                        endAdornment: (
                                                            <>
                                                                <p>L/day</p>
                                                            </>
                                                        ),
                                                    }}
                                                    variant="outlined"
                                                    size="small"
                                                    margin="dense"
                                                    name="water_intake"
                                                    className={
                                                        styles.textFieldProps
                                                    }
                                                />
                                                <p
                                                    className={
                                                        styles.diatery_lifestyle_item
                                                    }
                                                >
                                                    {item.formula}
                                                </p>
                                            </Stack>
                                        </>
                                    ) : (
                                        <p
                                            className={
                                                styles.diatery_lifestyle_item
                                            }
                                        >
                                            {item.item}
                                        </p>
                                    )}
                                </Grid>
                                <Grid
                                    item
                                    md={2}
                                    xs={3}
                                    sm={3}
                                    sx={{ textAlign: 'end', margin: 'auto' }}
                                >
                                    <Checkbox name="diatery_lifestyle_checklist" />
                                </Grid>
                            </React.Fragment>
                        )
                    })}
                </Grid>
                <div>
                    <p className={styles.dietary_lifestyle_suggestion_text}>
                        Suggestion
                    </p>
                    <TextField
                        InputProps={{
                            classes: { input: styles.inputField },
                        }}
                        variant="outlined"
                        size="small"
                        margin="dense"
                        fullWidth
                        multiline
                        rows={8}
                        name="complaint"
                        className={styles.textFieldProps}
                        placeholder="Type in your message & recommendation."
                    />
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <Grid container>
                        <Grid item md={6} xs={12}></Grid>
                        <Grid item md={6} xs={12}>
                            <Stack
                                direction={{
                                    xs: 'column',
                                    sm: 'row',
                                    md: 'row',
                                    lg: 'row',
                                    xl: 'row',
                                }}
                                spacing={2}
                                alignItems="center"
                            >
                                <div
                                    style={{
                                        marginLeft: matches ? 'auto' : 'unset',
                                    }}
                                >
                                    <p className={styles.printInText}>
                                        Print In
                                    </p>
                                </div>

                                {printInLanguage === 'CN' ? (
                                    <>
                                        <Button
                                            variant="text"
                                            startIcon={
                                                <CircleIcon
                                                    className={
                                                        styles.printInSelectedIcon
                                                    }
                                                />
                                            }
                                            sx={{
                                                color: '#211d4e',
                                                fontWeight: '700',
                                            }}
                                        >
                                            {printInLanguage}
                                        </Button>
                                        <Button
                                            variant="text"
                                            startIcon={
                                                <CircleIcon
                                                    className={
                                                        styles.printInUnselectedIcon
                                                    }
                                                />
                                            }
                                            sx={{
                                                color: '#dddddd',
                                            }}
                                            onClick={() =>
                                                setPrintInLanguage('ENG')
                                            }
                                        >
                                            ENG
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            variant="text"
                                            startIcon={
                                                <CircleIcon
                                                    className={
                                                        styles.printInUnselectedIcon
                                                    }
                                                />
                                            }
                                            onClick={() =>
                                                setPrintInLanguage('CN')
                                            }
                                            sx={{
                                                color: '#dddddd',
                                            }}
                                        >
                                            CN
                                        </Button>
                                        <Button
                                            variant="text"
                                            startIcon={
                                                <CircleIcon
                                                    className={
                                                        styles.printInSelectedIcon
                                                    }
                                                />
                                            }
                                            sx={{
                                                color: '#211d4e',
                                                fontWeight: '700',
                                            }}
                                        >
                                            {printInLanguage}
                                        </Button>
                                    </>
                                )}
                                <Button
                                    variant="contained"
                                    className={styles.saveBttn}
                                    sx={{ width: '150px' }}
                                >
                                    Save
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}
export default DietaryLifestyle
