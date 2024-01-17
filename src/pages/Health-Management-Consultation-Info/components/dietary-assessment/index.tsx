import {
    Grid,
    Stack,
    FormControl,
    Select,
    MenuItem,
    Button,
} from '@mui/material'
import styles from '../../_health-management-consultation-info.module.scss'
import { useState } from 'react'
import QuestionaireModal from './components/questionaire-modal'
const DietaryAssessment = () => {
    const [mealTimeValue, setMealTimeValue] = useState<string>('-')
    const [openQuestionaireModal, setOpenQuestionaireModal] =
        useState<boolean>(false)
    const meal_time_option = [
        {
            id: 1,
            label: 'Before 17:00',
        },
        {
            id: 2,
            label: '17:00 - 18:00',
        },
        {
            id: 3,
            label: '18:00 - 19:00',
        },
        {
            id: 4,
            label: '19:00 - 20:00',
        },
        {
            id: 5,
            label: '20:00 - 21:00',
        },
        {
            id: 6,
            label: '21:00 - 22:00',
        },
        {
            id: 7,
            label: '22:00 - 23:00',
        },
        {
            id: 8,
            label: '23:00 - 00:00',
        },
        {
            id: 9,
            label: 'After 00:00',
        },
    ]

    const type_of_food = [
        {
            id: 1,
            label: '< 5 types',
        },
        {
            id: 2,
            label: '< 10 types',
        },
        {
            id: 3,
            label: '< 15 types',
        },
        {
            id: 4,
            label: '< 20 types',
        },
    ]

    const intake_option = [
        {
            id: 1,
            label: 'Excessive',
        },
        {
            id: 2,
            label: 'Fair',
        },
        {
            id: 3,
            label: 'Good',
        },
    ]
    return (
        <div
            className={styles.main_section_div}
            style={{ paddingBottom: '20px' }}
        >
            <p className={styles.dietary_assessment_title}>
                According to your health questionnaire,
            </p>
            <Grid container spacing={2} alignItems="center">
                <Grid item md={6} sm={6} xs={12} lg={3} xl={3}>
                    <div>
                        <p className={styles.dietary_assessment_item}>
                            When do you usually take your last meal of?
                        </p>
                    </div>
                </Grid>
                <Grid item md={6} sm={6} xs={12} lg={2} xl={2}>
                    <div>
                        <FormControl
                            className={styles.textFieldProps}
                            // sx={{ width: '180px' }}
                            size="small"
                            margin="dense"
                            fullWidth
                        >
                            <Select
                                className={styles.inputField}
                                name="meal_time_option"
                                // value={mealTimeValue}
                                // value={currentSelectedOption}
                                // onChange={handleChange}
                            >
                                {meal_time_option.map(
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
                <Grid item md={6} sm={6} xs={12} lg={4} xl={4}>
                    <p className={styles.dietary_assessment_item}>
                        How many different types of food do you eat?
                    </p>
                </Grid>
                <Grid item md={6} sm={6} xs={12} lg={3} xl={3}>
                    <div>
                        <FormControl
                            className={styles.textFieldProps}
                            // sx={{ width: '180px' }}
                            size="small"
                            margin="dense"
                            fullWidth
                        >
                            <Select
                                className={styles.inputField}
                                name="meal_time_option"
                                // value={mealTimeValue}
                                // value={currentSelectedOption}
                                // onChange={handleChange}
                            >
                                {type_of_food.map(
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
            <div style={{ marginTop: '10px' }}>
                <p className={styles.dietary_assessment_title}>
                    B. Eating Habbit Assessment:
                </p>
                <div style={{ paddingLeft: '20px', marginTop: '15px' }}>
                    <p className={styles.dietary_assessment_sub_item}>
                        Fat Intake
                    </p>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item md={7} sm={6} xs={12} lg={9} xl={9}>
                            <p className={styles.dietary_assessment_item}>
                                Adequate fat intake is necessary, but be careful
                                about overcooking and processed fat in order to
                                reduce the possible risks of cancer. Reducing
                                bad fat (ex: trans-fat and processed, refined
                                foods such as cookies, cakes, etc) is more
                                important than controlling the total intake of
                                fat.
                            </p>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12} lg={3} xl={3}>
                            <div style={{ textAlign: 'center' }}>
                                <p
                                    className={
                                        styles.dietary_assessment_sub_item_select
                                    }
                                >
                                    Fat Intake
                                </p>
                            </div>
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
                                        {intake_option.map(
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
                <div style={{ paddingLeft: '20px', marginTop: '15px' }}>
                    <p className={styles.dietary_assessment_sub_item}>
                        Sodium Intake
                    </p>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item md={7} sm={6} xs={12} lg={9} xl={9}>
                            <p className={styles.dietary_assessment_item}>
                                It is better to preserve the original flavors of
                                different ingredients Sodium exists in all types
                                of food ingredients, thus salt and seasonings
                                should be used in appropriate amounts while
                                cooking. Eat natural ingredients and reduce the
                                intake of processed foods so that you can enjoy
                                the flavors without adding too much burden to
                                your body.
                            </p>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12} lg={3} xl={3}>
                            <div style={{ textAlign: 'center' }}>
                                <p
                                    className={
                                        styles.dietary_assessment_sub_item_select
                                    }
                                >
                                    Salt Intake:
                                </p>
                            </div>
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
                                        {intake_option.map(
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
                <div style={{ paddingLeft: '20px', marginTop: '15px' }}>
                    <p className={styles.dietary_assessment_sub_item}>
                        Intake of Refiend Sugar
                    </p>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item md={7} sm={6} xs={12} lg={9} xl={9}>
                            <p className={styles.dietary_assessment_item}>
                                Refined sugar (ex: added sugar,desserts) causes
                                inflammation, aging and diseases if consumed in
                                large quantities. Avoid refined sugar and limit
                                the intake of sugar to bring your health back.
                            </p>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12} lg={3} xl={3}>
                            <div style={{ textAlign: 'center' }}>
                                <p
                                    className={
                                        styles.dietary_assessment_sub_item_select
                                    }
                                >
                                    Sugar Intake:
                                </p>
                            </div>
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
                                        {intake_option.map(
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
                <div style={{ paddingLeft: '20px', marginTop: '15px' }}>
                    <p className={styles.dietary_assessment_sub_item}>
                        Intake of Fiber and Antioxidants in Vegetables and
                        Fruits
                    </p>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item md={7} sm={6} xs={12} lg={9} xl={9}>
                            <p className={styles.dietary_assessment_item}>
                                Natural fruits and vegetables are important
                                sources of antioxidants, fibre, various vitamins
                                and minerals. Intake of colourful vegetables and
                                fruits can reduce the risks of inflammation,
                                enhance intestinal health and delay aging.
                                Increasing your intake of various colours, high
                                fibre content and adequate amount of fruits and
                                vegetables are highly recommended.
                            </p>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12} lg={3} xl={3}>
                            <div style={{ textAlign: 'center' }}>
                                <p
                                    className={
                                        styles.dietary_assessment_sub_item_select
                                    }
                                >
                                    Fibre Intake:
                                </p>
                            </div>
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
                                        {intake_option.map(
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
                <div style={{ paddingLeft: '20px', marginTop: '15px' }}>
                    <p className={styles.dietary_assessment_sub_item}>
                        Water Intake
                    </p>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item md={7} sm={6} xs={12} lg={9} xl={9}>
                            <p className={styles.dietary_assessment_item}>
                                Water accounts for more than 70% of the body’s
                                composition, and it is extremely important for
                                the maintenance of physiological functions and
                                waster disposal. The majority of your water
                                intake should be regular boiled water. The your
                                water intake as “your weight x 30ml”.
                            </p>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12} lg={3} xl={3}>
                            <div style={{ textAlign: 'center' }}>
                                <p
                                    className={
                                        styles.dietary_assessment_sub_item_select
                                    }
                                >
                                    Water Intake:
                                </p>
                            </div>
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
                                        {intake_option.map(
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
            <Grid container sx={{ marginTop: '20px' }}>
                <Grid item md={6}></Grid>
                <Grid item md={6}>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="end"
                    >
                        <Button
                            variant="contained"
                            className={styles.questionnaireBttn}
                            sx={{ width: '220px', height: '64px' }}
                            onClick={() => setOpenQuestionaireModal(true)}
                        >
                            Questionnaire Enquiry
                        </Button>
                        <Button
                            variant="contained"
                            className={styles.saveBttn}
                            sx={{ width: '220px', height: '64px' }}
                        >
                            Save
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
            {openQuestionaireModal ? (
                <QuestionaireModal
                    open={openQuestionaireModal}
                    setOpen={setOpenQuestionaireModal}
                />
            ) : null}
        </div>
    )
}

export default DietaryAssessment
