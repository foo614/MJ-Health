import styles from '../_member-profile.module.scss'
import { Box, Divider, Grid, Stack } from '@mui/material'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import HeaderImage from '../../../images/pdpa-form-header.png'
import HeaderLogo from '../../../images/pdpa-form-logo.png'
export class TestPDPAPage extends React.PureComponent {
    render() {
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
                        <div className={styles.pdpaPrintFormHeader}>
                            <div>
                                <p className={styles.pdpaPrintFormHeaderTitle}>
                                    MJ HEALTH CARE CENTRE
                                </p>
                                <p
                                    className={
                                        styles.pdpaPrintFormHeaderSubText
                                    }
                                >
                                    P01-14, Teluk Aqua Biru, Jalan Forest City
                                    3, Pulau Satu, 81500 Gelang Patah, Johor.
                                </p>
                                <Stack direction="row" columnGap={6}>
                                    <p
                                        className={
                                            styles.pdpaPrintFormHeaderSubText
                                        }
                                    >
                                        Tel: (60)7-595 0737
                                    </p>
                                    <p
                                        className={
                                            styles.pdpaPrintFormHeaderSubText
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
                    <div
                        style={{
                            paddingTop: '1rem',
                            paddingLeft: '30px',
                            paddingRight: '30px',
                            borderTop: '4px solid #DDDDDD',
                        }}
                    >
                        <p className={styles.pdpaPrintFormTitle}>
                            Personal Information Protection Act Notification and
                            Informed Consent Form
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                marginTop: '2rem',
                                columnGap: '5px',
                            }}
                        >
                            <Stack direction="row" columnGap={2}>
                                <p
                                    className={styles.infoModalRestText}
                                    style={{ margin: 'auto' }}
                                >
                                    Health Exam Seq No:
                                </p>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    InputProps={{
                                        classes: {
                                            input: styles.inputField,
                                        },
                                    }}
                                    className={styles.modalFormField}
                                    sx={{ width: '200px' }}
                                />
                            </Stack>
                            <Stack
                                direction="row"
                                columnGap={2}
                                sx={{ marginLeft: 'auto' }}
                            >
                                <p
                                    className={styles.infoModalRestText}
                                    style={{ margin: 'auto' }}
                                >
                                    Date:
                                </p>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    InputProps={{
                                        classes: {
                                            input: styles.inputField,
                                        },
                                    }}
                                    className={styles.modalFormField}
                                    sx={{ width: '200px' }}
                                />
                            </Stack>
                        </div>
                        <Divider
                            sx={{
                                height: '2px',
                                background: '#000000',
                                marginTop: '2rem',
                                marginBottom: '2rem',
                            }}
                        />
                        <p className={styles.infoModalTopText}>
                            To collect, process and utilize personal
                            information, MJ Health Screening Centers
                            (hereinafter referred to as the &quot;Center&quot;)
                            hereby inform the examinees of the following matters
                            in accordance with the relevant provisions of the
                            Personal Information Protection Act:
                        </p>
                        <Box>
                            <p
                                className={styles.infoModalTopText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                I. Use of personal information for specific
                                purposes:
                            </p>
                            <Box
                                sx={{
                                    paddingLeft: '15px',
                                    paddingRight: '15px',
                                }}
                            >
                                <p
                                    className={styles.infoModalRestText}
                                    style={{
                                        marginTop: '15px',
                                        marginBottom: '15px',
                                    }}
                                >
                                    1. Purpose of collection: healthcare
                                    services, agreements, or other legal issues,
                                    food and drug administration, consumer and
                                    customer management and service; collection,
                                    processing and use of personal information
                                    by non-government agencies in accordance
                                    with relevant laws and regulations;
                                    information (communication) and database
                                    management; other business that meet the
                                    requirements of the business registration
                                    categories or the articles of incorporation;
                                    and other counseling and consulting
                                    services.
                                </p>
                                <p
                                    className={styles.infoModalRestText}
                                    style={{
                                        marginTop: '15px',
                                        marginBottom: '15px',
                                    }}
                                >
                                    2. Classification of personal information:
                                    name, date of birth, ID number, passport
                                    number, marriage, family, education,
                                    occupation, medical records, healthcare,
                                    gene, sex life, health exam and contact
                                    information.
                                </p>
                                <p
                                    className={styles.infoModalRestText}
                                    style={{
                                        marginTop: '15px',
                                        marginBottom: '15px',
                                    }}
                                >
                                    3. The scope of personal information
                                    collection covers all the information
                                    previously provided by the examinees to the
                                    Center.
                                </p>
                                <p
                                    className={styles.infoModalRestText}
                                    style={{
                                        marginTop: '15px',
                                        marginBottom: '15px',
                                    }}
                                >
                                    4. Period, area, object and method of use of
                                    personal information
                                </p>
                                <Box
                                    sx={{
                                        paddingLeft: '35px',
                                        paddingRight: '35px',
                                    }}
                                >
                                    <ul>
                                        <li>
                                            <p
                                                className={
                                                    styles.infoModalRestText
                                                }
                                                style={{
                                                    marginTop: '15px',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                Period: the duration of personal
                                                information collection for
                                                specific purposes, the storage
                                                period specified in accordance
                                                with relevant laws or terms of
                                                agreements (e.g. Medical Care
                                                Law, Business Entity Accounting
                                                Act, Criteria Governing Handling
                                                Method of Beneficiary
                                                Certificates, etc.).
                                            </p>
                                        </li>
                                        <li>
                                            <p
                                                className={
                                                    styles.infoModalRestText
                                                }
                                                style={{
                                                    marginTop: '15px',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                Area: Republic of China,
                                                overseas branches of the Center,
                                                the locations of the recipients
                                                who receive the personal
                                                information via international
                                                transmission, the locations of
                                                the organizations outsourced by
                                                the Center, and the business
                                                locations of all organizations
                                                that conduct business with the
                                                Center.
                                            </p>
                                        </li>
                                        <div className={styles.pagebreak}></div>
                                        <li>
                                            <p
                                                className={
                                                    styles.infoModalRestText
                                                }
                                                style={{
                                                    marginTop: '15px',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                Object: the Center, the overseas
                                                branches of the Center, the
                                                parties that conduct marketing
                                                business or collaborate with the
                                                Center, other organizations that
                                                conduct business with the
                                                Center, organizations or
                                                supervisors that are authorized
                                                to conduct investigation, and
                                                competent authorities.
                                            </p>
                                        </li>
                                        <li>
                                            <p
                                                className={
                                                    styles.infoModalRestText
                                                }
                                                style={{
                                                    marginTop: '15px',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                Method: in writing, email,
                                                phone, fax, or automated
                                                machines or other non-automated
                                                methods.
                                            </p>
                                        </li>
                                    </ul>
                                </Box>
                                <p
                                    className={styles.infoModalRestText}
                                    style={{
                                        marginTop: '15px',
                                        marginBottom: '15px',
                                    }}
                                >
                                    5. The rights and methods the examinees may
                                    exercise:
                                </p>
                                <Box
                                    sx={{
                                        paddingLeft: '35px',
                                        paddingRight: '35px',
                                    }}
                                >
                                    <ul>
                                        <li>
                                            <p
                                                className={
                                                    styles.infoModalRestText
                                                }
                                                style={{
                                                    marginTop: '15px',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                The examinees may inquire and
                                                request for a review or
                                                duplicates of the information.
                                                The Center may charge necessary
                                                handling fees in accordance with
                                                the laws.
                                            </p>
                                        </li>
                                        <li>
                                            <p
                                                className={
                                                    styles.infoModalRestText
                                                }
                                                style={{
                                                    marginTop: '15px',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                The examinees may request to
                                                supply or correct personal
                                                information; however, the
                                                examinees shall explain the
                                                reason(s) and fact(s) properly.
                                            </p>
                                        </li>
                                        <li>
                                            <p
                                                className={
                                                    styles.infoModalRestText
                                                }
                                                style={{
                                                    marginTop: '15px',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                The examines may request the
                                                Center to discontinue the
                                                collection, use and to delete of
                                                personal information unless such
                                                conduct is necessary for the
                                                Center to conduct the business,
                                                is in accordance with the
                                                agreement or in accordance with
                                                the laws.
                                            </p>
                                        </li>
                                    </ul>
                                </Box>
                                <p
                                    className={styles.infoModalRestText}
                                    style={{
                                        marginTop: '15px',
                                        marginBottom: '15px',
                                    }}
                                >
                                    6. The examinees may decide freely whether
                                    to provide relevant personal information,
                                    but the examinees will not receive the
                                    comprehensive and complete health management
                                    and counseling services provided by the
                                    Center if he/she declines to provide his/her
                                    personal information. The Center will not be
                                    able to provide services related to the
                                    comprehensive health exam to the examinees.
                                </p>
                            </Box>
                            <p
                                className={styles.infoModalTopText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                The Center has informed the examinee of the
                                purpose and use of collection, processing or use
                                of personal information.
                            </p>
                            <p
                                className={styles.infoModalTopText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                II. Use of personal information for specific
                                purposes:
                            </p>
                            <Box
                                sx={{
                                    paddingLeft: '18px',
                                    paddingRight: '18px',
                                }}
                            >
                                <p
                                    className={styles.infoModalTopText}
                                    style={{
                                        marginTop: '15px',
                                        marginBottom: '15px',
                                    }}
                                >
                                    The examinee has read the following
                                    information and agrees that the Center may
                                    collect, process and use (including
                                    international transmission) the
                                    examinee&apos;s personal information for the
                                    specific purposes disclosed below (checking
                                    the box indicates giving consent).
                                </p>
                                <p
                                    className={styles.infoModalRestText}
                                    style={{
                                        marginTop: '15px',
                                        marginBottom: '15px',
                                    }}
                                >
                                    1. The health profile and history of the
                                    examinee shall be kept on MJ&apos;s online
                                    system to facilitate access to related
                                    information and health management services.
                                </p>
                                <p
                                    className={styles.infoModalRestText}
                                    style={{
                                        marginTop: '15px',
                                        marginBottom: '15px',
                                    }}
                                >
                                    2. The health profile and history of the
                                    examinee shall be utilized for academic
                                    research in ways that do not disclose the
                                    identity of the examinee.
                                </p>
                                <p
                                    className={styles.infoModalRestText}
                                    style={{
                                        marginTop: '15px',
                                        marginBottom: '15px',
                                    }}
                                >
                                    3. The health profile and history of the
                                    examinee shall be provided to and shared by
                                    institutions related to the MJ Global Health
                                    Management Service or collaborative contract
                                    healthcare facilities so that the examinee
                                    may benefit from various post-screening
                                    health promotion services and integrated
                                    medical resources.
                                </p>
                                <div className={styles.pagebreak}></div>
                                <Box
                                    sx={{
                                        paddingLeft: '35px',
                                        paddingRight: '35px',
                                    }}
                                >
                                    <ul>
                                        <li>
                                            <p
                                                className={
                                                    styles.infoModalRestText
                                                }
                                                style={{
                                                    marginTop: '15px',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                MJ Life Enterprises Co., Ltd.
                                            </p>
                                        </li>
                                        <li>
                                            <p
                                                className={
                                                    styles.infoModalRestText
                                                }
                                                style={{
                                                    marginTop: '15px',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                MJ Health Management Consultiong
                                                Co.Ltd.
                                            </p>
                                        </li>
                                        <li>
                                            <p
                                                className={
                                                    styles.infoModalRestText
                                                }
                                                style={{
                                                    marginTop: '15px',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                MJ Health Research Foundation
                                            </p>
                                        </li>
                                    </ul>
                                </Box>

                                <p
                                    style={{
                                        marginTop: '15px',
                                        marginBottom: '15px',
                                        paddingLeft: '35px',
                                        paddingRight: '35px',
                                    }}
                                    className={styles.infoModalRestText}
                                >
                                    Description: The MJ Health Research
                                    Foundation received a donation from MJ Life
                                    Enterprises Co., Ltd. and was established in
                                    2012 with the aim to promote preventive
                                    medicine and industrial development through
                                    the legal use of biological data.
                                </p>
                            </Box>
                        </Box>

                        <Grid
                            container
                            columnSpacing={3}
                            sx={{ padding: '20px' }}
                        >
                            <Grid item md={4} xs={12} sm={4}>
                                <div className={styles.signatureDiv}></div>
                                <div style={{ marginTop: '5px' }}>
                                    <p className={styles.infoModalRestText}>
                                        Party to the Agreement:
                                    </p>
                                    <Stack
                                        direction="row"
                                        columnGap={2}
                                        sx={{ marginTop: '10px' }}
                                    >
                                        <p
                                            className={styles.infoModalRestText}
                                            style={{ margin: 'auto' }}
                                        >
                                            NRIC:
                                        </p>
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                            }}
                                            className={styles.modalFormField}
                                        />
                                    </Stack>
                                </div>
                            </Grid>
                            <Grid item md={4} xs={12} sm={4}>
                                <div className={styles.signatureDiv}></div>
                                <div style={{ marginTop: '5px' }}>
                                    <p className={styles.infoModalRestText}>
                                        Legal Representative:.
                                    </p>
                                </div>
                                <Stack
                                    direction="row"
                                    columnGap={2}
                                    sx={{ marginTop: '10px' }}
                                >
                                    <p
                                        className={styles.infoModalRestText}
                                        style={{ margin: 'auto' }}
                                    >
                                        NRIC:
                                    </p>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        InputProps={{
                                            classes: {
                                                input: styles.inputField,
                                            },
                                        }}
                                        className={styles.modalFormField}
                                    />
                                </Stack>
                                <p
                                    className={styles.infoModalRestText}
                                    style={{ marginTop: '5px' }}
                                >
                                    Relation to the undersigned:
                                </p>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                        classes: {
                                            input: styles.inputField,
                                        },
                                    }}
                                    className={styles.modalFormField}
                                />
                                <Stack
                                    direction="row"
                                    columnGap={2}
                                    sx={{ marginTop: '10px' }}
                                >
                                    <p
                                        className={styles.infoModalRestText}
                                        style={{ margin: 'auto' }}
                                    >
                                        Date:
                                    </p>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        InputProps={{
                                            classes: {
                                                input: styles.inputField,
                                            },
                                        }}
                                        className={styles.modalFormField}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item md={4} xs={12} sm={4}>
                                <p
                                    className={styles.infoModalRestText}
                                    style={{ width: '80%' }}
                                >
                                    Signature of legal representation if the
                                    undersigned is a minor under the age of 18
                                    year
                                </p>
                            </Grid>
                        </Grid>
                        <Divider
                            sx={{
                                height: '2px',
                                background: '#000000',
                                marginTop: '2rem',
                                marginBottom: '2rem',
                            }}
                        />
                    </div>
                </div>
            </>
        )
    }
}
