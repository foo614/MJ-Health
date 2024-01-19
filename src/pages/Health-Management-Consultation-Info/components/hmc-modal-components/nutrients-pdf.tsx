import styles from '../../_health-management-consultation-info.module.scss'
import { Box, Checkbox, Divider, Grid, Stack } from '@mui/material'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import HeaderLogo from '../../../../images/pdpa-form-logo.png'
type MyState = {
    fakeData: any // like this
    displayField: any
    smUp: boolean
}

export class NutrientPrintOut extends React.PureComponent<MyState> {
    render() {
        const { fakeData, displayField, smUp } = this.props
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
                    <Divider
                        sx={{
                            borderBottomWidth: 5,
                            borderColor: '#000000',
                            marginTop: '3rem',
                            marginLeft: '5rem',
                            marginRight: '5rem',
                        }}
                    />
                    {/* <div style={{ height: '150px' }}>
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
                    </div> */}
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
                            marginTop: '25px',
                        }}
                    >
                        <p className={styles.printFormBodyTitle}>Nutrients</p>
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
                        <Grid
                            container
                            rowSpacing={4}
                            sx={{ marginTop: '5px' }}
                        >
                            {fakeData.map((item: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Grid
                                            item
                                            md={4}
                                            sm={3}
                                            xs={12}
                                            sx={{
                                                margin:
                                                    item.type.field === 5
                                                        ? 'unset'
                                                        : 'auto',
                                            }}
                                        >
                                            <p className={styles.printFormItem}>
                                                {item.title}
                                            </p>
                                        </Grid>
                                        <Grid item md={6} sm={8} xs={12}>
                                            {displayField(item)}
                                        </Grid>
                                        <Grid
                                            item
                                            md={2}
                                            sm={1}
                                            xs={12}
                                            sx={{
                                                textAlign: smUp
                                                    ? 'end'
                                                    : 'start',
                                            }}
                                        >
                                            <Checkbox
                                                name="nutrients_checkbox"
                                                sx={{ margin: 'auto' }}
                                            />
                                        </Grid>
                                    </React.Fragment>
                                )
                            })}
                        </Grid>
                        <div
                            style={{
                                height: '250px',
                                border: '2px solid #000000',
                                marginTop: '5rem',
                            }}
                        >
                            <div
                                style={{
                                    height: '50px',
                                    backgroundColor: '#000000',
                                }}
                            >
                                <p
                                    className={styles.printFormBodyTitle}
                                    style={{ paddingTop: '10px' }}
                                >
                                    Dietary Suggestion
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
