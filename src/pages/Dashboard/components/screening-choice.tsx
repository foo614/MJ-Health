import { FunctionComponent } from 'react'
import styles from './_screening-choice.module.scss'

const ScreeningChoice: FunctionComponent = () => {
    return (
        <div className={styles.screeningChoice}>
            <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.groupItem} />
                <div className={styles.groupInner} />
                <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector@2x.png"
                />
                <div className={styles.div}>-</div>
            </div>
            <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group@2x.png"
            />
        </div>
    )
}

export default ScreeningChoice
