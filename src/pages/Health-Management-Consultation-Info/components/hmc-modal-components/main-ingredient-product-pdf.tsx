import styles from '../../_health-management-consultation-info.module.scss'
import { Box, Checkbox, Divider, Grid, Stack } from '@mui/material'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import HeaderLogo from '../../../../images/pdpa-form-logo.png'
type MyState = {
    fakeData: any // like this
}

export class MainIngredientProductPrintOut extends React.PureComponent<MyState> {
    render() {
        const { fakeData } = this.props
        return (
            <>
                {/* <div style={{ height: '150px', backgroundImage: HeaderImage }}>
                    <p>abc</p>
                </div> */}
                <div
                    style={{
                        // maxWidth: '105MM',
                        // height: '150MM',
                        // paddingTop: '1rem',
                        // paddingLeft: '15px',
                        // paddingRight: '15px',
                        //marginTop: '1rem',
                        pageBreakAfter: 'always',
                        // borderTop: '4px solid #DDDDDD',
                    }}
                >
                    <div style={{ height: '150px' }}>
                        <div className={styles.printFormHeader}>
                            <div>
                                <p className={styles.printFormHeaderTitle}>
                                    MJ HEALTH CARE CENTRE
                                </p>
                                <p className={styles.printFormHeaderSubText}>
                                    P01-14, Teluk Aqua Biru, Jalan Forest City
                                    3, Pulau Satu, 81500 Gelang Patah, Johor.
                                </p>
                                <Stack direction="row" columnGap={6}>
                                    <p
                                        className={
                                            styles.printFormHeaderSubText
                                        }
                                    >
                                        Tel: (60)7-595 0737
                                    </p>
                                    <p
                                        className={
                                            styles.printFormHeaderSubText
                                        }
                                    >
                                        Tel: (60)7-595 0802
                                    </p>
                                </Stack>
                            </div>
                            <div style={{ marginLeft: 'auto' }}>
                                <img
                                    src={HeaderLogo}
                                    height={100}
                                    width={100}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '3rem' }}>
                        <p className={styles.printFormHealthManagementTitle}>
                            Health Management Consultation Record
                        </p>
                    </div>
                    <div
                        style={{
                            marginLeft: '40px',
                            marginRight: '40px',
                            backgroundColor: '#000000',
                            padding: '15px',
                            marginTop: '30px',
                        }}
                    >
                        <p className={styles.printFormBodyTitle}>
                            Main Ingredients of Products
                        </p>
                    </div>
                    <div
                        style={{
                            marginLeft: '40px',
                            marginRight: '40px',
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            paddingBottom: '20px',
                            marginTop: '1rem',
                        }}
                    >
                        <Grid
                            container
                            alignItems="center"
                            rowSpacing={1}
                            columnSpacing={2}
                        >
                            <Grid item md={4} sm={4}>
                                <p
                                    className={
                                        styles.printFormBodyHMConsultantText
                                    }
                                >
                                    Products
                                </p>
                            </Grid>
                            <Grid item md={8} sm={8}>
                                <p
                                    className={
                                        styles.printFormBodyHMConsultantText
                                    }
                                >
                                    Nutrients
                                </p>
                            </Grid>
                            {fakeData?.map((item: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Grid item md={4} sm={4}>
                                            <p className={styles.printFormItem}>
                                                {item.item}
                                            </p>
                                        </Grid>
                                        <Grid item md={8} sm={8}>
                                            <p className={styles.printFormItem}>
                                                {item.nutrients}
                                            </p>
                                        </Grid>
                                    </React.Fragment>
                                )
                            })}
                        </Grid>
                        <div
                            style={{
                                padding: '20px',
                                background: '#FBFBFB',
                                marginTop: '5rem',
                            }}
                        >
                            <p className={styles.printFormBodyHMConsultantText}>
                                Note:
                            </p>
                            <p className={styles.printFormItem}>
                                The supplement product(s) recommended is for
                                general health maintain, enhance and improve the
                                function of human body. It is not a substitute
                                for medical treatment, prescription or
                                recommendation. You should not make any change
                                in your treatment before consulting a physician.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
