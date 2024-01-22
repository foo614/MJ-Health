import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_interview-info.module.scss'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import {
    Box,
    Divider,
    Grid,
    Stack,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import SignatureModal from 'components/SignatureModal'
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
    mdUp: boolean
}

const PregnancyWaiverForm: React.FC<Props> = ({
    matches,
    setOpen,
    open,
    mdUp,
}: Props) => {
    const [openSignatureModal, setOpenSignatureModal] =
        React.useState<boolean>(false)

    const [title, setTitle] = React.useState<string>('')

    const handleSetTitle = (title: string) => {
        setTitle(title)
        setOpenSignatureModal(true)
    }

    const pregnancyRadioOption1 = () => {
        return (
            <>
                <Stack
                    direction={mdUp ? 'row' : 'column'}
                    spacing={1}
                    alignItems="center"
                >
                    <p className={styles.infoModalRestText}>
                        My last mensrual period was on
                    </p>
                    <TextField
                        variant="outlined"
                        size="small"
                        label="dd"
                        sx={{ width: mdUp ? '10%' : '100%' }}
                        InputProps={{
                            classes: {
                                input: styles.inputField,
                            },
                        }}
                        className={styles.modalFormField}
                    />

                    <p className={styles.infoModalRestText}>-</p>
                    <TextField
                        variant="outlined"
                        size="small"
                        label="mm"
                        InputProps={{
                            classes: {
                                input: styles.inputField,
                            },
                        }}
                        sx={{ width: mdUp ? '10%' : '100%' }}
                        className={styles.modalFormField}
                    />
                    <p className={styles.infoModalRestText}>-</p>
                    <TextField
                        variant="outlined"
                        size="small"
                        sx={{ width: mdUp ? '10%' : '100%' }}
                        label="yy"
                        InputProps={{
                            classes: {
                                input: styles.inputField,
                            },
                        }}
                        className={styles.modalFormField}
                    />
                </Stack>
            </>
        )
    }

    const pregnancyRadioOption2 = () => {
        return (
            <>
                <p>I am menopaused</p>
            </>
        )
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
                        Pregnancy Waiver Form
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
                    <FormControl>
                        <RadioGroup defaultValue={1} name="radio-buttons-group">
                            <FormControlLabel
                                value={1}
                                control={<Radio />}
                                label={pregnancyRadioOption1()}
                            />
                            <FormControlLabel
                                value={2}
                                control={<Radio />}
                                label={pregnancyRadioOption2()}
                            />
                        </RadioGroup>
                    </FormControl>
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
                                (name), of NRIC No:
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
                        <div style={{ marginTop: '10px' }}>
                            <p className={styles.infoModalRestText}>
                                certify that I am not pregnant and that
                            </p>
                        </div>
                    </Stack>
                    <div style={{ marginTop: '10px' }}>
                        <p className={styles.infoModalRestText}>
                            I fully understand and have been informed of all
                            radiation risks while pregnant. If there was a
                            chance of pregnancy, I was offered the opportunity
                            to take a pregnancy test. I also knowledge and
                            understand the pregnancy test may show a false
                            result and are not 100% accurate. If I am really
                            pregnant at the time of radiation examinations, I
                            release MJ health screening canters from any
                            liability.
                        </p>
                    </div>
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
                        <Grid item md={4} xs={12} sm={6}>
                            <div
                                className={styles.signatureDiv}
                                onClick={() =>
                                    handleSetTitle("Guardian's Signature")
                                }
                            >
                                <div className={styles.signatureTitleDiv}>
                                    <p className={styles.signatureTitle}>
                                        Guardian&apos;s Signature:
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
                                    Guardian&apos;s Signature:
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
                                Relation with the subject person:
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
export default PregnancyWaiverForm
