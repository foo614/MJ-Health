import Box from '@mui/material/Box'
import kioskBackground from '../../images/mask-group-kiosk@2x.png'
import styles from './_kiosk.module.scss'
import logo from '../../images/asset-2-1@2x.png'
import { useState, useRef, ChangeEvent } from 'react'
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
import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'

const Kiosk = () => {
    const [language, setLanguage] = useState('en')
    const [openInlineModal, setOpenInlineModal] = useState<boolean>(false)
    const [openNoRecordModal, setOpenNoRecordModal] = useState<boolean>(false)
    const [idNo, setIdNo] = useState('')
    const [keyboardLayout, setKeyboardLayout] = useState('default')
    const keyboard = useRef<any>(null)
    const [onTextFieldFocus, setOnTextFieldFocus] = useState(true)

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
            // console.log('Form submitted with values:', values)
            // console.log(idNo)
            // if (values.idNo === '123') {
            //     setOpenInlineModal(true)
            // } else {
            //     setOpenNoRecordModal(true)
            // }
        },
    })
    const handleLanguageChange = (language: string) => {
        setLanguage(language)
    }

    const onChangeInput = (event: any) => {
        const input = event.target.value
        setIdNo(input)
    }

    const onKeyPress = (button: string) => {
        if (button === '{shift}' || button === '{lock}') {
            setKeyboardLayout(
                keyboardLayout === 'default' ? 'shift' : 'default'
            )
        }

        if (button === '{enter}') {
            handleSubmit()
        }
    }

    const onChangeAll = (e: any) => {
        setIdNo(e.default)
    }

    const handleSubmit = () => {
        if (idNo === '123') {
            setOpenInlineModal(true)
            // setOnTextFieldFocus(false)
        } else {
            setOpenNoRecordModal(true)
            // setOnTextFieldFocus(false);
        }
    }

    return (
        <>
            <div
                className={styles.kioskDiv}
                style={{ height: onTextFieldFocus ? '80vh' : '100vh' }}
            >
                <div style={{ display: 'flex' }}>
                    <div style={{ marginTop: 'auto' }}>
                        <img width="110" height="110" src={logo} alt="logo" />
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
                                <p className={styles.englishLanguage}>
                                    English
                                </p>
                            </div>
                            <div
                                className={
                                    language === 'cn'
                                        ? styles.selectedLanguageDiv
                                        : styles.unselectedLanguageDiv
                                }
                                onClick={() => handleLanguageChange('cn')}
                            >
                                <p className={styles.chineseLanguage}>
                                    中文 (简)
                                </p>
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
                            onFocus={() => setOnTextFieldFocus(true)}
                            // onBlur={() => setOnTextFieldFocus(false)}
                            name="idNo"
                            variant="outlined"
                            margin="dense"
                            size="small"
                            fullWidth
                            InputProps={{
                                className: styles.kioskFieldProps,
                                classes: { input: styles.inputField },
                            }}
                            value={idNo}
                            // value={formik.values.idNo}
                            placeholder="Enter Your ID No. (Enter 123 or 456 to check the modal)"
                            onChange={(e: any) => onChangeInput(e)}
                            //onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // error={
                            //     formik.touched.idNo &&
                            //     Boolean(formik.errors.idNo)
                            // }
                            // helperText={
                            //     formik.touched.idNo && formik.errors.idNo
                            // }
                            // autoFocus
                        />
                        <Box sx={{ mt: 3 }}></Box>
                        <Button
                            variant="contained"
                            size="small"
                            fullWidth
                            className={styles.checkInBttn}
                            onClick={handleSubmit}
                            disabled={idNo ? false : true}
                        >
                            Check In
                        </Button>
                    </Stack>

                    <div className={styles.walkInNoticeDiv}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <WarningAmberIcon
                                sx={{
                                    fontSize: 26,
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
                            waitingNumber="004"
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
            {onTextFieldFocus ? (
                <div>
                    <Keyboard
                        theme={
                            'hg-theme-default hg-layout-default ' +
                            styles.myTheme1
                        }
                        keyboardRef={(r) => (keyboard.current = r)}
                        onKeyPress={onKeyPress}
                        onChangeAll={(inputObj) => onChangeAll(inputObj)}
                        //onChange={setIdNo}
                        layoutName={keyboardLayout}
                        buttonTheme={[
                            {
                                class:
                                    'hg-theme-default hg-layout-default hg-button ' +
                                    styles.abc,
                                buttons:
                                    "` 1 2 3 4 5 6 7 8 9 0 - = {bksp} {tab} q w e r t y u i o p [ ] \\ {lock} a s d f g h j k l ; ' {enter} {shift} z x c v b n m , . / {shift} .com @ {space} ~ ! @ # $ % ^ & * ( ) _ + {bksp} {tab} Q W E R T Y U I O P { } | '{lock} A S D F G H J K L :  {enter}' {shift} Z X C V B N M < > ? \" {shift}.com @ {space}",
                            },
                        ]}
                    />
                </div>
            ) : null}
        </>
    )
}
export default Kiosk
