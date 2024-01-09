import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_member-profile.module.scss'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Divider, Grid, Stack } from '@mui/material'
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    matches: any
    setOpen: any
    open: any
}

const HIVConsentFormModal: React.FC<Props> = ({
    matches,
    setOpen,
    open,
}: Props) => {
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.infoModal }}
            >
                <DialogTitle className={styles.infoModalColor}>
                    <p className={styles.infoModalTitle}>
                        Informed Consent for HIV Blood Test
                    </p>
                </DialogTitle>
                <IconButton
                    onClick={() => setOpen(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent className={styles.modalDialogContent}>
                    <p className={styles.infoModalTopText}>
                        I here by agree to take the HIV antibody test. I
                        understand that HIV positive is reportable to the state
                        health department. And, unless prior consent is
                        obtained, HMJHCC undertakes to keep the results
                        confidential, except to such an extent that disclosure
                        is required by any Government Authority or by law.
                    </p>

                    <Divider
                        sx={{
                            height: '2px',
                            background: '#000000',
                            marginTop: '2rem',
                            marginBottom: '2rem',
                        }}
                    />
                    <Stack direction={matches ? 'row' : 'column'} spacing={2}>
                        <div>
                            <p
                                style={{ marginTop: '10px' }}
                                className={styles.infoModalRestText}
                            >
                                I
                            </p>
                        </div>
                        <div style={{ width: matches ? '80%' : '100%' }}>
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
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <p className={styles.infoModalRestText}>(name)</p>
                        </div>
                    </Stack>
                    <Stack
                        direction={matches ? 'row' : 'column'}
                        spacing={2}
                        sx={{ marginTop: '1rem' }}
                    >
                        <div>
                            <p
                                style={{ marginTop: '10px' }}
                                className={styles.infoModalRestText}
                            >
                                NRIC No.
                            </p>
                        </div>
                        <div style={{ width: matches ? '50%' : '100%' }}>
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
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <p className={styles.infoModalRestText}>
                                have read and fully understood all the above.
                            </p>
                        </div>
                    </Stack>
                    <Divider
                        sx={{
                            height: '2px',
                            background: '#000000',
                            marginTop: '2rem',
                            marginBottom: '2rem',
                        }}
                    />
                    <Box>
                        <p className={styles.infoModalRestText}>
                            Under law, HIV antibody test results and other AIDS
                            information are private and may be given only:
                        </p>
                        <Box sx={{ padding: '10px 20px' }}>
                            <p
                                className={styles.infoModalRestText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                1. To you (or a person authorized by law who
                                agreed to the test for you);
                            </p>
                            <p
                                className={styles.infoModalRestText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                2. To anyone you give written consent to get the
                                test result;
                            </p>
                            <p
                                className={styles.infoModalRestText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                3. To a health care facility (such as a
                                hospital, blood bank or laboratory) that is
                                giving health care to you or your child. HIV nad
                                AIDS information may also be recorded in your
                                medical chart or records;
                            </p>
                            <p
                                className={styles.infoModalRestText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                4. To a health care provider (such as a doctor
                                or nurse) who is giving health care to you or
                                your child;
                            </p>
                            <p
                                className={styles.infoModalRestText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                5. To a committee or organization that reviews
                                records in a health facility to monitor the care
                                provided in that facility;
                            </p>
                            <p
                                className={styles.infoModalRestText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                6. To insurance companies or government programs
                                such as Medicaid if needed to pay for services
                                you receive or for other types of claims such as
                                a disability claim. (You may be able to pay for
                                the test yourself if you don&pos;t want your
                                insurance company to get your result.) If you
                                are being tested for insurance, you can also
                                choose a doctor or other health care provider
                                who would receive your test result if it is
                                positive;
                            </p>
                            <p
                                className={styles.infoModalRestText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                7. To a person who gets a court order that gives
                                them the right to your test result (this can
                                only happen in special cases);
                            </p>
                            <p
                                className={styles.infoModalRestText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                8. To a state institution (such as a
                                correctional facility or state mental hospital),
                                where employees may have the information in
                                special cases;
                            </p>
                            <p
                                className={styles.infoModalRestText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                9. To a health care worker or other type of
                                worker who is exposed to your blood (in limited
                                cases, such as secual assault);
                            </p>
                            <p
                                className={styles.infoModalRestText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                10. To a medical examiner;
                            </p>
                            <p
                                className={styles.infoModalRestText}
                                style={{
                                    marginTop: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                11. To a public health officer if permitted by
                                law.
                            </p>
                        </Box>
                        <p className={styles.infoModalRestText}>
                            All these people are also required by state law to
                            keep your result private. You can ask your doctor or
                            health care provider if your HIV test result has
                            been released to anyone,
                        </p>
                    </Box>
                    <Divider
                        sx={{
                            height: '2px',
                            background: '#000000',
                            marginTop: '2rem',
                            marginBottom: '2rem',
                        }}
                    />
                    <Box sx={{ background: '#F9F9F9', padding: '10px' }}>
                        <p
                            className={styles.infoModalRestText}
                            style={{ textAlign: 'center' }}
                        >
                            [Under the Laws of Malaysia ACT 242: PREVENTION AND
                            CONTROL OF INFECTIOUS DISEASE ACT 1988. part IV(2)]
                        </p>
                    </Box>
                    <Box sx={{ marginTop: '1rem' }}>
                        <p
                            className={styles.infoModalREVText}
                            style={{ textAlign: 'end' }}
                        >
                            RECPF005 (Rev:01)
                        </p>
                    </Box>
                </DialogContent>
                {/* <DialogActions className={styles.printBarcodeActions}>
                    <Button
                        variant="contained"
                        className={styles.printBttn}
                        onClick={() => setOpen(false)}
                    >
                        Print
                    </Button>
                </DialogActions> */}
            </Dialog>
        </React.Fragment>
    )
}
export default HIVConsentFormModal
