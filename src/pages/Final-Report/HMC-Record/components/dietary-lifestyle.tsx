import { Grid, Stack, TextField, Checkbox } from '@mui/material'
import styles from '../_hmc-record.module.scss'
import * as React from 'react'
const DietaryLifeStyle = () => {
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
    ]
    return (
        <>
            <div style={{ paddingLeft: '30px' }}>
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
                                                        styles.dietary_lifestyle_item
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
                <div style={{ marginTop: '20px' }}>
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
            </div>
        </>
    )
}

export default DietaryLifeStyle
