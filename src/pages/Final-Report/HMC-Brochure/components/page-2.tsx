import { Grid, MenuItem, Select, FormControl } from '@mui/material'
import styles from '../_hmp-brochure.module.scss'
import * as React from 'react'
const Page2 = () => {
    const select_option = [
        {
            id: 1,
            label: '20:00 - 21:00',
        },
        {
            id: 2,
            label: '< 5 types',
        },
        {
            id: 3,
            label: 'Excessive',
        },
        {
            id: 4,
            label: 'Fair',
        },
        {
            id: 5,
            label: 'Good',
        },
    ]

    const eating_habit_assessment = [
        {
            id: 1,
            title: 'Fat Intake',
            sub_title:
                'Adequate fat intake is necessary, but be careful about overcooking and processed fat in order to reduce the possible risks of cancer. Reducing bad fat (ex: trans-fat and processed, refined foods such as cookies, cakes, etc) is more important than controlling the total intake of fat.',
            option_title: 'Fat Intake:',
        },
        {
            id: 2,
            title: 'Sodium Intake',
            sub_title:
                'It is better to preserve the original flavors of different ingredients Sodium exists in all types of food ingredients, thus salt and seasonings should be used in appropriate amounts while cooking. Eat natural ingredients and reduce the intake of processed foods so that you can enjoy the flavors without adding too much burden to your body.',
            option_title: 'Salt Intake:',
        },
        {
            id: 3,
            title: 'Intake of Refiend Sugar',
            sub_title:
                'Refined sugar (ex: added sugar,desserts) causes inflammation, aging and diseases if consumed in large quantities. Avoid refined sugar and limit the intake of sugar to bring your health back.',
            option_title: 'Sugar Intake:',
        },
        {
            id: 4,
            title: 'Intake of Fiber and Antioxidants in Vegetables and Fruits',
            sub_title:
                'Natural fruits and vegetables are important sources of antioxidants, fibre, various vitamins and minerals. Intake of colourful vegetables and fruits can reduce the risks of inflammation, enhance intestinal health and delay aging. Increasing your intake of various colours, high fibre content and adequate amount of fruits and vegetables are highly recommended.',
            option_title: 'Fibre Intake:',
        },
        {
            id: 5,
            title: 'Water Intake',
            sub_title:
                'Water accounts for more than 70% of the body’s composition, and it is extremely important for the maintenance of physiological functions and waster disposal. The majority of your water intake should be regular boiled water. The your water intake as “your weight x 30ml”.',
            option_title: 'Water Intake:',
        },
    ]
    return (
        <>
            <div className={styles.outer_div_background}>
                <div style={{ padding: '20px 35px' }}>
                    <p className={styles.hmp_title}>
                        According to your health questionnaire,
                    </p>
                    <Grid
                        container
                        sx={{ marginTop: '10px' }}
                        spacing={3}
                        alignItems="center"
                    >
                        <Grid item md={3} sm={6} xs={12}>
                            <p className={styles.hmp_subtitle}>
                                When do you usually take your last meal of?
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
                        <Grid item md={3} sm={6} xs={12}>
                            <p className={styles.hmp_subtitle}>
                                How many different types of food do you eat?
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
                    </Grid>
                </div>
            </div>
            <div
                className={styles.outer_div_padding}
                style={{ marginTop: '20px' }}
            >
                <p className={styles.hmp_title}>B. Eating Habbit Assessment:</p>
                <div style={{ paddingLeft: '20px', marginTop: '20px' }}>
                    <Grid container spacing={3}>
                        {eating_habit_assessment.map(
                            (item: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Grid item md={9} sm={6} xs={12}>
                                            <p
                                                className={
                                                    styles.deep_green_title
                                                }
                                            >
                                                {item.title}
                                            </p>
                                            <p
                                                className={styles.hmp_subtitle}
                                                style={{ marginTop: '10px' }}
                                            >
                                                {item.sub_title}
                                            </p>
                                        </Grid>
                                        <Grid item md={3} sm={6} xs={12}>
                                            <p
                                                className={styles.hmp_title}
                                                style={{ textAlign: 'center' }}
                                            >
                                                {item.option_title}
                                            </p>
                                            <div>
                                                <FormControl
                                                    className={
                                                        styles.textFieldProps
                                                    }
                                                    size="small"
                                                    margin="dense"
                                                    fullWidth
                                                >
                                                    <Select
                                                        className={
                                                            styles.inputField
                                                        }
                                                        name="meal_time_option"
                                                    >
                                                        {select_option.map(
                                                            (
                                                                item: any,
                                                                index: number
                                                            ) => {
                                                                return (
                                                                    <MenuItem
                                                                        value={
                                                                            item.id
                                                                        }
                                                                        key={
                                                                            index
                                                                        }
                                                                        className={
                                                                            styles.inputField
                                                                        }
                                                                    >
                                                                        {
                                                                            item.label
                                                                        }
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
                            }
                        )}
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Page2
