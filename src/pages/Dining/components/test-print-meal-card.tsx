import styles from '../_dining.module.scss'
import * as React from 'react'
import AppIcon from '../../../images/app-icon.png'
import { Grid } from '@mui/material'

export class TestPrintMealCard extends React.PureComponent {
    render() {
        return (
            <div>
                <div
                    style={{
                        maxWidth: '105MM',
                        height: '150MM',
                        border: '1px solid',
                        paddingTop: '1rem',
                    }}
                >
                    <div className={styles.mealCardFrontLogoDivider}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={AppIcon}
                                alt="app-icon"
                                style={{ width: '30px' }}
                            />
                            <p className={styles.mealCardFrontLogoText}>
                                MJ HEALTH <br />
                                美兆国际健康管理
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                alignItems: 'center',
                            }}
                        >
                            <p className={styles.mealCardFrontTitle}>
                                MJ HEALTH SCREENING CENTER
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            paddingLeft: '20px',
                            paddingRight: '20px',
                        }}
                    >
                        <div style={{ marginTop: '4rem' }}>
                            <p className={styles.mealCardFrontText}>
                                MJ HEALTH SCREENING CENTER/KUALA LUMPUR
                            </p>
                            <p
                                className={styles.mealCardFrontText}
                                style={{ marginTop: '1rem' }}
                            >
                                KMPG Tower 2F-2 No.8, First Avenue, Persiaran
                                Bandar Utama, 47800 Petaling Jaya, Selangor.
                            </p>
                            <p className={styles.mealCardFrontText}>
                                Appointment Tel: (60)3-7723-3388
                            </p>
                        </div>
                        <div
                            style={{
                                marginTop: '10rem',
                            }}
                        >
                            <p className={styles.mealCardFrontBottomText}>
                                Copyright &copy; 2017 MJ HEALTH CENTER SDN.BHD{' '}
                            </p>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '100%' }}>
                                    <p
                                        className={
                                            styles.mealCardFrontBottomText
                                        }
                                    >
                                        All Rights Reserved
                                    </p>
                                </div>

                                <div
                                    style={{
                                        width: '100%',
                                        textAlign: 'center',
                                    }}
                                >
                                    <p
                                        className={
                                            styles.mealCardFrontBottomText
                                        }
                                    >
                                        MJ2018.04-1803MY
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        maxWidth: '105MM',
                        height: '150MM',
                        border: '1px solid',
                        paddingTop: '1rem',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        marginTop: '1rem',
                    }}
                >
                    <p className={styles.mealCardTitle}>Standard Meal Card</p>
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
                                        <span className={styles.mealCardValue}>
                                            21
                                        </span>
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
                                        <p className={styles.mealCardValue}>
                                            2400
                                        </p>
                                        <p className={styles.mealCardSmallText}>
                                            kcal/daily
                                        </p>
                                        <p className={styles.mealCardValue}>
                                            800
                                        </p>
                                        <p className={styles.mealCardSmallText}>
                                            kcal/meal
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.dishesColumn}>
                                <p className={styles.middleSectionText}>
                                    Dishes
                                </p>
                            </div>
                            <div className={styles.weightColumn}>
                                <p className={styles.middleSectionText}>
                                    Weight(g)
                                </p>
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
                                <p className={styles.mealCardValue}>
                                    Black Wird Rice
                                </p>
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
                                <p className={styles.mealCardValue}>
                                    Black Wird Rice
                                </p>
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
                                <p className={styles.mealCardValue}>
                                    Black Wird Rice
                                </p>
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
                                <p className={styles.mealCardValue}>
                                    Black Wird Rice
                                </p>
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
                                <p className={styles.mealCardValue}>
                                    Black Wird Rice
                                </p>
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
                                <p className={styles.mealCardValue}>
                                    Black Wird Rice
                                </p>
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
                </div>
            </div>
        )
    }
}
