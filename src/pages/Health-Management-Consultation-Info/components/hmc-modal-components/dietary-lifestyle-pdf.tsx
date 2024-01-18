import styles from '../../_health-management-consultation-info.module.scss'
import { Box, Checkbox, Divider, Grid, Stack } from '@mui/material'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import HeaderLogo from '../../../../images/pdpa-form-logo.png'
type MyState = {
    fakeData: any // like this
}

export class DietaryLifeStylePrintOut extends React.PureComponent<MyState> {
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
                    <Grid container sx={{ marginTop: '3rem' }}>
                        <Grid item md={7} sm={6}></Grid>
                        <Grid item md={5} sm={6}>
                            <div>
                                <p
                                    className={
                                        styles.printFormBodyHMConsultantText
                                    }
                                >
                                    HM Consultant:
                                </p>
                            </div>
                        </Grid>
                    </Grid>

                    <div
                        style={{
                            marginLeft: '40px',
                            marginRight: '40px',
                            backgroundColor: '#000000',
                            padding: '15px',
                            marginTop: '25px',
                        }}
                    >
                        <p className={styles.printFormBodyTitle}>
                            Dietary & Lifestyle
                        </p>
                    </div>
                    <div
                        style={{
                            marginLeft: '40px',
                            marginRight: '40px',
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            paddingBottom: '20px',
                        }}
                    >
                        <Grid container alignItems="center" rowSpacing={1}>
                            {fakeData?.map((item: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Grid
                                            item
                                            md={9}
                                            sm={9}
                                            sx={{ marginTop: '1rem' }}
                                        >
                                            <p className={styles.printFormItem}>
                                                {item.item}
                                            </p>
                                        </Grid>
                                        <Grid
                                            item
                                            md={3}
                                            sm={3}
                                            sx={{
                                                textAlign: 'end',
                                                marginTop: '1rem',
                                            }}
                                        >
                                            <Checkbox />
                                        </Grid>

                                        {index === 9 || index === 22 ? (
                                            <>
                                                <Grid
                                                    item
                                                    md={12}
                                                    sm={12}
                                                    sx={{ marginTop: '2rem' }}
                                                >
                                                    <Divider
                                                        sx={{
                                                            borderBottomWidth: 5,
                                                            borderColor:
                                                                '#000000',
                                                        }}
                                                    />
                                                    <div
                                                        style={{
                                                            backgroundColor:
                                                                '#000000',
                                                            padding: '15px',
                                                            marginTop: '40px',
                                                        }}
                                                    >
                                                        <p
                                                            className={
                                                                styles.printFormBodyTitle
                                                            }
                                                        >
                                                            Dietary & Lifestyle
                                                        </p>
                                                    </div>
                                                </Grid>
                                                <div
                                                    className={styles.pagebreak}
                                                ></div>
                                            </>
                                        ) : null}
                                    </React.Fragment>
                                )
                            })}
                        </Grid>
                    </div>
                </div>
            </>
        )
    }
}
