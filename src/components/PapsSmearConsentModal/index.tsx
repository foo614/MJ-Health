import CustomModal from 'components/Modal'
import { Dispatch, SetStateAction, useState } from 'react'
import styles from './_paps-smear-consent-modal.module.scss'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import SignatureModal from 'components/SignatureModal'
import Button from '@mui/material/Button'

type Props = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const PapsSmearConsentModal = ({ open, setOpen }: Props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

    const [openSignatureModal, setOpenSignatureModal] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    const handleSetTitle = (title: string) => {
        setTitle(title)
        setOpenSignatureModal(true)
    }

    return (
        <>
            <CustomModal
                setOpen={setOpen}
                open={open}
                title="Pap’s Smear Procedure Consent Form"
                width="lg"
            >
                <Box
                    sx={{
                        margin: matches ? '0 1.5rem 1.5rem' : '0 0 1rem',
                    }}
                >
                    <p className={styles.paragraphHeader}>
                        <strong>Background Information: </strong>
                    </p>
                    <p className={styles.paragraphText}>
                        A Pap test is a medical examination performed on females
                        to screen for cervical cancer. The procedure involves
                        collecting a sample of cells from the cervix and
                        analysing them for abnormalities or precancerous
                        changes. This test is recommended for all women who are
                        sexually active, regardless of their age or marital
                        status.
                    </p>

                    <p className={styles.paragraphHeader}>
                        <strong>Purpose: </strong>
                    </p>
                    <p className={styles.paragraphText}>
                        The purpose of the Pap test is to detect any
                        abnormalities or precancerous changes in the cells of
                        the cervix. If left undetected, these changes can lead
                        to cervical cancer. The test (as an optional add-on
                        item) can also detect other infections such as (HPV),
                        which can also cause cervical cancer. Procedure: During
                        the procedure, you will be asked to lie on an
                        examination table with your legs raised and spread
                        apart. A speculum will be inserted into your vagina to
                        allow for visualization of the cervix. A sample of cells
                        will be collected from the cervix using a small brush.
                        The sample will then be sent to a laboratory for
                        analysis.
                    </p>

                    <p className={styles.paragraphHeader}>
                        <strong>Benefits: </strong>
                    </p>
                    <p className={styles.paragraphText}>
                        The benefits of the Pap test include early detection and
                        treatment of cervical cancer and other abnormalities. If
                        detected early, cervical cancer can be treated with a
                        higher success rate, and treatment can be less invasive.
                    </p>

                    <p className={styles.paragraphHeader}>
                        <strong>Risks: </strong>
                    </p>
                    <p className={styles.paragraphText}>
                        The risks of the Pap test are minimal. Some patients may
                        experience mild discomfort or cramping during the
                        procedure. In rare cases, there may be bleeding or
                        infection. You should inform your healthcare provider if
                        you experience any of these symptoms after the
                        procedure.
                    </p>

                    <p className={styles.paragraphHeader}>
                        <strong>Alternative Procedures: </strong>
                    </p>
                    <p className={styles.paragraphText}>
                        There are no alternative procedures to a Pap test for
                        screening for cervical cancer.
                    </p>

                    <p className={styles.paragraphHeader}>
                        <strong>Acknowledgment</strong>
                    </p>

                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        className={styles.paragraphText}
                    >
                        <Grid item>
                            <Typography>I </Typography>
                        </Grid>
                        <Grid item>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                            >
                                <FormControl>
                                    <TextField
                                        placeholder="Name"
                                        sx={{
                                            width: lgUp
                                                ? '600px'
                                                : matches
                                                  ? '300px'
                                                  : '150px',
                                        }}
                                        inputProps={{ className: styles.input }}
                                    ></TextField>
                                </FormControl>
                                <Typography>(name)</Typography>
                            </Stack>
                        </Grid>

                        <Grid item>
                            <Typography>, of NRIC No.: </Typography>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <TextField
                                    placeholder="NRIC/Passport"
                                    sx={{
                                        width: lgUp
                                            ? '600px'
                                            : matches
                                              ? '250px'
                                              : '150px',
                                    }}
                                    inputProps={{ className: styles.input }}
                                ></TextField>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Typography>, Date of birth:</Typography>
                        </Grid>

                        <Grid item>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <FormControl>
                                    <DatePicker
                                        closeOnSelect
                                        format="DD-MM-YYYY"
                                        slotProps={{
                                            inputAdornment: {
                                                position: 'start',
                                            },
                                        }}
                                        sx={{
                                            width: lgUp
                                                ? '250px'
                                                : matches
                                                  ? '150px'
                                                  : '150px',
                                        }}
                                    />
                                </FormControl>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>

                    <p className={styles.paragraphText}>
                        acknowledge that I have received and understood the
                        information provided above regarding the Pap test,
                        including its purpose, benefits, risks, and alternative
                        procedures. I also acknowledge that I have had the
                        opportunity to ask questions and that my questions have
                        been answered to my satisfaction. I hereby give my
                        consent to undergo a Pap test.
                    </p>

                    <Divider
                        sx={{
                            height: '2px',
                            background: '#000000',
                            marginTop: '2rem',
                            marginBottom: '2rem',
                        }}
                    />

                    <Grid container columnSpacing={3}>
                        <Grid item md={4} xs={12} sm={6}>
                            <div
                                className={styles.signatureDiv}
                                onClick={() =>
                                    handleSetTitle("Witness's Signature")
                                }
                            >
                                <div className={styles.signatureTitleDiv}>
                                    <p className={styles.signatureTitle}>
                                        Witness&apos;s Signature:
                                    </p>
                                </div>
                                <div
                                    style={{
                                        textAlign: 'center',
                                        marginTop: '4rem',
                                    }}
                                >
                                    <AddCircleIcon
                                        className={styles.addCircleIcon}
                                    />
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <p className={styles.infoModalRestText}>
                                    Witness&apos;s Signature:
                                </p>
                            </div>
                        </Grid>
                        <Grid item md={4} xs={12} sm={6}>
                            <div
                                className={styles.signatureDiv}
                                onClick={() =>
                                    handleSetTitle("Doctor's Signature")
                                }
                            >
                                <div className={styles.signatureTitleDiv}>
                                    <p className={styles.signatureTitle}>
                                        Doctor&apos;s Signature:
                                    </p>
                                </div>
                                <div
                                    style={{
                                        textAlign: 'center',
                                        marginTop: '4rem',
                                    }}
                                >
                                    <AddCircleIcon
                                        className={styles.addCircleIcon}
                                    />
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <p className={styles.infoModalRestText}>
                                    Doctor&apos;s Signature
                                </p>
                            </div>
                        </Grid>
                        <Grid item md={4} xs={12} sm={6}>
                            <div
                                className={styles.signatureDiv}
                                onClick={() =>
                                    handleSetTitle("Member's Signature")
                                }
                            >
                                <div className={styles.signatureTitleDiv}>
                                    <p className={styles.signatureTitle}>
                                        Member&apos;s Signature:
                                    </p>
                                </div>
                                <div
                                    style={{
                                        textAlign: 'center',
                                        marginTop: '4rem',
                                    }}
                                >
                                    <AddCircleIcon
                                        className={styles.addCircleIcon}
                                    />
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <p className={styles.infoModalRestText}>
                                    Member&apos;s Signature
                                </p>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        justifyContent="flex-end"
                        sx={{ marginTop: '1.5rem' }}
                    >
                        <Button
                            variant="contained"
                            className={styles.saveButton}
                        >
                            Save
                        </Button>
                    </Grid>
                </Box>
            </CustomModal>

            {openSignatureModal && (
                <SignatureModal
                    open={openSignatureModal}
                    setOpen={setOpenSignatureModal}
                    title={title}
                />
            )}
        </>
    )
}

export default PapsSmearConsentModal
