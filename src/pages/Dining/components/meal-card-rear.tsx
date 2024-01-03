import styles from '../_dining.module.scss'
import { Grid } from '@mui/material'
const MealCardRear = () => {
    return (
        <>
            <div className={styles.mealCardTitleDivider}>
                <p className={styles.mealCardTitle}>Standard Meal Card</p>
            </div>
            <div className={styles.mealCardDivider}>
                <div className={styles.mealCardInfoDivider}>
                    <Grid container>
                        <Grid item md={12} xs={12}>
                            <p>
                                <span className={styles.mealCardText}>
                                    Name:
                                </span>{' '}
                                <span className={styles.mealCardValue}>
                                    Tan Rui Kang
                                </span>
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12} xs={12}>
                            <p>
                                <span className={styles.mealCardText}>
                                    Exam. Date(Seq No.):
                                </span>{' '}
                                <span className={styles.mealCardValue}>
                                    2021/05/15(12)
                                </span>
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={6}>
                            <p>
                                <span className={styles.mealCardText}>
                                    Age:
                                </span>{' '}
                                <span className={styles.mealCardValue}>21</span>
                            </p>
                        </Grid>
                        <Grid item md={6}>
                            <p>
                                <span className={styles.mealCardText}>
                                    Gender:
                                </span>{' '}
                                <span className={styles.mealCardValue}>
                                    Female
                                </span>
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={6}>
                            <p>
                                <span className={styles.mealCardText}>
                                    Height:
                                </span>{' '}
                                <span className={styles.mealCardValue}>
                                    1.76m
                                </span>
                            </p>
                        </Grid>
                        <Grid item md={6}>
                            <p>
                                <span className={styles.mealCardText}>
                                    Weight:
                                </span>{' '}
                                <span className={styles.mealCardValue}>
                                    64.7kg
                                </span>
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12}>
                            <p>
                                <span className={styles.mealCardText}>
                                    Ideal Body Weight:
                                </span>{' '}
                                <span className={styles.mealCardValue}>
                                    68.1kg
                                </span>
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12}>
                            <div
                                style={{
                                    display: 'flex',
                                    columnGap: '7px',
                                }}
                            >
                                <p
                                    className={styles.mealCardText}
                                    style={{ whiteSpace: 'nowrap' }}
                                >
                                    Suggestion:
                                </p>
                                <p className={styles.mealCardValue}>2400</p>
                                <p className={styles.mealCardSmallText}>
                                    kcal/daily
                                </p>
                                <p className={styles.mealCardValue}>800</p>
                                <p className={styles.mealCardSmallText}>
                                    kcal/meal
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.row}>
                    <div className={styles.dishesColumn}>
                        <p className={styles.middleSectionText}>Dishes</p>
                    </div>
                    <div className={styles.weightColumn}>
                        <p className={styles.middleSectionText}>Weight(g)</p>
                    </div>
                    <div className={styles.caloriesColumn}>
                        <p className={styles.caloriesSectionText}>
                            Calories(kcal)
                        </p>
                    </div>
                </div>
                <div className={styles.dishesRow}>
                    <div
                        className={styles.dishesColumn}
                        style={{ height: '100%' }}
                    >
                        <p className={styles.mealCardValue}>Black Wird Rice</p>
                    </div>
                    <div
                        className={styles.weightColumn}
                        style={{ height: '100%' }}
                    >
                        <p
                            className={styles.mealCardValue}
                            style={{ textAlign: 'center' }}
                        >
                            242
                        </p>
                    </div>
                    <div
                        className={styles.caloriesColumn}
                        style={{ height: '100%' }}
                    >
                        <p
                            className={styles.mealCardValue}
                            style={{ textAlign: 'center' }}
                        >
                            365
                        </p>
                    </div>
                </div>
                <div className={styles.dishesRow}>
                    <div
                        className={styles.dishesColumn}
                        style={{ height: '100%' }}
                    >
                        <p className={styles.mealCardValue}>Black Wird Rice</p>
                    </div>
                    <div
                        className={styles.weightColumn}
                        style={{ height: '100%' }}
                    >
                        <p
                            className={styles.mealCardValue}
                            style={{ textAlign: 'center' }}
                        >
                            242
                        </p>
                    </div>
                    <div
                        className={styles.caloriesColumn}
                        style={{ height: '100%' }}
                    >
                        <p
                            className={styles.mealCardValue}
                            style={{ textAlign: 'center' }}
                        >
                            365
                        </p>
                    </div>
                </div>
                <div className={styles.dishesRow}>
                    <div
                        className={styles.dishesColumn}
                        style={{ height: '100%' }}
                    >
                        <p className={styles.mealCardValue}>Black Wird Rice</p>
                    </div>
                    <div
                        className={styles.weightColumn}
                        style={{ height: '100%' }}
                    >
                        <p
                            className={styles.mealCardValue}
                            style={{ textAlign: 'center' }}
                        >
                            242
                        </p>
                    </div>
                    <div
                        className={styles.caloriesColumn}
                        style={{ height: '100%' }}
                    >
                        <p
                            className={styles.mealCardValue}
                            style={{ textAlign: 'center' }}
                        >
                            365
                        </p>
                    </div>
                </div>
                <div className={styles.dishesRow}>
                    <div
                        className={styles.dishesColumn}
                        style={{ height: '100%' }}
                    >
                        <p className={styles.mealCardValue}>Black Wird Rice</p>
                    </div>
                    <div
                        className={styles.weightColumn}
                        style={{ height: '100%' }}
                    >
                        <p
                            className={styles.mealCardValue}
                            style={{ textAlign: 'center' }}
                        >
                            242
                        </p>
                    </div>
                    <div
                        className={styles.caloriesColumn}
                        style={{ height: '100%' }}
                    >
                        <p
                            className={styles.mealCardValue}
                            style={{ textAlign: 'center' }}
                        >
                            365
                        </p>
                    </div>
                </div>
                <div className={styles.dishesRow}>
                    <div
                        className={styles.dishesColumn}
                        style={{ height: '100%' }}
                    >
                        <p className={styles.mealCardValue}>Black Wird Rice</p>
                    </div>
                    <div
                        className={styles.weightColumn}
                        style={{ height: '100%' }}
                    >
                        <p
                            className={styles.mealCardValue}
                            style={{ textAlign: 'center' }}
                        >
                            242
                        </p>
                    </div>
                    <div
                        className={styles.caloriesColumn}
                        style={{ height: '100%' }}
                    >
                        <p
                            className={styles.mealCardValue}
                            style={{ textAlign: 'center' }}
                        >
                            365
                        </p>
                    </div>
                </div>
                <div className={styles.dishesRow}>
                    <div
                        className={styles.dishesColumn}
                        style={{ height: '100%' }}
                    >
                        <p className={styles.mealCardValue}>Black Wird Rice</p>
                    </div>
                    <div
                        className={styles.weightColumn}
                        style={{ height: '100%' }}
                    >
                        <p
                            className={styles.mealCardValue}
                            style={{ textAlign: 'center' }}
                        >
                            242
                        </p>
                    </div>
                    <div
                        className={styles.caloriesColumn}
                        style={{ height: '100%' }}
                    >
                        <p
                            className={styles.mealCardValue}
                            style={{ textAlign: 'center' }}
                        >
                            365
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MealCardRear
