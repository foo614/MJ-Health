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
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import SignatureModal from './signature-modal'
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

const LetterAuthorizationModal: React.FC<Props> = ({
    matches,
    setOpen,
    open,
}: Props) => {
    const [title, setTitle] = React.useState<string>('false')
    const [openSignatureModal, setOpenSignatureModal] =
        React.useState<boolean>(false)

    const handleSetTitle = (title: string) => {
        setTitle(title)
        setOpenSignatureModal(true)
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
                        Letter of Authorization
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
                    <p className={styles.infoModalRestText}>
                        Customer Service Department
                    </p>
                    <p
                        className={styles.infoModalTopText}
                        style={{ marginTop: '10px' }}
                    >
                        MJ HEALTH SCREENING CENTRE
                    </p>

                    <Divider
                        sx={{
                            height: '2px',
                            background: '#000000',
                            marginTop: '2rem',
                            marginBottom: '2rem',
                        }}
                    />
                    <p className={styles.infoModalRestText}>
                        To whom it may concern,
                    </p>
                    <p
                        className={styles.infoModalTopText}
                        style={{ marginTop: '10px' }}
                    >
                        Authorization Letter for Release of Health Screening
                        Report
                    </p>
                    <Stack
                        direction={matches ? 'row' : 'column'}
                        spacing={2}
                        sx={{ marginTop: '2rem' }}
                    >
                        <div>
                            <p
                                style={{ marginTop: '10px' }}
                                className={styles.infoModalRestText}
                            >
                                I
                            </p>
                        </div>
                        <div style={{ width: matches ? '60%' : '100%' }}>
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
                                {' '}
                                (name), of NRIC NO:
                            </p>
                        </div>
                    </Stack>
                    <Stack
                        direction={matches ? 'row' : 'column'}
                        spacing={2}
                        sx={{ marginTop: '1rem' }}
                    >
                        <div style={{ width: matches ? '60%' : '100%' }}>
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
                        <div>
                            <p
                                className={styles.infoModalRestText}
                                style={{ marginTop: '10px' }}
                            >
                                , writing this letter is to indicate that I
                                authorize
                            </p>
                        </div>
                    </Stack>
                    <Stack
                        direction={matches ? 'row' : 'column'}
                        spacing={2}
                        sx={{ marginTop: '1rem' }}
                    >
                        <div>
                            <p
                                className={styles.infoModalRestText}
                                style={{ marginTop: '10px' }}
                            >
                                Name:
                            </p>
                        </div>
                        <div style={{ width: matches ? '60%' : '100%' }}>
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
                    </Stack>
                    <Stack
                        direction={matches ? 'row' : 'column'}
                        spacing={2}
                        sx={{ marginTop: '1rem' }}
                    >
                        <div>
                            <p
                                className={styles.infoModalRestText}
                                style={{ marginTop: '10px' }}
                            >
                                NRIC NO:
                            </p>
                        </div>
                        <div style={{ width: matches ? '60%' : '100%' }}>
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
                    </Stack>
                    <Box sx={{ marginTop: '1rem' }}>
                        <FormControl>
                            <RadioGroup defaultValue={1} name="behalf">
                                <FormControlLabel
                                    value={1}
                                    control={<Radio />}
                                    label="to collect my Health Screening Report or document(s) on my behalf."
                                />
                                <FormControlLabel
                                    value={2}
                                    control={<Radio />}
                                    label="to consult the doctor on my behalf."
                                />
                                <FormControlLabel
                                    value={3}
                                    control={<Radio />}
                                    label="to consult the doctor together with me."
                                />
                            </RadioGroup>
                        </FormControl>
                    </Box>
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
                                    handleSetTitle("Subject Person's Signature")
                                }
                            >
                                <div className={styles.signatureTitleDiv}>
                                    <p className={styles.signatureTitle}>
                                        Subject Person&apos;s Signature:
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
                                    Subject Person&apos;s Signature
                                </p>
                            </div>
                        </Grid>
                        <Grid item md={4} xs={12} sm={6}></Grid>
                        <Grid item md={4} xs={12} sm={6}></Grid>
                    </Grid>
                    <div style={{ textAlign: 'end', marginTop: '1rem' }}>
                        <Button
                            variant="contained"
                            className={styles.saveBttn}
                            sx={{ width: '180px' }}
                            onClick={() => setOpen(false)}
                        >
                            Save
                        </Button>
                    </div>
                    {openSignatureModal ? (
                        <SignatureModal
                            open={openSignatureModal}
                            setOpen={setOpenSignatureModal}
                            matches={matches}
                            title={title}
                        />
                    ) : null}
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default LetterAuthorizationModal
