import { Grid, TextField } from '@mui/material'
import styles from '../../_health-management-consultation-info.module.scss'
const HighRiskGroup = () => {
    return (
        <>
            <div
                className={styles.main_section_div}
                style={{ paddingBottom: '20px' }}
            >
                <Grid container columnSpacing={3} rowSpacing={4}>
                    <Grid item md={6} xs={12}>
                        <p
                            className={styles.main_section_text}
                            style={{ marginBottom: '10px' }}
                        >
                            (T/++) Diabetes Mellitis
                        </p>
                        <div className={styles.high_risk_group_div}>
                            <p className={styles.high_risk_group_div_text}>
                                {'(T/3) BMI [37.8] >= 27(T/2)'}
                            </p>
                            <p className={styles.high_risk_group_div_text}>
                                {'Waist Circumference [101] >= 80(T/0)'}
                            </p>
                            <p className={styles.high_risk_group_div_text}>
                                {'Female Abnormal of Fat% [42] >= 35%'}
                            </p>
                            <p className={styles.high_risk_group_div_text}>
                                {'Insulin [50] >= 24.9'}
                            </p>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <p
                            className={styles.main_section_text}
                            style={{ marginBottom: '10px' }}
                        >
                            (T/+) Cardiovascular Disease
                        </p>
                        <div className={styles.high_risk_group_div}>
                            <p className={styles.high_risk_group_div_text}>
                                {'(T/3) BMI [37.8] >= 27(T/2)'}
                            </p>
                            <p className={styles.high_risk_group_div_text}>
                                {'Waist Circumference [101] >= 80(T/0)'}
                            </p>
                            <p className={styles.high_risk_group_div_text}>
                                {'Female Abnormal of Fat% [42] >= 35%'}
                            </p>
                            <p className={styles.high_risk_group_div_text}>
                                {'Insulin [50] >= 24.9'}
                            </p>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <p
                            className={styles.main_section_text}
                            style={{ marginBottom: '10px' }}
                        >
                            (T/++) Metabolism Syndrome
                        </p>
                        <div className={styles.high_risk_group_div}>
                            <p className={styles.high_risk_group_div_text}>
                                {'(T/3) BMI [37.8] >= 27(T/2)'}
                            </p>
                            <p className={styles.high_risk_group_div_text}>
                                {'Waist Circumference [101] >= 80(T/0)'}
                            </p>
                            <p className={styles.high_risk_group_div_text}>
                                {'Female Abnormal of Fat% [42] >= 35%'}
                            </p>
                            <p className={styles.high_risk_group_div_text}>
                                {'Insulin [50] >= 24.9'}
                            </p>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <p
                            className={styles.main_section_text}
                            style={{ marginBottom: '10px' }}
                        >
                            Nose
                        </p>
                        <div className={styles.high_risk_group_div}>
                            <p className={styles.high_risk_group_div_text}>
                                {'(T/3) BMI [37.8] >= 27(T/2)'}
                            </p>
                            <p className={styles.high_risk_group_div_text}>
                                {'Waist Circumference [101] >= 80(T/0)'}
                            </p>
                            <p className={styles.high_risk_group_div_text}>
                                {'Female Abnormal of Fat% [42] >= 35%'}
                            </p>
                            <p className={styles.high_risk_group_div_text}>
                                {'Insulin [50] >= 24.9'}
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default HighRiskGroup
