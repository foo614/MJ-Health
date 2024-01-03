import AppIcon from '../../../images/app-icon.png'
import styles from '../_dining.module.scss'
const MealCardFront = () => {
    return (
        <div className={styles.mealCardFrontDivider}>
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
                    paddingLeft: '30px',
                    paddingRight: '30px',
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
                        KMPG Tower 2F-2 No.8, First Avenue, Persiaran Bandar
                        Utama, 47800 Petaling Jaya, Selangor.
                    </p>
                    <p className={styles.mealCardFrontText}>
                        Appointment Tel: (60)3-7723-3388
                    </p>
                </div>
                <div>
                    {' '}
                    <div
                        style={{
                            marginTop: '7rem',
                        }}
                    >
                        <p className={styles.mealCardFrontBottomText}>
                            Copyright &copy; 2017 MJ HEALTH CENTER SDN.BHD{' '}
                        </p>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '100%' }}>
                                <p className={styles.mealCardFrontBottomText}>
                                    All Rights Reserved
                                </p>
                            </div>

                            <div
                                style={{
                                    width: '100%',
                                    textAlign: 'center',
                                }}
                            >
                                <p className={styles.mealCardFrontBottomText}>
                                    MJ2018.04-1803MY
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MealCardFront
