import Box from '@mui/material/Box'
import kioskBackground from '../../images/mask-group-kiosk@2x.png'
import styles from './_kiosk.module.scss'
import logo from '../../images/asset-2-1@2x.png'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import Stack from '@mui/material/Stack'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
const Kiosk = () => {
    const [language, setLanguage] = useState('en')

    const handleLanguageChange = (language: string) => {
        setLanguage(language)
    }
    return (
        <div className={styles.kioskDiv}>
            {/* <img
                className={styles.maskGroupIcon}
                alt="kiosk-background"
                src={kioskBackground}
            /> */}
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
                        variant="outlined"
                        margin="dense"
                        size="small"
                        fullWidth
                        InputProps={{
                            className: styles.kioskFieldProps,
                        }}
                        placeholder="Enter Your ID No."
                    />
                    <Box sx={{ mt: 3 }}></Box>
                    <Button
                        variant="contained"
                        size="small"
                        fullWidth
                        className={styles.checkInBttn}
                    >
                        Check In
                    </Button>
                </Stack>
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
            </Box>
        </div>
    )
}
export default Kiosk
