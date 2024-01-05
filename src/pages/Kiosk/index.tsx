import Box from '@mui/material/Box'
import kioskBackground from '../../images/mask-group-kiosk@2x.png'
import styles from './_kiosk.module.scss'
import logo from '../../images/asset-2-1@2x.png'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import Stack from '@mui/material/Stack'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import InlineModal from './components/in-line-modal'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import NoRecordModal from './components/no-record-modal'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const Kiosk = () => {
    const [language, setLanguage] = useState('en')
    const [openInlineModal, setOpenInlineModal] = useState<boolean>(false)
    const [openNoRecordModal, setOpenNoRecordModal] = useState<boolean>(false)

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const formik = useFormik({
        initialValues: {
            idNo: '',
        },
        validationSchema: Yup.object({
            idNo: Yup.string().required('ID No is required'),
        }),
        onSubmit: (values) => {
            // Handle login logic here
            console.log('Form submitted with values:', values)
            if (values.idNo === '123') {
                setOpenInlineModal(true)
            } else {
                setOpenNoRecordModal(true)
            }
        },
    })
    const handleLanguageChange = (language: string) => {
        setLanguage(language)
    }
    return (
        <div className={styles.kioskDiv}>
            <div style={{ display: 'flex' }}>
                <div>
                    <img width="150" src={logo} alt="logo" />
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <div className={styles.languageDiv}>
                        <div
                            className={
                                language === 'en'
                                    ? styles.selectedLanguageDiv
                                    : styles.unselectedLanguageDiv
                            }
                            onClick={() => handleLanguageChange('en')}
                        >
                            <p className={styles.englishLanguage}>English</p>
                        </div>
                        <div
                            className={
                                language === 'cn'
                                    ? styles.selectedLanguageDiv
                                    : styles.unselectedLanguageDiv
                            }
                            onClick={() => handleLanguageChange('cn')}
                        >
                            <p className={styles.chineseLanguage}>中文 (简)</p>
                        </div>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <p className={styles.time}>01:00 PM</p>
                        <p className={styles.date}>30 JUL 2022</p>
                    </div>
                </div>
            </div>
            <Box
                sx={{
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '4rem',
                }}
            >
                <form onSubmit={formik.handleSubmit}>
                    <Stack>
                        <Box
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <PersonIcon
                                sx={{
                                    fontSize: 34,
                                    color: '#fff',
                                    verticalAlign: 'bottom',
                                    marginRight: 0.5,
                                }}
                            />
                            <p className={styles.idNo}>ID No:</p>
                        </Box>
                        <TextField
                            name="idNo"
                            variant="outlined"
                            margin="dense"
                            size="small"
                            fullWidth
                            InputProps={{
                                className: styles.kioskFieldProps,
                            }}
                            value={formik.values.idNo}
                            placeholder="Enter Your ID No. (Enter 123 or 456 to check the modal)"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.idNo &&
                                Boolean(formik.errors.idNo)
                            }
                            helperText={
                                formik.touched.idNo && formik.errors.idNo
                            }
                        />
                        <Box sx={{ mt: 3 }}></Box>
                        <Button
                            variant="contained"
                            size="small"
                            fullWidth
                            className={styles.checkInBttn}
                            type="submit"
                        >
                            Check In
                        </Button>
                    </Stack>
                </form>

                <div className={styles.walkInNoticeDiv}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <WarningAmberIcon
                            sx={{
                                fontSize: 40,
                                color: '#211d4e',
                                verticalAlign: 'bottom',
                                marginRight: 0.5,
                            }}
                        />
                        <p className={styles.walkInTitle}>Walk In</p>
                    </Box>
                    <p className={styles.walkInText}>
                        Sorry, MJ Screen Center only accepting scheduled
                        customers right now.
                    </p>
                </div>
                {openInlineModal ? (
                    <InlineModal
                        open={openInlineModal}
                        matches={matches}
                        setOpen={setOpenInlineModal}
                    />
                ) : null}
                {openNoRecordModal ? (
                    <NoRecordModal
                        open={openNoRecordModal}
                        matches={matches}
                        setOpen={setOpenNoRecordModal}
                    />
                ) : null}
            </Box>
        </div>
    )
}
export default Kiosk
